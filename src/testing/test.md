---
layout: article
title: "Testing in general"
description: "How we test at the NHSBSA"
tags: test
order: 1
---

## Introduction

Quality assurance (QA) testing is the process of ensuring that your service is of the highest possible quality for your users. Testing uses different tools, technologies and frameworks to prevent issues with your service and to ensure great user experience for all users.

Testers will provide assurance through the design, develop and execute tests on new and existing services. Key responsibilities of this role is to assure quality and consistent attention to detail in all testing performed.

In the NHSBSA we test to our five core frameworks: 
- Acceptance 
- Accessibility
- API
- Compatibility
- Performance

All of our tests are created, developed, excuted and maintained to our test standards. 
These standards can be found on the Test Community [confluence](https://bsa2468.atlassian.net/wiki/spaces/CoP/pages/1706623220/NHSBSA+TEST+STANDARDS) and [sharepoint](https://nhsbsauk.sharepoint.com/sites/Digital872/SitePages/NHSBSA-Test-Standards.aspx) websites. 

## Acceptance Testing

Acceptance testing deals with the functional testing of user stories to fulfil acceptance criteria. 
Acceptance criteria are the conditions that software must meet to be accepted by a user. 
Testing these conditions will include happy and unhappy paths, field validations and boundary value tests. 

All of our acceptance tests within the NHSBSA test community are created in user centric BDD using cucumber whether this is for manual or automated tests. The tool choice for these BDD scripts comes from the NHSBSA Test Tech Stack.​​​​​​​
Our BDD tests are centred around the users and their behavioural needs and requirements hence our tests are focused from the perspective of the user and not a third person.
All wording is in clear natural english language and does not include technical or test jargon or speech, for example in our tests we don't press this or click that like in more traditional test plans and scripts. 
We talk as the user would express a scenario or situation 'Given I am on the NHSBSA PPC website, When I want to buy a 12 month PPC Then I will able to buy a 12 month PPC'.

Only in circumstances where these actions are needed to prove a clear acceptance criteria can they be used.

## Accessibility Testing

New regulations came into force for public sector bodies on 23 September 2018. These regulations meant all websites or mobile apps must be accessible in four key areas: 
- perceivable, operable, understandable and robust

The full name of the regulations is: Public Sector Bodies (Websites and Mobile Applications) (No. 2) Accessibility Regulations 2018.

The 2018 regulations build on the existing obligations to people who have a disability under the Equality Act 2010 (or the Disability Discrimination Act 1995 in Northern Ireland). This states that all UK service providers must consider ‘reasonable adjustments’ for disabled people.

To ensure we meet this legislation an accessibility framework was developed and this has quickly become one of the core test frameworks the test community uses to ensure every product or service is accessible.

This means testing to ensure services meet WCAG guidelines to 2.1 'AA' standard as well as ensuring our services can be used by anyone with any accessibility needs.

To meet this legislation the NHSBSA has to adhere to the Web Content Accessibility Guidelines (WCAG) 2.1 and achieve at minimum 'AA' standard. 

## API Testing

API (Application Programming Interface) testing aims to determine whether the APIs that are developed meet expectations when it comes to functionality. 

## Compatibility Testing

This type of testing deals with the testing of your service through different browsers, tablets and phones.

The need to perform Compatibility testing is linked to the following requirements:

- Ability to provide stakeholder's with information about their application regarding functionality, usability and consistency.

- Ability to analyse the system in different OS environments as well as with different mobile devices (Phones, Tablets).

- Ability to conform to the following GDS Service Standards.

  - Standard 6 : Evaluate tools and systems - the evaluation and use of tools for your system and development environment.

  - Standard 10 : Be able to test the end-to-end service in an environment identical to that of the live version, including on all common browsers and devices, and using dummy accounts and a representative sample of users.

  - Standard 13 : To pass the beta and live assessments you also need to show that the service is responsive and works on mobile devices.

## Performance Testing

Performance testing determines how the stability, speed, scalability, and responsiveness of an application holds up under a given workload. 