---
layout: collection
title: "Technology choices"
tags: dev
order: 20
collection_tag: tech
pagination:
  data: collections.tech
  size: 50
---
## Data stores

* RDBMS using [PostgreSQL][postgresql] and [AWS RDS][aws-rds-postgresql]. Schemas managed by [Liquibase][liquibase]
* Key-value store using [AWS DynamoDB][aws-dynamodb]

[aws-rds-postgresql]: <https://aws.amazon.com/rds/postgresql/>
[aws-dynamodb]: <https://aws.amazon.com/dynamodb/>
[liquibase]: <https://www.liquibase.org/>
[postgresql]: <https://www.postgresql.org/>
