---
layout: article
title: "Accessibility Testing"
description: "Accessibility Testing is to ensure the NHSBSA meet the legislation and the standards, and to ensure our services, dashboards and publications can be used by users with accessibility needs"
tags: test-frameworks
order: 2
status: Review
---


Why do we test accessibility?

Regulations came into force for public sector bodies in 2018 - [Public Sector Bodies (Websites and Mobile Applications) (No. 2) Accessibility Regulations 2018](https://www.legislation.gov.uk/uksi/2018/952/made). These regulations stated that all public sector websites or mobile apps must be accessible in four key areas:

- Perceivable
- Operable
- Understandable
- Robust

The 2018 regulations built on the existing obligations to people who have a disability under the [Equality Act 2010 (or the Disability Discrimination Act 1995 in Northern Ireland)](https://www.legislation.gov.uk/ukpga/2010/15/contents). This states that all UK service providers must consider 'reasonable adjustments' for disabled people.

Additionally, [Government Digital Services (GDS)](https://www.gov.uk/guidance/accessibility-requirements-for-public-sector-websites-and-apps) clearly state that public sector services (including those used internally) must be open to all. This is not only a moral obligation but also a legal requirement.

At the NHSBSA, as with all UK government bodies, we follow the [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/). We design, develop and test our services to the latest published WCAG standard. When a service (web application, dashboard, publication or anything that is user facing) is promoted to Production, an Accessibility Statement is published to advise users its accessibility status.

The WCAG standard has 3 levels for web application accessibility:

- Level A -- the most basic web accessibility features
- Level AA -- deals with the biggest and most common barriers for users with accessible needs
- Level AAA -- the highest and most complex level of web accessibility

Whilst our internal and external facing web applications, dashboards and publications *must* meet the 'AA' standard, we aim to meet 'AAA' where possible.

What is accessibility testing?

To ensure the NHSBSA meet the legislation and the standards, and to ensure our services, dashboards and publications can be used by users with accessibility needs, we have developed an Accessibility Test Framework.

We test that our services are accessible by combining both automated and manual testing tools and techniques.

The scope of accessibility testing includes:

- All website content, functionality and interactions.
- Any document that is uploaded, downloaded, used or displayed by a service.
- Any authentication mechanism used by a service.
- Any third-party features or products that a service uses or consumes.
- Any third-party or off the shelf products used by or in conjunction with a service.
- Any third-party or off the shelf product used within the NHSBSA (with the expectation that the testing is conducted by the vendor)
- Any dashboard or similar displaying data or data analysis produced by the NHSBSA
- Any data publication producing data or data analysis from the NHSBSA
- Any email template that is produced and sent by a NHSBSA service

Accessibility Testing must be conducted for all new web applications, dashboards and publications. A targeted regression test must be conducted when the web application, dashboard or publication is updated or refreshed.

## Accessibility Test Framework


No one technique will fully test or find all accessibility issues. We use a combination of techniques and tools to ensure our testing is as comprehensive as we can make it. Our approach is regularly reviewed to ensure it is adequate and is providing the appropriate assurance to our users.

### Stage 1 -- Automated Checkers

There are many different tools and checkers available both in the licensed and open-source markets. Just because a tool is licensed does not mean it assures a higher or better quality of results than a free offering. Each tool we use has been investigated for their benefits and weaknesses.

Additionally, no one tool will give you 100 coverage and checks on the guidelines. Many tools may only find 40% or below of issues that exist on a website. Therefore, a combined approach of different tools and techniques (manual and automated) gives us better results.

The NHSBSA accessibility test framework includes the following automated checkers (browser plugins):

- Wave
- Axe
- Lighthouse

We have developed an automated accessibility test framework, thus making the testing at this stage as efficient as possible.

### Stage 2 -- Manual Checklist

To widen our testing coverage, a manual checklist has been developed to check each WCAG guideline in turn. It includes checks on screen orientation and keyboard navigation through to error handling and use of colour in services. We also manually check accessibility patterns and focus areas where we know issues may arise.

We use the manual checklist to test our web applications as well as data products such as dashboards and data publications.

It is noted that the manual checklist takes time to complete. Its coverage and its suitability are regularly reviewed, and appropriate updates are made to ensure it is fit for purpose. The review includes an efficiency review to check we have identified improvements that can be implemented.

### Stage 3 -- Assistive Technologies

The accessibility of a service is more than just complying to the legal guidelines. We also ensure our users can use the service with little or no barriers. Some users may use assistive technology to access NHSBSA services. Our testing therefore must include checks using assistive technologies to ensure our services are operable and robust for all users.

The NHSBSA accessibility test framework includes the following assistive technologies:

Screen Readers

- Voice Over on Mac OS X
- NVDA on Windows
- JAWS

Speech Recognition

- Voice Control on Mac OS X
- Dragon on Windows

Screen Magnifiers

- Windows Magnifier
- Apple Zoom

Also:

- Adobe Acrobat Pro -- PDF checker

### Accessibility Test Report

Once all three accessibility test stages are complete, a comprehensive Accessibility Test Report is produced outlining the issues that have been found during testing.

All issues (defects) will be assessed. The aim will be to fix as many of the issues as possible, particularly the high priority issues, prior to the service going into Production. If there are any issues the Accessibility Test Report must be stored within the service's document management system as it will be checked should the service be audited by GDS.

### Accessibility Statement

Each public sector user facing service must by law have an accurate and up to date Accessibility Statement.

The Accessibility Statement is created and maintained by the service team responsible for that service. It must reflect the current accessibility of the service so that users are aware of any limitations.

It is a testers responsibility to ensure the following:

- The most up to date NHSBSA Accessibility Statement template has been used.
- All issues outstanding are included in the Statement.
- The issues are written in natural English language and not tool or technical jargon.
- Each issue has a related compliance failure criteria, which references the [latest published WCAG standard](https://www.w3.org/WAI/standards-guidelines/wcag/).
- All outstanding issues are included in a Services backlog.
- All wording is in line with NHSBSA [accessibility statement wording standard](https://nhsbsauk.sharepoint.com/sites/Digital872/SitePages/Accessibility-Statement-Wording-Library.aspx).

The draft Accessibility Statement is reviewed by the service's Test Lead, the service's Content Designer, the NHSBSA Colleague Experience team and the NHSBSA Digital and Online team to ensure the standard has been met. Once approved it is attached to the user facing interface so that all users have access to it.