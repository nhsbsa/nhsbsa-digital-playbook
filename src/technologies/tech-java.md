---
layout: article
title: "Java"
tags: tech
order: 20
review:
    last_reviewed_date: 2023-05-06
    review_cycle: ANNUAL
---
Here's a list of our preferred technology choices when implementing in Java. We're not prescriptive in these choices, but have a good reason to deviate from the norm. If you feel there's a better option, raise it at the Developer Community.

## Java language versions

Refer to the [Release adoption schedule](../tech-release-adoption-schedule)

Java projects must:

* define the source and target Java version in the Maven `pom.xml` file
* use a Java Version Manager such as [JEnv](https://github.com/jenv/jenv) to manage Java versions in development

## IDE

Choose whatever you're comfortable with, so long as you can perform your job. Our developers tend to select one of

* [IntelliJ IDEA][intellij_idea]
* [VS Code][vs_code]
* [Eclipse][eclipse_ide]

## Build

* [Maven][maven] is our standard Java build tool
* Code coverage with [JaCoCo][jacoco] and the [JaCoCo Maven plugin][jacoco_maven_plugin]
* Static analysis with [SonarQube][sonarqube] and the [SonarScanner Maven plugin][sonarqube_maven_plugin]

## Application

Our standard Java application stack is built on the Spring ecosystem.

* Applications run in [Spring Boot][spring_boot] with [Apache Tomcat][apache_tomcat] as the embedded application server
* User interfaces with [Spring MVC][spring_mvc] and [Thymeleaf 3][thymeleaf] for templates
* Web services with [Spring MVC][spring_mvc] or [Spring Data Rest][spring_data_rest] and [Jackson][jackson] for JSON mapping
* Security with [Spring Security][spring_security]
* Data access with [Spring Data JPA][spring_data_jpa] and [Hibernate ORM][hibernate_orm]
* Batch with [Spring Batch][spring_batch]
* Cloud integration with [Spring Cloud][spring_cloud]
* Enterprise Integration Patterns (EIP) using [Spring Integration][spring_integration]

We generally use core Java and standard extension packages in preference to third party, although Spring is often used in preference where available:

* Dates and Times using `Java.time` and not `joda` or `java.util`
* Transactions using Java Transaction API (`javax.transaction`)
* Object Relational Mapping using Java Persistence API (`javax.persistence`) backed by [Hibernate ORM][hibernate_orm]
* Validation with [JSR-303][jsr_303] (`javax.validation`) backed by [Hibernate Validator][hibernate_validator]

We also use other well known libraries:

* Auto-generate boilerplate code with [Lombok][lombok]
* [OpenAPI V3][openapi_v3] using [Springdoc OpenAPI][springdoc_openapi]
* Logging API with [logging_slf4j], annotated with Lombok [@Slf4J][lombok_log] and implemention by [Logback][logging_logback]
* Object mapping is varied. Many projects use [Mapstruct][mapstruct] or [Lombok builder][lombok_builder]
* Audit using [Javers][javers]
* We use [Apache commons][apache_commons] when Spring equivalents are unsuitable

## Testing

* [JUnit 5][junit5] as our core testing framework
* Prefer [AssertJ][assertj] for assertions over Hamcrest matchers
* [Mockito][mockito] for mocking of downstream dependencies
* [Spring Test][springtest] including MockMvc and DataJpaTest
* Unit tests run within the Maven `test` phase with [surefire plugin][maven_surefire]
* Integrations tests run within the Maven `integration-test` phase with [failsafe plugin][maven_failsafe].

[intellij_idea]: <https://www.jetbrains.com/idea/>
[vs_code]: <https://code.visualstudio.com/>
[eclipse_ide]: <https://www.eclipse.org/ide/>

[maven]: <https://maven.apache.org/>
[jacoco]: <https://www.jacoco.org/jacoco/trunk/doc/>
[jacoco_maven_plugin]: <https://www.eclemma.org/jacoco/trunk/doc/maven.html>
[sonarqube]: <https://www.sonarqube.org/>
[sonarqube_maven_plugin]: <https://docs.sonarqube.org/latest/analysis/scan/sonarscanner-for-maven/>

[apache_tomcat]: <https://tomcat.apache.org/>
[hibernate_orm]: <https://hibernate.org/orm/>
[hibernate_validator]: <https://hibernate.org/validator/>
[jackson]: <https://github.com/FasterXML/jackson>
[jsr_303]: <https://beanvalidation.org/1.0/spec/>
[spring_batch]: <https://spring.io/projects/spring-batch>
[spring_boot]: <https://spring.io/projects/spring-boot>
[spring_cloud]: <https://spring.io/projects/spring-cloud>
[spring_data_jpa]: <https://spring.io/projects/spring-data-jpa>
[spring_data_rest]: <https://docs.spring.io/spring-data/rest/docs/current/reference/html/>
[spring_integration]: <https://spring.io/projects/spring-integration>
[spring_mvc]: <https://docs.spring.io/spring-framework/docs/current/reference/html/web.html>
[spring_security]: <https://spring.io/projects/spring-security>
[thymeleaf]: <https://www.thymeleaf.org/>

[apache_commons]: <https://commons.apache.org/>
[lombok]: <https://projectlombok.org/>
[lombok_builder]: <https://projectlombok.org/features/Builder>
[lombok_log]: <https://projectlombok.org/features/log>
[logging_logback]: <https://logback.qos.ch/>
[logging_slf4j]: <https://www.slf4j.org/>
[javers]: <https://javers.org/>
[mapstruct]: <https://mapstruct.org/>
[openapi_v3]: <https://swagger.io/specification/>
[springdoc_openapi]: <https://springdoc.org/>

[assertj]: <https://assertj.github.io/doc/>
[junit5]: <https://junit.org/junit5/docs/current/user-guide/>
[maven_surefire]: <https://maven.apache.org/surefire/maven-surefire-plugin/>
[maven_failsafe]: <https://maven.apache.org/surefire/maven-failsafe-plugin/>
[mockito]: <https://site.mockito.org/>
[springtest]: <https://docs.spring.io/spring-framework/docs/current/reference/html/testing.html>
