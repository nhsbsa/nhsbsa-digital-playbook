---
layout: article
title: "Writing integration tests (Java)"
tags: dev_testing
order: 10
review:
    last_reviewed_date: 2023-05-06
    review_cycle: ANNUAL
---
## Overview

This guide explains how to implement and configure Integration Tests using the Maven Failsafe plugin, in a Gitlab-CI build environment. As an example, we use a Postgres Database running in Docker with a schema defined using Liquibase. Other external dependant services could be wired up in a similar fashion.

## Maven testing plugins and their lifecycles

Maven provides two plugins to run tests, each one configured to run in different [Maven lifecycle][maven_plugin_lifecycle] phases:

* [Surefire plugin][maven_surefire_plugin]
  * __test__ phase
    Run unit tests.

* [Failsafe plugin][maven_failsafe_plugin]
  * __pre-integration-test__ phase
    Downstream resources/services are setup. E.g. liquibase can be run to instantiate a schema in a database.
  * __integration-test__ phase
    Run integration tests.
  * __post-integration-test__ phase
    Downstream resources/services are torn down. E.g. liquibase rollback can be executed to test that rollback has been correctly defined.
  * __verify__ phase
    Fail the build according to integration test results.

The important benefit of the Failsafe plugin is the facility to setup and teardown resources outside of the tests themselves. The post-integration-test phase always runs regardless of integration test failures.

The maven surefire plugin is configured to run by default. The failsafe plugin is not. You must add the plugin to your `pom.xml`.

Consider if the integration tests should always run. If the downstream resource isn't always going to be available, (e.g. in your dev environment), place the configuration within a profile.

```xml
<profiles>
    <profile>
        <id>integration</id>
        <build>
            <plugins>
                <plugin>
                    <groupId>org.apache.maven.plugins</groupId>
                    <artifactId>maven-failsafe-plugin</artifactId>
                    <executions>
                        <execution>
                            <goals>
                                <goal>integration-test</goal>
                                <goal>verify</goal>
                            </goals>
                        </execution>
                    </executions>
                </plugin>
            </plugins>
        </build>
    </profile>
</profiles>
```

Integration tests can be switched on with the `integration` profile:

```bash
mvn -Pintegration clean install
```

## Write an integration test

With the failsafe plugin configured you can write an integration test. This example tests that an Entity is saved.

Given the entity:

```java
@Entity
@Data
public class Person {

    @Id
    @GeneratedValue(strategy=IDENTITY)
    private Long id;

    @Version
    private int version;

    private String firstName;
    private String middleNames;
    private String surname;
    ...
```

And this test:

```java
@RunWith(SpringRunner.class)
@DataJpaTest
@AutoConfigureTestDatabase(replace=Replace.NONE)
public class PersonIT {

    @Autowired
    protected TestEntityManager entityManager;

    @Autowired
    protected JdbcTemplate jdbcTemplate;

    @Test
    public void saveEntity() {

        Person fixture = new Person("first", null, "last");
        entityManager.persistAndFlush(fixture);
        
        assertThat(JdbcTestUtils.countRowsInTable(jdbcTemplate, "person"), equalTo(1));

    }
}
```

This should run during the integration-test phase in maven:

```bash
mvn -Pintegration clean install
```

This would will fail without an active database. As its easy to run a production-like PostgreSQL instance in Docker, we may as well test against the real thing.

## Gitlab-CI and Docker

Gitlab-CI runs by default within a Docker container. This allows us to add downstream services as other Docker containers with network access between our tests and the services. In our case, we're going to run Postgres as a service within Gitlab-CI.

The following code block is a snippet of configuration from a `gitlab-ci.yml` file:

```yaml
Verify Feature:
  stage: Build
  services:
    - name: dps-nexus.service.nhsbsa:8444/nhsbsa/postgres:9.6
```

Here we have configured a dependant service of Postgres that is retrieved from the NHSBSA's own Docker repository (Nexus). This build will set us up with standard user accounts that we'll need to access the database and apply schema changes using liquibase (see below).

But, you may choose to use a different Docker image with a pre-populated schema to suit your needs. Here are some examples:

* CRS: `dps-nexus.service.nhsbsa:8444/crs/crs-db`
* PPC: `dps-nexus.service.nhsbsa:8444/ppc/ppc-db`
* EIBSS: `dps-nexus.service.nhsbsa:8444/eibss/eibss-db`

## Linking with DNS

When Gitlab-CI runs its docker containers, it will expose a simple DNS lookup to the service hostname, using a naming convention based on the Docker image name. We can use this hostname within our test configuration.

For instance, in this snippet, we configured access to the postgres service declared above:

```yaml
spring:
  datasource:
    url: jdbc:postgresql://dps-nexus.service.nhsbsa__nhsbsa__postgres:5432/lis_pgdb
```

## Configuring with profiles

So we have a running database, and our tests are configured to use the hostname Gitlab-CI will provide, but we only want to use this configuration when running in Gitlab.

The answer is profiles: Maven profiles and Spring profiles. The steps are:

* Configure the test based on active Spring profile
  Spring Boot tests will pick up configuration based on a naming convention (item 13), which makes it simple to add the configuration listing above to your test/resources folder using the name: application-gitlabci.yml
* Activate a Spring profile from a Maven profile
  Now that a Spring profile will activate the Gitlab-CI specific configuration, we need to activate that profile when Maven runs its tests on Gitlab-CI.

First, add this to your pom.xml:

```xml
<profiles>
    <profile>
        <id>gitlabci</id>
        <build>
        <pluginManagement>
            <plugins>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-surefire-plugin</artifactId>
                <configuration>
                <systemPropertyVariables>
                    <spring.profiles.active>gitlabci</spring.profiles.active>
                </systemPropertyVariables>
                </configuration>
            </plugin>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-failsafe-plugin</artifactId>
                <configuration>
                <systemPropertyVariables>
                    <spring.profiles.active>gitlabci</spring.profiles.active>
                </systemPropertyVariables>
                </configuration>
            </plugin>
            </plugins>
        </pluginManagement>
        </build>
    </profile>
</profiles>
```

And then add this to your `gitlab-ci.yml`:

```yaml
Verify Feature:
...
  services:
    - name: dps-nexus.service.nhsbsa:8444/nhsbsa/postgres:9.6
  script:
    - mvn -e -B -Pgitlabci clean install
```

Note: the mvn command above is incomplete and would need code quality directions adding.

## Liquibase

Why test with Liquibase and a production-like database?

* Testing against an in-memory database will not catch the edge cases when something works in H2, but not in Postgres. It's much safer to test against the same DB engine as production.
* You can test the liquibase scripts at the same time

Try to follow [best practice][liquibase_best_practices] when using Liquibase but in addition:

* Align the individual versioned changelog files with the pom version
* Align the change-sets to the pom version with an incremental number
* Use your NHSBSA cipher/LAN ID as the author

E.g. for db.changelog-1.0.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<databaseChangeLog xmlns="http://www.liquibase.org/xml/ns/dbchangelog/1.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog/1.9 http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-1.9.xsd">
  <changeSet author="PATTU" id="1.0-1">
    <createTable tableName="my_table">
      <column name="my_column" type="TEXT">
      </column>
    </createTable>
  </changeSet>
</databaseChangeLog>
```

## Maven and Liquibase

Liquibase provides a Maven plugin to execute Liquibase commands within the build lifecycle. A sample pluginManagement snippet is shown below:

```xml
<build>
    <pluginManagement>
        <plugins>
            <plugin>
                <groupId>org.liquibase</groupId>
                <artifactId>liquibase-maven-plugin</artifactId>
                <version>3.5.3</version>
                <configuration>
                    <promptOnNonLocalDatabase>false</promptOnNonLocalDatabase>
                    <driver>org.postgresql.Driver</driver>
                </configuration>
                <dependencies>
                    <dependency>
                        <groupId>org.yaml</groupId>
                        <artifactId>snakeyaml</artifactId>
                        <version>${snakeyaml.version}</version>
                    </dependency>
                    <dependency>
                        <groupId>org.postgresql</groupId>
                        <artifactId>postgresql</artifactId>
                        <version>${postgres.version}</version>
                    </dependency>
                </dependencies>
            </plugin>
        </plugins>
    </pluginManagement>
</build>
```

> Note: plugin dependencies above show support YAML based configuration and the Postgres database driver. Your requirements may differ.

To call the Liquibase plugin within the pre-integration-test phase, add the following snippet:

```xml
<profiles>
    <profile>
        <id>liquibase</id>
        <build>
            <plugins>
                <plugin>
                    <groupId>org.liquibase</groupId>
                    <artifactId>liquibase-maven-plugin</artifactId>
                    <configuration>
                        <changeLogFile>src/main/resources/db/changelog/db.changelog-master.yml</changeLogFile>
                        <propertyFile>src/test/resources/liquibase.properties</propertyFile>
                    </configuration>
                    <executions>
                        <execution>
                            <id>liquibase-update</id>
                            <phase>pre-integration-test</phase>
                            <goals>
                                <goal>update</goal>
                            </goals>
                        </execution>
                    </executions>
                </plugin>
            </plugins>
        </build>
    </profile>
</profiles>
```

* `<changeLogFile>` specifies the location of the main changelog
* `<propertyFile>` specifies the location of `liquibase.properties`.
  You can use this to specify properties for local development

The `gitlab-ci.yml` file will override these properties for the pipeline

## References

* [Maven plugin lifecycle][maven_plugin_lifecycle]
* [Maven Surefire plugin][maven_surefire_plugin]
* [Maven Failsafe plugin][maven_failsafe_plugin]
* [Liquibase best practices][liquibase_best_practices]

[maven_plugin_lifecycle]: <http://maven.apache.org/guides/introduction/introduction-to-the-lifecycle.html>
[maven_surefire_plugin]: <https://maven.apache.org/surefire/maven-surefire-plugin/>
[maven_failsafe_plugin]: <https://maven.apache.org/surefire/maven-failsafe-plugin/>
[liquibase_best_practices]: <http://www.liquibase.org/bestpractices.html>
