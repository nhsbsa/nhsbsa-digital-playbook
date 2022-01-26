---
layout: article
title: "Acceptance Testing"
description: "How & why we acceptance test in the NHSBSA"
tags: test
order: 10
---

## What is acceptance testing?

'Formal testing with respect to user needs, requirements, and business processes conducted to determine whether a system satisfies the acceptance criteria and to enable the user, customers or other authorized entity to determine whether to accept the system'. ISQTB

All of our acceptance tests within the NHSBSA test community are created in BDD using cucumber whether this is for manual or automated tests. The tool choice for these BDD scripts comes from the NHSBSA Test Tech Stack.

Our BDD tests are centred around the users and their behavioural needs and requirements hence our tests are focused from the perspective of the user and not a third person. All wording is in clear natural english language and does not include technical or test jargon or speech, for example in our tests we don't press this or click that like in more traditional test plans and scripts. We talk as the user would express a scenario or situation 'Given I am on the NHSBSA PPC website, When I want to buy a 12 month PPC Then I will able to buy a 12 month PPC'.

Only in circumstances where these actions are needed to prove a clear acceptance criteria can they be used.

## Why do you write in a user centric way?

Everything we do whether it is designing a new service or testing it involves the users and what they need or require.

There is no use for a service that disrupts, confuses or stops the user from using it to get want they want or need in the quickest time possible.

So to be able to assure our services meet these needs then we identify clear acceptance criteria expressing these needs and then our tests validate and assure these needs have been met.

Of course user needs change and evolve, so therefore our tests need to be able to do this so we created our framework to be easy to understand, adaptable and easy to maintain so that flexibility and change can be incorporated anytime this happens.

Within each project there is a need to perform testing which can be linked to the following requirements:

Ability to provide stakeholder with information that system under development works as described in product requirements
Ability to conform to the following GDS Service Standards

- Standard 6 - Evaluate what tools and systems will be used to build, host, operate and measure the service, and how to procure them.
- Standard 7 - Evaluate what user data and information the digital service will be providing or storing and address the security level, legal responsibilities, privacy issues and risks associated with the service (consulting with experts where appropriate).
- Standard 10 - Be able to test the end-to-end service in an environment identical to that of the live version, including on all common browsers and devices, and using dummy accounts and a representative sample of users.
Utilising an Automation Test Framework to test Front end, Back end and API services is recognised as a way to provide consistent tests that can reused and validate functionality and regression testing

## Whats included in acceptance tests?

All acceptance tests in the NHSBSA provide assurance by testing the following:

- Functionality / behaviour of a service according to acceptance criteria.
- Validation of service inputs must include Valid, Invalid, None entry & Verification scenarios (e.g. field lengths, acceptance levels).
- User Journeys, happy and unhappy paths, service scope limitations or redirects.
- Boundary Value Analysis and Equivalence Partitioning test methods are implemented to test range and limits of services.
- Integration with other services or providers.
- Regression to ensure the continued assurance of all the service is not affected by any change or improvement.

## How are acceptance tests structured?

All of our tests are created in user centric BDD using Cucumber. Whether these are manual or automated tests all scripts, scenarios and cases are produced in the same format.

We employ an 'automation by default' approach to testing so unless not possible or constrained then tests must be automated. Over 90% of our current acceptance tests are automated.

We also use the following in our tests:

- Cucumber - a software tool that supports behavior-driven development. Central to the Cucumber BDD approach is its ordinary language parser called Gherkin. It allows expected software behaviors to be specified in a logical language that customers can understand.
- User Centric BDD - BDD uses human-readable descriptions of software user requirements as the basis for software tests. Each test is based on a user story written in the formally specified clear natural English language. User Centric BDD ensures all test scenarios written in Gherkin syntax are from a users perspective and phased as a user would describe a scenario or circumstance.
- Gherkin - Gherkin uses a set of special keywords to give structure and meaning to executable specifications. Each keyword helps the user and tester to understand the requirements and scenarios more clearly, these keywords include Given (pre-condition), When (action), Then (result).
- Selenium - a collection of language specific bindings to drive a browser - the way it is meant to be driven.
- Java - A language supported by the cucumber project to implement cucumber steps using Selenium.
- Ruby - A language supported by the cucumber project to implement cucumber steps using Selenium.
- Dedicated use of Test Environments:
        Legacy - test environments not in the cloud use environments in our legacy infrastructure.
        AWS Cloud - test environments in CI/CD pipelines are used.
        Local environments - where a test environment is not setup, running an application locally on a PC/Mac can provide access to developed systems. This may also be used where access to specific scenarios can not be achieved in the test environments due to governance restrictions.
