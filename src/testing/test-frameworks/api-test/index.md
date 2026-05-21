---
layout: article
title: "API testing"
description: "Any API developed by the NHSBSA must be tested to ensure its business logic and responses to requests are correct"
tags: test-frameworks
order: 3
status: Review
---

#### What is API testing?

APIs (Application Programming Interfaces) are the connections between different systems or between layers within the application. They are sets of rules or protocols that allow different software applications to communicate and exchange data with each other.

At the NHSBSA, our services use public APIs (those that are available on the internet for anyone to use), UK Government APIs (those that are common across UK Government services) and private APIs (those that are used between NHSBSA applications and services)

Any API developed by the NHSBSA must be tested to ensure its business logic and responses to requests are correct. API testing concentrates solely on the API and does not consider the other layers within the solution, i.e. the data layer and the UI layer.

There are many benefits in performing API testing:

- **Early testing**: Once the logic has been built into an API we can test and validate these for correctness in responses and data. This can be a standalone test and does not have to wait for the full service or UI to be built before being tested.
- **Easier to maintain**: With the dynamic nature of UIs and how much they may be altered during their lifetime, standalone API tests are quicker and easier to create and maintain.
- **Faster to execute**: API tests are quicker in execution Functional Integration testing as we are not relying on the UI or database. This means we can test quicker and find issues sooner.
- **More coverage**: Being able to execute tests earlier and quicker means we can increase the test coverage in less or the same amount of time.
- **Faster to fix**: If an API test fails, the cause and origin of the failure can be easily located, making the resolution and retesting of the issue easier and quicker to perform.

#### How do we test APIs?

NHSBSA's approved open source tool for API testing is [Karate](https://www.karatelabs.io/).

Karate allows testers to write test scripts using a simple, readable feature file format. Using the Behaviour-Driven Development (BDD) style and the **Given**, **When** and **Then** syntax, Karate allows testers to use simple language and plain text to set variables, to use JSON or XML within features to send and validate data, and to automate the full API test suite.

API tests should consider all business rules, and both positive and negative tests. The [API Test Standard Framework](https://gitlab.com/nhsbsa/ddat/test-community/api-standard-framework) must be used when building the test suite. Once stable, the API test suite should be placed into the CI/CD pipeline for full automation.

For further information on Karate please visit the [Karate GitHub pages](https://github.com/karatelabs/karate). These contain examples and other guidance on how to create API tests using Karate.