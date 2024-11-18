---
layout: article
title: "Release adoption schedule"
description: "When to adopt software releases into production"
tags: [tech, dev]
order: 
  tech: 2
  dev: 6
status: FINAL
review:
    last_reviewed_date: 2024-11-18
    review_cycle:
        month: 3
issuesheet:
    reference: 
    author: "Software Development Lead"
    issued_to: "DDaT"
    issued_reason: "For information"
    revisions:
        - version: "1.0"
          date: 2022-11-17
          amended_by: "PT"
          approved_by: "Technical Design Authority"
          details: "Initial release"
---
{% import "appReleaseAdoptionSchedule/macro.njk" as schedule with context %}

To manage change of our runtimes and downstream services we maintain a release adoption schedule based on these _phases_:

::: card

__PENDING__ {.t_pending}
: Pending release

__ASSESS__ {.t_assess}
: Assess the impact of migrating.
  Teams may choose to adopt if they understand and accept any risks involved.

__ADOPT__ {.t_adopt}
: Adopt this version.
  Teams should schedule migration based on the adoption date.

__DEPRECATE__ {.t_deprecate}
: Move off from this version.
  When the next version is set for adoption, previous versions will deprecate and teams should migrate forward.

__DECOMMISSION__ {.t_decommission}
: Do not use this version.
  The decommission date is a final deadline for moving off this version.
  Schedules contain information on decommissioned versions for visibility.

:::

## Node.js

Node.js projects should use [NVM](https://github.com/nvm-sh/nvm) to manage Node versions in development.
Include a `.nvmrc` file in the repository to specify the Node.js version in source code.

::: details How we work out the adoption schedule for Node.js

We follow the [Node.js](https://nodejs.org/en/about/previous-releases) release schedule.

::: card

__ASSESS__
: on _initial release_

__ADOPT__
: at _active LTS start_ (6 months after initial release)

__DECOMMISSION__
: by _end of life_

:::

{{ schedule.appReleaseAdoptionSchedule('nodejs') }}

### AWS Lambda - Node.js

::: details How we work out the adoption schedule for Node.js Lambdas

AWS Lambdas run on platforms managed by Amazon. They publish release dates and a deprecation policy.

* [AWS Lambda releases](https://docs.aws.amazon.com/lambda/latest/dg/lambda-releases.html)
* [AWS Lambda runtime deprecation policy](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html)

::: card

__ASSESS__
: on _AWS release_

__ADOPT__
: 6 months after _AWS release_

__DECOMMISSION__
: by _AWS Phase 1 deprecation_

:::

{{ schedule.appReleaseAdoptionSchedule('nodejs_aws_lambda') }}

## Java

Java projects define the source and target Java version in the Maven `pom.xml` file.
Teams may use a Java Version Manager such as [JEnv](https://github.com/jenv/jenv) to manage Java versions in development.

::: details How we work out the adoption schedule for Java

We follow the [Java SE support roadmap](https://www.oracle.com/java/technologies/java-se-support-roadmap.html).

Our standard builds use the Temurin Java runtime which maintains its own [release roadmap](https://adoptium.net/en-GB/support/).

::: card

__ASSESS__
: on _Java SE General Availability (GA) date_

__ADOPT__
: 6 months after _Java SE GA date_

__DECOMMISSION__
: by _Java SE premier support end date_

:::

{{ schedule.appReleaseAdoptionSchedule('java') }}

### Spring Boot

::: details How we work out the adoption schedule for Spring Boot

We follow the [Spring Boot support roadmap](https://spring.io/projects/spring-boot).
Spring Boot uses a 6 month release cycle between minor versions with a 3 month overlap for [Open Source Software (OSS) support](https://tanzu.vmware.com/support/oss).

::: card

__ASSESS__
: on initial release

__ADOPT__
: 2 months after initial release

__DECOMMISSION__
: by end of OSS support date

:::

{{ schedule.appReleaseAdoptionSchedule('spring_boot') }}

### Spring Cloud

::: details How we work out the adoption schedule for Spring Cloud

We follow the [Spring Cloud Supported Version roadmap](https://github.com/spring-cloud/spring-cloud-release/wiki/Supported-Versions).

There is often a delay between Spring Boot releases and compatible Spring Cloud versions. This may impact the ability to keep up to date with Spring Boot and is unavoidable.

::: card

__ASSESS__
: on initial release

__ADOPT__
: 2 months after initial release

__DECOMMISSION__
: by end of OSS support date (3 years from the major release date and 12 months from minor release date)

:::

{{ schedule.appReleaseAdoptionSchedule('spring_cloud') }}

### AWS Lambda - Java

::: details How we work out the adoption schedule for Java Lambdas

AWS Lambdas run on platforms managed by Amazon. They publish release dates and a deprecation policy.

* [AWS Lambda releases](https://docs.aws.amazon.com/lambda/latest/dg/lambda-releases.html)
* [AWS Lambda runtime deprecation policy](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html)

::: card

__ASSESS__
: on _AWS release_

__ADOPT__
: 6 months after _AWS release_

__DECOMMISSION__
: by _AWS Phase 1 deprecation_

:::

{{ schedule.appReleaseAdoptionSchedule('java_aws_lambda') }}

## Ruby

Ruby is a deprecated language for use in the NHSBSA. Existing projects using Ruby should maintain versions in accordance with this schedule.

Ruby projects should use [rbenv](https://github.com/rbenv/rbenv) to manage Ruby versions.
Include a `.ruby-version` file in the repository to specify the Ruby version in source code.

::: details How we work out the adoption schedule for Ruby

We follow the [Ruby release schedule](https://www.ruby-lang.org/en/downloads/releases/).

Since Ruby 2.1, a new major version of Ruby has been released every year on December 25th, and EOLed 3 years, 3 months later.

::: card

__ASSESS__
: on _release date_

__ADOPT__
: 6 months after _release date_

__DECOMMISSION__
: by _end of life date_

:::

{{ schedule.appReleaseAdoptionSchedule('ruby') }}

## PostgreSQL

::: details How we work out the adoption schedule for PostgreSQL

We follow the [PostgreSQL versioning policy](https://www.postgresql.org/support/versioning/).

::: card

__ASSESS__
: on _release_ date

__ADOPT__
: 6 months after _release_ date

__DECOMMISSION__
: by _final Release_ date

:::

{{ schedule.appReleaseAdoptionSchedule('postgresql') }}
