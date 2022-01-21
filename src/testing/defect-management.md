---
layout: article
title: "Defect Management"
description: "How to raise, manage and retest defects in the NHSBSA"
tags: test
order: 10
---

## How, what and when do we raise defects?

All defects regardless of the test framework must be logged in the NHSBSA approved tool, Jira.

The only exemption to the above is if the issue is communicated, discussed and can be fixed quicker than raising the defect in Jira. 

Every defect needs to be assessed. If the defect after consultation with developers is minor and can be fixed quickly then these do not need formally raising. This saves time as the defect raising process can often take longer than the fix.

Please be aware though the above process must not be used as a way of avoiding raising defects.          

If the fix is to be completed later than 1 hour from raising it then a formal defect needs raising to avoid compliancy or forgetfulness.

All formally raised defects within the NHSBSA must be raised in Jira and are owned by the testers on the project.

Testers must own and maintain the defect triage and management process.

Testers must endeavour to promote defect resolution within sprint planning sessions, especially with Accessibility error defects.

## Defect evidence

All automation tests as standard must have screenshot capture incorporated and active on execution.

Screenshots do not need to be stored for successful tests. Successful tests can and will be re-run if the need arises for this evidence.

For unsuccessful and failed tests, screenshots must be kept and stored in the defect in Jira. 

During script development, no current central or cloud solution exists for the storage of this material so these should be stored locally. The management of these screenshots is then at the discretion of the automation tester.

During pipeline execution, screenshots must not be active as the storage for this material is not available in the pipeline infrastructure. 

## Release acceptance

### Acceptance test defects

The following defect severity must be adhered to with acceptance test defects:

#### High level defects

These are defects that include:
- A workaround would require significant additional user effort.
- Impacts a large number of users and crucial user goals.
- Some loss of revenue and / or loss or reputation as a consequence of multiple users and / or customers experience the outage.
- A workaround and/or fix should be prioritised

The inclusion of high severity defects in releases must not be released without valid justification and risk(s) approved by Product Owner or Delivery Manager.

#### Medium level defects

These are defects that include:
- A workaround would require moderate additional user effort.
- Impacts a moderate number of users and no crucial user goals.
- It is possible to fix at a future point without impacting users or operations.
- Is needed prior to business acceptance.

The inclusion of 3 or more medium severity defects in releases must not be released without valid justification and risk(s) approved by Product Owner or Delivery Manager.

#### Low level defects

These are defects that include:
- A workaround would require very low additional user effort.
- Minor operational and user impact and no user goals are affected.
- Does not cause serious confusion to the user.
- Is not needed prior to business acceptance.

Low level defects do not need approval for release but every effort should be made to resolve all defects before release.

### Accessibility defects

These issues must be logged by issue and not screen, tool or stage.

Raising defects by screen, tool or stage will not give a true representation of accessibility compliance.

- Screen affected is an attribute to be included in raised defects to specify affected areas.

- Stage is not needed in defects as this is for framework guidance.

- Tools should be specified in the defect using the below prefixes.


Defects by issue will also allow us to collate metrics and do analysis on common and replicated issues and where they occur.

All defect prefixes should include the tool and defect type:

- WE - Wave error
- WA - Wave alert
- LE - Lighthouse error
- AE - Axe error
- AA - Axe alert
- ME - Manual checklist error
- SR - Screen Reader error
- SREC - Speech Recognition error
- PDF - PDF document error
- WORD - Word document error
- EXCEL - Excel document error
- PP - Powerpoint document error

### Defect classification and release standard

#### High level defects

These include:
- Wave Errors
- Wave Contrast Errors
- Lighthouse mobile test with result under 100
- Lighthouse desktop test with result under 100
- Axe Critical
- Axe Serious
- Any Manual Checklist errors/failures
- Any Screen Reader Checklist errors/failures
- Any Speech Recognition errors/failures

These defects must be fixed before release.

If issues are not fixed then either:

- The release does not occur or

- Valid justifications are given to add into the defects and accessibility report to identify and cover such risks to legal legislation.

- These risks are signed off by the delivery manager or product owner on behalf of the NHSBSA.

- All outstanding issues must be included in accessibility statement.

#### Medium level defects

These include:
- Wave Alerts
- Axe Moderate
- Axe Minor
- Axe Review

Must be raised and a fix planned.

Under project discretion to plan fix into a release. 

These are often issues where a problem has been found but a workaround can help to lessen the impact of the problem. Justification and evidence that this workaround does not negatively affect users must be available.

#### Low level defects

These include:
- Wave Features
- Wave Structural Elements
- Wave HTML & Aria

These should be raised as low level defects and to be addressed by the project before full compliance can be claimed.

The aim of all services has to be fix all accessibility issues. No project can claim full compliance to WCAG 2.1 ‘AA’ standard until all issues High, Medium and Low are fixed or justified.

Please remember: when defects and issues are closed please ensure the project knows to remove these issues from the website’s accessibility statement.