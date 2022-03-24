---
layout: article
title: "Test Automation Process"
description: "How we design, develop and maintaing our test automation at the NHSBSA"
tags: automated-acceptance-testing
order: 1
---

The following process must be followed when creating, maintaining or performing test automation.

### Pre-Automation
Before any test automation is started the following needs to be performed:

- The testing task has been analysed and found to be testable by automation.
- The automation will result in efficiencies and savings in all testing performed for the task and story, this will include exploratory, acceptance and regression testing.
- The user story(s) have been created, reviewed and agreed by the whole delivery team, including 3 Amigos with testers.
- Exploratory testing has been performed on the task to ensure the test is able to be automated.

The automation scope and approach has been included in the project Test Approach document. Information on test documentation can be found on the test documentation page of the playbook.

Setup your sprint or release test completion report for inclusion of results.

### During Automation
As code is not always immediately available to testers it is valid to:

- Use static creation of automation tests from the acceptance criteria in the user stories and from materials like flow charts, prototype designs etc.
- Use local versions of the UI screens or UI on branches if the developer is happy that the acceptance criteria has been met. 
- Do not code from prototypes as these are throw away and should not be used to base automation upon.
- Not include locator elements such as id’s unless they have been provided and are accepted as final version. It is common during development that id’s can change in format and content.
- Setup the reporting element of your automation tests so they will output html reports on your results. Json format is not accepted. These tests will need to be linked to your sprint and your release test completion reports.

Once code is ready for test and deloyment to the test environment (which must be in the tester's control):

- Deploy code into the test environment and run all UI screens and tests from this environment.
- Revisit all scripts and add in the relevant locator elements, field names etc that may not have been accepted or ready in earlier development.
- Once your code is validated and meets acceptance criteria then your acceptance test can be baselined and added to your regression pack.

### After Tests
To validate automation tests all results must be output from the terminal window and also in html reports.

These results must be checked for validity as tests can pass even if the actual test fails. (For example, if a happy path completes its journey through the service and does a final page assertion then it will show as passed but the test might have missed checks or routing that is vital to the journey.)

Before testing can complete regression testing will need to be performed. If you have more than one test to run for a release then it is advisable to wait until all the release in scope automation tests are run before running your regression pack. It is also advisable to run regression packs out side of work hours as these may be of size and this will slow down the CI/CD infrastructure for everyone.

Regression tests must be run as regular as possible within reasonable judgement of the tester. After all features are tested then regression needs to be run to check all existing functionality has not been affected.

### Documentation
The only documentation that must be created within the test automation process are:

- Sprint test completion reports
- Release test completion reports
- Project Test Approach document (reference to and keeping updated with test automation scope)
- Test Reporting from automation (html reports)