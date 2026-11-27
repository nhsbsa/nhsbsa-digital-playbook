---
layout: article
title: "User Acceptance Testing"
description: "User Acceptance Testing allows real business users to validate that the delivered solution meets their operational need."
tags: test-frameworks
order: 7
---

#### What is user acceptance testing?

**The NHSBSA Test Community will support the User Acceptance Test activities, but it is led by the business representatives.**

UAT allows real business users to validate that the delivered solution meets their operational needs. It ensures the product or service is usable, fit for purpose and is ready for production.

During UAT, real end user representatives test the product in a near production environment (Stage) to confirm that:

- Business workflows function as expected
- The solution meets practical business needs
- The user experience aligns with real usage
- Any usability issues or workflow gaps are discovered before deployment into production

**UAT evaluates business correctness, not technical accuracy.**

The NHSBSA Test Community will support the UAT activities, but it must be led by the business representatives.

## User Acceptance Test Ownership

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

## Summary of UAT Responsibilities

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
