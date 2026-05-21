---
layout: article
title: "Compatibility Testing"
description: "Compatibility testing focuses on showing that an application or service works on different devices, different browsers and different operating systems"
tags: test-frameworks
order: 4
status: Review
---


#### What is compatibility testing?

Compatibility testing focuses on showing that an application or service works on different devices (e.g. laptops, tablets and phones), on different browsers (e.g. Edge, Firefox, Chrome) and different operating systems (e.g. iOS, Windows).

Our Compatibility Testing is linked to the following requirements:

- Ability to provide stakeholders with information about their application regarding functionality, usability and consistency.
- Ability to analyse the system in different OS environments as well as with different mobile devices (phones, tablets).
- Ability to conform to the following GDS Service Standards on performance and durability.
  - Standard 6 - Evaluate tools and systems - the evaluation and use of tools for your system and development environment.
  - Standard 10 - Be able to test the end-to-end service in an environment identical to that of the live version, including on all common browsers and devices, and using dummy accounts and a representative sample of users.
  - Standard 13 - To pass the beta and live assessments you also need to show that the service is responsive and works on mobile devices.

To ensure our services meet these requirements we run tests that are representative of the services. These are end-to-end user journey tests that represent how the service behaves using the various browsers, devices and phones.

GDS state "Your service must be universally accessible. This means building it to work on every browser or device that your users access it on." This means that if it is known that users are not going to use certain devices, browsers and/or operating systems then there is little or no need to test on them. Each DDaT service should consider the User Research for new services and monitoring such as Google Analytics for existing services to consider the scope of the test.

#### How do we test compatibility?

NHSBSA's approved compatibility test platform is [Saucelabs](https://saucelabs.com/). This gives us access to over 2000 device and browser combinations.

Saucelabs allows testers to test different devices and browsers. We test the latest and latest-1 models and versions where possible, keeping in line with [GDS guidance](https://www.gov.uk/service-manual/technology/designing-for-different-browsers-and-devices). Via Saucelabs we have access to both real and virtual devices and can execute both manual and automated tests.

A defined [NHSBSA Compatibility Test Framework](https://nhsbsauk.sharepoint.com/sites/Digital872/SitePages/Compatibility-Testing-framework.aspx) is maintained with details of the current test coverage scope. As this is a dynamic page that is updated at least once a month, the details are not presented here. However, all NHSBSA Testers have access to it via our internal SharePoint pages.

There are two ways to run the compatibility tests, locally from your machine or in a CI/CD pipeline.

#### Local execution

This is where the tests are executed from the tester's machine by manually entering an execution command on the command line. All the defined tests are executed through the Cloud-based test environments.

Local execution of tests through the Saucelabs service executes from the same command line statement structure as automation tests, but with some extra capabilities (choice of platform, browser, device etc) added to the command. This allows the tester to define and change the platform, browser or device much easier. It is also better for maintainability and code quality that these are not hard coded into test scripts.

In order to run tests through Saucelabs:

- Internal NHSBSA users need to be connected to Global Protect
- External users need to be connected with AWS VPN

This will allow access via the URL using NHSBSA login credentials.

- All users need to connect via the [Sauce Connect Proxy](https://docs.saucelabs.com/secure-connections/sauce-connect-5/quickstart/)

All tests during development should be run using this method as it can give fast feedback about the tests and the service.

#### CI/CD pipeline execution

It is possible to execute tests either by utilising a schedule or a trigger within the CI/DC pipeline.

By setting up a schedule, the tests will run when they are planned to execute in the pipeline utilising both the automation tests and environments when these are quiet. This should be a regular nightly exercise to fully utilise the capability of the pipelines, environments and to aid testers with extra testing capacity.

By using a trigger either manually (via the play triangle icon) for a job or automatically within the trigger, the tests can be run on the latest deployed version of the service in the test environment.

This is useful for regression compatibility testing.

#### When should compatibility tests be run?

Compatibility testing should be considered in scope when a release includes significant new functionality, including new or updated screens. Executing the tests as early as possible will provide fast feedback regarding design and development.

Leaving compatibility testing too late in the development lifecycle increases the risk of problems arising which could result in severe rework and issues potentially delaying or cancelling releases.

Once the compatibility tests are in the CI/CD pipeline they can be included in regression testing.

#### The compatibility test process

During Compatibility Test execution, testers must ensure all test evidence (screenshots, videos) is extracted and saved within the NHSBSA domain (rather than leaving within Saucelabs), preferably JIRA. All Saucelabs devices are cleared of data used once the test is complete.

The test coverage, results and issues faced during testing must be documented in the Compatibility Test Report.

Please make sure that you close the Saucelabs connect proxy tunnel after the test execution so there is not impact on other testers' activities.