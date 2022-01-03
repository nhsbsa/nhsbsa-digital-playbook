---
layout: article
title: "Naming conventions"
tags: dev
order: 10
---
It is important to adopt a naming convention:

* to clarify intent
* to group similar items

## Terms

Terms used in the naming conventions are:

| Term | Description | example |
| ---- | ----------- | ------- |
| Service area | The high level area of a service | <ul><li>`citizen`</li><li>`coporate`</li><li>`primary-care`</li><li>`workforce`</li><li>`insight`</li><li>`platform`</li><li>`dhsc`</li></ul> |
| Service sub-group | For grouping within a service area | <ul><li>`hwhc` for _Help with Health Costs_ sub-group within Citizen Services</li></ul> |
| Service      | Adopt a succinct or abbreviated service name | <ul><li>`ihs` for _Immigration Health Surcharge_</li></ul> |
| Function     | The operational function of a repository or component. | <ul><li>`apply` for an application form</li><li>`dwp` for an integration layer with Department for Works and Pensions</li></ul> |
| Type         | The type of component, repository or change | For components:<ul><li>`frontend` or `ui` for a web frontend</li><li>`api` for an RESTful API</li><li>`lambda` for an AWS lambda</li><li>`prototype` for prototype code</li><li>`poc` for proof of concept</li></ul>For infrastructure:<ul><li>`config` for externalised configuration</li><li>`terraform` for terraform</li></ul>For tests:<ul><li>`acceptance-test`</li><li>`api-test`</li><li>`accessibility-test`</li><li>`performance-test`</li><li>`security-test`</li><li>`manual-tests`</li></ul>For managed changes:<ul><li>`feature`</li><li>`bug`</li></ul> |
| Change ID | The identifier for a change, usually a Jira ticket such as a story, task, sub-task or bug | <ul><li>`LISD-1234` as an example task in the Low Income Scheme service</li></ul>

### Case

Different case standards should be applied depending on usage:

* `Natural` - Using natural language standard, with spaces to separate words and capitals for initial letter and proper nouns
* `kebab-case` - All lower case with dashes to separate words
* `CamelCase` - Initial letters in words are uppercased, with no separators
* `snake_case` - All lower case with underscores to separate words

For all cases except `natural`, acronyms should be lowercased and treated as a single word.

---

## Git

### Git Repositories

Git repositories should be `kebab-case` with this convention:

> `{optional service sub-group}-{service}-{function}-{type}`

### Git branches

Git Branches should be `kebab-case` with this convention:

> `{type}/{change ID}-{brief description}`

Branches should be used for one change/ticket at a time and not collated into groups.

### Gitlab groups

Repositories in Gitlab should be organised into ‘groups’ with `natural` case and this convention:

> `{service area}/{service sub-group}/{service}`

### Merge/Pull Requests

Merge/pull requests should be raised with `natural` case and this convention:

> `{change ID} - {brief description}`

## Languages

For language constructs refer to the standard language style guides.

## Package managers and build tools

### Maven

Maven `group id` should be `kebab-case` with this convention:

> `uk.nhs.nhsbsa.{service-area}.{optional service sub-group}.{service}`

Maven `artifact id` should follow `kebab-case` and this convention:

> `{optional service sub-group}-{service}-{function}-{type}`

Unit tests run by Maven Surefire plugin should follow the convention:

 > `*Test.java`

Integration tests run by Maven Failsafe plugin should follow the convention:

> `*IT.java`

### NPM

Package.json `name` should be `kebab-case` with this convention:

> `@nhsbsa/{optional service sub-group}-{service}-{function}-{type}`
