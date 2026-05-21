---
layout: article
title: "Test Environments"
description: "This refers to our route-to-live principle that must be followed along with the guidelines on the types of testing that should be conducted in each test environment."
tags: test-standards
order: 3
status: review
---

### Route-to-Live

NHSBSA follow a strict route-to-live policy to ensure a stable and robust SDLC. The NHSBSA Test Strategy refers to our route-to-live principle that must be followed along with the guidelines on the types of testing that should be conducted in each test environment.

### Test Environments

Our different test environments and their usage and features are described below.

| Environment | Test Type | Features / Notes | Owner | Mandatory / Optional |
|---|---|---|---|---|
| BUILD | Unit Test, Integration Test ("integration in the small") | There may be more than one Dev environment - per developer and/or per squad. A branching strategy MUST be in place | Developers | Mandatory |
| TEST | Functional Acceptance Test (incl. Build Acceptance Test), API Test, Compatibility Test, Accessibility Test | There must only be one primary Test environment. The code and config baseline must be known and well documented. In some cases, a delivery team may consider multiple or ephemeral Test environments for testing code / features / infrastructure isolated from primary TEST or INT. In ALL cases: a risk assessment must be considered, and the code must be deployed into the primary TEST environment for a full test on the correct code baseline. | Testers | Mandatory |
| INT (Integration) | Integration Test ("integration in the large"), End-to-End Test | For some services, integration testing with other NHSBSA services or 3rd party services is required. Here the technical integration is tested along with the end-to-end flow of the user journeys. The code and config baseline must be known | Testers | Optional |
| PERF (Performance) | Performance Test | For some services, a performance test is required. Not all services will spin up a separate Performance Test environment. The code and config baseline must be known | Testers | Optional |
| STG (Stage) | User Acceptance Test (UAT) | The baseline here should be the final baseline candidate that is to go live | Business / Product Owners | Mandatory |
| PROD (Production) | Smoke Test | Testing in Production should be limited to a small smoke test to ensure a release has been deployed correctly. Any test data created during the test must be removed prior to live activities | Live Services | Optional |