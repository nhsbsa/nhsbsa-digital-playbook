---
layout: article
title: "Entry Criteria"
description: "Entry Criteria are the conditions that must be met before starting a test activity to ensure readiness to begin."
tags: test-standards
order: 6
status: review
---

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

