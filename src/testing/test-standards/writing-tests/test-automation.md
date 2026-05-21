---
layout: article
title: "Test Automation Process"
description: "The process needs to be followed when creating, maintaining or performing test automation."
tags: test-automation
order: 1
status: review
---

The following process must be followed when creating, maintaining or performing test automation.

#### Pre-automation

Before any test automation is started the following pre-requisites must be met:

- The testing task has been analysed and found to be testable by automation.
- Exploratory testing has been performed on the task to ensure the test is able to be automated.
- Automating the test will result in efficiencies and savings across the required testing task.
- The user stories have been created, reviewed and agreed by the whole delivery team, including 3 Amigos (including testers).
- The automation scope and approach have been included in the project Test Approach document and has been agreed by the technical and delivery leads.

Setup your sprint or release test completion report for inclusion of results. See guidance on how to link test results to Jira tickets [here](https://nhsbsauk.sharepoint.com/:w:/r/sites/Digital872/_layouts/15/Doc.aspx?sourcedoc=%7B41072E2C-B389-40FC-AF5D-83C1CDD84515%7D&file=Guidance-for-Sprint-and-Release-Test-Reports.docx&action=default&mobileredirect=true).

#### During automation

As code is not always immediately available to testers it is valid to:

- Use static creation of automation tests from the acceptance criteria in the user stories and from materials like flow charts, prototype designs etc.
- Use local versions of the UI screens or UI on branches if the developer is happy that the acceptance criteria has been met.

Testers must also consider the following guidelines:

- Do not code from prototypes as these are throw away and should not be used to base automation upon.
- Do not include locator elements such as IDs unless they have been provided and are accepted as final version. It is common during development that IDs can change in format and content.
- Setup the reporting element of your automation tests so they will output html reports on your results. Json format is not accepted. These tests will need to be linked to your sprint and your release test completion reports.

Once code is ready for test and deployment to the TEST environment (which must be in the tester's control):

- Deploy code into the test environment and run all UI screens and tests from this environment.
- Revisit all scripts and add in the relevant locator elements, field names etc that may not have been accepted or ready in earlier development.
- Once your code is validated and meets acceptance criteria then your acceptance test can be baselined and added to your regression pack.

#### After test execution

The test results must be validated.

- All results must be output from the terminal window and in html reports.
- These results must be checked for validity as tests can pass even if the actual test fails. (For example, if a happy path completes its journey through the service and does a final page assertion then it will show as passed but the test might have missed checks or routing that is vital to the journey.)

#### Regression testing

Before testing can complete, regression testing must be performed.

- If you have more than one test to run for a release, then it is advisable to wait until all the in-scope automation tests are executed before running your regression pack.
- The regression test pack should be placed in the CI/CD pipeline so it can be scheduled at a convenient time.
- It is advisable to run regression packs outside of work hours to avoid slowing down the CI/CD infrastructure for everyone.