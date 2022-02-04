---
layout: article
title: "Automated Acceptance testing"
description: "What, how and why we automate acceptance test at the NHSBSA"
tags: acceptance-framework
order: 1
---

## What do we automate in acceptance testing?

By default we employ an ‘automation by default’ approach to acceptance testing so unless a test is not possible or constrained then tests must be automated. Currently over 90% of our acceptance tests are automated.

We automate every acceptance test we can and this allows us to not only increase our coverage by being able to test more scenarios but to be able to test more regularly.

## Why do we automate acceptance testing?

Automated acceptance testing is the most efficient and cost saving test technique in software testing.

Automating tests through any means (UI, API, performance or accessibility) can make a tester's role much easier as well ensuring tests are executed quicker, more frequently and in cases more accurately.

In Agile delivery, speed and iterative development is key and automated acceptance tests allow test to build, maintain and improve our testing to meet the demand whilst not compromising quality.

## How do we automation acceptance test?

All of our automation tests are created in user centric BDD to satisfy all acceptance criteria.

We use the following in our automation tests:

- Cucumber - a software tool that supports behavior-driven development. Central to the Cucumber BDD approach is its ordinary language parser called Gherkin. It allows expected software behaviors to be specified in a logical language that customers can understand. 
- User Centric BDD - BDD uses human-readable descriptions of software user requirements as the basis for software tests. Each test is based on a user story written in the formally specified clear natural English language. User Centric BDD ensures all test scenarios written in Gherkin syntax are from a users perspective and phased as a user would describe a scenario or circumstance.
- Gherkin - Gherkin uses a set of special keywords to give structure and meaning to executable specifications. Each keyword helps the user and tester to understand the requirements and scenarios more clearly, these keywords include Given (pre-condition), When (action), Then (result).
- Selenium -  a collection of language specific bindings to drive a browser through the UI.
- Java - A language supported by the cucumber project to implement cucumber steps using Selenium.
- Ruby - A language supported by the cucumber project to implement cucumber steps using Selenium.

All automation test scenarios must be built in feature files whilst taking advantage of the example table feature to test the base coverage explained on the Acceptance Test webpage.

Automation tests can be built as soon as when acceptance criteria is available, agreed and accepted. 
These are built in a static form whilst the UI is still under development then adapted to execute when code is ready.
Automation tests once executed and validated are then baselined and added to the automated regression pack.

Automated regression needs to be run regularly for every change and release to ensure the continued assurance of all the service is not affected by any change or improvement.

### Code storage and maintenance

All test automation code must be uploaded regularly at least once daily into the relevant Git repository and named following the NHSBSA test standards on naming conventions.

All test documentation including reports must be uploaded into the delivery team test confluence area.

Please note: no test material (code, documentation, reports) must be kept on local machines. It is NHSBSA standard for all material to be uploaded into the shared and supported platforms (Git, Jira and Confluence).

## Structure of automation tests

The following digital test structure must be followed in this order:

- Test Approach document.
- Test Suite (Scenarios and Cases) in feature files.
- Test Code in step defintion files.
- Test Results in relevant reports (acceptance and API in sprint or release reports, accessibility in accessibility reports, performance in performance report and compatibility in compatibility report).
- Results from automation should be included in the above reports from only html reports obtained from automation.