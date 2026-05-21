---
layout: article
title: "Test Documents"
description: "Test activities from planning through to execution and reporting must be fully documented."
tags: test-standards
order: 8
status: review
---

Test activities from planning through to execution and reporting must be fully documented. This is not only to provide an audit trail of what testing has happened but also to provide the metrics required to show how successful the testing has been.

### Test Approach

For each iteration of testing, be it on a full release introducing new epics and functionality, a change to the existing service or a defect fix, the approach to be taken to test the item under test must be fully documented. This is to ensure buy-in for the test team, the Test Lead and other stakeholders such as the Product Owner and Technical Lead.

For full releases and significant changes, a Test Approach document must be prepared. This is sometimes referred to as the service's Test Strategy and should follow guidance in international standard ISO/IEC 29119.

This document will outline the planned tests under each core test framework. It explains the service under test and the release or change that is going to be made. It then describes the following:

- The strategic view of how the service will be tested
- The pre-requisites for the test activities
- The scope and goals of the test activities, including which core test frameworks are going to be conducted
- The technical set up required for the test, including a description of the test environment(s) (in line with the route-to-live standard)
- The test criteria including the entry and exit criteria
- A clear statement on which of the core test frameworks are included, for those not included, a clear statement on why not
- A clear statement on what is in scope including links to all the epics and user stories
- A clear statement on what is out of scope within each core test framework
- The approach to regression testing
- The test data requirements
- The test execution method, including what will be automated and what will be manual tested, and what will sit within the CI/CD pipeline
- The method in which the test scripts will be captured and stored
- The method in which the test results will be captured, stored and reported
- The defect management process
- Items included in a Test Plan (see below)

A copy of the NHSBSA Test Approach template can be found [here](https://nhsbsauk.sharepoint.com.mcas.ms/sites/Digital872/SitePages/Test-Approach-Documents.aspx).

### Test Plan

Often a service's Test Plan is included in the Test Approach. This is acceptable for full releases or significant changes as the approach to testing may be new or significantly changed and the plan for testing needs to be outlined as an overall approach.

For smaller changes or defect fixes where the general approach to testing will continue to follow the latest Test Approach for that service, a separate Test Plan can be written. This can be written and stored in the service's Confluence domain but must link to the overarching Test Approach it is drawing on.

We follow guidance provided in international standard ISO/IEC 29119. It must include a description of:

- The test phases (the core test frameworks) that are planned
- The epics and user stories under test via links to the JIRA tickets
- The entry/exit criteria
- The test tools to be used
- The test environments
- The test data
- The test schedule

### Test Scripts

All test scripts must take the format described in the Writing Tests standard, and must be stored in a Git repository, clearly marked specific to the service under test. They must not be stored locally.

Test scripting must consider positive and negative scenarios, edge cases and boundary analysis. There must be a link to the appropriate epics/user stories/acceptance criteria.

All test scripts should be scanned in the automation repository by SonarQube and have no blocker or high severity issues.

### Test Coverage Report

A key indicator of a robust test approach is the test coverage. The NHSBSA Test Community aim for 100% coverage of all in-scope epics and user stories (functional and non-functional features) through the different core test frameworks.

JIRA tickets are the easiest way to demonstrate coverage of testing across the core test frameworks (and beyond, where necessary). The NHSBSA DDaT Test Community are currently designing a standard in which all services can demonstrate the coverage of their tests using JIRA as a tool. This will become the standard to produce a Test Coverage Report. Until this is complete, services must validate test coverage through any means at their disposal -- this may be by using JIRA, Confluence, Excel or some other tool. The test coverage should be signed off by the Test Lead, the Product Owner and the Technical Lead.

Where there are gaps in coverage, a risk analysis must be conducted so that all stakeholders can agree whether the gap is acceptable or not.

### Test Completion Report

The NHSBSA Test community share their test results and outcomes via a series of test reports. The collection of these test reports makes up the Test Completion Report.

Test reports define the outcome of a test or a series of tests. They are produced so that the appropriate stakeholders can understand what testing has been conducted, what has been successful and what has not been successful. It allows stakeholders to understand the outstanding issues and appreciate the residual risk. This enables stakeholders to make an informed decision on whether a release, change or fix should be deployed into Production or not.

JIRA is the preferred tool to report the outcome of tests (apart from Accessibility Testing, Compatibility Testing and Performance Testing where additional details is required). Testers should follow the guidance found [here](https://nhsbsauk.sharepoint.com/sites/Digital872/SitePages/T.aspx) to build their test report(s). This provides an efficient way to report on the outcome of the testing via the tests described in JIRA tickets and allows testers to highlight outstanding defects and other issues.

The information provided in the test report(s) should follow the international standard ISO/IEC 29119.

In terms of Accessibility Testing, the NHSBSA's [Accessibility Test Report](https://nhsbsauk.sharepoint.com/sites/digital-accessibility/Shared%20Documents/Forms/Visitor.aspx?ovuser=cf6d0482%2D86b1%2D4f88%2D8c0c%2D3b4de4cb402c%2Cnicola%2Eyoung%40nhsbsa%2Enhs%2Euk&OR=Teams%2DHL&CT=1715692395854&clickparams=eyJBcHBOYW1lIjoiVGVhbXMtRGVza3RvcCIsIkFwcFZlcnNpb24iOiI1MC8yNDAzMzEwMTgxNyIsIkhhc0ZlZGVyYXRlZFVzZXIiOmZhbHNlfQ%3D%3D) should be used to demonstrated that all tests within the phased approach to accessibility testing have been conducted and their outcome has been reported.

In terms of Performance Testing, the NHSBSA's [Performance Test Report](https://nhsbsauk.sharepoint.com/sites/Digital872/SitePages/T.aspx) should be used. This report provides the performance metrics collected during performance test execution that are analysed to understand the service's performance under load.

The Test Completion Report contains reports from all core test frameworks, plus any additional testing that was required. Testers must make sure the following is included:

- All testing that is in scope, including each core test framework and any additional testing
  - This may include links to separate test reports such as the accessibility report and/or the performance test report
- Clear **Test Metrics**:
  - Tests executed
  - Tests passed
  - Test failed
  - Tests not run
- Links from failed tests to defects
- Links from tests not run to risks
- Links from defects to risks, including their business impact -- this is mandatory for all outstanding (not closed) defects
- A description of how the Exit Criteria has been met

A Test Completion Report must be reviewed and signed off by the NHSBSA Test Lead, the Product Owner, the Technical Lead and the Delivery Manager.

