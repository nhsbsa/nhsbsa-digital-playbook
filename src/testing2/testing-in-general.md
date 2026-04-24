---
layout: article
title: "Testing in general"
description: "An introduction to testing at the NHSBSA, our approach, core frameworks and test community"
tags: test
order: 1
status: DRAFT
---

The NHSBSA DDaT Test Playbook aims to describe our test strategy, the types of testing we conduct within the NHSBSA, and the standards we follow.

The NHSBSA Test community are a group of test professionals who are dedicated to testing NHSBSA services. Testing is part of the NHSBSA Software Engineering profession and testers work closely with NHSBSA software developers, technical and solution architects, and user experience professionals.

Quality assurance (QA) testing is the process of ensuring that a service is of the highest possible quality for its users. Testing uses different tools, techniques, and frameworks to identify issues within the service and ensures a great user experience for all users once the service is in Production.

Testers (sometimes referred to as QAs) provide assurance through the design, development and execution of tests on new and existing NHSBSA services. Key responsibilities of this role include assuring the quality of the service and to implement a consistent approach to all testing performed. This ensures the quality of the service can be reported before a release or a change to that service is deployed to Production.

In the NHSBSA we currently test in line with six core frameworks:

- Functional Acceptance
- Accessibility
- API
- Compatibility
- Performance
- Data Processing

We are also developing further test frameworks in:

- Dynamic Application Security Testing
- AI Testing (including Robotic Process Automation)

The NHSBSA Test Strategy describes the scenarios in which it is expected that these core frameworks are followed.

All our tests are designed, developed, executed, and maintained to the NHSBSA Test Standards. These standards are outlined in the following pages, with further detail found in the Test Community [Confluence](https://bsa2468.atlassian.net/wiki/spaces/CoP/pages/1706623220/NHSBSA+TEST+STANDARDS) and [SharePoint](https://nhsbsauk.sharepoint.com/sites/Digital872/SitePages/NHSBSA-Test-Standards.aspx) sites.

Our approach to testing NHSBSA services follow international software testing standards, namely [ISO 29119 (2022)](https://www.iso.org/standard/81291.html), and the [UK Government Digital Service (GDS)](https://www.gov.uk/service-manual/service-standard) service manual.

Throughout our testing we follow an "**Automate Smartly**" approach. This means we intend to automate as many tests as possible but only if it is smart to do so. Our Test Teams seek to automate to ensure our testing is repeatable and efficient, though testers recognise that it is not always possible or sensible to automate all tests straight away.

## Unit testing

Prior to any formal testing by the Test Community, the Development Community is responsible for testing the code they write. They conduct two types of testing:

- Unit Testing -- a self-contained test for a unit of functionality (e.g. a Java class or a JavaScript function)
- Integration Testing ("integration in the small") -- a test for a unit of functionality that depends on an interface such as a database or API (using mocks or harnesses)

NHSBSA follow the test pyramid model as described in the ISTQB Foundation syllabus.

The pyramid layers represent groups of tests and display how different test objectives are supported by different levels of testing.

For example, the highest layer:

- the lower the test granularity
- the lower the test isolation (i.e., the degree of dependency on other elements of the system)
- the higher the test execution time

And the lowest layer:

- the smaller the test (i.e. the amount of functionality being tested)
- the higher the test isolation
- the faster the test

The layers in between represent a gradual incline/decline to these two states.

Unit tests fall into the latter category. By their nature, there are short and focussed tests, that are quick to execute and fast to provide results. There are usually many unit tests required to ensure there is sufficient coverage.

More details can be found in the [Development pages](../../development/dev-tests) of the NHSBSA DDaT Playbook.

## Overview of core test frameworks

Further details of the core test frameworks can be found here.

### Functional acceptance testing

Functional acceptance testing deals with the functional testing of user stories to fulfil acceptance criteria. Acceptance criteria are the conditions that software must meet to be accepted by a user.

Testing these conditions includes happy and unhappy paths (i.e. valid and invalid user journeys), field validations and boundary value tests. Consideration should also be made to the interfaces the service may have, ensuring the full user journey is valid.

Testing is both manual and automated, following the 'Automate Smartly' approach. Testers are also encouraged to conduct exploratory tests to investigate early how users may use the solution.

### Accessibility testing

Regulations came into force for public sector bodies on 23 September 2018. These regulations are in conjunction with the Equality Act 2010 and mean that NHSBSA are not only morally but also legally obliged to ensure their services are accessible to all users. Additionally, under Government Digital Services (GDS) standards, all public sector websites and mobile apps must be accessible within four key principles: **perceivable, operable, understandable and robust (POUR)**.

The [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) were developed as a technical standard to meet the regulations. Accessibility testing focusses on whether a service meets each standard within the guidelines. Specifically, under GDS, NHSBSA must meet the WCAG 'AA' standard.

As well as web applications for both internal and external users, NHSBSA create data dashboards and produce data publications which also need to be accessibility tested.

All NHSBSA web applications, dashboards and publications must be tested for accessibility. The results from the tests are reflected in the Accessibility Statement allowing users to understand how accessible the product is.

The NHSBSA Accessibility Test Framework consists of 3 stages:

**Stage 1** - Automated Checkers - these should be used during the development of the product to ensure accessibility is embedded early

**Stage 2** - Manual Checklist - an extensive manual checklist is used to test each product. The checklist considers each of the WCAG guideline items in turn and checks the product meets them

**Stage 3** - Assistive Technologies - a subset of tests is executed using a range of assistive technologies such as screen readers and speech recognition tools to test how the product behaves

### API testing

API (Application Programming Interface) testing aims to determine whether APIs developed within a service meet expectations. Testing concentrates on the business logic within a service, i.e. expected responses to requests in accordance with the rules for when a user interacts with that part of the service. Both happy and unhappy paths (i.e. valid and invalid requests) are tested.

The API tests are automated and help to ensure all API's used by services are fit for purpose.

### Compatibility testing

Compatibility testing ensures our services are compatible with a variety of different browsers, devices and operating systems.

Our services are used by both internal (NHSBSA members of staff) and external users (members of the public). As such we need to show that our services work on different combinations of browsers, devices and operating systems. We follow the [GDS Standard in Compatibility Testing](https://www.gov.uk/service-manual/technology/designing-for-different-browsers-and-devices) to scope the tests that we conduct. [*Note: our scope will be reviewed against the refreshed version of the GDS standards imminently.*]

We use the compatibility testing platform SauceLabs to access both real and virtual devices so that our testing has depth and breadth. We automate our Compatibility tests where possible.

### Performance testing

Performance testing assesses how our services behave under varying levels of user and transaction load, over time, and under stress. The objective is to identify and remove performance bottlenecks and validate the service scalability.

The types of performance testing we consider are:

- Load testing -- to validate the system responsiveness under expected peak usage
- Soak testing -- to assess long-term stability under sustained load
- Stress testing -- to determine system limits and graceful failure behaviour
- Spike testing -- to measure resilience against sudden traffic surges

### Data testing

Data testing, or data processing testing, verifies the processes and mechanisms of administering large sets of data through the data processing pipeline. It ensures data remains intact and accurate from the ingestion of the data, through the transformation of the data, the storing of the data and the presentation of the data. It ensures the quality and reliability of data used for analysis, decision-making and service delivery.

Our emerging Data Testing Framework includes functional and non-functional testing, manual and automated test techniques, and standard best practice approaches.

### Under development

- Dynamic Application Security Testing
- AI Testing (including Robotic Process Automation)
- Power BI Report Performance Testing

Descriptions of these test frameworks will be shared in due course.

## NHSBSA DDaT Test Community

The NHSBSA DDaT Test Community consists of digital, data and technology test professionals ('testers') whose responsibility is to ensure our services, applications and products meet our user needs and quality standards.

Testers within the NHSBSA follow the standards and guidelines in these pages to ensure we are consistent in our approach. Our permanent members of staff have the opportunity to study for the International Software Testing Qualification Board (ISTQB) certification at a foundation level, ensuring there is consistency in all that we do.

We are always looking to improve our approach to testing. The Test Community have several Test Guilds that any member of the community can join to learn and develop their own skills and to implement improvements, and regular Community of Practice meet-ups. Discussions are also welcome with our external partners, other areas of DDaT and other government organisations.
