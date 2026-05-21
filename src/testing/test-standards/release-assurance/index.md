---
layout: article
title: "Release Assurance"
description: "Once testing is signed off, all results, defects, and limitations are documented to support release assurance."
tags: test-standards
order: 10
status: review
---

### Test Sign Off

Once all test activities are complete, and the exit criteria has been met, the Test team should ensure that all test observations (including open defects) and test limitations are well documented, so the relevant stakeholders understand the outcome of the test.

The preferred method of doing this is:

- Ensuring all outstanding defects remain open in JIRA and are added to the backlog
- Ensuring all outstanding items have an associated risk which has been shared with the Business (usually the Product Owner)
- Meeting with the business (usually the Product Owner), technical lead and delivery manager, and if appropriate a live service representative, to go through the Test Completion Report, highlighting the risks and limitations that have been identified through the testing activities
- Ensuring the Test Completion Report(s) has been reviewed and approved by relevant parties including the Tech Lead, the Business Lead (usually the Product Owner) and the Delivery Manager

### Request for Change

All test limitations must be documented in the Request for Change. This includes:

- planned tests not executed
- outstanding defects found during testing
- constraints in the test environment(s) used
- constraints in the test data used
- constraints in the test tooling used plus other observations during test activities

This is so the service delivery team, ITSM, the live services team and the business can make a fully informed decision on whether a service/release/change should be deployed into Production or not.


