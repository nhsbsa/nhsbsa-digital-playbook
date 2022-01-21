---
layout: article
title: "Accessibility Testing"
description: "How & why we accessibility test in the NHSBSA"
tags: test
order: 10
related:
  tag: accessibility-framework
---

## Why do we accessibility test in the NHSBSA

New regulations came into force for public sector bodies on 23 September 2018. These regulations meant all websites or mobile apps must be accessible in four key areas: ‘perceivable, operable, understandable and robust’.

The full name of the regulations is: Public Sector Bodies (Websites and Mobile Applications) (No. 2) Accessibility Regulations 2018.

The 2018 regulations build on the existing obligations to people who have a disability under the Equality Act 2010 (or the Disability Discrimination Act 1995 in Northern Ireland). This states that all UK service providers must consider ‘reasonable adjustments’ for disabled people.

To ensure we meet this legislation an accessibility framework was developed and this has quickly become one of the core test frameworks the test community uses to ensure every product or service is accessible.

This means testing to ensure services meet WCAG guidelines to 2.1 'AA' standard as well as ensuring our services can be used by anyone with any accessibility needs.

To meet this legislation the NHSBSA has to adhere to the Web Content Accessibility Guidelines (WCAG) 2.1 and achieve at minimum 'AA' standard. 

WCAG 2.1 guidelines can be found here: https://www.w3.org/TR/WCAG21/#keyboard-accessible

The accessibility standard levels are as follows:

- Level A – the most basic web accessibility features

- Level AA – deals with the biggest and most common barriers for disabled users

- Level AAA – the highest (and most complex) level of web accessibility

All our websites have to meet at minimum 'AA' standard on all websites but we should be aiming for the highest 'AAA' level whether the website is internal or externally facing, for 1 user or a million users.​​​​​​​

We assure our services are accessible by combining both automated and manual testing tools and techniques in order to meet our users needs.

There is more information / guidance on WCAG 2.1 available on this github account: WCAG 2.1 guidelines​​​​​​​

## Accessibility testing framework

Our accessibility test framework is a combination of manual and automated testing techniques. 
No one technique alone will fully test or find all issues so the combination ensures our test coverage is relevant and as comprehensive as we can make it.

### Stage 1 - Automated checkers

There are many different tools and checkers available both in the licensed and open source markets. Just because a tool is licensed does not mean it assures a higher or better quality of results than a free offering, each tool should be investigated for their benefits and weaknesses. 

No one tool will give you full perfect checks on the guidelines either, many tools only actually find 40% or below of issues that exist on your website. Therefore a combined approach of mixed tools will give you better initial results to build upon.

The NHSBSA tests using the following automated checkers based upon research and audits we have performed:

- Accessibility Browser Plugins: Wave, Axe and Lighthouse.

### Stage 2 - Manual checklist & Assistive Technologies

To widen our testing coverage we also need to manually check on various accessibility focus areas where we have encountered either WCAG conflicts or issues from audits. 

- Manual Checklist 

Accessibility of a service is more than just complying to the legal guidelines, we also have to ensure our users can use the service without having any problems. 

To test this we use the following assistive technologies to test our services:

- Screen Readers
- Speech Recognition 
- Screen Magnifiers

### Stage 3 - Accessibility Statements

Each website must by law have an accurate and up to date accessibility statement.

The creation and updating of all accessibility statements is a team responsibility but testers are involved in adding and updating the issues and WCAG contradictions.

These issues are those that have been found, raised but they are or can not be fixed for some reason. These have to be included in the statements.

It is a testers responsibility to ensure the following with statements:

- All issues outstanding are included in the statements
- The issues are in natural english language and not tool or technical jargon.
- Each issue has a related WCAG 2.1 compliance failure criteria.
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