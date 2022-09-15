---
layout: article
title: "Runtime and service adoption schedule"
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
To effectively manage change for our runtimes we maintain an adoption schedule based on these _phases_:

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
  The deprecation date is a final deadline for moving off this version.

_DECOMMISSION_ {.t_decommission}
: Do not use this version.
  Schedules contain information on decommissioned versions visibility.

:::

## Java

::: details How we work out the adoption schedule for Java

We follow the [Java SE support roadmap](https://www.oracle.com/java/technologies/java-se-support-roadmap.html) using these dates:

* General Availability (GA) date
* Premier support date
* Extended support date

::: card

__ASSESS__
: on GA date

__ADOPT__
: 6 months after GA

__DEPRECATE__
: 3 months before premier support end date

__DECOMMISSION__
: at premier extended end date

:::

<table class="alternate-even">
<tr><th>Version</th><th>Status</th>                           <th>Release</th><th>Adopt</th> <th>Deprecate</th> <th>Decommission</th></tr>
<tr><td>21</td>     <td class="t_assess"><em>ASSESS</em></td>            <td>2023-11</td><td>2024-05</td><td>2031-</td><td>-</td></tr>
<tr><td>17</td>     <td class="t_adopt"><em>ADOPT</em></td>     <td>2021-11</td><td>2022-05</td><td>2026-06</td><td>2029-09</td></tr>
<tr><td>11</td>     <td class="t_deprecate"><em>DEPRECATE</em></td>      <td>2018-09</td><td>2019-03</td><td>2023-06</td><td>2026-09</td></tr>
<tr><td>8</td>      <td class="t_decommission"><em>DECOMMISSION</em></td><td>2014-03</td><td>2015-09</td><td>2021-12</td><td>2030-12</td></tr>
</table>

## Node.js

::: details How we work out the adoption schedule for Node.js

We follow the [Node.js](https://nodejs.org/en/about/releases/) release schedule:

::: card

__ASSESS__
: when at _Current LTS_

__ADOPT__
: when at _Active LTS_

__DEPRECATE__
: when at _Maintenance LTS_

:::

<table class="alternate-even">
<tr><th>Version</th><th>Status</th>                                      <th>Release</th>   <th>Adopt</th>     <th>Deprecate</th> <th>Decommission</th></tr>
<tr><td>v20</td>    <td>Pending release</td>                             <td>2023-04-18</td><td>2023-10-24</td><td>2024-10-22</td><td>-</td></tr>
<tr><td>v18</td>    <td class="t_assess"><em>ASSESS</em></td>            <td>2022-04-19</td><td>2022-10-25</td><td>2023-10-18</td><td>2025-04-30</td></tr>
<tr><td>v16</td>    <td class="t_adopt"><em>ADOPT</em></td>              <td>2021-04-20</td><td>2021-10-26</td><td>2022-10-18</td><td>2023-09-11</td></tr>
<tr><td>v14</td>    <td class="t_deprecate"><em>DEPRECATE</em></td>      <td>2020-04-21</td><td>2020-10-27</td><td>2021-10-19</td><td>2023-04-30</td></tr>
<tr><td>v12</td>    <td class="t_decommission"><em>DECOMMISSION</em></td><td>2019-04-23</td><td>2019-10-21</td><td>2020-11-30</td><td>2022-04-30</td></tr>
</table>

### AWS Lambda - Node.js

::: details How we work out the adoption schedule for Node.js Lambdas

AWS Lambdas run on platforms managed by Amazon. We adhere to their release and deprecation timelines.

* [AWS Lambda releases](https://docs.aws.amazon.com/lambda/latest/dg/lambda-releases.html) specifies release dates for new runtimes
* [AWS Lambda runtime deprecation policy](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtime-support-policy) specifies deprecration dates

::: card

__ASSESS__
: on AWS release

__ADOPT__
: 6 months after AWS release

__DEPRECATE__
: 3 months before AWS Phase 1 deprecation

__DECOMMISSION__
: at AWS Phase 1 deprecation

:::

<table class="alternate-even">
<tr><th>Version</th><th>Status</th>                                <th>Release</th>   <th>Adopt</th>     <th>Deprecate</th> <th>Decommission</th></tr>
<tr><td>v16</td>    <td class="t_assess"><em>ASSESS</em></td>      <td>2022-05-11</td><td>2022-11-11</td><td>-</td><td>-</td></tr>
<tr><td>v14</td>    <td class="t_adopt"><em>ADOPT</em></td>        <td>2021-01-27</td><td>2021-07-27</td><td>-</td><td>-</td></tr>
<tr><td>v12</td>    <td class="t_deprecate"><em>DEPRECATE</em></td><td>2019-11-18</td><td>2020-05-18</td><td>2022-08-14</td><td>2022-11-14</td></tr>
</table>
