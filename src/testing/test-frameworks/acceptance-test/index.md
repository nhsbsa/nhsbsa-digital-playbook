---
layout: article
title: "Functional Acceptance Testing"
description: "Functional acceptance testing considers the functionality of the service as well as the integration of the service with other services and interfaces."
tags: test-frameworks
order: 1
status: Review
---

*'Formal testing with respect to user needs, requirements, and business processes conducted to determine whether a system satisfies the acceptance criteria and to enable the user, customers or other authorized entity to determine whether to accept the system'*. ISTQB

What is functional acceptance testing?

Functional acceptance testing is a fundamental part of the NHSBSA Test Standards. It considers the functionality of the service as well as the integration of the service with other services and interfaces. Whilst NHSBSA refer to this type of testing as "acceptance testing", it in fact incorporates the following ISO/IEC/IEE 29119 Test Levels:

- Integration Testing ("in the large")
- System Testing
- Systems Integration Testing

## Functional Acceptance Test Principles

### Automate Smartly

Automation is the implementation of an automation test tool(s) to execute test cases. It is well suited for services that require testing to be repeated multiple times. It is often applied once a service has been through an initial manual testing process.

NHSBSA's approach is to automate as many tests as possible, but only when it is smart to do so. Test teams should ensure testing is repeatable and efficient. However, teams should also recognise that it is not always possible to automate the tests or sensible to automate all tests straight away.

Functional Acceptance Testing concentrates on the functionality the user is exposed to when using the service. In many instances, it is more sensible to start testing using localised manual tests. This is especially the case where items such as UI designs have not yet been finalised. Whilst it is useful to start testing as early as possible, it is not wise to invest the time in automating tests that may need amending later due to expected changes in the item under test.

Manual tests may also be preferred over automation testing where complex or highly dynamic workflows require a more flexible approach. For example, workflows that depend on multiple variables, unpredictable paths, or complex user interactions (e.g. a new feature with user-customisable settings or experimental features).

Additionally, the test community are encouraged to conduct **exploratory tests** when applicable. These are manual tests where testers actively explore early versions of the solution to assess the user experience. It allows the tester to explore the solution spontaneously, making personal decisions rather than following pre-defined user journeys. By focussing on discovery and investigation, exploratory testing often uncovers issues and edge cases that more formal testing overlooks. This offers deeper insights into the quality and usability.

### Test Automation

As soon as possible, and once designs are close to being finalised, test teams should revert their efforts to automating the tests using Serenity / Selenium.

Our standard framework can be found on GitLab here: [Java Serenity Automation Framework](https://gitlab.com/nhsbsa/ddat/test-community/java-serenity-automation-framework).

- Automation should concentrate on tests that are likely to be executed repeatedly
- The test team should be seeking 100% coverage within their automation test suite
- Automation test suites should include positive, negative and edge test cases.

**The Regression Test Suite must be automated.** The aim of the regression test should be that it can be placed in the CI/CD pipeline and/or it can easily be executed iteratively or on a nightly basis.

To avoid data dependency within our test packs, any new automation framework must be set up with a dynamic data approach, so that static data is not used, and data independence is maintained.

### Behaviour-Driven Development (BDD)

Our Functional Acceptance Tests (manual and automated) are created in user centric Behaviour-Driven Development (BDD) style. The tool choice for our BDD test scripts can be found within the NHSBSA Test Tech Stack.

Our BDD tests are centred around the users and their behavioural needs and requirements. This means our tests are focused from the perspective of the user and not a third person or service.

All wording is in clear natural English language and does not include technical or test jargon or speech. For example, in our test scripts we do not follow the traditional style of "press this" or "click that". Instead, we write our tests as the user would express a scenario or situation. For example:

> Given I am on the NHSBSA PPC website\
> When I want to buy a 12 month PPC by card\
> Then I will be able to buy a 12 month PPC by card

Only in circumstances where these actions are needed to prove a clear acceptance criterion can they be used.

**Note that API testing, Performance testing and Data Procession testing also consider BDD -- the approach described above also applies to these core test frameworks.**

### Integration Testing

Functional Acceptance Testing should include integration testing across the full user journey ("integration in the large"). This means that any internal or external interface should be included in the test scenarios. In most cases, the interface is an API which integrates with a secondary solution (see the API Test Framework), though in other cases the interface may be a common component or a component specific to that service.

Examples of integration points and interfaces that must be included in the end-to-end integration testing include, but are not limited to:

- GovNotify API
- Card Payment Services
- Apple Pay / Google Pay
- File Upload
- Service specific Microsoft Dynamics component
- Contact the BSA Microsoft Dynamics component
- Address Search

Where it is not possible to test against an external interface, testers must consider a test stub or harness to ensure the full end-to-end user journey can be incorporated into test scenarios.

Integration testing also needs to be included when the solution is built by developing different modules or components. This is conducted in a fully integrated test environment (sometimes referred to as 'INT') and demonstrates that the different modules or components can integrate to support the full user journey.