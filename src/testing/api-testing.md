---
layout: article
title: "API Testing"
description: "How we test API's in the NHSBSA"
tags: test
order: 10
---

## What are API's?

APIs (Application Programming Interfaces) are the connections between different systems or layers of an application. Applications often have three layers: a data layer, a service (API) layer, and a presentation (UI) layer. The API layer contains the business logic of an application - the rules of how users can interact with services, data or functions of the service.

API testing consists of make requests to a single or sometimes multiple API endpoints and validating the response - whether for performance, security, functional correctness, or just a status check.

These requests can be in the form of create POST, return GET, update PUT and delete DELETE requests.

Often front end aplications or services are driven from these actions.

There can be private, public or partner API's. 

A public API is exactly that available on the internet for anyone to use.
A private API is used only between applications and services. 

## Why do we do API testing?

There are many benefits in performing API testing these include:

- Early testing: Once the logic has been built into an API we can test and validate these for correctness in responses and data. We don't have to wait for full services or UI's to be built before being tested.
- Easier to maintain: With the dynamic nature of UI's and how much they are altered and changed due to the ways they are accessed, API's are quicker and easier to create, edit and maintain even in an agile environment.
- Faster to fix: When API tests fail the cause and origin of the failure can be much easier located, this makes the resolution and retesting of the issue easier and quicker to perform.
- Speed and Coverage: API tests are quicker in execution than UI testing. This means we can increase and test more coverage in less time than UI tests. This also means we will find more bugs in less time and be able to fix these quicker.

## How do we API Test?

The test community approved open source tool for API testing is Karate. Karate allows you script web-service calls using cucumber features.

Using the familiar Given, When and Then syntax Karate goes further and allows you set variables and use JSON or XML in your features

Karate allows to write complete end to end web-service scenarios without writing any code.

For more information on Karate please visit the [Karate github webpage](https://github.com/karatelabs/karate)
