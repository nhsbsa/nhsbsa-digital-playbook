---
layout: article
title: "Testing"
description: "We always write automated tests around our code"
tags: dev
order: 7
related:
  tag: dev_testing
review:
    last_reviewed_date: 2023-05-06
    review_cycle: ANNUAL
---
## Test scope for developers

Developers are responsible for testing the code they write. We require two types of test as a minimum:

* __Unit test__
  A self contained test for a unit of functionality, such as a Java class or a Javascript function, or a behaviour spanning many such files.
* __Integration test__
  A test for a unit of functionality that depends on an external resource, such as a database.
  We test against external resources and dependencies that reflect a production environment.
  Integration testing against external APIs is done with tools such as mock-server or wire-mock.
  Developers do not normally write _full stack_ integration tests, as these are covered by our automated acceptance tests.
  For more information, refer to this [guidance on writing integration tests](../dev-tests-integration/).

## Test Driven Development (red, green, refactor)

We encourage Developers to adopt Test Driven Development.

Write tests alongside production code in an iterative fashion according to these TDD rules:

* You may not write production code until you have written a failing unit test.
* You may not write more of a unit test than is sufficient to fail, and not compiling is failing.
* You may not write more production code than is sufficient to pass the currently failing test.

You may find it useful to think of this as _Red_, _Green_, _Refactor_. The red, green, refactor approach helps to compartmentalize your focus into three phases:

* __Red__
  Think about what you want to develop
* __Green__
  Think about how to make your tests pass
* __Refactor__
  Think about how to improve your existing implementation

Do not write all the tests upfront. You may find it practical to jot down dummy tests as they occur to you: Its better to write things down than forget them. But we're not defining an entire specification before we write the functional code. TDD is an iterative and incremental process.

## Test code principles

* __Test cases MUST NOT use real, production data__
  In some circumstances, we test against anonymised production data. We pseudonymise or anonymise the identity of data subjects according to the [NHSBSA Anonymisation and Pseudonymisation standard][nhsbsa_anonymisation_and_pseudonymisation_standard]
  In exceptional circumstances use of real personal data is allowed where it can be justified and is approved by our Internal Governance and Information Security departments. Projects that test with real personal data must apply production controls in the testing environment.

* __Tests must be written with the same care as production code__
  Tests must change as production code evolves. The dirtier the tests, the harder they are to change. The more tangled the test code, the more likely it is that you will spend more time cramming new tests into the suite than it takes to write the new production code. As you modify the production code, old tests start to fail, and the mess in the test code makes it hard to get those tests to pass again. So the tests become viewed as an ever-increasing liability.
  Tests cases should follow clean code principles with the intent of being easily understood.
  For more information, refer to this [guidance on writing clean tests](../dev-tests-coding/).

* __Tests should be fast__
  Test should run quickly. When they run slow, you won’t want to run them frequently. If you don’t run them frequently, you won’t find problems early enough to fix them easily. You won’t feel as free to clean up the code. Eventually the code will begin to rot.

* __Tests must be independent of each other__
  One test must not set up the conditions for the next test. You must be able to run each test independently and run the tests in any order you like. When tests depend on each other, then the first one to fail causes a cascade of downstream failures, making diagnosis difficult and hiding downstream defects.

* __Tests must be repeatable in any environment__
  You should be able to run the tests in the production environment, in the QA environment, and on your laptop while riding home on the train without a network. If your tests aren’t repeatable in any environment, then you’ll always have an excuse for why they fail. You’ll also find yourself unable to run the tests when the environment isn’t available.
  Fixture data and configuration must be managed within the test.

* __Tests must be self validating__
  Tests must have a boolean exit state: They either they pass or fail.
  You should not have to read through a log file to tell whether the tests pass. You should not have to manually compare two different text files to see whether the tests pass. If the tests aren’t self-validating, then failure can become subjective and running the tests can require a long manual evaluation.
  Tests should be written against the public interfaces of production code, and not against private or internal functions.

* __Tests should to be written in a timely fashion__
  If you write tests after the production code, then you may find the production code to be hard to test; you may decide that some production code is too hard to test; you may not design the production code to be testable.
  Unit tests should be written just before the production code that makes them pass. Production code is then designed to be tested and is simpler to test.

## References

* [NHSBSA Anonymisation and Pseudonymisation standard][nhsbsa_anonymisation_and_pseudonymisation_standard]

[nhsbsa_anonymisation_and_pseudonymisation_standard]: <https://nhsbsauk.sharepoint.com/:b:/r/sites/InformationSecurity/SiteAssets/SitePages/NHS-BSA-Information-Security-Policies/Anonymisartion-and-Pseudonymisation-Standard.pdf?csf=1&web=1&e=SPLOtZ>
