---
layout: article
title: "Release Assurance"
description: "How we assure releases in the NHSBSA"
tags: test
order: 10
---

## What is release assurance and why do we need it?

Release assurance is the process where the quality, accuracy and completeness of proposed solutions or features are:
- fit for live use.
- legally compliant (Accessibility WCAG 2.1 AA).
- meets user needs and satisfies acceptance criteria.
- meets NHSBSA test standards.
- all defeinitions of done have been met.
- release report is complete, reviewed and approved with all associated reports and evidence included or attached.

It is the responsibility of every member of the test community to ensure all the quality assurance testing is complete, accurate and peer reviewed before release.

Only then can a tester sign off or approve a release from testing.

## What are Release Reports and why do we do them?

Release reports are a key part of the assurance process in the NHSBSA software testing lifecycle.
They are important for a number of reasons:

- Without a release report created, peer reviewed and approved no sign off can be given from test.
- Release reports are included as audit required document / evidence of our work.
- Release reports represent all testing performed for a release.
- Release reports document and support a tester’s work and involvement in release work.
- Informs & Updates Test Leads and delivery managers of releases and scope.
- Digital Testing are an impact assessor in the release sign off process. Digital Testing provides an assurance gatekeeper role for quality of releases.
- Release report include and contain approval(s) from major stakeholders involved in release process to cover any risks or issues raised by test. For example, high severity accessibility issues and their potential impact.

To access the release report template please visit the [Test Community documentation confluence webpage](https://bsa2468.atlassian.net/wiki/spaces/CoP/pages/1898905862/Test+Document+Templates)

## What is the release process?

The following explains the release process, the role responsible for the activity is attcahed to each task.

- Creation of all test documentation (Release, Sprint, Accessibility, Performance and Compatibility reports) needed for the release, these are downloaded from the Test community confluence site under the standard documents area. Names and initial details populated. Stories agreed in sprint planning are added to the reports. (Tester responsibility)

- Execution of the following testing is performed and all reports are updated during test build and execution stages. (Tester responsibility)
    - Creating functional tests to satisfy acceptance criteria.
    - Manual and exploratory testing.
    - Build automation tests for functionality.
    - Perform Accessibility testing. 
    - Perform Compatibility testing. 
    - Perform API testing (if required).
    - Perform Performance testing (if required).
    - Perform any other testing types required.
    - All testing definitions of done are complete.

- The testers then get their testing and documentation peer reviewed by a fellow tester. (Tester responsibility)

**Important note**: All reports and code merges must be sent for peer review by a fellow tester.

- Only when two or more testers on the project team agree and are happy with the testing work can a release be approved. (Tester responsibility)

- The release is approved within the NHSBSA service desk tool as digital testing is a stakeholder in the release process.

- These release documents are then shared with the Delivery Manager or Product Owner for visibility for sign off. (Tester responsibility & Delivery Manager/Product Owner interaction)
 
- The Test Lead and Professional Lead will be performing ad hoc checks on release reports and associated material. (Test Lead responsibility)

- If any none compliance is found in the release process then the test leads have the right to remove release privileges.

- **Important task**: An entry must be made by on the Digital Release Log which can be found in the Test Community Confluence webpages, by the testers and the approved release report linked must be provided. 
This must be performed before the release, not after!

- If the release is approved then it proceeds to Live launch.

- If any part is rejected then the task or activities have to be repeated. 
