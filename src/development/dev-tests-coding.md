---
layout: article
title: "Writing clean tests"
tags: dev
order: 10
---
For a great article on writing clean tests in Java, read this article:

> [Modern Best Practices for Testing in Java][modern_best_practices_testing_java]

## Background

Unit tests serve as the specification for a class or function. Someone who is new to a codebase should be able to read a unit test and understand what the code is supposed to do.

A clean test is one that can be easily read and understood. Writing clean tests is important as it removes barriers to understanding and helps to ensure that the functional code is doing what is intended.

Have you ever reviewed code and spent more time trying to understand the test code than the functional code. Have you ever given up on really trying to understand the test and just accepted the change? After all, the author probably knew what they were doing, right?

This page shows small improvements that can be made to lower the bar for comprehension.

## Use succinct test names

Test cases should be named using some form of BDD syntax. The usual `Given-When-Then` can be overly verbose. Consider using the more succinct `Should-When` syntax, or even simple `Should`.

Here are some example test case names for a function that sorts by user email address

| Style | Example |
| ----- | ------- |
| given-when-then | givenMultipleUsersWhenMappedToViewThenSortedByEmail |
| should-when | shouldSortByEmailWhenMultipleUsers |
| should | multipleUsersShouldSortByEmail |
| statement | multipleUsersSortedByEmail |

Most importantly, the name should be unambiguous and clear.

Some frameworks rely on method names to identify test cases. In others, such as JUnit4/5 we use annotations, and so there's no benefit to adding the keyword _test_.

## Structure 'given-when-then' with comments

Our test cases should use a standard BDD structure of:

* `Given` - to set up fixture data as pre-conditions
* `When` - to call the method under test
* `Then` - make assertions on the actual response (and verify any mock interactions)

This is also sometimes referred to as `Arrange`, `Act`, `Assert`

For frameworks that do not impose this structure in their API, reasability of tests will improve immensely by following the very simple process of grouping the three sections using comments.

```java
//given

//when

//then
```

There is no need to write anything beside the comments as they are simply delimiters. The point is to show the clean structure of your test.

If you're unable to add just these three comments in the right order within your test code, then your test probably isn’t clean.

## Avoid shared fixture data

Fixtures are data-sets that you use to test certain scenarios with your code.

Its a frequently used pattern to define test fixture data at the top of a class and re-use it for the different cases. There are a few problems with this approach:

* Cross test pollution
  Using this pattern introduces the risk that someone forgets to initialise fixture data between tests. The action of one test can then affect another.
* Meaningless names
  Shared fixture data is often named with simple numeric suffixes to identify them. E.g. user1, user2, user3.
  Numeric suffixes convey no meaning at all. We can presume some of the tests need multiple users, but there is no context about why we need more than one.
  Meaningless names are confusing when used within the test case
* Noise
  Shared fixture data is usually placed as boilerplate at the top of the test class.
  If you were reading such a test, you'd probably skip all of the initialisation code and come back to it after having read the test cases themselves.
* No explicit intent
  As you read the test cases, you will need to go back to the shared data and keep in your head what user1 and user2 are being used for. How they are used is down to the test case. The lack of intent from the field definitions means the reader has to keep this context in their head.
  
A better approach is to declare the fixture within the test.

## Create fixture data in factory methods

If we’ve decided to avoid shared fixture data, then won’t we end up with lots of object creation code within our tests? Yes, you can. This is ok if object creation can be done with clear intent in a one liner. But even using lombok builders, object creation can often span multiple lines which leads to needless boilerplate.

A very simple solution to this is to use simple factory methods at the bottom of the test class.

* Less verbose
  Exposing a method that only takes the argument that varies for the test case means all the default boilerplate is handled in one place, out of the way.
* Clear intent
  Exposing multiple methods to describe different situations can clearly express why a fixture object is being created.
* Clear naming
  As objects are created within the test, they can be assigned to variables that suit the test case.

Use methods with clear names and intent to create fixture data when it is needed.
Name the created fixture objects to further clarify the intent within the test.

### Use fixture data to test one thing

If you adopt Test Driven Development (TDD) you should find that your test cases are lean, with just enough fixture data to test a single additional requirement.

If you find that each additional test case is actually performing all the previous steps to initialise your fixtures, then you're probably doing too much work, and diluting the intent of the tests.

Its important that the reader of a test only needs to see the data items that are required to test the one thing that has changed since the previous test case.

Consider what is actually needed to satisfy the case under test and nothing more.

If you are worried about something else happening then write a test case for that specific scenario.

## Avoid asserting equality with complex objects

You sometimes see a complex object being built up and used to test equality in a matcher. In Java, this ultimately defers to .equals().

Asserting equality with complex objects leads to these issues:

* Obscurity
  It is difficult for the reviewer to understand what is being asserted as objects often have a lot of data within them. It is difficult to know which part of the object data is the being asserted.
* Untraceable errors
  When a test fails during regression, we know that the complex objects no longer match. But we don’t know which field fails. The only way to track this error down is to open up a debugger and find where the .equals() method returned false.
* Fragilility
  A change in the object created by the function under test will necessitate a refactor of the test to supply matching data into the expectation.

Make assertions with appropriate matchers rather than comparing complex objects with equality.

## Make assertions with appropriate matchers

Assertions should be simple and clear with failure messages that identify the error. This is done by selecting appropriate matchers.

Be specific.

It can be easier to learn and use just a few of the matchers in an assertion framework. But by taking some time to read all the options available, the failure messages can be much more informative.

## References

* [Modern Best Practices for Testing in Java][modern_best_practices_testing_java]

[modern_best_practices_testing_java]: <https://phauer.com/2019/modern-best-practices-testing-java/>
