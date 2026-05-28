---
layout: article
title: "Test Data"
description: "Test data is the set of input values and conditions used to test an application's functionality, performance, and reliability."
tags: test-standards
order: 4
---

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

### Synthetic Test Data

Synthetic test data should be created to fit the test and the features under test. In some cases, the test data is created during the test execution via the UI. However, some test data may need to reside in the database prior to the start of the test so that the test scenario can be executed successfully. A Service's data specification should be considered when creating synthetic data, as should the [NHSBSA's Data Standards](https://nhsbsauk.sharepoint.com/:w:/s/InsightTeam-BusinessDevelopmentandQuality/EajKOiVomZdFvIAxXL00HsgBi4alMcI5GY408nhKyJ7PaA?e=CI6NDG&clickparams=eyJBcHBOYW1lIjoiVGVhbXMtRGVza3RvcCIsIkFwcFZlcnNpb24iOiI1MC8yNDEyMDEwMDIxMSJ9).

### Production-like Test Data

Where possible and appropriate, production-like test data should also be synthetic. It should be a sophisticated and realistic match to the data residing in Production.

It is recognised that the best source of production-like test data is Production data itself. However, much of our data contains Personal Data, i.e. any data or information relating to an identified or identifiable natural person ('data subject') [*UKGDPR Article 4(1)*]. To avoid inappropriate exposure of Personal Data there are strict laws and guidelines regarding Production data residing in pre-Production (Test) environments [see [UK General Data Protection Regulations (UK GDPR)](https://www.legislation.gov.uk/eur/2016/679/contents) and the [Data Protection Act 2018](https://www.legislation.gov.uk/ukpga/2018/12/contents/enacted)].

To ensure NHSBSA are meeting those laws and guidelines, any request to use Production data in a pre-Production environment needs to consider a series of questions created by NHSBSA DDaT Information Governance (IG) and Information Security (IS). The Service team needs to send responses to these questions, along with a full explanation of why the Production data is required, to [igqueries@nhsbsa.nhs.uk](mailto:IGQueries@nhsbsa.nhs.uk)

If the use of Production data is granted, services must revisit their application **every 12 months** and get it approved again. If the service no longer requires the use of Production data then all databases and data stores must be fully cleared down and IG/IS advised.

### Test Evidence

If the use of Production data in pre-Production environment(s) has been granted by IG and IS, **DO NOT** upload test evidence and defect evidence to Jira or any application. This is to avoid Personal Data being held in places accessible to others. Please discuss with the IG Specialist where best to store this type of data.

### Removing Test Data

A common issue that arises is the maintenance of test data in pre-Production databases. Redundant test data increases storage and maintenance overheads. It also puts future test execution at risk of duplicate test data is written to the database.

To avoid this, a Service team must regularly remove stale or unnecessary test data. This can be achieved by writing data cleansing scripts and executing them against the pre-Production databases so testing can commence in a clean state.

Additionally, the [NHSBSA Data Standards](https://nhsbsauk.sharepoint.com/:w:/s/InsightTeam-BusinessDevelopmentandQuality/EajKOiVomZdFvIAxXL00HsgBi4alMcI5GY408nhKyJ7PaA?e=CI6NDG&clickparams=eyJBcHBOYW1lIjoiVGVhbXMtRGVza3RvcCIsIkFwcFZlcnNpb24iOiI1MC8yNDEyMDEwMDIxMSJ9) outlines guidance on how to use synthetic data in Production during a Smoke Test, and guidelines on what needs to be done after a Smoke Test (see Chapter 8).