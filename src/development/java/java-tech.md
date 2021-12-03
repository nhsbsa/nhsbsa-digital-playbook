---
layout: article
title: "Java technology"
tags: tech
order: 20
---
Here's a list of our preferred technology choices when implementing in Java. We're not prescriptive in these choices, but have a good reason to deviate from the norm. If you feel there's a better option, raise it at the Developer Community.

## Java language

We prefer Long Term Support releases of Java and use [AdoptOpenJDK][adoptopenjdk]:

* [Java 8][openjdk-8]
* [Java 11][openjdk-11]
* [Java 17][openjdk-17]

We have some legacy projects that use [Java 7][openjdk-7].

## IDE

Choose whatever you're comfortable with, so long as you can perform your job. Our developers tend to select one of

* [IntelliJ IDEA][intellij-idea]
* [VS Code][vs-code]
* [Eclipse][eclipse-ide]

## Build

* [Maven][maven] is our standard Java build tool
* Code coverage with [JaCoCo][jacoco] and the [JaCoCo Maven plugin][jacoco-maven-plugin]
* Static analysis with [SonarQube][sonarqube] and the [SonarScanner Maven plugin][sonarqube-maven-plugin]

## Application

Our standard Java based application stack is built on the [Spring Boot][spring-boot] ecosystem.

* User interfaces with [Spring MVC][spring-mvc] and [Thymeleaf 3][thymeleaf]
* Web services with [Spring MVC][spring-mvc]
* Validation with [JSR-303][jsr-303] and [Hibernate Validator][hibernate-validator]
* Data access with [Spring Data JPA][spring-data-jpa] and [Hibernate ORM][hibernate-orm]

## Testing

* [JUnit 5][junit5] as our core testing framework
* [Mockito][mockito] for mocking of downstream dependencies
* [Spring Test][springtest] including MockMvc and DataJpaTest
* Unit tests run within the Maven `test` phase with [surefire plugin][maven-surefire]
* Integrations tests run within the Maven `integration-test` phase with [failsafe plugin][maven-failsafe].

[adoptopenjdk]: <https://adoptopenjdk.net/>
[openjdk-7]: <https://openjdk.java.net/projects/jdk7/>
[openjdk-8]: <https://openjdk.java.net/projects/jdk8/>
[openjdk-11]: <https://openjdk.java.net/projects/jdk/11/>
[openjdk-17]: <https://openjdk.java.net/projects/jdk/17/>

[intellij-idea]: <https://www.jetbrains.com/idea/>
[vs-code]: <https://code.visualstudio.com/>
[eclipse-ide]: <https://www.eclipse.org/ide/>

[maven]: <https://maven.apache.org/>
[jacoco]: <https://www.jacoco.org/jacoco/trunk/doc/>
[jacoco-maven-plugin]: <https://www.eclemma.org/jacoco/trunk/doc/maven.html>
[sonarqube]: <https://www.sonarqube.org/>
[sonarqube-maven-plugin]: <https://docs.sonarqube.org/latest/analysis/scan/sonarscanner-for-maven/>

[hibernate-orm]: <https://hibernate.org/orm/>
[hibernate-validator]: <https://hibernate.org/validator/>
[jsr-303]: <https://beanvalidation.org/1.0/spec/>
[spring-boot]: <https://spring.io/projects/spring-boot>
[spring-mvc]: <https://docs.spring.io/spring-framework/docs/3.2.x/spring-framework-reference/html/mvc.html>
[thymeleaf]: <https://www.thymeleaf.org/>
[spring-data-jpa]: <https://spring.io/projects/spring-data-jpa>

[junit5]: <https://junit.org/junit5/docs/current/user-guide/>
[maven-surefire]: <https://maven.apache.org/surefire/maven-surefire-plugin/>
[maven-failsafe]: <https://maven.apache.org/surefire/maven-failsafe-plugin/>
[mockito]: <https://site.mockito.org/>
[springtest]: <https://docs.spring.io/spring-framework/docs/current/reference/html/testing.html>
