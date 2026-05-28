---
layout: article
title: "Writing Tests"
description: "When writing tests, the NHSBSA Test Strategy principles must be followed, with particular emphasis on ensuring full traceability between requirements, test scenarios, and test results."
tags: test-standards
order: 5
related:
 tag: test-automation
---

The NHSBSA's approach to testing includes several principles as described in the NHSBSA Test Strategy. When writing tests there must be a particular emphasis throughout the process on ensuring traceability. The test principles described in the Test Strategy must be considered, namely:

- Risk based testing
- User centric testing
- Behaviour driven development
- Automate smartly
- Route to live
- Shift left
- Independence

### Test Design

It is the NHSBSA Test Profession's responsibility to provide stakeholders with a degree of accuracy that a service under development works as described in the product requirements (this includes meeting the user needs).

We are also required to meet the UK Government GDS Service Standards. In terms of testing:

**Standard 6** - Evaluate what tools and systems will be used to build, host, operate and measure the service, and how to procure them.

**Standard 7** - Evaluate what user data and information the digital service will be providing or storing and address the security level, legal responsibilities, privacy issues and risks associated with the service (consulting with experts where appropriate).

**Standard 10** - Be able to test the end-to-end service in an environment identical to that of the live version, including on all common browsers and devices, and using dummy accounts and a representative sample of users.

When designing tests the following should be considered (depending on the test type):

- The functionality / behaviour of the service must be in line with the user journeys and their acceptance criteria.
- The validation of service inputs must include Valid, Invalid, Non-entry and verification scenarios (for example field lengths, acceptance levels).
- Test coverage must include positive ("happy path") and negative ("unhappy paths" scenarios, service scope limitations and redirects.
- Test methods such as Boundary Value Analysis and Equivalence Partitioning must be implemented to test range and the limits of the service.
- Integration with other services or providers must be included (test harnesses and mocks can be used where applicable).
- All services must include regression testing to ensure the service is not affected by any change or the introduction of new features.

### Test Scripting

We use the following tools and methods when structuring test scripts:

- **Cucumber** - a software tool that supports behaviour-driven development. Central to the Cucumber BDD approach is its ordinary language parser called **Gherkin**. It allows expected software behaviours to be specified in a logical, natural language that users and other stakeholders can understand.
- **User Centric BDD** - BDD uses human-readable descriptions of software user requirements as the basis for software tests. Each test is based on a user story written in the formally specified clear natural English language. User Centric BDD ensures all test scenarios written in Gherkin syntax are from a user's perspective and phrased as a user would describe a scenario or circumstance.
- **Gherkin** - Gherkin uses a set of special keywords to give structure and meaning to executable specifications. Each keyword helps the user and tester to understand the requirements and scenarios more clearly, these keywords include Given (pre-condition), When (action), Then (result).

Programming languages for automated tests (dependent on the test tool in use):

- **Java** - A language supported by the cucumber project to implement cucumber steps using Selenium.
- **Ruby** - A language supported by the cucumber project to implement cucumber steps using Selenium. Note that this is being phased out.
- **Python** -- A language used when writing data processing tests using PyTest BDD

More details on the test tools used for each core test framework can be found in the Test Tool standard.

Further guidance on writing clean tests can be found in the Development Playbook here.

### Manual Testing

Through our Automate Smartly approach, we recognise that it is not always possible or appropriate to automate a test. Manual testing is therefore part of our test frameworks.

We manually test in the same format as our automation testing but without the code to drive the tests.

- All manual test scripts, scenarios and cases must be written in user centric BDD to validate user story acceptance criteria.
- All manual test scenarios and cases must be built in feature files.
- All test scripts must be uploaded (at least) daily into the relevant Git test repository and named following the [NHSBSA test standard on naming conventions](https://bsa2468.atlassian.net/wiki/spaces/CoP/pages/1602125992/Naming+Conventions).
- Valid manual tests must be earmarked for the regression test pack so that they can be automated as soon as possible.
- All manual test results must be captured in the relevant Test Report.
- All test material must be uploaded onto the shared and supported platforms -- Git, Jira, Confluence. No test materials (scripts, results, reports) should be kept on local machines.
- Testers should avoid manual regression tests and make every effort to ensure the regression test pack is fully automated.

### Automation Testing

Through our Automate Smartly approach, we seek to automate as many tests as soon as it is appropriate to do so.

In Agile delivery, speed and iterative development is key and automated acceptance tests allow test to build, maintain and improve our testing to meet the demand whilst not compromising quality.

To support this, automating tests can make a tester's role much easier as well ensuring tests are executed quicker, more frequently and in cases more accurately. It also allows us to increase the coverage of our tests.

- All automated test scripts, scenarios and cases must be written in user centric BDD validate user story acceptance criteria.
- All automated test scenarios and cases must be built in feature files.
- Automated tests can be built as soon as the acceptance criteria is available and approved.
- A tester must consider whether the appropriate test will be reused and repeatable. If it is then it can be automated.
- Tests can be built in static form initially whilst the UI is under development before being adapted to execute when the code is ready.
- All test scripts must be uploaded (at least) daily into the relevant Git test repository and named following the [NHSBSA test standard on naming conventions](https://bsa2468.atlassian.net/wiki/spaces/CoP/pages/1602125992/Naming+Conventions). Test code must be placed in step definition files.
- Once an automated test has been executed and validated, it must be baselined and added to the automated regression test pack.
- All automated test results must be captured in the relevant Test Report.
- All test material must be uploaded onto the shared and supported platforms -- Git, Jira, Confluence. No test materials (scripts, results, reports) should be kept on local machines.
- Automated regression must be run regularly for every change and release to ensure the continued assurance of all the service is not affected by any change or improvement.

Please see the Test Automation Process for further details.