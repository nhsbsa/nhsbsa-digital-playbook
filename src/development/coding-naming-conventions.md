---
layout: article
title: "Naming conventions"
description: "Naming things well from the start can avoid a lot of confusion as a project matures"
tags: dev
order: 3
review:
    last_reviewed_date: 2023-05-06
    review_cycle: ANNUAL
---
It is important to adopt a naming convention:

* to clarify intent
* to group similar items

## Terms

Terms used in the naming conventions are:

::: card

<table>
  <tr>
    <th>Term</th>
    <th>Description</th>
    <th>example</th>
  </tr>
  <tr>
    <td>Department</td>
    <td>The department that owns the service</td>
    <td>
      <ul>
        <li><code>citizen</code></li>
        <li><code>corporate</code></li>
        <li><code>primary-care</code></li>
        <li><code>workforce</code></li>
        <li><code>ddat</code> for <em>Data, Digital & Technology</em></li>
        <li><code>dhsc</code> for <em>Department of Health and Social Care</em></li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>Service line</td>
    <td>For grouping within a department</td>
    <td>
      <ul>
        <li><code>insight</code></li>
        <li><code>platform</code></li>
        <li><code>hwhc</code> for <em>Help with Health Costs</em></li>
        <li><code>ohs</code> for <em>Overseas Healthcare Services</em></li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>Service</td>
    <td>Adopt a succinct or abbreviated service name</td>
    <td>
      <ul>
        <li><code>lis</code> for <em>Low Income Scheme</em></li>
        <li><code>ihs</code> for <em>Immigration Health Surcharge</em></li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>Function</td>
    <td>The operational function of a repository or component</td>
    <td>
      <ul>
        <li><code>apply</code> for an application form</li>
        <li><code>dwp</code> for an integration layer with Department for Works and Pensions</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>Type</td>
    <td>The type of component, repository or change</td>
    <td>
      For components:
      <ul>
        <li><code>ui</code> for a web frontend</li>
        <li><code>api</code> for an RESTful API</li>
        <li><code>lambda</code> for an AWS lambda</li>
        <li><code>prototype</code> for prototype code</li>
        <li><code>poc</code> for proof of concept</li>
      </ul>
      For infrastructure:
      <ul>
        <li><code>config</code> for externalised configuration</li>
        <li><code>tf</code> for terraform</li>
      </ul>
      For tests:
      <ul>
        <li><code>acceptance-test</code></li>
        <li><code>api-test</code></li>
        <li><code>accessibility-test</code></li>
        <li><code>performance-test</code></li>
        <li><code>security-test</code></li>
        <li><code>manual-test</code></li>
      </ul>
      For managed changes:
      <ul>
        <li><code>feature</code></li>
        <li><code>bug</code></li>
        <li><code>chore</code></li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>Change ID</td>
    <td>The identifier for a change, usually a Jira ticket such as a story, task, sub-task or bug</td>
    <td>
      <ul>
        <li><code>LISD-1234</code> as an example task in the Low Income Scheme service</li>
      </ul>
    </td>
  </tr>
</table>

:::

### Case

Different case standards should be applied depending on usage:

* `Natural` - Using natural language standard, with spaces to separate words and capitals for initial letter and proper nouns
* `kebab-case` - All lower case with dashes to separate words
* `CamelCase` - Initial letters in words are uppercased, with no separators. First letter may be upper or lower.
* `snake_case` - All lower case with underscores to separate words

For all cases except `natural`, acronyms should be lowercased and treated as a single word.

---

## Git

::: card

### Git Repositories

Git repositories should be `kebab-case` with this convention:

> `{optional service-line}-{service}-{function}-{type}`

:::
::: card

### Git branches

The mainline branch should be named `main`. All branches should be `kebab-case` with this convention:

> `{type}/{change ID}-{brief description}`

A single branch should be used per change/ticket.

:::
::: card

### Gitlab groups

Repositories in Gitlab should be organised into ‘groups’. Use `natural` case for the human readable form, and `kebab-case` for the URL with this convention:

> `{department}/{service-line}/{service}`

:::
::: card

### Merge/Pull Requests

Merge/pull requests should be raised with `natural` case and this convention:

> `{change ID} - {brief description}`

:::

---

## Languages

For language constructs refer to the [standard language style guides](../coding-style-guide/).

::: card

### Java

Java `packages` should be all lower case concatenated with this convention:

> `uk.nhs.nhsbsa.{service}.{function}`

Libraries may omit the `service` when shared across multiple services.

:::

---

## Package managers and build tools

::: card

### Maven

Maven `group id` should be `kebab-case` with this convention:

> `uk.nhs.nhsbsa.{optional department}.{optional service-line}.{service}`

Maven `artifact id` should follow `kebab-case` and this convention:

> `{optional service-line}-{service}-{function}-{type}`

Unit tests run by [Maven Surefire plugin](https://maven.apache.org/surefire/maven-surefire-plugin/) should follow the convention:

 > `*Test.java`

Integration tests run by [Maven Failsafe plugin](https://maven.apache.org/surefire/maven-failsafe-plugin/) should follow the convention:

> `*IT.java`

:::
::: card

### NPM

Package.json `name` should be `kebab-case` with this convention:

> `@nhsbsa/{optional service-line}-{service}-{function}-{type}`

:::
