---
layout: collection
title: "Testing by developers"
tags: dev
order: 11
collection_tag: dev_testing
pagination:
  data: collections.dev_testing
  size: 50
---
## Test scope for developers

Developers are responsible for testing the code they write. We require two types of test as a minimum:

* __Unit test__
  A self contained test for a unit of functionality, such as a Java class or a Javascript function.
* __Integration test__
  A test for a unit of functionality that depends on an external resource, such as a database.
  We test against external resources and dependencies that reflect a production environment, but there is potential to mock external APIs with tools such as mock-server or wire-mock.
  We do not normally write _full stack_ integration tests, as these are covered by our automation testers.
  For more information, refer to this [guidance on writing integration tests](/development/dev-tests-integration).

## Test Driven Development

We encourage Developers to adopt Test Driven Development. This means writing tests alongside production code in an iterative fashion according to these TDD rules:

* You may not write production code until you have written a failing unit test.
* You may not write more of a unit test than is sufficient to fail, and not compiling is failing.
* You may not write more production code than is sufficient to pass the currently failing test.

## Test code principles

* Test cases must not use real, production data
  In exceptional circumstances tests may use real personal data where this can be justified and approved by Internal Governance and Information Security departments. Projects that test with real personal data must apply production controls in the testing environment.
  In some circumstances, we do test against anonymised production data. We pseudonymise or anonymise the identity of data subjects according to the [NHSBSA Anonymisation and Pseudonymisation standard][nhsbsa_anonymisation_and_pseudonymisation_standard]

* Tests must be written with the same care as production code.
  Tests must change as production code evolves. The dirtier the tests, the harder they are to change. The more tangled the test code, the more likely it is that you will spend more time cramming new tests into the suite than it takes to write the new production code. As you modify the production code, old tests start to fail, and the mess in the test code makes it hard to get those tests to pass again. So the tests become viewed as an ever-increasing liability.
  Tests cases should follow clean code principles with the intent being easily understood. 
  For more information, refer to this [guidance on writing clean tests](/development/dev-tests-coding).

* Tests should be fast
  Test should run quickly. When they run slow, you won’t want to run them frequently. If you don’t run them frequently, you won’t find problems early enough to fix them easily. You won’t feel as free to clean up the code. Eventually the code will begin to rot.

* Tests must be independent of each other
  One test must not set up the conditions for the next test. You must be able to run each test independently and run the tests in any order you like. When tests depend on each other, then the first one to fail causes a cascade of downstream failures, making diagnosis difficult and hiding downstream defects.

* Tests must be repeatable in any environment
  You should be able to run the tests in the production environment, in the QA environment, and on your laptop while riding home on the train without a network. If your tests aren’t repeatable in any environment, then you’ll always have an excuse for why they fail. You’ll also find yourself unable to run the tests when the environment isn’t available.
  Fixture data and configuration must be managed by the test itself

* Tests must be self validating
  Tests must have a boolean exit state: They either they pass or fail.
  You should not have to read through a log file to tell whether the tests pass. You should not have to manually compare two different text files to see whether the tests pass. If the tests aren’t self-validating, then failure can become subjective and running the tests can require a long manual evaluation.
  Tests should be written against the public interfaces of production code, and not against private or internal functions

* Tests should to be written in a timely fashion
  If you write tests after the production code, then you may find the production code to be hard to test; you may decide that some production code is too hard to test; you may not design the production code to be testable.
  Unit tests should be written just before the production code that makes them pass. Production code is then designed to be tested and is simpler to test.

## References

* [NHSBSA Anonymisation and Pseudonymisation standard][nhsbsa_anonymisation_and_pseudonymisation_standard]

[nhsbsa_anonymisation_and_pseudonymisation_standard]: </standards/NHSBSA_Anonymisation_and_Pseudonymisation_Standardv3.docx>