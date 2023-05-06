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
review:
    last_reviewed_date: 2023-05-06
    review_cycle: ANNUAL
---
## Languages and frameworks

We use these languages:

* __Java and Spring__
  Java is our historical, core language. We have most expertise in it, and the majority of our code is written in it.
  Almost all of our applications use the Spring Framework; predominantly standalone Spring Boot apps, Spring MVC for web-apps and RESTful web-services, ORM using Spring Data JPA, with some Spring Integration and Spring Batch.

* __Node.js and Javascript/Typescript__
  Our more recent front-ends use Nodes.js, usually written in Javascript or Typescript.
  We prefer Node.js for our Lambda implementations.

* __Python__ (currently in ‘assess’)
  We are looking at Python for some Machine Learning/AI projects. Its also used in some of our platform scripts.
  Consult your Delivery Manager and Professional Lead if you are considering using Python.

## Data stores

We use these data stores:

* RDBMS using [PostgreSQL][postgresql] and [AWS RDS][aws_rds_postgresql]. Schemas are managed by [Liquibase][liquibase]
* Key-value store using [AWS DynamoDB][aws_dynamodb]
* Caching with [Redis][redis]

## Platforms

We use these platforms:

* __AWS__
  The majority of our Digital services are hosted in AWS. We use many services including S3, SQS, SNS, ECS, API Gateway, RDS & Aurora (Postgres) and DynamoDB. We manage additional platform services within AWS including Redis, SonarQube and Nexus.

* __Azure__
  Our business function is supported in many realms by Microsoft Azure hosted services. These include Dynamics CRM, Azure AD, Microsoft 365.

* __On prem Websphere and Oracle__
  We have a legacy estate based on Websphere and Oracle.

[postgresql]: <https://www.postgresql.org/>
[aws_rds_postgresql]: <https://aws.amazon.com/rds/postgresql/>
[liquibase]: <https://liquibase.org/>
[aws_dynamodb]: <https://aws.amazon.com/dynamodb/>
[redis]: <https://redis.io/>
