---
layout: article
title: "Application patching"
description: "Keeping our software up to date with the latest versions of dependant libraries and runtimes"
tags: [tech, dev, security, dev-security]
order:
  tech: 1
  dev: 5
  security: 3
  dev-security: 3
status: FINAL
review:
    last_reviewed_date: 2024-01-14
issuesheet:
    reference: 
    author: "Head of Software Engineering"
    issued_to: "DDaT"
    issued_reason: "For information"
    revisions:
        - version: "1.1"
          date: 2024-01-14
          amended_by: "PT"
          details: "Playbook release"
        - version: "1.0"
          date: 2022-03-03
          amended_by: "PT"
          approved_by: "Technical Design Authority"
          details: "Initial release"
---
Keeping software up to date with the latest versions of runtimes and dependant libraries is a key mitigation to the [OWASP Top Ten 2021](https://owasp.org/Top10/), risk number 6: [Vulnerable and Outdated Components](https://owasp.org/Top10/A06_2021-Vulnerable_and_Outdated_Components/)

Patching and upgrading provides considerable benefit:

* We have a pro-active approach to vulnerability management
  Regular patching embeds the practice as a normal activity, and so responding to vulnerable dependencies happens as a matter of course.
* Our applications stay fresh as they are actively maintened
  Updating runtime, framework and library APIs encourages us to adopt best practices as they evolve.

{#

## Terms

::: card

__Dependency__
: A functional library of code that provides features to a software project.

__Runtime__
: An executable piece of software that ‘runs’ application code. For instance, compiled Java code relies on a Java runtime to actually run. Runtimes are CPU architecture and operating system specific.
  
  Runtimes do not always follow the semantic versioning system. For the purposes of this standard, we will only refer to patch and LTS releases for runtimes.

__LTS__
: Long Term Support

  Runtimes often release an LTS version. LTS releases provide a stable base on which to run application code, as major upgrades are less frequent.

__Semantic Version__ (semver)

: A logical system used to allocate version numbers to releasable source code

  Given a version number MAJOR.MINOR.PATCH, increment the:

  MAJOR version when making incompatible changes

  MINOR version when adding functionality in a backwards compatible manner

  PATCH version when adding backwards compatible bug fixes.

  Semantic version numbers may include pre-release versions, although precedence can be difficult to manage for concurrent work-streams.

:::

#}

## Dependency management

All projects must use a dependency management system to specify the dependencies and versions of library code that they rely upon.

!!! warning Do not commit binaries into source control

Checked in binaries are not managed with a manifest file, making it impossible to use standards tools to identify dependencies with vulnerabilities from source.

Binaries cause unnecessary and considerable bloat to the source code repository.

!!!

The NHSBSA approved package management tools are:

::: card

__Java__
: Maven build using `pom.xml`

__Node.js__
: NPM package management using `package.json`

__Python__
: Pip package management using `pyproject.toml`
  Always use virtual environments to isolate project-specific dependencies from a shared or base OS Python installation

__Ruby__
: Bundle package management using `Gemfile`
  Always use virtual environments to isolate project-specific dependencies from a shared or base OS Ruby installation

:::

The build configuration file must be committed into source control, with a unique identifier for each dependency and a specific version. Using a dependency manifest with specific versions means:

* built artifacts are reproducable
* the configuration file may be used to detect dependencies that need upgrade

## Patching schedule

!!! warning Release Adoption Schedule

The NHSBSA maintains a [Release Adoption Schedule](../tech-release-adoption-schedule/) that specifies the versions of runtimes and key frameworks:

* Node.js
* Java
* Spring Boot
* Spring Cloud
* AWS Lambdas (Node and Java)
* Ruby
* PostgreSQL
!!!

Runtimes and application dependencies should be upgraded in a regular release cycle according to this schedule:

::: card

__PATCH__
: Upgrade within __1 month__ of release

__MINOR__
: Upgrade within __three months__ of release

  Consider avoiding MINOR version upgrades until the first patch release or 1 month after release. i.e. prefer `x.y.1` over `x.y.0`

__MAJOR__
: Upgrade within __one year__ of release

  Consider avoiding MAJOR version upgrades until the first patch release or 3 months after release. i.e. prefer `x.0.1` over `x.0.0`

  Early adopters of major releases should keep an active view of all patch releases.

:::

## Route to live

Dependency and Runtime patching MUST follow the standard route to live:

* Local development environments
* CI/CD build environment
* Test environments
  Note: The term ‘test environment’ should encompass acceptance, UAT, performance and staging environments
* Production

## Non-compliance

Non-compliance to this patching guidance should be recorded as technical debt and a risk to the business.
