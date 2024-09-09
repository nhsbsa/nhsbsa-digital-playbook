---
layout: article
title: "Accessibility Testing"
description: "How & why we accessibility test in the NHSBSA"
tags: test-frameworks
order: 3
related:
  tag: accessibility-framework
---

## Why do we accessibility test in the NHSBSA

New regulations came into force for public sector bodies on 23 September 2018. These regulations meant all websites or mobile apps must be accessible in four key areas: ‘perceivable, operable, understandable and robust’.

The full name of the regulations is: Public Sector Bodies (Websites and Mobile Applications) (No. 2) Accessibility Regulations 2018.

The 2018 regulations build on the existing obligations to people who have a disability under the Equality Act 2010 (or the Disability Discrimination Act 1995 in Northern Ireland). This states that all UK service providers must consider ‘reasonable adjustments’ for disabled people.

To ensure we meet this legislation an accessibility framework was developed and this has quickly become one of the core test frameworks the test community uses to ensure every product or service is accessible.

This means testing to ensure services meet the [latest published WCAG standard](https://www.w3.org/WAI/standards-guidelines/wcag/) to 'AA' standard as well as ensuring our services can be used by anyone with any accessibility needs.

To meet this legislation the NHSBSA has to adhere to the [latest published WCAG standard](https://www.w3.org/WAI/standards-guidelines/wcag/) and achieve at minimum 'AA' standard. 

The latest published WCAG standard can be found here: https://www.w3.org/WAI/standards-guidelines/wcag/

The accessibility standard levels are as follows:

- Level A – the most basic web accessibility features

- Level AA – deals with the biggest and most common barriers for disabled users

- Level AAA – the highest (and most complex) level of web accessibility

All our websites have to meet at minimum 'AA' standard on all websites but we should be aiming for the highest 'AAA' level whether the website is internal or externally facing, for 1 user or a million users.​​​​​​​

We assure all our services are accessible by combining both automated and manual testing tools and techniques in order to meet our users needs.

There is more information / guidance on the latest published WCAG standard available on the [World Wide Web Consortium (W3C)](https://www.w3.org/WAI/standards-guidelines/wcag/) website.

## Whats in the scope for accessibility testing?

The scope of accessibility testing includes every web based service whether this is for internal or external use or release, whether this is for 1 person or 5 million people, all our users are to catered for.

Scope of accessibility coverage includes:
- All website content, functionality and interactions.
- Any document are uploaded, downloaded, used or displayed by the service.
- Any authentication mechanisms used for service or website login.
- External material/links, the service should assess the benefits and usage of using external material. Testing of this material and communication with the third parties of any issues that arise.
- Any third party features or products that a service uses or consumes.
- Any third party or off the shelf products used by or conjunction with a service.

If any of the above scope is not covered then this must be risk approved by a delivery manager and service owner. 
Any none coverage should also be add to the Accessibility statement(s) for transparency.


## Accessibility testing framework

Our accessibility test framework is a combination of manual and automated testing techniques.

No one technique alone will fully test or find all issues so using a combination ensures our test coverage is relevant and as comprehensive as we can make it.

### Stage 1 - Automated checkers

There are many different tools and checkers available both in the licensed and open source markets. Just because a tool is licensed does not mean it assures a higher or better quality of results than a free offering, each tool we use has been investigated for their benefits and weaknesses.

No one tool will give you full perfect checks on the guidelines either, many tools only actually find 40% or below of issues that exist on your website. Therefore a combined approach of mixed tools and techniques (manual and automated) will give us better results.

The NHSBSA tests uses the following automated checkers:

- Accessibility Browser Plugins: Wave, Axe and Lighthouse. (All open source)

### Stage 2 - Manual checklist & Assistive Technologies

To widen our testing coverage we also manually check on various accessibility patterns and focus areas where we have encountered either WCAG conflicts or issues from audits.

This manual checklist includes checks from screen orientation, keyboard navigation through to error handling and use of colour in services.

Accessibility of a service is more than just complying to the legal guidelines, we also have to ensure our users can use the service without having any problems.

To test this we implement checks using assistive technologies to test our services are operable and robust for all users. The assistive technologies we user are:

- Screen Readers - NVDA on Windows and Voice Over on Mac machines.
- Speech Recognition - Dragon on Windows and Voice Control on Mac machines.
- Screen Magnifiers - Browser and machine based tools like Zoom features.

### Stage 3 - Accessibility Statements

Each website must by law have an accurate and up to date accessibility statement.

The creation and updating of all accessibility statements is a team responsibility but testers are involved in adding and updating any issues and WCAG contradictions thst may exist.

Issues that make their way to statements are those that have been found, raised but can not be fixed at present. 
To be included in an accessibility statement these issues would need full justified reasoning as well as approved risk raised before the s. These have to be included in the statements.

It is a testers responsibility to ensure the following with statements:

- All issues outstanding are included in the statements
- The issues are in natural english language and not tool or technical jargon.
- Each issue has a related compliance failure criteria, which references the [latest published WCAG standard](https://www.w3.org/WAI/standards-guidelines/wcag/).
- All wording is in line with BSA accessibility standards (please see the accessibility standards area).
- All issues have a fix date (this has to be agreed by the project).

All the tools we use in our Accessibility Framework have been chosen after studying research and guidance provide by GDS, NHS service manual and BSA Test and Service Design communities.

## What to raise as issues

All websites should be using the latest version of the government toolkit in order to reach 'AA' compliance at least. 

Please check the accessibility testing defect management page for how to raise any accessibility defects.

## Scope of testing

Accessibility testing must be performed on all new UI screens and any that have been amended. For regression purposes we also need at least two existing screens not affected by any changes to be retested.

In release reports this breakdown must be clear in the release focus section and in the accessibility report all tested (new or retested) screens must be highlighted in green.

## Reporting

All accessibility tests results must be recorded in an Accessibility Test Report, this report is used as evidence in the event of an accessibility audit.