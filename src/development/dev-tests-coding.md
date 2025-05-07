---
layout: article
title: "Writing clean tests"
tags: dev_testing
order: 10
review:
    last_reviewed_date: 2023-05-06
    review_cycle: ANNUAL
---
For a great article on writing clean tests in Java, read this article:

> [Modern Best Practices for Testing in Java][modern_best_practices_testing_java]

## Background

Unit tests serve as the specification for a class, function, or component behaviour. Someone who is new to a codebase should be able to read a unit test and understand what the code is supposed to do.

A clean test is one that can be easily read and understood. Writing clean tests is important as it removes barriers to understanding and ensures that the code is doing what is intended.

Have you ever reviewed code and spent more time trying to understand the test than the functional code. Have you ever given up and just accepted the change? After all, the author probably knew what they were doing, right?

This page shows small improvements that can be made to lower the bar for comprehension.

## Naming

Fields names should make clear their purpose within the test.

When using mocking frameworks clearly identify mock objects and argument captors. E.g. Mocks can be prefixed with 'mock...' and Captors can be suffixed with '...Captor'

### Naming test cases

Test cases should be named using some form of BDD syntax. The usual `Given-When-Then` can be overly verbose. Consider using the more succinct `Should-When` syntax, or even a simple `Should`.

Here are some example test case names against a function that sorts by user email address

| Style | Example |
| ----- | ------- |
| given-when-then | givenMultipleUsersWhenMappedToViewThenSortedByEmail |
| should-when | shouldSortByEmailWhenMultipleUsers |
| should | multipleUsersShouldSortByEmail |
| statement | multipleUsersSortedByEmail |

Most importantly, names should be unambiguous and clear.

Some frameworks rely on method names to identify test cases. Others, such as JUnit use annotations, avoiding the need for the _test_ prefix.

## Structure 'given-when-then' code with comments

Our test cases should use a standard BDD structure of:

* `Given` - to set up fixture data as pre-conditions
* `When` - to call the method under test
* `Then` - make assertions on the actual response (and verify any mock interactions)

This is also sometimes referred to as `Arrange`, `Act`, `Assert`

For frameworks that do not impose this structure in their API, readability is improved by use of comments.

```java
//given

//when

//then
```

There is no need to write anything beside the comments as they are simply delimiters. The point is to show the clean structure of your test.

If you're unable to add just these three comments in the right order within your test code, then your test probably isn’t clean.

## Avoid shared fixture data

Fixtures are data-sets that you use to test scenarios with your code.

An anti-pattern is to define test fixture data at the top of a class and re-use it across different cases. There are problems with this approach:

* __Cross test pollution__
  A risk that fixture data is not re-initialised between tests. The action of one test can then affect another.
* __Meaningless names__
  Shared fixture data is often named with simple numeric suffixes to identify them. E.g. user1, user2, user3. Numeric suffixes convey no meaning. We can assume some of the tests need multiple users, but there is no context about why we need more than one.
  Meaningless names are confusing in tests.
* __Noise__
  Shared fixture data is usually placed as boilerplate at the top of the test class.
  If you were reading such a test, you'd probably skip all of the initialisation code and come back to it after having read the test cases themselves.
* __No explicit intent__
  As you read the test cases, you will need to go back to the shared data and keep in your head what user1 and user2 are being used for. How they are used is down to the test case. The lack of intent from the field definitions means the reader has to keep this context in their head.

A better approach is to declare fixture data within the test.

## Create fixture data in factory methods

If we decide to avoid shared fixture data, then could we end up with lots of object creation code within our tests? Yes, you can. This is ok if object creation can be done with clear intent in a one liner. But even using builders, object creation can span multiple lines of needless boilerplate.

A simple solution is to use factory methods within the test class.

* __Less verbose__
  Exposing a method that only takes the argument that varies for the test case means all the default boilerplate is handled in one place, out of the way.
* __Clear intent__
  Exposing multiple methods to describe different situations can clearly express why a fixture object is being created.
* __Clear naming__
  As objects are created within the test, they can be assigned to variables that suit the test case.

Use methods with clear names for creating fixture data when it is needed.
Name the fixture variables to further clarify the intent within the test.

## Testing with date and time

When code is dependent on date or time, your tests must take control of time so they can test all the different flows and expectations.

Avoid hardcoding fixture data to specific dates/times far in the future. Such tests will fail one day, meaning another developer will have to investigate and fix the problem.

There are two common approaches to testing with time:

* __Offset input data__
  Use system date and/or time and adjust with an offset to create values in fixture data. The code will apply logic based on the current system time and the input data. This is a simple approach that works well in most cases.

* __Control system time__
  In the [Greeter kata](https://github.com/wix/tdd-katas), a salutation changes through the course of the day. The only way to test the different scenarios is to take control of system time.
  
  Most languages have a way to control system time in code.
  * [Java](https://www.baeldung.com/java-override-system-time)
  * [Javascript using Jest](https://codewithhugo.com/mocking-the-current-date-in-jest-tests/)

## Test one thing

If you adopt Test Driven Development (TDD) you should find that your test cases are lean, with just enough fixture data to test a single additional requirement.

If you find that each additional test case is performing all the previous steps to initialise your fixtures, you're doing too much work and diluting the purpose of the test.

The reader of a test need only see the data required for one scenario at a time. Consider what is needed to satisfy the test case and nothing more. If you are covering something else then write a different test case for that scenario.

## Test coverage

Coverage tools can be a useful guide to see if you have missed a branch in execution. But they aren't a substitute for thinking through the requirements and ensuring they are 'covered' by tests. Remember to consider the test as a specification for the expected behaviour.

When testing consider the following:

* __Null or missing arguments__
  It can be useful to make assertions on input arguments to ensure you're getting what you expect
  Avoid _if_ conditions that check for _null and empty_: This results in 4 branches in execution, which you have to test. Instead prefer a library method that encapsulates this condition check and simplifies the logic.
* __Exceptions__
  Tests should be explicit about exception handling.
  Don't log expected exceptions in your tests as this creates noise.
* __Empty collections__
  Iterating over an empty collection can result in cleaner code than having a conditional check. But make sure you test for expected behaviour when an empty collection is provided.
* __Boundary conditions__
  Always test the edge cases.

## Make assertions with appropriate matchers

Assertions should be simple and clear with failure messages that identify the error. This is done by selecting appropriate matchers.

Be specific.

It can be easier to learn and use just a few of the matchers in an assertion framework. Take time to understand the methods available, so tests are succinct and failure messages are more informative.

## Avoid asserting equality with complex objects

Sometimes a complex object is built up and used to test equality in a matcher. In Java, this ultimately defers to the .equals() method.

Asserting equality with complex objects leads to these issues:

* __Obscurity__
  It is difficult for the reviewer to understand which field value is being checked when objects have multiple fields or contains nested objects.
* __Untraceable errors__
  When a test fails during regression, we know that the complex objects no longer match. But we don’t know which field fails. The only way to track this error down is to open up a debugger and find where the .equals() method returned false.
* __Fragility__
  A change in the object created by the function under test will require a refactor of the test to supply matching data into the expectation.

Make assertions with appropriate matchers on specific fields.

## Test DSL

A test Domain Specific Language is a useful technique that may be re-used across a test suite, removing boilerplate and improving clarity.

## References

* [Modern Best Practices for Testing in Java][modern_best_practices_testing_java]

[modern_best_practices_testing_java]: <https://phauer.com/2019/modern-best-practices-testing-java/>
