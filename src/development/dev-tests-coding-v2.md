---
layout: article
title: "Writing clean tests"
tags: [dev, dev_testing]
order:
  dev: 8
  dev_testing: 1
status: DRAFT
related:
  tag: dev_testing
---
Unit tests serve as the specification for a class or function. Someone who is new to a codebase should be able to read unit tests and understand what the code is supposed to do.

A clean test is one that can be easily read and understood. Writing clean tests removes barriers to understanding and ensures that the code is doing what is intended.

Have you ever reviewed code and spent more time trying to understand the test than the functional code? Have you ever given up and just accepted the change? After all, the author probably knew what they were doing, right?

This article covers Test Driven Development and the principles and patterns for writing clean, readable tests. For required test types, coverage standards, and infrastructure patterns, see [Developer Testing](../dev-tests-v2/).

## Test Driven Development

We strongly encourage developers to adopt Test Driven Development (TDD).

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

## Test code principles

* __Test cases MUST NOT use real, production data__
  Tests should be written against requirements and crafted to cover the different boundary conditions and execution paths that are needed to filfill them. There is no need to use production data to verify expected behaviour. If defects are found in production, then the circumstances should be replicated with synthetic fixture data only.

* __Tests must be written with the same care as production code__
  Tests must change as production code evolves. The dirtier the tests, the harder they are to change. The more tangled the test code, the more likely it is that you will spend more time cramming new tests into the suite than it takes to write the new production code. As you modify the production code, old tests start to fail, and the mess in the test code makes it hard to get those tests to pass again. So the tests become viewed as an ever-increasing liability.
  Test cases should follow [clean code](../coding/#clean-code) principles with the intent of being easily understood.

* __Tests should be fast__
  Tests should run quickly. When they run slowly, you won't want to run them frequently. If you don't run them frequently, you won't find problems early enough to fix them easily. You won't feel as free to clean up the code. Eventually the code will begin to rot.

* __Tests must be independent of each other__
  One test must not set up the conditions for the next test. You must be able to run each test independently and in any order. When tests depend on each other, the first one to fail causes a cascade of downstream failures, making diagnosis difficult and hiding downstream defects.

* __Tests must be repeatable in any environment__
  You should be able to run the tests in continuous integration or on your laptop without a network. If your tests aren't repeatable in any environment, you'll always have an excuse for why they fail.
  Fixture data and configuration must be managed within the test.

* __Tests must be self-validating__
  Tests must have a boolean exit state: they either pass or fail.
  You should not have to read through a log file to tell whether the tests pass. If the tests aren't self-validating, then failure can become subjective and running the tests can require a long manual evaluation.
  Tests should be written against the public interfaces of production code, not against private or internal functions.

* __Tests should be written in a timely fashion__
  If you write tests after the production code, you may find the production code is hard to test, or not design it to be testable at all.
  Follow [Test Driven Development](#test-driven-development) (TDD) so that unit tests are written just before the production code that makes them pass. Production code is then designed to be tested and is simpler to test.

## Naming

Field names should make clear their purpose within the test. Avoid arbitrary names like `user1` and prefer meaningful names like `userWithoutAddress`.

Prefix with `input` for input arguments, `actual` for response data and `expected` for any expectations.

When using mocking frameworks, clearly identify mock objects and argument captors. For example, mocks can be prefixed with `mock` and captors suffixed with `Captor`.

### Naming test cases

Test cases should be named using some form of BDD syntax. The usual `Given-When-Then` can be overly verbose. Consider using the more succinct `Should-When` syntax, or even a simple `Should`.

Here are some example test case names against a function that sorts by user email address:

| Style | Example |
| ----- | ------- |
| given-when-then | givenMultipleUsersWhenMappedToViewThenSortedByEmail |
| should-when | shouldSortByEmailWhenMultipleUsers |
| should | multipleUsersShouldSortByEmail |
| statement | multipleUsersSortedByEmail |

Most importantly, names should be unambiguous and show a clear purpose.

Some frameworks rely on method names to identify test cases. Others use annotations, avoiding the need for the `test` prefix. Some allow descriptive text as arguments. Use framework conventions to clarify meaning.

## Test structure

Test cases should use a standard BDD structure of:

* `Given` — to set up fixture data as pre-conditions
* `When` — to call the method under test
* `Then` — make assertions on the actual response (and verify any mock interactions)

This is sometimes referred to as `Arrange`, `Act`, `Assert`.

For frameworks that do not impose this structure in their API, readability is improved by use of comments.

```java
//given

//when

//then
```

There is no need to write anything beside the comments as they are simply delimiters. The intention is to provide a clean structure for your test.

If you're unable to segment a test by these three actions in the right order, then the test probably isn't clean.

## Avoid shared fixture data

Fixtures are data-sets that you use to test scenarios with your code.

An anti-pattern is to define test fixture data at the top of a class and re-use it across different test cases. There are problems with this approach:

* __Cross test pollution__
  A risk that fixture data is not re-initialised between tests. The action of one test can then affect another.
* __Meaningless names__
  Shared fixture data is often named with simple numeric suffixes. For example: user1, user2, user3. Numeric suffixes convey no meaning. We can assume some of the tests need multiple users, but there is no context about why we need more than one.
  Meaningless names are confusing in tests.
* __Noise__
  Shared fixture data is usually placed as boilerplate at the top of the test class.
  If you were reading such a test, you'd probably skip all the initialisation code and come back to it after reading the test cases themselves.
* __No explicit intent__
  As you read the test cases, you will need to go back to the shared data and keep in your head what user1 and user2 are being used for. The lack of intent from the field definitions means the reader has to carry this context throughout.

A better approach is to declare fixture data within the test.

## Create fixture data in factory methods

Avoiding shared fixture data can introduce boilerplate object creation code within the tests themselves. This is acceptable if object creation can be done with clear intent using a one-liner 'builder' pattern. But even using builders, object creation can span multiple lines of distracting boilerplate.

A simple solution is to use factory methods within the test class.

* __Less verbose__
  Exposing a method that only takes the argument that varies for the test case means all the default boilerplate is handled in one place, out of the way.
* __Clear intent__
  Exposing multiple methods to describe different situations can clearly express why a fixture object is being created.
* __Clear naming__
  As objects are created within the test, they can be assigned to variables that suit the test case.

Use methods with clear names for creating fixture data when it is needed. Name the fixture variables to further clarify the intent within the test.

## Testing with date and time

When code is dependent on date or time, your tests must take control of time so they can test all the different flows and expectations.

Do not hardcode fixture data to specific dates or times far in the future. Those tests will eventually fail and another developer will have to investigate and fix the problem.

There are two common approaches to testing with time:

* __Offset input data__
  Use system date and/or time and adjust with an offset to create values in fixture data. The code will apply logic based on the current system time and the input data. This is a simple approach that works well in many cases.

* __Control system time__
  In the [Greeter kata](https://github.com/wix/tdd-katas), a salutation changes through the course of the day. The only way to test the different scenarios is to take control of system time.

  Most languages have a way to control system time in code:
  * [Java](https://www.baeldung.com/java-override-system-time)
  * [JavaScript using Jest](https://codewithhugo.com/mocking-the-current-date-in-jest-tests/)

## Test one thing

Test Driven Development (TDD) ensures that test cases are lean, with just enough fixture data to test a single additional requirement.

If you find that each additional test case is performing all the previous steps to initialise your fixtures, you're doing too much work and diluting the purpose of the test.

The reader of a test need only see the data required for one scenario at a time. Consider what is needed to satisfy the test case and nothing more. If you are covering something else, write a different test case for that scenario.

## Coverage considerations

Coverage tools are a useful guide to see if you have missed a branch in execution, but they aren't a substitute for thinking through the requirements. Remember to consider the test as a specification for the expected behaviour.

When testing, consider the following:

* __Null or missing arguments__
  It can be useful to assert on input arguments to ensure you're getting what you expect.
  Avoid `if` conditions that check for both null and empty: this results in four branches in execution. Instead prefer a library method that encapsulates this condition check and simplifies the logic.
* __Exceptions__
  Tests should verify exception handling behaviour explicitly.
  Don't log expected exceptions in your tests as this creates noise.
* __Empty collections__
  Iterating over an empty collection can result in cleaner code than having a conditional check. But make sure you test for expected behaviour when an empty collection is provided.
* __Boundary conditions__
  Always test the boundaries.

## Make assertions with appropriate matchers

Assertions should be simple and clear with failure messages that identify the error. This is done by selecting appropriate matchers.

Be specific.

It can be tempting to learn and use just a few of the matchers in an assertion framework. Take time to understand the methods available, so tests are succinct and failure messages are informative.

## Avoid asserting equality with complex objects

Sometimes a complex object is built up and used to test equality in a matcher. In Java, this ultimately defers to the `.equals()` method.

Asserting equality with complex objects leads to these issues:

* __Obscurity__
  It is difficult for the reviewer to understand which field value is being checked when objects have multiple fields or contain nested objects.
* __Untraceable errors__
  When a test fails during regression, we know that the complex objects no longer match, but we don't know which field fails. The only way to track this down is to open up a debugger and find where `.equals()` returned false.
* __Fragility__
  A change in the object created by the function under test will require a refactor of the test to supply matching data into the expectation.

Make assertions with appropriate matchers on specific fields.

## Test DSL

A test Domain Specific Language is a useful technique that may be re-used across a test suite, removing boilerplate and improving clarity.

## References

* [NHSBSA Anonymisation and Pseudonymisation standard][nhsbsa_anonymisation_and_pseudonymisation_standard]
* [Modern Best Practices for Testing in Java][modern_best_practices_testing_java]

[nhsbsa_anonymisation_and_pseudonymisation_standard]: <https://nhsbsauk.sharepoint.com/:b:/r/sites/InformationSecurity/SiteAssets/SitePages/NHS-BSA-Information-Security-Policies/Anonymisartion-and-Pseudonymisation-Standard.pdf?csf=1&web=1&e=SPLOtZ>
[modern_best_practices_testing_java]: <https://phauer.com/2019/modern-best-practices-testing-java/>
