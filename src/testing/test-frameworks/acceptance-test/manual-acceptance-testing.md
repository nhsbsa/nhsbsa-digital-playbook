---
layout: article
title: "Manual Acceptance testing"
description: "What, how and where we manually acceptance test at the NHSBSA"
tags: acceptance-framework
order: 1
---

## What do we manually acceptance test?

By default we employ an ‘automation by default’ approach to acceptance testing so unless a test is not possible or constrained then tests must be automated. Currently over 90% of our acceptance tests are automated.

The only circumstances where manual test will be accepted are:
- when tests can not be automated due to complexity or restraints stopping the automation technology.
- when the benefits to test outweighs effort (this should also be approved by your test lead).
- exploratory testing performed before automation to allow the tester to be able to validate their automation tests.

## Why do we manually acceptance test?

Automated acceptance testing is the most efficient and cost saving test technique in software testing.

Automating tests through any means (UI, API, performance or accessibility) can make a tester's role much easier as well ensuring tests are executed quicker, more frequently and in cases more accurately.

In Agile delivery, speed and iterative development is key and automated acceptance tests allow test to build, maintain and improve our testing to meet the demand whilst not compromising quality.

Unfortunately though automation is not always possible so manual testing will still be part of our test frameworks.

## How do we manually acceptance test?

We manually test in the same form as automation does but without the code to drive the tests.
All test scripts, scenarios and cases must be written in user centric BDD using Cucumber methodology with the overall aim to validate user story acceptance criteria.

All manual test scenarios must be built in feature files whilst taking advantage of the example table feature to test the base coverage explained on the Acceptance Test webpage.

As with automation tests once these tests are executed and validated then these are to baselined and added to the regression pack.

Regression needs to be run regularly for every change and release to ensure the continued assurance of all the service is not affected by any change or improvement.

### Code storage and maintenance

All test code must be uploaded regularly at least once daily into the relevant Git repository and named folliing the NHSBSA test standards on naming conventions.

All test documentation including reports must be uploaded into the delivery team test confluence area.

Please note: no test material (code, documentation, reports) must be kept on local machines. It is NHSBSA standard for all material to be uploaded into the shared and supported platforms (Git, Jira and Confluence).

## Reporting of results from manual testing

The following digital test structure must be followed in this order:

- Test Approach document.
- Test Suite (Scenarios and Cases) in feature files.
- Test Results in relevant reports (acceptance and API in sprint or release reports, accessibility in accessibility reports, performance in performance report and compatibility in compatibility report).