---
layout: article
title: "Defect Management"
description: "All defects raised in the NHSBSA should follow the same defect management process."
tags: test-standards
order: 9
---

A defect, sometimes referred to as a bug or fault, is described by ISTQB as a flaw in a component or system that can cause the component or system to fail to perform its required function, e.g., an incorrect statement or data definition. A defect, if encountered during execution, may cause a failure of the component or system.

All defects must be logged and prioritised in JIRA. Testers should work collaboratively with the Developer and the Product Owner to discuss the defect. This ensures that the defect is in fact a defect within the solution, rather than a flaw in the test. It also ensures an appropriate priority is assigned to that defect.

### Defect Management Process

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

### Defect Severity Classification

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

### Defect Data Capture

The defect management process provides data to assess the stability of the service. It allows stakeholders, including testers, to understand where the higher risk areas of the service reside. This enables better planning of future testing. For instance, if many defects were found recently in a particular feature that is about to go through a change, the risk will be considered high and there must be a higher focus on testing that feature.

