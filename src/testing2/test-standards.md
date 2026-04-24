---
layout: article
title: "Test standards"
description: "NHSBSA DDaT test standards covering test methods, tools, environments, data, writing tests, entry and exit criteria, documentation and defect management"
tags: test
order: 4
status: DRAFT
---

## Test methods

The NHSBSA Test Frameworks and the NHSBSA Test Strategy describe the test methods that the NHSBSA Test Community should apply to their test activities.

As the test activities evolve, testers may need to consider other test methodologies.

### Test proof of concept (POC)

Prior to any test tool, method or approach being accepted into the NHSBSA Test Playbook, a proof of concept must be conducted and approved by the Professional Lead for Testing. This is to ensure you consider the possible positive and negative outcomes when using the tool.

Outline the remit of the POC you are proposing:

- what are you trying to prove
- what does success look like
- what guardrails are you putting in place to ensure the use of the tool is safe
- what guardrails are you putting in place to ensure the tool is accurate
- what tests are you looking to automate
- what metrics are you collecting and what are you comparing them to
- do you need to IG/IS/Security support to use the tool within the NHSBSA

And share it with your Test Lead for review and guidance.

Once the POC is complete, prepare a report considering all of the points above, emphasising the outcome of the POC and share it with your Test Lead and Professional Lead for Testing.

Remember, not all POCs are successful. However, this should not discourage innovation and continuous improvement.

### Multi factor authentication

To meet security standards, multi factor authentication (MFA) is being mandated across DDaT services. This causes an issue with automation test packs placed in the CI/CD pipeline as MFA requires manual intervention. The NHSBSA Test Community have worked with the NHSBSA DDaT Security Team to develop a way to [work-around this issue](https://bsa2468.atlassian.net/wiki/spaces/SENG/pages/5427003447/TESTING+SERVICES+WITH+MULTI+FACTOR+AUTHENTICATION+draft).

### AI test tools

The NHSBSA Test Community continuously improve our approach to testing. This means new technologies and innovations are considered to ensure we are being as efficient and accurate as possible. Artificial intelligence (AI) test tools are now commonly used across the DDaT private and public sectors. It is therefore important that the NHSBSA look at these tools to see if they would be beneficial to us.

The NHSBSA Test Guilds are considering different tools as they come on the market. The current list can be found [here](https://bsa2468.atlassian.net/wiki/spaces/SENG/pages/5333647573/USING+AI+IN+TESTING+draft?atlOrigin=eyJpIjoiZGZkZTIxOTVjMzYxNDc4MDkzYTZjZWNlMjIxMzk2NmEiLCJwIjoiYyJ9). When considering new tools, the Test Guilds, and other stakeholders, must be aware of the guidance on the use of AI in testing:

- The NHSBSA's [guidance on the use of AI](https://nhsbsauk.sharepoint.com/sites/MyHub-Help/SitePages/NHSBSA-guidance-for-using-generative-artificial-intelligence-in-the-workplace.aspx) in the workplace must be followed. This includes instructions on the use of Microsoft CoPilot
- To make use of GitHub CoPilot, [follow the DDaT SEng guidance](https://bsa2468.atlassian.net/wiki/spaces/KB/pages/4897832992) and access instructions
- Only [NHSBSA licensed versions](https://bsa2468.atlassian.net/wiki/spaces/KB/pages/5227511848) of AI can be used on NHSBSA DDaT services. Open source or free versions of tools cannot be used unless agreed by the Professional Lead

Prior to using any AI test tool, a Proof of Concept (POC) should be completed following the POC process described below.

When using GenAI, be it for test data preparation, test scripting, test execution or test reporting, you **MUST**:

- be clear how you are going to use GenAI and include it in your Test Approach documentation - will it be used to create test data, to scope test scenarios, to write test scripts, to check test results, to write test reports, etc
- not use test data containing Personally Identifiable Information (PII)
- use robust prompts that will provide accurate responses - writing strong and precise prompts is a skill, expect it to be a skill that you have to learn over a period of time before you can confidently rely on your inputs
- not 100% rely on the outputs - whilst AI is extremely powerful, we must continue to think as testers and question the output rather than making the assumption it is correct
- not solely rely on it as your only test tool/companion - you must continue to use other tools at your disposal to ensure we have a well-balanced approach to testing
- be aware of bias and the danger of false positives - this is especially the case if the AI's learning is based on narrow datasets

Ultimately, the tester will remain responsible for the testing they conduct, irrespective of the tools that they use. It is therefore important that the tester remains in control of those testing activities.

## Test tools

The NHSBSA Test Community use various test tools and technologies to conduct their testing.

### Test tool selection

For a tool to be selected into the Test Technology Stack, the following is considered:

- Appropriate functionality -- does the tool do its job
  - all tools are subjected to strict proof of concept (POC) conditions to determine their suitability (see below)
- Skill level -- there should be a minimum level of skill and expertise already within the test community to quickly adopt the tool
- Usability -- test tools should be easy to use, available during core hours and be compatible with the NHSBSA core test frameworks, service infrastructure and code
- Cost -- opensource tools are the preferred choice

### Test technology stack

The test technology stack (or 'test tech stack') is a combination and mix of tools and technologies that the NHSBSA Test Community uses to test our services, applications and products. The test tech stack is supported by the NHSBSA in terms of infrastructure, technology and skills. Whilst different tools and technologies are used across the core test frameworks, they each compliment and add value to our ways of working.

The following sections outline the test tools and technologies used in the NHSBSA, along with the methodologies we follow:

#### Functional acceptance testing

The following tools, methods and technologies are used in functional acceptance testing:

Methodology:

- BDD Cucumber for all our manual and automated test suites, scenarios and cases.

Test Automation:

- Automation using Java and Selenium (Serenity) for our UI and web-based services. This is our long term framework choice.
- Automation using Ruby and Watir for some of our UI and web-based services. This is in our short term plans and will be replaced by the Java / Selenium going forward with any new services.
- An automated regression test pack should be placed in the CI/CD pipeline.

Integrated Development Environment (IDE)

- Java: Eclipse or the preferred IntelliJ.
- Ruby: VS Code or IntelliJ Ultimate (if approved by the project)

We do not support or promote the usage of the following:

- Selenium IDE: record and playback tools are too instable for our acceptance testing and with flexibility for change in our services these tools would be difficult to maintain.
- Any other programming language binding: due to the NHSBSA tester skillsets and resourcing plans no other language is supported in the test community.
- Ruby Mine: we work predominantly with open-source tools and technologies with very little licensed products used in our testing. As Ruby is on our short term plans then investment in using Ruby Mine is not sustainable.

#### Accessibility testing

The following tools, methods and technologies are used in accessibility testing:

Accessibility Checkers (Phase 1)

- Wave (free open-source Edge, Chrome and Firefox plugin).
- Axe (free open-source Edge, Chrome and Firefox plugin).
- Lighthouse (free open-source Edge, Chrome and Firefox plugin).

Manual Checklist (Phase 2)

- NHSBSA Accessibility Test Manual Checklist. Note that this is currently under review whilst the Test Community seek options to automate these tests and/or reduce the scope (but not quality).

Assistive Technologies (Phase 3)

- Screen Readers: Mac based Voice Over (free pre-installed on macOS and iOS), JAWS (licensed, please contact Test Lead) and Windows based NVDA (free open source).
- Speech Recognition: Mac based Voice Control (free pre-installed on macOS and iOS) and Windows based Dragon (licensed, please contact Test Lead).

We do not support or promote the usage of the following:

- Any other automated checkers, the tools above have been chosen due to their accuracy, support and fit.
- Any other screen reader or speech recognition tool. There are many different versions of these tools, but these have been recommended by DAC and are part of the GDS test coverage. Using other versions may also affect our coverage and quality of this testing.

[GDS Guidance](https://www.gov.uk/service-manual/technology/testing-with-assistive-technologies):

Where possible, GDS say it is good practice to test with other assistive technologies, browsers and OS settings. NHSBSA Testers should speak to User Researchers or request analytics data to understand what the service's userbase may use.

GDS recommend prioritising:

- older versions of assistive technology - especially JAWS and TalkBack
- other assistive technologies - especially VoiceOver on macOS (screen reader) with Safari and ZoomText (screen magnifier)
- changing colours - using Windows High Contrast mode and Firefox browser settings
- testing with other combinations of browsers and assistive technologies

Other combinations of browsers and assistive technologies to prioritise are:

- Firefox (latest version) and JAWS
- Firefox (latest version) and NVDA
- Firefox (latest version) and Dragon

#### API testing

The following tools, methods and technologies are used in API testing:

Methodology:

- BDD for all our API test suites, scenarios and cases.

Test Automation:

- Automation using the free opensource Karate tool (see the [Karate website](https://github.com/karatelabs/karate)).

We do not support or promote the usage of any other tool for API testing.

#### Compatibility testing

The following tools, methods and technologies are used in compatibility testing:

Methodology:

- Compatibility testing follows [UK Government guidelines](https://www.gov.uk/service-manual/technology/designing-for-different-browsers-and-devices).
- Testing is executed across different combinations of browsers, devices and operating systems.

Test Tool:

- Saucelabs for access to different versions of virtual and real devices with a combination of browsers and operating systems.
- All compatibility testing must use the NHSBSA Saucelabs service and account (speak to Test Lead). No other service or account should be used as this would violate security and IG rules.

Test Automation:

- We execute Selenium user journey tests through the Saucelabs service on the relevant browser, device and operating system combination.
- An automated regression test pack should be placed in the CI/CD pipeline where possible.

Manual Testing:

- When automation is not possible (for example where Saucelabs does not provide a necessary browser/device/operating system combination) manual testing feature must be used instead. This will require manually 'forcing' the combination in Saucelabs.

We do not support or promote the usage of any other tool for compatibility testing.

#### Performance testing

The following tools, methods and technologies are used in performance testing:

Platform:

- The new Performance Test Framework should be used to conduct performance testing.
- This platform allows testing in parallel across more than one service or application at a time.
- The platform currently tests services on AWS Cloud. We are currently looking at using it across services on Azure Cloud and services that may use both AWS and Azure cloud technology.

Test Tool:

- JMeter -- the NHSBSA JMeter instance on the Performance Test Framework (AWS Cloud) must be used

We do not support or promote the usage of the following:

- Any other JMeter instance or framework.
- Any other performance test tool.

#### Data testing

The following tools, methods and technologies are used in data testing:

Methodology:

- BDD for all our data processing test suites, scenarios and cases.
- Where appropriate, the other core test frameworks are used when testing data processing services and products (for example, accessibility testing when data is being presented in a UI).
- Testing should consider the full end-to-end data process, from ingestion to transformation to presentation.

Test Tool:

- We are currently implementing PyTest BDD.

We do not support or promote the usage of any other tool for data testing unless it is on a legacy solution.

## Test environments

### Route to live

NHSBSA follow a strict route-to-live policy to ensure a stable and robust SDLC. The NHSBSA Test Strategy refers to our route-to-live principle that must be followed along with the guidelines on the types of testing that should be conducted in each test environment.

### Test environments

Our different test environments and their usage and features are described below.

| Environment | Test Type | Features / Notes | Owner | Mandatory / Optional |
|---|---|---|---|---|
| BUILD | Unit Test, Integration Test ("integration in the small") | There may be more than one Dev environment - per developer and/or per squad. A branching strategy MUST be in place | Developers | Mandatory |
| TEST | Functional Acceptance Test (incl. Build Acceptance Test), API Test, Compatibility Test, Accessibility Test | There must only be one primary Test environment. The code and config baseline must be known and well documented. In some cases, a delivery team may consider multiple or ephemeral Test environments for testing code / features / infrastructure isolated from primary TEST or INT. In ALL cases: a risk assessment must be considered, and the code must be deployed into the primary TEST environment for a full test on the correct code baseline. | Testers | Mandatory |
| INT (Integration) | Integration Test ("integration in the large"), End-to-End Test | For some services, integration testing with other NHSBSA services or 3rd party services is required. Here the technical integration is tested along with the end-to-end flow of the user journeys. The code and config baseline must be known | Testers | Optional |
| PERF (Performance) | Performance Test | For some services, a performance test is required. Not all services will spin up a separate Performance Test environment. The code and config baseline must be known | Testers | Optional |
| STG (Stage) | User Acceptance Test (UAT) | The baseline here should be the final baseline candidate that is to go live | Business / Product Owners | Mandatory |
| PROD (Production) | Smoke Test | Testing in Production should be limited to a small smoke test to ensure a release has been deployed correctly. Any test data created during the test must be removed prior to live activities | Live Services | Optional |

## Test data

Test data is the set of input values and conditions used to test an application's functionality, performance, and reliability, including normal, boundary, invalid, stress, and edge cases to validate features and uncover defects.

Test data should be designed to meet the test conditions. Where possible test data should be dynamic, in that it is discreet and independent from all other test data. This ensures that test scripts can be executed in parallel.

When considering test data, the general rule of thumb is to use synthetic data in early test phases so that all paths and edge cases can be covered. As the solution and the testing matures through the test phases, production-like data should be used to make the test scenarios as realistic as possible.

| Test Phase | Test Data | Notes |
|---|---|---|
| Unit Test (including "integration in the small") | Synthetic | Created to trigger the code under test. Boundaries and edge cases should be considered |
| Functional Acceptance Test (incl. Build Acceptance Test), API Test, Compatibility Test, Accessibility Test, Integration Test ("integration in the large") | Synthetic | Created to cover all test scenarios (use cases). Both positive and negative scenarios should be considered. |
| User Acceptance Testing | Production-like | Realistic data that compares to that in Prod |
| Performance Testing | Volume production-like | Large volume of data (live-like volumes) to support robust performance testing |
| Smoke Test (in Prod) | Synthetic / Production | Some Production data may have to be used to complete the test scenario. However synthetic data should be used for the actual test, and then removed before a release is Live |

### Synthetic test data

Synthetic test data should be created to fit the test and the features under test. In some cases, the test data is created during the test execution via the UI. However, some test data may need to reside in the database prior to the start of the test so that the test scenario can be executed successfully. A Service's data specification should be considered when creating synthetic data, as should the [NHSBSA's Data Standards](https://nhsbsauk.sharepoint.com/:w:/s/InsightTeam-BusinessDevelopmentandQuality/EajKOiVomZdFvIAxXL00HsgBi4alMcI5GY408nhKyJ7PaA?e=CI6NDG&clickparams=eyJBcHBOYW1lIjoiVGVhbXMtRGVza3RvcCIsIkFwcFZlcnNpb24iOiI1MC8yNDEyMDEwMDIxMSJ9).

### Production-like test data

Where possible and appropriate, production-like test data should also be synthetic. It should be a sophisticated and realistic match to the data residing in Production.

It is recognised that the best source of production-like test data is Production data itself. However, much of our data contains Personal Data, i.e. any data or information relating to an identified or identifiable natural person ('data subject') [*UKGDPR Article 4(1)*]. To avoid inappropriate exposure of Personal Data there are strict laws and guidelines regarding Production data residing in pre-Production (Test) environments [see [UK General Data Protection Regulations (UK GDPR)](https://www.legislation.gov.uk/eur/2016/679/contents) and the [Data Protection Act 2018](https://www.legislation.gov.uk/ukpga/2018/12/contents/enacted)].

To ensure NHSBSA are meeting those laws and guidelines, any request to use Production data in a pre-Production environment needs to consider a series of questions created by NHSBSA DDaT Information Governance (IG) and Information Security (IS). The Service team needs to send responses to these questions, along with a full explanation of why the Production data is required, to [igqueries@nhsbsa.nhs.uk](mailto:IGQueries@nhsbsa.nhs.uk)

If the use of Production data is granted, services must revisit their application **every 12 months** and get it approved again. If the service no longer requires the use of Production data then all databases and data stores must be fully cleared down and IG/IS advised.

### Collecting test evidence and defect information

If the use of Production data in pre-Production environment(s) has been granted by IG and IS, **DO NOT** upload test evidence and defect evidence to Jira or any application. This is to avoid Personal Data being held in places accessible to others. Please discuss with the IG Specialist where best to store this type of data.

### Removing test data after testing

A common issue that arises is the maintenance of test data in pre-Production databases. Redundant test data increases storage and maintenance overheads. It also puts future test execution at risk of duplicate test data is written to the database.

To avoid this, a Service team must regularly remove stale or unnecessary test data. This can be achieved by writing data cleansing scripts and executing them against the pre-Production databases so testing can commence in a clean state.

Additionally, the [NHSBSA Data Standards](https://nhsbsauk.sharepoint.com/:w:/s/InsightTeam-BusinessDevelopmentandQuality/EajKOiVomZdFvIAxXL00HsgBi4alMcI5GY408nhKyJ7PaA?e=CI6NDG&clickparams=eyJBcHBOYW1lIjoiVGVhbXMtRGVza3RvcCIsIkFwcFZlcnNpb24iOiI1MC8yNDEyMDEwMDIxMSJ9) outlines guidance on how to use synthetic data in Production during a Smoke Test, and guidelines on what needs to be done after a Smoke Test (see Chapter 8).

## Writing tests

The NHSBSA's approach to testing includes several principles as described in the NHSBSA Test Strategy. When writing tests there must be a particular emphasis throughout the process on ensuring traceability. The test principles described in the Test Strategy must be considered, namely:

- Risk based testing
- User centric testing
- Behaviour driven development
- Automate smartly
- Route to live
- Shift left
- Independence

### Test design

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

### Test scripting

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

### Manual testing

Through our Automate Smartly approach, we recognise that it is not always possible or appropriate to automate a test. Manual testing is therefore part of our test frameworks.

We manually test in the same format as our automation testing but without the code to drive the tests.

- All manual test scripts, scenarios and cases must be written in user centric BDD to validate user story acceptance criteria.
- All manual test scenarios and cases must be built in feature files.
- All test scripts must be uploaded (at least) daily into the relevant Git test repository and named following the [NHSBSA test standard on naming conventions](https://bsa2468.atlassian.net/wiki/spaces/CoP/pages/1602125992/Naming+Conventions).
- Valid manual tests must be earmarked for the regression test pack so that they can be automated as soon as possible.
- All manual test results must be captured in the relevant Test Report.
- All test material must be uploaded onto the shared and supported platforms -- Git, Jira, Confluence. No test materials (scripts, results, reports) should be kept on local machines.
- Testers should avoid manual regression tests and make every effort to ensure the regression test pack is fully automated.

### Automation testing

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

### Test automation process

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

## Entry criteria

ISTQB (basing its content on ISO/IEC 29119) defines entry criteria as the conditions that must be met before starting a test activity to ensure readiness to begin.

In the context of testing within NHSBSA, these criteria must be considered prior to starting any test phase.

The NHSBSA's Entry Criteria are:

- The service's Definition of Ready has been met, including but not limited to
  - All user stories and acceptance criteria are well defined and agreed
  - All dependencies are understood and documented
  - Estimated effort has been discussed and agreed (using the 3 Amigo model)
  - The technical feasibility of each ticket is understood
  - The user experience and impact of each ticket has been considered
  - Performance related requirements have been identified
  - Security related requirements, including privacy considerations, have been identified
  - The Product Owner has agreed to the scope of the release, change or defect fix
- The scope of testing has been agreed via a well-defined Test Approach
- All relevant code has been merged and placed into a build
- The test environment (Test, Int, Perf or Stage) is ready
- The test data requirements have been met and the test data is available
- The necessary test tools are available
- The test scripts have been written and are stored in the Git repository
- Any interfaces (or test stubs/harnesses) are available
- Appropriately skilled testers are available to conduct the testing
- [In the case of Performance Testing] The build has been proven to be functionally sound through a series of functional acceptance tests

A service delivery team may add other criteria to ensure there is sufficient governance around their release.

## Exit criteria

ISTQB defines exit criteria as the set of generic and specific conditions agreed with stakeholders, that all the test process to be officially completed and used to report against and plan when to stop testing. In ISO/IEC 29119, this is referred to as the Test Completion Criteria.

In the context of testing within NHSBSA, these criteria must be considered prior to completing any test phase.

The NHSBSA's Exit Criteria are:

- The service's Definition of Done has been met, including but not limited to
  - All acceptance criteria have been built and tested
  - There are no blocker or critical errors from static analysis (SonarQube output)
  - The code has been peer reviewed and unit tested with 80% coverage
  - The implementation matches the agreed design and has been agreed by the Product Owner
  - The code is properly merged into a build ready for release

- All test phases, including the core test frameworks, identified in the Test Approach are complete. This means
  - All in-scope tests have been executed at least once in the TEST environment
  - Where an in-scope test has not been executed, a full explanation for this has been documented in the Test Completion Report
  - All in-scope tests have passed on the latest build that is marked ready for release
  - Where an in-scope test has not been executed on the latest build, or is still marked as failed, a full explanation for this has been documented in the Test Completion Report along with mapping to associated defects
  - All defects found during the test activities are documented as per the Defect Management standard (see below)
  - All outstanding defects include their severity (priority), user impact and expected fix date are documented in the Test Completion Report along with their associated risk
  - There are no outstanding Priority 1 or 2 defects

- All test scripts and packs are baselined and uploaded into the appropriate Git repository
- The quality of the release is understood through an understanding of the Test Completion Report
- The Test Completion Report(s) have been reviewed and signed off by the Product Owner, Technical Lead, Delivery Manager and Test Lead -- this includes the residual risk from outstanding tests and/or defects

The exit criteria should be considered at the end of each test phase (test type) prior to stating the next phase. However, this is not always practical especially when building services iteratively. For example, it is sometimes better to start the Integration Test of two components that have been through their Functional Acceptance Test before the Functional Acceptance Test on other components is complete. If a service wishes to take this approach, they should identify critical criteria that must be met before starting the Integration Test between the components. This must be fully documented and agreed by all stakeholders including the Test Lead.

Sign off by the Test team should be given prior to User Acceptance Testing, and again prior to deployment into Production.

## Test documents

Test activities from planning through to execution and reporting must be fully documented. This is not only to provide an audit trail of what testing has happened but also to provide the metrics required to show how successful the testing has been.

### Test approach

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

### Test plan

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

### Test scripts

All test scripts must take the format described in the Writing Tests standard, and must be stored in a Git repository, clearly marked specific to the service under test. They must not be stored locally.

Test scripting must consider positive and negative scenarios, edge cases and boundary analysis. There must be a link to the appropriate epics/user stories/acceptance criteria.

All test scripts should be scanned in the automation repository by SonarQube and have no blocker or high severity issues.

### Test coverage report

A key indicator of a robust test approach is the test coverage. The NHSBSA Test Community aim for 100% coverage of all in-scope epics and user stories (functional and non-functional features) through the different core test frameworks.

JIRA tickets are the easiest way to demonstrate coverage of testing across the core test frameworks (and beyond, where necessary). The NHSBSA DDaT Test Community are currently designing a standard in which all services can demonstrate the coverage of their tests using JIRA as a tool. This will become the standard to produce a Test Coverage Report. Until this is complete, services must validate test coverage through any means at their disposal -- this may be by using JIRA, Confluence, Excel or some other tool. The test coverage should be signed off by the Test Lead, the Product Owner and the Technical Lead.

Where there are gaps in coverage, a risk analysis must be conducted so that all stakeholders can agree whether the gap is acceptable or not.

### Test completion report

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

## Defect management

A defect, sometimes referred to as a bug or fault, is described by ISTQB as a flaw in a component or system that can cause the component or system to fail to perform its required function, e.g., an incorrect statement or data definition. A defect, if encountered during execution, may cause a failure of the component or system.

All defects must be logged and prioritised in JIRA. Testers should work collaboratively with the Developer and the Product Owner to discuss the defect. This ensures that the defect is in fact a defect within the solution, rather than a flaw in the test. It also ensures an appropriate priority is assigned to that defect.

### Defect management process

All defects raised in the NHSBSA should follow the same defect management process.

When raising a defect, a tester must follow these guidelines:

- All formally raised defects within the NHSBSA must be raised in JIRA along with the defect evidence (screenshots, logs, database extracts, etc)
- All defects are owned by the Tester and cannot be closed without the Tester's or Test Lead's agreement
- In JIRA, a defect should be linked to an associated test script, user story(s) and acceptance criteria (note that this may result in a many-to-many relationship)
- The defect must go through the triage process which must follow a 3 amigos model - test/developer/product owner or similar
- Each defect is assigned a defect severity (a description of each severity is below):
  - Priority 1 / High
  - Priority 2 / Medium
  - Priority 3 / Low
  - Priority 4 / Cosmetic
- The description of the defect must be clear, in plain English, so they can be understood by all stakeholders
- Testers must endeavour to promote defect resolution within sprint planning sessions; this ensures quality remains at the forefront of all planned development
- The defect should only be closed once the agreed acceptance criteria has been met; this usually requires a retest and possibly a regression test
- A record of a defect raised with a third party must also be kept in JIRA

Note that the classification of accessibility test defects follows a lower-level policy and use a RAG (red, amber, green) alert system. This is described in the [Accessibility Test Report](https://nhsbsauk.sharepoint.com/sites/digital-accessibility/Shared%20Documents/Forms/Visitor.aspx) template.

### Defect severity classification

The following defect severity classification must be adhered to when raising a defect:

#### Priority 1 / High level

These are defects that include:

- A workaround would require significant additional user effort.
- Impacts many users and crucial user goals.
- Some loss of revenue and / or loss or reputation because of multiple users and / or customers experience the outage.
- A workaround and/or fix should be prioritised

The inclusion of high severity defects in releases must not be released without valid justification and risk(s) approved by Product Owner, Technical Lead or Delivery Manager. Justification is usually only approved if the Priority 1/High Level issue lies with a 3rd party, and NHSBSA are confident their own service is fit for purpose.

#### Priority 2 / Medium level

These are defects that include:

- A workaround would require moderate additional user effort.
- Impacts a moderate number of users and no crucial user goals.
- It is possible to fix at a future point without impacting users or operations.
- Is needed prior to business acceptance.

The inclusion of 3 or more medium severity defects in releases must not be released without valid justification and risk(s) approved by Product Owner or Delivery Manager.

#### Priority 3 / Low level

These are defects that include:

- A workaround would require very low additional user effort.
- Minor operational and user impact and no user goals are affected.
- Does not cause serious confusion to the user.
- Is not needed prior to business acceptance.

Low level defects do not need approval for release, but every effort should be made to resolve all defects before release.

#### Priority 4 / Cosmetic

These are defects that include:

- Cosmetic observations with little impact to the user.
- Does not cause serious confusion to the user -- note that this is particularly important in relation to accessibility and there must be no accessibility impact associated with the cosmetic defect
- Is not needed prior to business acceptance.

Cosmetic defects do not need approval for release, but every effort should be made to resolve all defects before release.

#### Defect data capture

The defect management process provides data to assess the stability of the service. It allows stakeholders, including testers, to understand where the higher risk areas of the service reside. This enables better planning of future testing. For instance, if many defects were found recently in a particular feature that is about to go through a change, the risk will be considered high and there must be a higher focus on testing that feature.

## Release assurance

### Test sign off

Once all test activities are complete, and the exit criteria has been met, the Test team should ensure that all test observations (including open defects) and test limitations are well documented, so the relevant stakeholders understand the outcome of the test.

The preferred method of doing this is:

- Ensuring all outstanding defects remain open in JIRA and are added to the backlog
- Ensuring all outstanding items have an associated risk which has been shared with the Business (usually the Product Owner)
- Meeting with the business (usually the Product Owner), technical lead and delivery manager, and if appropriate a live service representative, to go through the Test Completion Report, highlighting the risks and limitations that have been identified through the testing activities
- Ensuring the Test Completion Report(s) has been reviewed and approved by relevant parties including the Tech Lead, the Business Lead (usually the Product Owner) and the Delivery Manager

### Request for change

All test limitations must be documented in the Request for Change. This includes:

- planned tests not executed
- outstanding defects found during testing
- constraints in the test environment(s) used
- constraints in the test data used
- constraints in the test tooling used plus other observations during test activities

This is so the service delivery team, ITSM, the live services team and the business can make a fully informed decision on whether a service/release/change should be deployed into Production or not.
