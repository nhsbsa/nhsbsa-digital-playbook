---
layout: article
title: "Developer Testing"
description: "We always write automated tests around our code"
tags: dev
order: 7
status: DRAFT
related:
  tag: dev_testing
---
## Test scope for developers

Developers are responsible for testing the code they write. We require two types of test as a minimum:

* __Unit test__
  A self-contained test for a unit of functionality. A unit is the smallest amount of code exposed by a module's public interface.
* __Component test__
  A test for a full-stack, deployable component. The interactions between all modules within a component should be tested as an integrated whole.

Unit tests are fast and focused — they verify individual modules work correctly in isolation. Component tests are broader — they verify that modules work correctly together as a deployed whole. Both are required; neither substitutes for the other.

## Test Driven Development

We encourage developers to adopt Test Driven Development (TDD).

Write tests alongside production code in an iterative fashion according to these rules:

* You may not write production code until you have written a failing unit test.
* You may not write more of a unit test than is sufficient to fail — and not compiling is failing.
* You may not write more production code than is sufficient to pass the currently failing test.

This is often described as _Red_, _Green_, _Refactor_:

* __Red__
  Write a failing test that describes the next small piece of behaviour you want to implement. The test defines the requirement.
* __Green__
  Write the minimum production code needed to make the test pass. Don't worry about quality yet — just make it green.
* __Refactor__
  Clean up the implementation with confidence, knowing the tests will catch any regressions.

Do not write all the tests upfront. You may find it practical to jot down dummy tests as they occur to you — it's better to write things down than forget them. But TDD is iterative; it's not defining an entire specification before writing the functional code.

## Unit testing scope

Unit tests should isolate the functionality under test to the smallest possible scope. However, sometimes it is not possible or advisable to test in complete isolation.

### Module tests

Most languages support modularisation and encapsulation, allowing collections of methods and data to be treated as a unit. This may be an object-oriented class or a module that exports a public functional interface. In either case, unit tests should target the public interface only. Encapsulated implementation methods should not be tested directly.

### Mocking

To isolate testing to a unit, downstream dependencies may be mocked. Mocking frameworks support:
* substitution - a mock will act in place of a dependency
* training - a mock can behave as directed by the test and make appropriate response
* verification - mock inputs are asserted against expected values

Mocking frameworks are available as language specific libraries for mocking modules, or as standalone services for external, downstream APIs.

### MVC unit tests

The Model, View, Controller (MVC) of a user interface must be tested as a whole. Use frameworks such as Spring MvcTest or Supertest to send a crafted request to a URL and validate the response. The test should invoke the responsible controller and assert on the rendered view. Services below the controller are outside the scope of an MVC unit test and should be mocked. Assertions should be made on mocks _and_ the rendered view. Verifying views at a unit level can save time and effort as they can cover multiple permutations without the overhead of the full environment in an acceptance test.

Assert on:

* **HTTP status code** — correct status for each scenario (200, 302, 400, 404, etc.)
* **Page structure** — correct page title, heading, and any breadcrumbs or navigation
* **Model data rendered** — values from the model appear in the correct locations in the view
* **Conditional content** — content that shows or hides based on model state renders correctly for each condition
* **Form pre-population** — form fields are pre-populated with model values on re-display after a validation failure
* **Validation errors** — error messages appear against the relevant field, and an error summary is rendered at the top of the page
* **Semantic HTML** — every form input has an associated `<label>`; error messages are linked to their input via `aria-describedby`
* **Links and redirects** — links point to the correct URLs; successful form submissions redirect to the expected destination
* **Security headers** — required headers are present and aligned to our standards; see [Security headers](../../security/security-headers/) and [Content Security Policy](../../security/content-security-policy/)

### API unit tests

API unit tests follow the same approach as MVC tests. Send a crafted HTTP request and assert on the response. Services below the controller should be mocked.

Assert on:

* **HTTP status code** — correct status for success and each error case
* **Response body** — correct fields, values, and data types in the serialised response
* **Error responses** — correct error structure and message for each failure scenario
* **Content-Type header** — response is serialised in the expected format (e.g. `application/json`)
* **Authentication behaviour** — unauthenticated requests return `401`; requests without the required permissions return `403`
* **Security headers** — required headers are present and aligned to our standards; see [Security headers](../../security/security-headers/)

### Data access layer tests

Data access layer modules must be tested against a production-like database running in a Docker container. There is no reason to mock a database or to use a non-production in-memory equivalent such as H2.

Assert on:

* **Entity mapping** — ORM entities map correctly to the schema (column names, types, relationships and constraints)
* **Query results** — custom queries return the expected records for each scenario
* **Filtering** — `WHERE` clauses return only matching records; provide fixture data that should *not* appear to confirm correct filtering
* **Joins** — joined queries return the correct combined data; provide fixture data for unmatched rows in related tables to guard against missing join conditions
* **Ordering** — queries with ordering return records in the expected sequence
* **Aggregates** — aggregate queries (`COUNT`, `SUM`, `AVG`, etc.) return the correct computed value across the fixture data
* **Empty results** — queries return an empty result rather than an error when no records match
* **Write operations** — inserts, updates, and deletes produce the expected state in the database

### API Client tests

API client modules encapsulate calls to downstream HTTP services. Test them in isolation using a mock server trained to return controlled responses. Where possible, construct the mock server from an OpenAPI Specification to validate that the client conforms to the contract.

Assert on:

* **Request structure** — the client sends the correct HTTP method, URL path, query parameters, and request body
* **Authentication headers** — the client includes the required credentials (e.g. `Authorization: Bearer <token>`, API key headers)
* **Successful response** — the client correctly deserialises a `2xx` response and returns the expected data structure
* **Error responses** — the client handles each expected HTTP error status (`400`, `401`, `403`, `404`, `500`, etc.) with the appropriate exception or error value
* **Timeout and network failure** — the client handles connection timeouts and network errors without propagating unexpected exceptions
* **Retry behaviour** — if the client implements retry logic, it retries on transient failures and stops after the configured limit

### Cloud Native tests

Code that interacts with cloud native services must never call real endpoints in unit tests. Mock SDK clients directly using the appropriate library for the language. Test the handler or service logic in isolation, training the mock to return expected responses for each scenario.

Invoke the entrypoint directly with a crafted input — an event object, message payload, or HTTP request as appropriate. Mock any downstream SDK clients.

For cloud native integrations in component tests, see [Integration testing](#integration-testing).

Assert on:

* **SDK invocations** — the correct service method is called (e.g. `s3.putObject`, `sqs.sendMessage`, `dynamodb.getItem`)
* **SDK parameters** — the correct parameters are passed to each SDK call, including resource identifiers and payload content
* **Handler or service response** — the correct response or return value is produced for each scenario
* **Downstream failure handling** — when an SDK call fails, the handler returns the appropriate error response or raises the expected exception

## Component testing scope

A component test exercises the full stack of a deployable component, testing the interactions between all of its modules as a whole. No internal module within the component should be mocked. External dependencies outside the component boundary are substituted with controlled equivalents — containers, mock servers, or cloud service replicas as appropriate.

Drive the component through its real external interface — HTTP endpoints, queue consumers, event handlers — and assert on its real outputs and the resulting state of its external dependencies. Fixture data, infrastructure setup, and teardown must all be managed within the test suite.

For guidance on substituting external dependencies such as databases, AWS services, and downstream APIs, see [Integration testing](#integration-testing).

## Integration testing

Unit and component tests frequently need to interact with external resources — databases, HTTP APIs, message queues, and cloud services. These must never connect to shared or production environments. Instead, substitute each resource with a controlled equivalent appropriate to its type:

* **Like-for-like containers** — run the actual technology in a Docker container for resources where behavioural fidelity matters, such as databases and message brokers. Use [Testcontainers](https://testcontainers.com/) to manage container lifecycle within the test suite. In Java, combine with `@DataJpaTest` to slice the Spring context for data access layer tests.
* **Mock servers** — substitute downstream HTTP APIs with a mock server trained to return specific responses and error conditions. For component tests, use [WireMock](https://wiremock.org/) standalone via Testcontainers — it works with any language and supports OpenAPI stub generation. For unit tests, prefer a lightweight in-process alternative: [fetch-mock](https://www.wheresrhys.co.uk/fetch-mock/) (Node.js) or [responses](https://github.com/getsentry/responses) (Python).
* **Cloud native replicas** — use [LocalStack](https://localstack.cloud/) to provide local equivalents of AWS services (S3, SQS, DynamoDB, Lambda, and others). Testcontainers provides a dedicated `LocalStackContainer` module. Configure the AWS SDK to point at the LocalStack endpoint rather than real AWS.

## Test coverage

All unit tests must meet a minimum coverage threshold of **80% line coverage** and **80% branch coverage**. These thresholds must be enforced in the build pipeline so that a build fails if coverage drops below the standard.

Coverage should be measured against production code only. Test code, generated code, and framework boilerplate should be excluded from coverage reports.

Coverage metrics are an indicator, not a guarantee of quality tests. Focus on writing meaningful tests that verify behaviour — coverage is a safety net to identify untested code paths, not a metric to game.

For guidance on writing good quality tests, refer to [writing clean tests](../dev-tests-coding/).

## Technology choices

The following table summarises the recommended libraries by language for each test type.

| Test type | Java | Node.js | Python |
|---|---|---|---|
| Test runner | JUnit | Vitest | pytest |
| Mocking | Mockito | Jest mocks | pytest-mock |
| MVC / API unit tests | Spring MvcTest | Supertest | Flask test client |
| Data access layer | `@DataJpaTest` + Testcontainers | Testcontainers | Testcontainers |
| API client mocking | WireMock | [fetch-mock](https://www.wheresrhys.co.uk/fetch-mock/) | [responses](https://github.com/getsentry/responses) |
| AWS SDK mocking | Mockito + AWS SDK v2 | @aws-sdk/client-mock | moto |
| Cloud native replicas | LocalStack | LocalStack | LocalStack |
