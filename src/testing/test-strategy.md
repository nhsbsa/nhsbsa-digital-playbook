---
layout: article
title: "NHSBSA Test Strategy"
description: "The NHSBSA test strategy defining our principles, approach, methodology and guidance for testing services"
tags: test
order: 2
status: Review
---
## Introduction 
The **NHSBSA Test Strategy** is a high-level outline of our approach, scope, objectives and methods for testing our applications and services. It will

- define the principles we follow during the testing and quality assurance process,
- outline the overall approach and methodology, and
- provide high-level guidance for testing through a series of test standards

The NHSBSA Test Strategy will follow industry best practice and known standards such as ISO 29119: Software and systems engineering -- Software testing. Our DDaT Test Community have trained in the internationally recognised qualification on foundational test knowledge, ISTQB Certified Tester Foundation Level (CTFL) thus ensuring consistency in our approach.

This article will link to other articles within the NHSBSA DDaT Playbook, ensuring consistency across delivery activities within all NHSBSA applications and services.

## Test Objectives

Our test objectives are to

- **Ensure a service meets user and business expectations**\
  Validate that the delivered solution behaves consistently with what users and the business need and expect, providing a reliable and intuitive experience.

- **Confirm the service delivers value and benefits to the user**\
  Assess whether the system meaningfully improves user workflows, solves real problems, and supports the intended business outcomes.

- **Verify the system is robust, accessible, and performs efficiently**\
  Test that the solution is stable under normal and peak load, accessible to all intended users, and capable of delivering fast, reliable performance.

- **Ensure the delivery process is smooth, predictable, and simple**\
  Support a streamlined delivery pipeline by identifying issues as early as possible, enabling efficient handovers, and reducing friction between development, testing, and deployment stages.

- **Promote shared ownership of quality across all roles**\
  Reinforce the principle that quality is a collective responsibility, ensuring that testers, developers, product owners, and all other team members contribute to building and maintaining a high-quality product.

## Test Principles

Our approach to testing and quality assurance follows several guiding principles:

### Risk Based Testing

It is appreciated that not everything can be tested. However, there is a guiding principle that testing and quality assurance should be a means to reduce the risk of something going wrong in Production. Testing in the NHSBSA therefore concentrates on higher risk and most frequently used features to minimise the risk to the users and the organisations concerned. High-risk areas include complex rules and functionality, third party dependencies and areas of a solution that is known to be prone to defects. Most frequently used features are those features used by most users or are most frequently included within the defined user journeys.

Risk based testing also allows Testers to articulate outstanding risks should any testing be incomplete or there be outstanding defects upon a solution going into Production.

### User Centric Testing

Users are at the forefront of everything NHSBSA designs and builds. It is therefore important that testing and quality assurance activities follow suit. Following clear acceptance criteria based on the user stories identified for the solution, our tests are designed and executed to demonstrate that the acceptance criteria have been met. We ensure our tests are adaptable should user needs change. And we demonstrate that our test coverage sufficiently covers the user requirements. We also ensure we have robust regression testing in place to ensure any change introduced to an application or service has not impacted the existing service.

### Behaviour Driven Development (BDD)

Our tests are created in user centric Behaviour-Driven Development (BDD) style as described in the Writing Tests standard, in that our tests are centred around the users and their behavioural needs and requirements. This means our tests are focused from the perspective of the user and not a third person or service.

The approach also helps non-testers to understand the proposed tests as they are written in non-technical, plain-English language which enables all stakeholders to appreciate the test, its scope and its expected outcomes.

Functional Acceptance testing, API testing, Performance testing and Data Processing testing all follow the BDD principles.

### Automate Smartly

Automating tests significantly increases the momentum of the software engineering cycle, helps to catch defects early, ensures testing is consistent and repeatable, and improves software quality through an expansion of test coverage. It means that testers are free to conduct more complex tasks and test analysis and enables frequent regression testing to ensure stable builds are released into Production. The NHSBSA's approach to test automation is to "**Automate Smartly**". We do not automate everything, but our approach is to automate as much as possible as soon as it is appropriate to do so.

Points that are considered when determining an individual service's test automation approach across the core test frameworks are:

Functional Acceptance, API, Compatibility Testing:

- CI/CD pipeline -- automated regression test packs are placed in the CI/CD pipeline where they can be triggered manually or, preferably, be scheduled to be executed on a regular basis. This is daily, overnight, where possible.\
  The execution model follows the **Automation Pipeline template**, ensuring consistency, standardisation, and full CI/CD alignment across all services.

- Multi Factor Authentication (MFA) -- many (most) NHSBSA services require users to use MFA. This poses a problem with placing automated tests in the CI/CD pipeline as MFA requires manual intervention. We have worked with the NHSBSA DDaT Security team to devise a way to avoid this problem, thus allowing us to automate most of the functional acceptance, compatibility and API tests within the CI/CD pipeline. This can be found [here](https://bsa2468.atlassian.net/wiki/spaces/SENG/pages/5427003447/TESTING+SERVICES+WITH+MULTI+FACTOR+AUTHENTICATION+draft).

Accessibility Testing:

- we have applied automation where possible and continue to seek ways to further automate the tests within this framework.

Performance Testing:

- whilst most performance test execution is triggered manually to ensure an element of control; testers will consider if any of the performance tests can be placed in the CI/CD pipeline for regular performance monitoring.

Data Processing Testing:

- data processing testing will consider the full end-to-end journey of the data within NHSBSA, from data ingestion through the data pipeline (including data transformation) all the way through to data publication. Tools to test the end-to-end journey will be implemented so that the full pipeline can be tested through automation.

### Route to Live

NHSBSA follow a strict route-to-live policy to ensure there is a stable Software Development Lifecycle (SDLC). All code must go through Unit Testing in the Development environments prior to being released into the formal test environments. Unit Testing is conducted by Developers and includes two types of testing as a minimum -- self-contained testing of a unit of code and integration testing ("integration in the small") where the interaction with an external resource such as an API or a database is tested. More details on the NHSBSA's approach to Unit Testing can be found [here](../../development/dev-tests/).

Once release candidate has successfully completed Unit Testing, it is promoted to the Test environment for formal testing. A **Build Acceptance Test** should be executed (preferably within the CI/CD pipeline) to check stability of the revised code baseline. This is encouraged for complex pieces of code or significant pieces of functionality. The route-to-live is then

Dev -> Test -> Stage -> Production

For some services an Integration environment will be required to conduct integration testing across modules, components and external interfaces ("integration in the large"), and a separate Performance environment is required for performance testing. The full route-to-live is therefore:

Dev -> Test -> (Int) -> (Performance) -> Stage -> Production

A description of the types of tests that are conducted in each environment is described in the Test Environments section below.

### Shift Left

Our approach to testing is to conduct the most appropriate testing as early as possible. That is not to say that we seek to conduct formal testing in Dev or early iterations of Test. It means that we test as early as possible and as often as possible when it is most appropriate to do so. Automation testing enables this principle.

Testers will not conclude test activities until a stable code baseline is developed and the agreed tests have passed. This means that whilst testing may start early, it may continue for a longer period because the tests are not yet successful. However, the shift-left approach does mean that critical defects will be found, and fixed, earlier in the SDLC.

An example of how a shift left approach has been implemented can be found [here](https://bsa2468.atlassian.net/wiki/spaces/SENG/pages/5768151041/TEST+SHIFT-LEFT+APPROACH).

### Independence

A key principle in NHSBSA's testing strategy is independence. Although developers work to create error-free, quality code, it is not possible to foresee all possible problems whilst an often-complex service is being built. The NHSBSA recognises testing as a profession and a discrete discipline. Introducing independent testing allows services to obtain a more objective and unbiased assessment of the service's quality and how well it has met the requirements.

## Testing Approach and Methodology

### Test Frameworks

As described here, in the NHSBSA we test following six core frameworks:

- Functional Acceptance
- Accessibility
- API
- Compatibility
- Performance
- Data Processing

We are also developing further test frameworks in:

- Dynamic Application Security Testing
- AI Testing (including Robotic Process Automation)

Each core framework describes a distinct test type. The frameworks have been written to provide guidance to testers, the wider service delivery teams and other stakeholders. Not all service releases and/or changes will require all core frameworks to be followed.

Testers select the appropriate test frameworks for the service/release/change under test and will describe the approach in the **Test Approach** document. The scope of testing is agreed with the Test Lead, the Product Owner, the Technical/Solution Architect and the Lead Delivery Manager for the service. If a test framework (test type) is considered out of scope, an explanation of why this is the case is documented in the Test Approach (for example, there are no new UIs or changes to existing UIs so accessibility testing is out of scope).

The table below gives a broad view of when a core framework is in scope. Most new services are required to consider all core frameworks prior to its Beta release. However, it is recognised that most digital or technology services often do not include data processing so that is generally omitted from the scope. Similarly, most data processing solutions will not require functional acceptance testing to be in scope unless an application sits on top of the data processing solution.

Whilst the core frameworks determine a wide and robust test of a service, there may be a requirement to conduct additional testing outside the scope of the core frameworks. If this is the case, the additional test type(s) will be outlined on the service's Test Approach.

| Activity | Functional Acceptance | API | Accessibility | Compatibility | Performance | Data Processing |
|---|:---:|:---:|:---:|:---:|:---:|:---:|
| Functional Application | ✔ | ✔ | ✔ | ✔ | ✔ | |
| User Interface | ✔ | | ✔ | ✔ | ✔ | |
| API interactions | ✔ | ✔ | | | ✔ | |
| Build and/or configuration (DevOps) | ✔ | ✔ | | | ✔ | |
| Infrastructure | | | | | ✔ | |
| Migration to Cloud | ✔ | ✔ | | ✔ | ✔ | ✔ |
| Data Pipeline, including transformation of data | | | | | | ✔ |
| Presentation of data | | | ✔ | | | ✔ |
| Regression | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |

### Regression Testing

ISO 29119 (2022) defines regression testing as "testing performed following modifications to [a service] or to its operational environment, to identify whether failures in unmodified parts of the test item occur".

Regression testing is conducted when any new feature, change or defect fix is introduced. The key goals are to verify stability, to identify unintended side effects and to maintain quality.

Testers will create automated regression packs that can be executed on a recurring basis to ensure new features, changes or defect fixes to existing features have not caused any unchanged features or functionality to fail (or to regress). Where possible, the automated regression test packs are placed in the CI/CD pipeline so they can be scheduled to be executed on a regular basis (preferable daily, overnight).

When regression testing is conducted due to a feature change or defect fix, then the impacted feature must also be thoroughly retested.

### User Acceptance Testing

User Acceptance Testing (UAT) allows real business users to validate that the delivered solution meets their operational needs. It ensures the product or service is usable, fit for purpose and is ready for production.

During UAT, real end user representatives test the product in a near production environment (Stage) to confirm that:

- Business workflows function as expected
- The solution meets practical business needs
- The user experience aligns with real usage
- Any usability issues or workflow gaps are discovered before deployment into production

UAT evaluates business correctness, not technical accuracy.

**The NHSBSA Test Community will support the UAT activities, but it is led by the business representatives.**

## Testing Guidance and Standards

Testing within NHSBSA is defined by a set of guidance and standards as outlined within the NHSBSA DDaT Playbook. This section of the Test Strategy summarises the guidance and standards a delivery team must follow and includes links to the relevant pages within the Playbook or internal collaboration platforms providing further detail.

### Test Tools

NHSBSA have selected several test tools to use across the core test frameworks. These are described further in the Test Tech Stack standard.

The selection of the NHSBSA Test Tool Stack is based on:

- Usability -- test tools should be easy to use, available during core hours and be compatible with the NHSBSA core test frameworks
- Cost -- opensource tools are the preferred choice
- A successful proof-of-concept (POC) -- all tools are subjected to strict POC conditions to determine their suitability

New tools are considered throughout, with the NHSBSA Test Community always seeking to improve ways of working.

For example, through a Test Guild, the NHSBSA Test Community are reviewing AI tooling to determine which AI tools can improve our ways of working.

### Test Environments

All NHSBSA test activities are conducted in pre-Production environments, apart from Smoke Tests that are conducted in Production after major releases and prior to user access. Each pre-Production environment is independent with environment segregation being fundamental to ensure a robust SDLC.

NHSBSA development and test activities follow a strict route-to-live policy to ensure there is control on code baselines, builds and releases until they are fully developed, tested and promoted to Production.

| Environment | Test Type | Owner | Mandatory / Optional |
|---|---|---|---|
| BUILD | Unit Test (including "integration in the small") | Developers | Mandatory |
| TEST | Build Acceptance Test, Functional Acceptance Test, API Test, Compatibility Test, Accessibility Test | Testers | Mandatory |
| INT (Integration) | Build Acceptance Test, Integration Test ("integration in the large"), End-to-End Test | Testers | Optional |
| PERF (Performance) | Build Acceptance Test, Performance Test | Testers | Optional |
| STG (Stage) | Build Acceptance Test, User Acceptance Test (UAT) | Business / Product Owners | Mandatory |
| PROD (Production) | Smoke Test | Live Services | Optional |

#### Ephemeral Environments

Some services may consider the use of ephemeral environments prior to deploying into the Test environment. The benefits and risks of using ephemeral environments will be documented and considered on a service-by-service basis. Considerations will include:

- the number of proposed ephemeral environments
- the altered route-to-live and how the code baseline will be known and managed
- the interdependencies within the solution and whether introducing multiple release paths introduces too much risk

### Test Data

Test data is required to validate application functionality, interfaces and performance under realistic and varied conditions, detect defects early, ensure requirements are met, and provide traceable coverage of test cases and scenarios. It is important that test data is accurate and successfully meets the conditions of the test(s).

When considering test data, our approach is to use synthetic data in early test phases so that all paths and edge cases can be covered, including negative and positive scenarios. As the solution and the testing matures through the test phases, production-like data should be used to make the test scenarios as realistic as possible. The Test Data standard describes this further.

### Test Documentation

It is important to ensure all test activities are documented so that there is a record of the planned and executed tests. The following test documentation will be produced and will following the Test Document standard.

- Test Approach
- Test Plan (which may reside in the Test Approach document)
- Test Scripts
- Test Coverage Report
- Test Completion Report

The Test Document standard describes the expected content for each of these. The way we write tests is described in the Writing Tests standard.

### Defect Management

NHSBSA follow a robust and consistent defect management process. Any disparity between expected and actual results during test execution must be investigated. The NHSBSA Test Community follow the Defect Management standard to ensure defects are captured and resolved as efficiently as possible.

All defects are recorded in JIRA. When a defect is raised, it will be assigned a severity as observed by the Tester. It is then triaged using the 3 Amigo model - Tester/Developer/Product Owner or similar. This may increase or reduce the severity depending on several factors.

The defect then goes through the defect management process to resolution. This may result in a fix to the code, a change to the test script or an amendment to the acceptance criteria. In each of these instances, the failed test script will be re-executed. A regression test will also be considered to minimise the risk of regression.

When all defects are captured and classified correctly, there can be analysis of defect trends. This analysis may result in amendments to overall approach to the testing of the service and will contribute to the continuous improvement of testing that service.

### Entry and Exit criteria

NHSBSA have defined strict criteria that must be met prior to formal testing commencing. Similarly, NHSBSA have defined strict criteria that must be met before formal testing can be declared complete.

The NHSBSA Entry Criteria is described in the Entry Criteria standard and is based on best practice and international standards such as ISO/IEC 29119. The Test team will work collaboratively within the Service Delivery team to achieve the criteria. The Test Lead, the Technical Lead, the Delivery Manager and the Product Owner (plus other stakeholders such as the Development Lead) will meet prior to the start of any test phase to agree if the criteria have been met before formal testing begins. Where any Entry Criteria has not been met, a risk will be logged and must be agreed prior to sign off.

The NHSBSA Exit Criteria is described in the Exit Criteria standard and is based on best practice and international standards such as ISO/IEC 29119. It is sometimes referred to as the Test Completion Criteria. During test execution, the Testers will log the results and collect test metrics (see below) via JIRA. These test metrics will feed into the decision on whether the criteria have been met. The Test Lead, the Technical Lead, the Delivery Manager and the Product Owner (plus other stakeholders such as the Development Lead) will meet to agree if the criteria have been met before agreeing that the testing is complete. Where any Exit Criteria has not been met, a risk will be logged and must be agreed prior to sign off.

### Test Reporting

The NHSBSA Test Community will report on the outcome of the testing activities via a series of test measurements and metrics.

Test measurements and metrics will be captured before, during and after testing. The NHSBSA's tool of choice is JIRA as this enables the testing activities to be linked to the EPIC and User Story tickets which enables progress tracking during a sprint and/or release. It should be noted that JIRA is not a test management tool, but it ensures testing is part of the agile development process.

Test metrics are essential in determining the release's quality. They also help evaluate the effectiveness of the testing activities.

#### Test Metrics

The following test metrics will be captured:

- Test coverage -- allows verification that each ticket has at least one test, and the user stories have been thoroughly tested
- Total number of tests -- within a sprint or a release
- Total number of tests executed
- Total number of tests passed
- Total number of tests failed -- with associated defect(s)
- Total number of tests not run -- with a reason on why a planned test has not been executed
- Total number of defects raised -- during the test phase, including the severity
- Total number of open defects -- including the severity, business impact and planned fix date

The metrics described above will be available at any point during the SDLC. This will allow the Service Delivery team to assess progress.

As the release/change/fix nears its go live date, the metrics will be pulled into a Test Completion Report for formal reporting, as described in the Test Documentation standard. This will allow an informed decision on whether the release/change/fix should be released into Production.

#### Test Analysis

The collection of the test metrics will allow the testers and their Service Delivery teams to analyse the quality of the release, and their SDLC process. Examples of test analysis are:

- Test script effectiveness = (total number of defects detected / total number of test scripts executed) x 100
- Fixed defects percentage = (total number of flaws fixed / total number of defects detected) x 100
- Severity 1 defect percentage = (total number of severity 1 defects raised / total number of defects detected) x 100
- Defects found in feature percentage = (defects found in feature / total number of defects detected) x 100
- Category of defects found percentage = (defects in category / total number of defects detected) x 100
- Defect leakage (into UAT, into Prod) = number of defects detected into UAT (or Prod) -- number of defects that could only be detected in UAT (or Prod)
- Defect leakage percentage = ('defect leakage (into UAT, into Prod)' / total number of defects detected) x 100

*Category* could include requirements, design, environment, data, code, or test gaps.

## Conclusion

This NHSBSA Test Strategy and its associated guidance and standards outlines the approach the NHSBSA follow to testing its DDaT services and applications. Designing, building and delivering quality services is everyone's responsibility, as is ensuring the user requirements have been met. This strategy ensures quality is at the centre of the SDLC, it ensures the user is at the centre of everything the NHSBSA builds and it ensures that issues are found and resolved at the earliest opportunity.

The NHSBSA Test Community are continually evolving and looking for ways to improve. To that end, this test strategy will be revisited on a regular basis and updated accordingly.
