---
layout: article
title: "Technologies"
description: "Find out what our technology stacks are"
tags: [home, dev]
order: 
  home: 50
  dev: 100
related:
  tag: tech
---
## Languages and frameworks

We use these languages:

* __Java and Spring__
  Java is our historical, core language. We have most expertise in it, and the vast majority of our code is written in it.
  Almost all of our applications use the Spring Framework; predominantly standalone Spring Boot apps, Spring MVC for web-apps and RESTful web-services, ORM using Spring Data JPA, some Spring Integration and Spring Batch.

* __Node.js and Javascript/Typescript__
  Some of our more recent front-ends use Nodes.js, usually written in Javascript, although we are using Typescript in places.
  We prefer Node.js for our Lambda implementations.

* __Python__ (currently in ‘assess’)
  We are looking at Python for some Machine Learning/AI projects. Its also used in some of our platform scripts.

## Data stores

We use these data stores:

* RDBMS using [PostgreSQL][postgresql] and [AWS RDS][aws_rds_postgresql]. Schemas managed by [Liquibase][liquibase]
* Key-value store using [AWS DynamoDB][aws_dynamodb]
* Caching with [Redis][redis]

## Platforms

We use these platforms:

* __AWS__
  The majority of our Digital services are hosted in AWS. We make use of many of their services including S3, SQS, SNS, EKS, API Gateway, RDS (Postgres), Aurora and DynamoDB. We also manage additional platform services within AWS including Redis, Gitlab, SonarQube and Nexus.

* __Azure__
  Our business function is supported in many realms by Microsoft Azure hosted services. Digital are not responsible for the development of these services, but we do integrate with them. These include Dynamics CRM, Azure AD, Microsoft 365.

* __On prem Websphere and Oracle__
  We have a legacy estate based on Websphere and Oracle, though functional development is rare within Digital, we do actively maintain them.

[postgresql]: <https://www.postgresql.org/>
[aws_rds_postgresql]: <https://aws.amazon.com/rds/postgresql/>
[liquibase]: <https://liquibase.org/>
[aws_dynamodb]: <https://aws.amazon.com/dynamodb/>
[redis]: <https://redis.io/>
