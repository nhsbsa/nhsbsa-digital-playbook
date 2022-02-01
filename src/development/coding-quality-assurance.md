---
layout: article
title: "Code quality assurance"
tags: dev
order: 7
---
## SonarQube

We use SonarQube as our standard static analysis tool and build breaker for deviations against our quality rules.

Production source code must be checked against the current NHSBSA static analysis rules profile when available for the specific language.

## Thresholds

The automated build will break for:

* Any `BLOCKER` or `CRITICAL` issues
  Production source code must not contain any issues that are considered `BLOCKER` or `CRITICAL`.
  Although the build will allow issues at a lower severity to pass, we advice that all issues are addressed to avoid a buildup of technical debt
* Below 80% test coverage through unit and integration testing

Exceptions have been allowed for some of our legacy code while remediation work addresses the issues.

## References

* [SonarQube issue definitions][sonarqube_issues]
* [SonarQube metric definitions][sonarqube_metric_definitions]

[sonarqube_issues]: <https://docs.sonarqube.org/latest/user-guide/issues/>
[sonarqube_metric_definitions]: <https://docs.sonarqube.org/latest/user-guide/metric-definitions/>
