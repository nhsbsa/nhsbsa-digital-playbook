---
layout: article
title: "Coding"
description: "What do we value when writing code..."
tags: dev
order: 1
---
> Any fool can write code that a computer can understand. Good programmers write code that humans can understand.
> _Martin Fowler_

This page highlights some key advice when coding.

## Coding principles

There are many principles that we should keep in mind when writing code. You can read about many of these on the [Principles wiki][principles_wiki]. Some principles of note:

* [Don't Repeat Yourself][principles_dry]
* [Keep It Simple Stupid][principles_kiss]
* [Murphy's Law][principles_ml] - Design for Errors
* [Postel's Law][principles_pl] - Be conservative in what you do, be liberal in what you accept from others
* [Principle of least privilege][principles_least_privilege]
* [SOLID principles][principles_solid] comprising:
  * [Single Responsibility Principle][principles_srp]
  * [Open Closed Principle][principles_ocp]
  * [Liskov Substitution Principle][principles_lsp]
  * [Interface Segregation Principle][principles_isp]
  * [Dependency Inversion Principle][principles_di]

## Software Development Patterns

Design patterns are common approaches to solving common problems in software development. The book [Design Patterns: Elements of Reusable Object-Oriented Software][goodreads_designpatterns] by the Gang of Four describes the original patterns they identified. They are divided into creational, structural and behavioural patterns and should be understood and used where appropriate.

The [Refactoring Guru][refactoring_guru] website covers design patterns in an engaging format.

## Clean code

> "Clean code is code that has been taken care of. Someone has taken the time to keep it simple and orderly. They have paid appropriate attention to details. They have cared."
> ― Robert C. Martin

We advise all developers to read the seminal book _[Clean Code: A Handbook of Agile Software Craftsmanship][goodreads_cleancode]_ by Robert C. Martin.

To get an idea of the scope of Robert Martin's book, take a look at the [chapter headings](/development/clean-code)

## Code smells and refactoring

Kent Beck coined the term _code smell_ to refer to problems with code that are easy to spot, easy to fix but can signify more serious underlying problems. Martin Fowler described a set of standard code smells and associated patterns to refactor code and fix them.

We advise all developers to read Martin Fowler's book _[Refactoring: Improving the Design of Existing Code][goodreads_refactoring]_.

Alternatively, visit the [Refactoring][refactoring_guru] website that describes code smells and refactors.

## 12 Factor App

Production application code should be written according to principles defined in The [12 Factor App][12_factor_app]:

* __Codebase__ - One codebase tracked in revision control, many deploys
* __Dependencies__ - Explicitly declare and isolate dependencies
* __Config__ - Store config in the environment
* __Backing services__ - Treat backing services as attached resources
* __Build, release, run__ - Strictly separate build and run stages
* __Processes__ - Execute the app as one or more stateless processes
* __Port binding__ - Export services via port binding
* __Concurrency__ - Scale out via the process model
* __Disposability__ - Maximize robustness with fast startup and graceful shutdown
* __Dev/prod parity__ - Keep development, staging, and production as similar as possible
* __Logs__ - Treat logs as event streams
* __Admin processes__ - Run admin/management tasks as one-off processes

## References

* [Principles wiki][principles_wiki]
* [Design Patterns: Elements of Reusable Object-Oriented Software][goodreads_designpatterns]
* [Clean Code: A Handbook of Agile Software Craftsmanship][goodreads_cleancode]
* [Refactoring: Improving the Design of Existing Code][goodreads_refactoring]
* [Refactoring Guru][refactoring_guru]
* [12 Factor App][12_factor_app]

[principles_wiki]: <http://principles-wiki.net/start>
[principles_dry]: <http://principles-wiki.net/principles:don_t_repeat_yourself>
[principles_kiss]: <http://principles-wiki.net/principles:keep_it_simple_stupid>
[principles_ml]: <http://principles-wiki.net/principles:murphy_s_law>
[principles_pl]: <http://principles-wiki.net/principles:postel_s_law>
[principles_least_privilege]: <http://principles-wiki.net/principles:principle_of_least_privilege>
[principles_solid]: <http://principles-wiki.net/collections:solid>
[principles_srp]: <http://principles-wiki.net/principles:single_responsibility_principle>
[principles_ocp]: <http://principles-wiki.net/principles:open-closed_principle>
[principles_lsp]: <http://principles-wiki.net/principles:liskov_substitution_principle>
[principles_isp]: <http://principles-wiki.net/principles:interface_segregation_principle>
[principles_di]: <http://principles-wiki.net/principles:dependency_inversion_principle>
[goodreads_designpatterns]: <https://www.goodreads.com/book/show/85009.Design_Patterns>
[goodreads_cleancode]: <https://www.goodreads.com/en/book/show/3735293-clean-code>
[goodreads_refactoring]: <https://www.goodreads.com/en/book/show/44936.Refactoring>
[refactoring_guru]: <https://refactoring.guru/refactoring>
[refactoring_guru_patterns]: <https://refactoring.guru/design-patterns>
[12_factor_app]: <https://12factor.net/>
