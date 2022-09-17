---
layout: article
title: "Release adoption schedule"
tags: [tech, draft]
order: 1
status: DRAFT
review:
    last_reviewed_date: 2022-09-14
    review_cycle:
        month: 2
issuesheet:
    reference: 
    author: "Software Development Lead"
    issued_to: "DDaT"
    issued_reason: "For information"
    revisions:
        - version: "1.0 RC-1"
          date: 2022-09-14
          amended_by: "PT"
          approved_by: "-"
          details: "Initial release"
---
To manage change of our runtimes and downstream services we maintain a release adoption schedule based on these _phases_:

::: card

_ASSESS_ {.t_assess}
: Assess the impact of migrating.
  Teams may choose to adopt if they understand and accept any risks involved.

_ADOPT_ {.t_adopt}
: Adopt this version.
  Teams should schedule migration based on the adoption date.

_DEPRECATE_ {.t_deprecate}
: Move off from this version.
  When the next version is set for adoption, previous versions will deprecate and teams should migrate forward.

_DECOMMISSION_ {.t_decommission}
: Do not use this version.
  The decommission date is a final deadline for moving off this version.
  Schedules contain information on decommissioned versions for visibility.

:::

## Node.js

::: details How we work out the adoption schedule for Node.js

We follow the [Node.js](https://nodejs.org/en/about/releases/) release schedule.

::: card

__ASSESS__
: on _initial release_

__ADOPT__
: at _active LTS start_ (6 months after initial release)

__DECOMMISSION__
: by _end of life_

:::

<table class="alternate-even">
<tr><th>Version</th><th>Current phase</th>                               <th>Release date</th><th>Adopt from</th><th>Decommission date</th></tr>
<tr><td>v20</td>    <td>Pending release</td>                             <td>2023-04-18</td>  <td>2023-10-24</td><td>2026-04-30</td></tr>
<tr><td>v18</td>    <td class="t_assess"><em>ASSESS</em></td>            <td>2022-04-19</td>  <td>2022-10-25</td><td>2025-04-30</td></tr>
<tr><td>v16</td>    <td class="t_adopt"><em>ADOPT</em></td>              <td>2021-04-20</td>  <td>2021-10-26</td><td>2023-09-11</td></tr>
<tr><td>v14</td>    <td class="t_deprecate"><em>DEPRECATE</em></td>      <td>2020-04-21</td>  <td>2020-10-27</td><td>2023-04-30</td></tr>
<tr><td>v12</td>    <td class="t_decommission"><em>DECOMMISSION</em></td><td>2019-04-23</td>  <td>2019-10-21</td><td>2022-04-30</td></tr>
</table>

### AWS Lambda - Node.js

::: details How we work out the adoption schedule for Node.js Lambdas

AWS Lambdas run on platforms managed by Amazon. They publish release dates and a deprecation policy.

* [AWS Lambda releases](https://docs.aws.amazon.com/lambda/latest/dg/lambda-releases.html)
* [AWS Lambda runtime deprecation policy](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtime-support-policy)

::: card

__ASSESS__
: on _AWS release_

__ADOPT__
: 6 months after _AWS release_

__DECOMMISSION__
: by _AWS Phase 1 deprecation_

:::

<table class="alternate-even">
<tr><th>Version</th><th>Current phase</th>                         <th>Release date</th><th>Adopt from</th><th>Decommission date</th></tr>
<tr><td>v16</td>    <td class="t_assess"><em>ASSESS</em></td>      <td>2022-05-11</td>  <td>2022-11-11</td><td>-</td></tr>
<tr><td>v14</td>    <td class="t_adopt"><em>ADOPT</em></td>        <td>2021-01-27</td>  <td>2021-07-27</td><td>-</td></tr>
<tr><td>v12</td>    <td class="t_deprecate"><em>DEPRECATE</em></td><td>2019-11-18</td>  <td>2020-05-18</td><td>2022-11-14</td></tr>
</table>

## Java

::: details How we work out the adoption schedule for Java

We follow the [Java SE support roadmap](https://www.oracle.com/java/technologies/java-se-support-roadmap.html).

Our standard builds use the Temurin Java runtime which maintains its own [release roadmap](https://adoptium.net/en-GB/support/).

::: card

__ASSESS__
: on _Java SE General Availability (GA) date_

__ADOPT__
: 6 months after _Java SE GA date_

__DECOMMISSION__
: by _Java SE premier support end date_

:::

<table class="alternate-even">
<tr><th>Version</th><th>Current phase</th>                               <th>Release date</th><th>Adopt from</th><th>Decommission date</th></tr>
<tr><td>21</td>     <td>Pending release</td>                             <td>2023-11</td>     <td>2024-05</td>   <td>2028-09</td></tr>
<tr><td>17</td>     <td class="t_adopt"><em>ADOPT</em></td>              <td>2021-11</td>     <td>2022-05</td>   <td>2026-09</td></tr>
<tr><td>11</td>     <td class="t_deprecate"><em>DEPRECATE</em></td>      <td>2018-09</td>     <td>2019-03</td>   <td>2023-09</td></tr>
<tr><td>8</td>      <td class="t_decommission"><em>DECOMMISSION</em></td><td>2014-03</td>     <td>2015-09</td>   <td>2022-03</td></tr>
</table>

### Spring Boot

::: details How we work out the adoption schedule for Spring Boot

We follow the [Spring Boot support roadmap](https://spring.io/projects/spring-boot#support).
Spring Boot uses a 6 month release cycle between minor versions with a 3 month overlap for [Open Source Software (OSS) support](https://tanzu.vmware.com/support/oss).

::: card

__ASSESS__
: on initial release

__ADOPT__
: 2 months after initial release

__DECOMMISSION__
: by end of OSS support date

:::

<table class="alternate-even">
<tr><th>Version</th><th>Current phase</th>                                  <th>Release date</th><th>Adopt from</th><th>Decommission date</th></tr>
<tr><td>3.0.x</td>     <td>Pending release</td>                             <td>2022-11-24</td>  <td>2023-01-24</td><td>2023-11-24</td></tr>
<tr><td>2.7.x</td>     <td class="t_adopt"><em>ADOPT</em></td>              <td>2022-05-19</td>  <td>2022-07-19</td><td>2023-11-18</td></tr>
<tr><td>2.6.x</td>     <td class="t_deprecate"><em>DEPRECATE</em></td>      <td>2021-11-17</td>  <td>2022-01-17</td><td>2022-11-24</td></tr>
<tr><td>2.5.x</td>     <td class="t_decommission"><em>DECOMMISSION</em></td><td>2021-05-20</td>  <td>2021-07-20</td><td>2022-05-19</td></tr>
<tr><td>2.4.x</td>     <td class="t_decommission"><em>DECOMMISSION</em></td><td>2020-11-12</td>  <td>2021-01-12</td><td>2021-11-18</td></tr>
</table>
