---
layout: article
title: "Test frameworks"
description: "Detailed guidance on NHSBSA core test frameworks including functional acceptance, accessibility, API, compatibility, performance and data testing"
tags: test
order: 3
status: DRAFT
---

## Functional acceptance testing

*'Formal testing with respect to user needs, requirements, and business processes conducted to determine whether a system satisfies the acceptance criteria and to enable the user, customers or other authorized entity to determine whether to accept the system'*. ISTQB

### What is functional acceptance testing?

Functional acceptance testing is a fundamental part of the NHSBSA Test Standards. It considers the functionality of the service as well as the integration of the service with other services and interfaces. Whilst NHSBSA refer to this type of testing as "acceptance testing", it in fact incorporates the following ISO/IEC/IEE 29119 Test Levels:

- Integration Testing ("in the large")
- System Testing
- Systems Integration Testing

## Functional acceptance test principles

### Automate smartly

Automation is the implementation of an automation test tool(s) to execute test cases. It is well suited for services that require testing to be repeated multiple times. It is often applied once a service has been through an initial manual testing process.

NHSBSA's approach is to automate as many tests as possible, but only when it is smart to do so. Test teams should ensure testing is repeatable and efficient. However, teams should also recognise that it is not always possible to automate the tests or sensible to automate all tests straight away.

Functional Acceptance Testing concentrates on the functionality the user is exposed to when using the service. In many instances, it is more sensible to start testing using localised manual tests. This is especially the case where items such as UI designs have not yet been finalised. Whilst it is useful to start testing as early as possible, it is not wise to invest the time in automating tests that may need amending later due to expected changes in the item under test.

Manual tests may also be preferred over automation testing where complex or highly dynamic workflows require a more flexible approach. For example, workflows that depend on multiple variables, unpredictable paths, or complex user interactions (e.g. a new feature with user-customisable settings or experimental features).

Additionally, the test community are encouraged to conduct **exploratory tests** when applicable. These are manual tests where testers actively explore early versions of the solution to assess the user experience. It allows the tester to explore the solution spontaneously, making personal decisions rather than following pre-defined user journeys. By focussing on discovery and investigation, exploratory testing often uncovers issues and edge cases that more formal testing overlooks. This offers deeper insights into the quality and usability.

### Test automation

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

### Integration testing

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

## Accessibility testing

### Why do we test accessibility?

Regulations came into force for public sector bodies in 2018 - [Public Sector Bodies (Websites and Mobile Applications) (No. 2) Accessibility Regulations 2018](https://www.legislation.gov.uk/uksi/2018/952/made). These regulations stated that all public sector websites or mobile apps must be accessible in four key areas:

- Perceivable
- Operable
- Understandable
- Robust

The 2018 regulations built on the existing obligations to people who have a disability under the [Equality Act 2010 (or the Disability Discrimination Act 1995 in Northern Ireland)](https://www.legislation.gov.uk/ukpga/2010/15/contents). This states that all UK service providers must consider 'reasonable adjustments' for disabled people.

Additionally, [Government Digital Services (GDS)](https://www.gov.uk/guidance/accessibility-requirements-for-public-sector-websites-and-apps) clearly state that public sector services (including those used internally) must be open to all. This is not only a moral obligation but also a legal requirement.

At the NHSBSA, as with all UK government bodies, we follow the [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/). We design, develop and test our services to the latest published WCAG standard. When a service (web application, dashboard, publication or anything that is user facing) is promoted to Production, an Accessibility Statement is published to advise users its accessibility status.

The WCAG standard has 3 levels for web application accessibility:

- Level A -- the most basic web accessibility features
- Level AA -- deals with the biggest and most common barriers for users with accessible needs
- Level AAA -- the highest and most complex level of web accessibility

Whilst our internal and external facing web applications, dashboards and publications *must* meet the 'AA' standard, we aim to meet 'AAA' where possible.

### What is accessibility testing?

To ensure the NHSBSA meet the legislation and the standards, and to ensure our services, dashboards and publications can be used by users with accessibility needs, we have developed an Accessibility Test Framework.

We test that our services are accessible by combining both automated and manual testing tools and techniques.

The scope of accessibility testing includes:

- All website content, functionality and interactions.
- Any document that is uploaded, downloaded, used or displayed by a service.
- Any authentication mechanism used by a service.
- Any third-party features or products that a service uses or consumes.
- Any third-party or off the shelf products used by or in conjunction with a service.
- Any third-party or off the shelf product used within the NHSBSA (with the expectation that the testing is conducted by the vendor)
- Any dashboard or similar displaying data or data analysis produced by the NHSBSA
- Any data publication producing data or data analysis from the NHSBSA
- Any email template that is produced and sent by a NHSBSA service

Accessibility Testing must be conducted for all new web applications, dashboards and publications. A targeted regression test must be conducted when the web application, dashboard or publication is updated or refreshed.

## Accessibility test framework

No one technique will fully test or find all accessibility issues. We use a combination of techniques and tools to ensure our testing is as comprehensive as we can make it. Our approach is regularly reviewed to ensure it is adequate and is providing the appropriate assurance to our users.

### Stage 1 -- Automated checkers

There are many different tools and checkers available both in the licensed and open-source markets. Just because a tool is licensed does not mean it assures a higher or better quality of results than a free offering. Each tool we use has been investigated for their benefits and weaknesses.

Additionally, no one tool will give you 100 coverage and checks on the guidelines. Many tools may only find 40% or below of issues that exist on a website. Therefore, a combined approach of different tools and techniques (manual and automated) gives us better results.

The NHSBSA accessibility test framework includes the following automated checkers (browser plugins):

- Wave
- Axe
- Lighthouse

We have developed an automated accessibility test framework, thus making the testing at this stage as efficient as possible.

### Stage 2 -- Manual checklist

To widen our testing coverage, a manual checklist has been developed to check each WCAG guideline in turn. It includes checks on screen orientation and keyboard navigation through to error handling and use of colour in services. We also manually check accessibility patterns and focus areas where we know issues may arise.

We use the manual checklist to test our web applications as well as data products such as dashboards and data publications.

It is noted that the manual checklist takes time to complete. Its coverage and its suitability are regularly reviewed, and appropriate updates are made to ensure it is fit for purpose. The review includes an efficiency review to check we have identified improvements that can be implemented.

### Stage 3 -- Assistive technologies

The accessibility of a service is more than just complying to the legal guidelines. We also ensure our users can use the service with little or no barriers. Some users may use assistive technology to access NHSBSA services. Our testing therefore must include checks using assistive technologies to ensure our services are operable and robust for all users.

The NHSBSA accessibility test framework includes the following assistive technologies:

Screen Readers

- Voice Over on Mac OS X
- NVDA on Windows
- JAWS

Speech Recognition

- Voice Control on Mac OS X
- Dragon on Windows

Screen Magnifiers

- Windows Magnifier
- Apple Zoom

Also:

- Adobe Acrobat Pro -- PDF checker

### Accessibility test report

Once all three accessibility test stages are complete, a comprehensive Accessibility Test Report is produced outlining the issues that have been found during testing.

All issues (defects) will be assessed. The aim will be to fix as many of the issues as possible, particularly the high priority issues, prior to the service going into Production. If there are any issues the Accessibility Test Report must be stored within the service's document management system as it will be checked should the service be audited by GDS.

### Accessibility statement

Each public sector user facing service must by law have an accurate and up to date Accessibility Statement.

The Accessibility Statement is created and maintained by the service team responsible for that service. It must reflect the current accessibility of the service so that users are aware of any limitations.

It is a testers responsibility to ensure the following:

- The most up to date NHSBSA Accessibility Statement template has been used.
- All issues outstanding are included in the Statement.
- The issues are written in natural English language and not tool or technical jargon.
- Each issue has a related compliance failure criteria, which references the [latest published WCAG standard](https://www.w3.org/WAI/standards-guidelines/wcag/).
- All outstanding issues are included in a Services backlog.
- All wording is in line with NHSBSA [accessibility statement wording standard](https://nhsbsauk.sharepoint.com/sites/Digital872/SitePages/Accessibility-Statement-Wording-Library.aspx).

The draft Accessibility Statement is reviewed by the service's Test Lead, the service's Content Designer, the NHSBSA Colleague Experience team and the NHSBSA Digital and Online team to ensure the standard has been met. Once approved it is attached to the user facing interface so that all users have access to it.

## API testing

### What is API testing?

APIs (Application Programming Interfaces) are the connections between different systems or between layers within the application. They are sets of rules or protocols that allow different software applications to communicate and exchange data with each other.

At the NHSBSA, our services use public APIs (those that are available on the internet for anyone to use), UK Government APIs (those that are common across UK Government services) and private APIs (those that are used between NHSBSA applications and services)

Any API developed by the NHSBSA must be tested to ensure its business logic and responses to requests are correct. API testing concentrates solely on the API and does not consider the other layers within the solution, i.e. the data layer and the UI layer.

There are many benefits in performing API testing:

- **Early testing**: Once the logic has been built into an API we can test and validate these for correctness in responses and data. This can be a standalone test and does not have to wait for the full service or UI to be built before being tested.
- **Easier to maintain**: With the dynamic nature of UIs and how much they may be altered during their lifetime, standalone API tests are quicker and easier to create and maintain.
- **Faster to execute**: API tests are quicker in execution Functional Integration testing as we are not relying on the UI or database. This means we can test quicker and find issues sooner.
- **More coverage**: Being able to execute tests earlier and quicker means we can increase the test coverage in less or the same amount of time.
- **Faster to fix**: If an API test fails, the cause and origin of the failure can be easily located, making the resolution and retesting of the issue easier and quicker to perform.

### How do we test APIs?

NHSBSA's approved open source tool for API testing is [Karate](https://www.karatelabs.io/).

Karate allows testers to write test scripts using a simple, readable feature file format. Using the Behaviour-Driven Development (BDD) style and the **Given**, **When** and **Then** syntax, Karate allows testers to use simple language and plain text to set variables, to use JSON or XML within features to send and validate data, and to automate the full API test suite.

API tests should consider all business rules, and both positive and negative tests. The [API Test Standard Framework](https://gitlab.com/nhsbsa/ddat/test-community/api-standard-framework) must be used when building the test suite. Once stable, the API test suite should be placed into the CI/CD pipeline for full automation.

For further information on Karate please visit the [Karate GitHub pages](https://github.com/karatelabs/karate). These contain examples and other guidance on how to create API tests using Karate.

## Compatibility testing

### What is compatibility testing?

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

### How do we test compatibility?

NHSBSA's approved compatibility test platform is [Saucelabs](https://saucelabs.com/). This gives us access to over 2000 device and browser combinations.

Saucelabs allows testers to test different devices and browsers. We test the latest and latest-1 models and versions where possible, keeping in line with [GDS guidance](https://www.gov.uk/service-manual/technology/designing-for-different-browsers-and-devices). Via Saucelabs we have access to both real and virtual devices and can execute both manual and automated tests.

A defined [NHSBSA Compatibility Test Framework](https://nhsbsauk.sharepoint.com/sites/Digital872/SitePages/Compatibility-Testing-framework.aspx) is maintained with details of the current test coverage scope. As this is a dynamic page that is updated at least once a month, the details are not presented here. However, all NHSBSA Testers have access to it via our internal SharePoint pages.

There are two ways to run the compatibility tests, locally from your machine or in a CI/CD pipeline.

### Local execution

This is where the tests are executed from the tester's machine by manually entering an execution command on the command line. All the defined tests are executed through the Cloud-based test environments.

Local execution of tests through the Saucelabs service executes from the same command line statement structure as automation tests, but with some extra capabilities (choice of platform, browser, device etc) added to the command. This allows the tester to define and change the platform, browser or device much easier. It is also better for maintainability and code quality that these are not hard coded into test scripts.

In order to run tests through Saucelabs:

- Internal NHSBSA users need to be connected to Global Protect
- External users need to be connected with AWS VPN

This will allow access via the URL using NHSBSA login credentials.

- All users need to connect via the [Sauce Connect Proxy](https://docs.saucelabs.com/secure-connections/sauce-connect-5/quickstart/)

All tests during development should be run using this method as it can give fast feedback about the tests and the service.

### CI/CD pipeline execution

It is possible to execute tests either by utilising a schedule or a trigger within the CI/DC pipeline.

By setting up a schedule, the tests will run when they are planned to execute in the pipeline utilising both the automation tests and environments when these are quiet. This should be a regular nightly exercise to fully utilise the capability of the pipelines, environments and to aid testers with extra testing capacity.

By using a trigger either manually (via the play triangle icon) for a job or automatically within the trigger, the tests can be run on the latest deployed version of the service in the test environment.

This is useful for regression compatibility testing.

### When should compatibility tests be run?

Compatibility testing should be considered in scope when a release includes significant new functionality, including new or updated screens. Executing the tests as early as possible will provide fast feedback regarding design and development.

Leaving compatibility testing too late in the development lifecycle increases the risk of problems arising which could result in severe rework and issues potentially delaying or cancelling releases.

Once the compatibility tests are in the CI/CD pipeline they can be included in regression testing.

### The compatibility test process

During Compatibility Test execution, testers must ensure all test evidence (screenshots, videos) is extracted and saved within the NHSBSA domain (rather than leaving within Saucelabs), preferably JIRA. All Saucelabs devices are cleared of data used once the test is complete.

The test coverage, results and issues faced during testing must be documented in the Compatibility Test Report.

Please make sure that you close the Saucelabs connect proxy tunnel after the test execution so there is not impact on other testers' activities.

## Performance testing

### What is performance testing?

Performance testing assesses how a service performs under certain conditions. It focuses on key factors like responsiveness, stability, speed, and reliability to ensure the application runs smoothly. It is important because it ensures optimal load times, reduces the risk of crashes, and identifies potential issues with scalability in the amount of data processed, the number of transactions and the number of users. For services built on cloud infrastructure, it will also allow live service owners to monitor performance and deploy auto-scaling attributes to ensure there is little impact to users when a service hits its peak.

The types of performance testing we consider are:

- Load testing -- to validate the system responsiveness under expected peak usage
- Soak testing -- to assess long-term stability under sustained load
- Stress testing -- to determine system limits and graceful failure behaviour
- Spike testing -- to measure resilience against sudden traffic surges

Our technical designs will consider the required performance such that any new or refined technical architecture will be optimised from its conception through to its build. This means that the performance test phase should not be the first time that the performance of a solution is considered.

### Performance test requirements

To conduct comprehensive and informative performance tests we require several inputs into the test planning activities. This includes an agreement from different disciplines that a performance test is required, and the agreed non-functional requirements for the service:

- **An agreement that a performance test is required** - the decision is usually with the technical lead and the business lead and is based on risk. For example, is there a risk in the technical design that the solution cannot accommodate the business requirements. If the risk is not acceptable then there is a requirement to test;
- **An agreed objective to the test** -- for example, are we testing to show a new service can function under the expected volumes of users and transactions, or to prove a new release has no impact on the service's performance, or something more fundamental such as proving that moving from on-prem infrastructure to cloud infrastructure has no impact on the performance;
- **An agreement on the boundaries of the test** -- this is to ensure we understand which interfaces, if any, will be included in the test, whether it will be a full end-to-end test involving the whole user journey or whether it will focus on specific areas of the solution that are considered to be at risk;
- **An agreement on where the test will be conducted** -- this includes which test environment will be used and an understanding of how it compares from an infrastructure and code baseline point of view to the Production environment;
- **An agreed list of business processes and user journeys that will be tested** -- the assumption will be that a risk-based approach will be taken, and testing will focus on the most common and the most complex areas of the solution;
- **An understanding of the Service Level Agreements (SLAs) for the service** -- i.e. the expected
  - availability of the service (in hours, or as a percentage)
  - response times (throughout the solution and its components)
  - number of transactions per second
  - end-to-end user journey times
- **An understanding of the expected volumes that the solution will deal with**, i.e. the expected
  - number of users
  - number of concurrent users
  - size of batches
  - amount of data being processed
- **An agreement on what metrics will be captured** -- this is to ensure the appropriate metrics are captured for analysis after the test

In addition to that, performance testing requires:

- Production-like test data at the volumes agreed to push through the service
- A stable functional baseline on which to test
- Monitoring and logging in place to capture the agreed metrics for analysis
- A test environment dedicated to performance testing for the duration of the performance test

### New performance test framework

Our new Performance Test Framework (PTF) allows us to conduct performance tests on services on AWS Cloud in parallel. This means that if more than one service requires a performance test at any one time, we can accommodate this.

Our test tool of choice is JMeter, an easily available tool which fits into the GDS open-source ethos and is not restricted by paid licensing restrictions.

Work is continuing to enhance the PTF so that we can also test on services on Azure Cloud, and we can create costings models based on usage and cross charge services.

## Data testing

### What is data testing?

Data testing is a critical process that involves verifying the accuracy, completeness, and consistency of data. This includes testing of functional and non-functional aspects of Business Intelligence (BI) solutions, data requests, dataflow processes and data migrations to ensure the reliability and accuracy of data used in various applications.

### Why we do data testing?

Data testing is a crucial process for organisations, particularly in the context of the public sector. It ensures the quality and reliability of data used for analysis, decision-making, and service delivery.

Additionally, Data Testing is important to ensure [GDS](https://gds.blog.gov.uk/), [GDPR](https://www.consilium.europa.eu/en/policies/data-protection/data-protection-regulation/) and [Government](https://www.gov.uk/government/publications/the-government-data-quality-framework) data quality principles are followed -- Fit for purpose, Accessible, Secure, Sustainable and User centred.

### What's included in our data testing framework?

Our Data Testing frameworks focuses on,

#### Functional aspects of data testing

1. **Dashboard/Reports Testing:** Ensures that dashboards display accurate data, business logic validation, up-to-date information and function as expected.
2. **Webpage Testing:** Validates the functionality, usability, integration with the BI reports/dashboards and of webpages.
3. **Permissions Testing:** Verifies that users can access only the data and features relevant to their role and access, ensuring system security.
4. **Data request testing:** Validates that data requests are processed accurately, timely, and with appropriate access controls.
5. **Dataflow testing:** Ensures that dataflows execute correctly, handle errors effectively, and produce accurate, consistent, and timely outputs.
6. **ETL/ELT Data Validation:** Ensures source-to-target reconciliation, correct transformation logic, and end-to-end data integrity.
7. **Data Quality:** Ensures that the data used and generated by the system is accurate, consistent, and relevant.
8. **API Testing:** Checks the functionality, performance, and security of APIs, ensuring they work correctly and efficiently. (Note that the NHSBSA API Testing Framework is followed)

#### Non-functional aspects of data testing

NHSBSA Test Standards and Test Frameworks are followed for Data non-functional testing:

1. **Performance Testing**
2. **Compatibility Testing**
3. **Accessibility Testing**

## User acceptance testing

### What is user acceptance testing?

**The NHSBSA Test Community will support the User Acceptance Test activities, but it is led by the business representatives.**

UAT allows real business users to validate that the delivered solution meets their operational needs. It ensures the product or service is usable, fit for purpose and is ready for production.

During UAT, real end user representatives test the product in a near production environment (Stage) to confirm that:

- Business workflows function as expected
- The solution meets practical business needs
- The user experience aligns with real usage
- Any usability issues or workflow gaps are discovered before deployment into production

**UAT evaluates business correctness, not technical accuracy.**

The NHSBSA Test Community will support the UAT activities, but it must be led by the business representatives.

### User acceptance test ownership

In the NHSBSA UAT is primarily owned by:

- Business Users
- Product Owners
- Business SMEs / Operations
- Stakeholders who use the system day-to-day

Prior to UAT, by following the testing guidance described in this Playbook, the NHSBSA's Test Community will focus on:

- Technical validation
- Functional correctness
- Regression and integration testing
- System stability

The tests they conduct do not represent real-life business workflows, because

- they think from a technical rather than a user perspective
- they validate requirements, not real user behaviour
- they cannot simulate day-to-day domain specific activities

Only business users can confirm whether the system truly meets business needs. Business ownership is essential because it:

- ensures real-world requirements are met
- validates end to end workflows used in daily operations
- reduces the risk of post release issues
- ensures the system delivers real business value

### Summary of UAT responsibilities

Business / UAT Team Responsibilities:

- Create (write) UAT scenarios and test cases
- Execute UAT testing based on real workflows
- Log UAT issues or business-process defects
- Provide final approval/sign-off
- Confirm the system meets user expectations

Development / Test Team Responsibilities:

- Provide a stable UAT environment
- Fix defects raised during UAT
- Retest, including regression test, new code baselines when defect fixes are deployed
- Support test data setup (if required)
- Provide clarifications on system behaviour

## Under development

### Dynamic application security testing

Dynamic Application Security Testing (DAST) is conducted to find security vulnerabilities and weaknesses within a service.

DAST tools inject malicious payloads into running applications to identify potential security flaws (vulnerabilities and weaknesses). DAST tools are especially helpful for detecting input/output validation issues, authentication issues and server configuration mistakes.

It is best to conduct DAST on pre-Production environments so that issues are found early, though the environment and application(s) must be as stable and as close to Production as possible to ensure the test is meaningful.

The NHSBSA's Test community are considering a DAST Framework that can be embedded into a service's CI/CD pipeline with minimal impact and interference, but with maximum value in the wider Secure Development practices.

### Testing AI

Testing AI solutions or services that use an AI component in their user end-to-end journey is becoming more common in the NHSBSA.

The NHSBSA's Test community are considering an AI Test Framework. It will be based on the cross-government AI testing framework:

<https://github.com/Testing-AI-Standards/cross-gov-ai-testing-framework/blob/main/framework.md>

We are also developing a test framework for Robotic Process Automation (RPA) solutions.

### Performance testing for Power BI and data services

Performance testing work is underway to assess the responsiveness and efficiency of Power BI reports using the Performance Analyzer tool. This helps identify slow-running visuals, heavy DAX queries, and rendering dependencies that may impact user experience.

In parallel, exploratory activity has begun to understand how ETL/ELT pipeline performance can be tested consistently, ensuring data processing stages are measured in a meaningful and reproducible way.

For the web applications that host these reports, performance assurance continues to be delivered through the existing NHSBSA Performance Testing Framework, ensuring end-to-end user journeys are validated effectively.

The NHSBSA Test community are evaluating how these reporting and data-layer performance capabilities can be standardised and embedded into wider delivery practices to maximise value with minimal disruption.
