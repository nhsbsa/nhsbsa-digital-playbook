---
layout: article
title: "Definitions of Done"
description: "Checks we use to assure our work"
tags: test
order: 10
---

## Definitions of Done

Please find below the various definitions of done broken down by framework and test responsibilities.

### Test Definition of Done (Exit criteria)

Before anything can approved by test the following must be completed:

- All definitions of done per core framework have been completed.
- Mandatory frameworks include Accessibility, Acceptance and Compatibility.
- Applicable only to need frameworks include API and Performance.
- Definition of done for documentation has been completed.
- Definition of done for defect management has been completed.
- Definition of done for releases has been completed.

### Release Definition of Done

Before anything can be approved for release from test you must:

- Ensure all planned release work in the core test frameworks (accessibility, acceptance, compatibility, api and performance)is complete and passed all the required definitions of done, framework, documentation and release.
- All documentation is available, up to date and approved before release. All documentation passes our documentation DoD.
- All testing has been executed and verified on dedicated test environments unless an exemption has been agreed with the test leads.
- All accessibility compliance work is accurate, up to date and complete (Testing, documentation and statements).
- All pre and post release testing has been completed or planned to complete. A tester must complete both activities pre and post release unless an approved UAT or business resource has been chosen for this activity.

### Accessibility Definition of Done

Before any accessibility tickets/tasks can be approved for release from test you must:

- Accessibility testing on automated checkers has been completed.
- Accessibility testing on manual check list has been completed.
- Accessibility testing on screen reader check list has been completed.
- Accessibility testing on speech recognition software has been completed.
- All accessibility issues have been logged, managed and closed when a fix has been applied.
- All test metrics and report links have been included in the release reports.
- The accessibility report is fully up to date and shows an accurate reflection of the website / service at release point of time.
- All issues not resolved have been raised as risks and approved by the Delivery Manager or Product Owner.
- The accessibility statement has been updated accordingly, sent for review, approved and published for the time of release. It is a legal obligation to have this accessibility statement accurate and up to date.

## Acceptance Definition of Done

Before any acceptance tickets/tasks can be approved for release from test you must:

- Acceptance tests have been completed and meet acceptance criteria.
- Regression testing must be completed and have no unjustified or risk accepted issues.
- All automation tests are correct, baseline and uploaded into their git repositories.
- These baselined tests have been added to the regression test suites.
- All defects have been raised, managed and closed where applicable.
- All test reports (automation) have been stored in a project based area where these can be accessed.
- All test metrics and report links have been included in the release reports.

### API Definition of Done

Before any accessibility tickets/tasks can be approved for release from test you must:

- API tests have been completed and meet acceptance criteria.
- All API tests are correct, baseline and uploaded into their git repositories.
- These baselined tests have been added to the regression test suites.
- All defects have been raised, managed and closed where applicable.
- All test reports (API automation) have been stored in a project based area where these can be accessed.
- All test metrics and report links have been included in the release reports.

### Compatibility Definition of Done

Before any compatibility tickets/tasks can be approved for release from test you must:

- Compatibility tests have been completed on the full NHSBSA standard coverage.
- Any exemptions to the above has been raised with the project and test lead. A linked risk has been added to the release report to cover such exemptions.
- All defects have been raised, managed and closed where applicable.
- All test results have been updated in the compatibility report and this shows an accurate reflection of the website / service at release point of time
- The compatibility report has been stored in a project based area where these can be accessed.
- All test metrics and report links have been included in the release reports.

### Documentation Definition of Done

Before any documentation tickets/tasks can be approved for release from test you must:

- All documentation for a sprint or release should be updated at the time of testing to avoid any delays. Documentation must not be an end of sprint or release activity otherwise this will cause bottlenecks.
- For every sprint a test completion report should be completed. This will help to reduce time and effort for releases as this information will already be available for use. This is at the discretion of the tester to decide if they want to produce these sprint reports.
- Every release must have a release test completion report. A release can not be approved or signed off from test without a signed off release report. This is for audit and traceability purposes.
- Each release report has to be accurate and only contain the material (stories, acceptance criteria) that is involved in the release. Regression tests are an exemption and must be included.
- Each release report must link to the relevant, accurate and up to date automation, accessibility, compatibility and performance test completion reports.
- Each release report must be peer reviewed and approved by another tester preferably on the same project or in the same test community.
- Each release report must then be sent for approval by the delivery manager or product owner.
- All release reports must be stored in a project based area where these can be accessed.
- Upon release the tester must add their release and link to the release report in the Digital release log.

Release Report specific:

- All test metrics and report links have been included in the release reports where applicable.
- All risks or exemptions found in release testing must be included in the release report risk section, fully justified and approved by Delivery Managers, Product Owners or Test Leads.
- All defects and their traceability must be reported in the release reports.
- The release reports must have clear traceability on the following:
    - User Stories in scope > metrics or reports for the tests executed.
    - Defects and where they are found by origin > defect retest metrics > defect table/log.
    - Unresolved High or over 3 medium severity defects > defect origin > defect table > approved and signed off risk.
    - Clear traceability to accessibility testing > in scope > accessibility reports
    - Clear traceability to compatibility testing > in scope > compatibility reports
    - All defects from accessibility & compatibility testing from reports > defect table > risk table if applicable.

### Performance Definition of Done

Before any performance tickets/tasks can be approved for release from test you must:

- Performance tests have been completed and meet acceptance criteria.
- All performance tests are correct, baseline and uploaded into their git repositories.
- All defects have been raised, managed and closed where applicable.
- All test reports (performance) have been stored in a project based area where these can be accessed.
- All test metrics and report links have been included in the release reports where applicable.

### Defect Management Definitions

### Defect Definition of Ready

Before any defect is raised please ensure defect triage has been completed and the defect has been verified as an actual defect and to be formally raised.

When raising a defect the following must be included:

- Title (clear and concise) with appropriate ID to the project (e.g. LIS, PENS).
- Description of defect.
- Severity of defect.
- Build / platform including any version numbers.
- Steps to reproduce.
- Expected results.
- Actual results.
- Supporting evidence (screenshots and/or videos)

### Defect Definition of Done

Defects must be raised and managed through the defect management process flow to completion stage.

Defect Management flow:

- To be able to close a defect the following must be completed:

    - The defect has been retested and meets acceptance criteria.

    - All regression testing around this defect area has passed.

    - Accessibility testing coverage around this defect has passed.

    - All defect information has been included in sprint and release reports.

    - The defect(s) in Jira has been closed.

    - The defect information in the sprint and release reports is correct and accurate (defect origin, retest metrics and any associated risks if not fixed).

    - If any defects remain open and unfixed particularly in the accessibility area then these must have full justifications and plans to resolve.