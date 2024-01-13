---
layout: article
title: "Static code analysis"
tags: dev
order: 8
review:
    last_reviewed_date: 2023-05-06
    review_cycle: ANNUAL
---
## SonarQube

We use SonarQube as our standard static analysis tool and build breaker for deviations against code quality rules.

Production source code must be checked against the current NHSBSA static analysis rules profile where available for the specific language.

## Thresholds

The automated build will break for:

* __Any `BLOCKER` or `CRITICAL` issues__
  Production source code must not contain any issues that are considered `BLOCKER` or `CRITICAL`.
  Builds may allow issues at a lower severity to pass. All issues should be addressed to avoid a buildup of technical debt.
* __Less than 80% test coverage__
  Test coverage is measured through unit and integration testing

## References

* [SonarQube issue definitions][sonarqube_issues]
* [SonarQube metric definitions][sonarqube_metric_definitions]

[sonarqube_issues]: <https://docs.sonarqube.org/latest/user-guide/issues/>
[sonarqube_metric_definitions]: <https://docs.sonarqube.org/latest/user-guide/metric-definitions/>
