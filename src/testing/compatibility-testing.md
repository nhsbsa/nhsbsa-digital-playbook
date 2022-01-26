---
layout: article
title: "Compatibility Testing"
description: "How & why we compatibility test in the NHSBSA"
tags: test-frameworks
order: 10
related:
  tag: "compatibility_framework"
---

## Why we compatibility test at the NHSBSA

Within each project especially those based in the digital workspace the need to perform Compatibility testing is linked to the following requirements:

- Ability to provide stakeholder's with information about their application regarding functionality, usability and consistency.
- Ability to analyse the system in different OS environments as well as with different mobile devices (Phones, Tablets).
- Ability to conform to the following GDS Service Standards on performance and durability.
    - Standard 6   - Evaluate tools and systems - the evaluation and use of tools for your system and development environment.
    - Standard 10 - Be able to test the end-to-end service in an environment identical to that of the live version, including on all common browsers and devices, and using dummy accounts and a representative sample of users.
    - Standard 13 - To pass the beta and live assessments you also need to show that the service is responsive and works on mobile devices.

To meet the GDS Standard 10 your testing on your project needs to "work with the devices and browsers your users use" GDS Website.

To ensure our services meet these requirements we run tests that are representative of the services. These are end to end / user journey tests that will represent how the service behaves using the various browsers, devices and phones.

Our compatibility coverage is based upon all of the following key requirements:
- GDS - minimum coverage standards.
- NHSBSA - technology infrastructure and support.
- USER RESEARCH - project user base research on browsers and devices used, Google Analytics.

All three of the above form our NHSBSA compatibility test coverage and standards.

All NHSBSA projects need to comply with the Test Standards on coverage of browsers and devices, this coverage standard can be found on the NHSBSA Compatibility testing coverage page.

No other coverage will be accepted unless agreed as an exemption with your Test Lead.

 ## How we compatibility test

 Within the NHSBSA we have provisioned compatibility services from Saucelabs. This enables us to run tests both manually and automated through various browsers, devices and phones. No other compatibility testing service is approved for use as they do not meet our coverage requirements.

We also do not approve the use of seperate tools or licences for the same compatibility service. The NHSBSA has provisioned a central service offering that will meet the needs for all the test community.

There are two ways to run the compatibility tests, locally from your machine or in a CI/CD pipeline.

### Local execution

This is where the tests are started and run from the tester's machine by manually entering an execution command on the command line.

Local execution of tests through the Saucelabs service runs all tests through the cloud based test environments (which is a standard requirement for NHSBSA test sign off). It executes from the same command line statement structure as automation tests but with some extra capabilities (choice of platform, browser, device etc) added to the command. This allows the tester to define and change the browser, device or phone much easier, it is also better for maintainability and code quality that these are not hard coded into test scripts.

In order to run tests through Saucelabs the machine used for testing needs to be one of the following:

- Windows laptop connected to AONVPN.
- Mac laptop connected to Open VPN
- For Mac users the Saucelabs connect proxy then needs installing.

Only by using the above will Saucelabs be able to access the AWS Test Environments.

All tests during development should be run using this method as it can give fast feedback about the tests and the service.

### CI/CD Pipeline execution

In pipeline based projects it will also be possible to run tests either by utilising a schedule or a trigger.

By setting up a schedule, the tests will run when they are planned to execute in the pipeline utilising both the automation tests and environments when these are quiet. This should be a regular nightly exercise to fully utilise the capability of the pipelines, environments and to aid testers with extra testing capacity.

By using a trigger either manually (via the play triangle icon) for a job or automatic in the triggering this will allow tests to be run on the latest deployed version of the service in the test environment. 

The tests will run through the compatibility service Saucelabs and utilise the cloud tst environment.

## How often do I run compatibility tests?

Compatibility tests should be run as often as possible and once these tests have been built into the CI/CD pipeline then these can be run on every build or release.

At present much of this testing is still manual in execution so we require compatibility tests to be run for every release. This allows early and fast feedback to be provided to the teams if problems arise.

Leaving compatibility testing too late in the development lifecycle increases the risk of problems arising which could result in severe rework and issues potentially delaying or cancelling releases. 

## Test Results

For all digital projects the minimum range of devices to test upon are those specified in the NHSBSA compatibility test coverage. 

Following licensing with Saucelabs we will be able to run tests on over 2000 browsers and devices. 

This greatly increases the range of 'real user' experiences that Test can perform on the various platforms before release.

The results from the end to end / user journey tests must then be fed into the compatibility reports.

## Test Reporting

Following execution a Compatibility test completion report will need creating which will show the the coverage, result and any issues faced in the testing.

This report will be a 'living' document that will be under constant review and update as the compatibility of the service is regularly executed for each release.

## After Testing 

When all testing has been completed on Saucelabs please ensure the all test evidence (screenshots, videos etc) has been extracted from the compatibility tool/service.

All test material will stay within the tool for a duration of X days before being removed. After execution every device used is cleared of data used.

Please make sure that you are closing the SauceLab connect proxy tunnel after the test execution.