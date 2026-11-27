---
layout: article
title: "Exit Criteria"
description: "Exit Criteria are the set of generic and specific conditions agreed with stakeholders, that all the test process to be officially completed"
tags: test-standards
order: 7
---

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

