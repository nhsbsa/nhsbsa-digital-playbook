---
layout: article
title: "Route to live"
description: "How we protect our users with a comprehensive toolset"
tags: [dev, test]
order: 0
status: DRAFT
---
We protect our users with a comprehensive toolset throughout the software delivery lifecycle. We use a "shift-left" approach. This means we integrate quality and security controls early in the development process, rather than leaving them until the end.

We provide control and observability with appropriate tooling at three levels:

* __Local development__ :wrench:
  Developers need the right tools to highlight issues when they edit code. We favour tools that embed within the Integrated Development Environment and simplify workflow.

* __Automated CI/CD pipeline__ :rocket:
  The Continuous Integration and Continuous Delivery (CI/CD) pipeline gives developers a safety net. It prevents unintended mistakes from reaching production by running tools against code changes before release. Non-compliance will break the build.

* __Centralised management__ :bar_chart:
  A centralised management interface brings together information from multiple sources into a single view. 

## Issue tracking

Track requirements, defects, security issues and technical debt to give visibility and accountability for change. Maintain a clear backlog of issues to prioritise and plan future work. Group individual changes into releasable units to support traceability of issues in production.

__Guidance__
* [Agile delivery](../../delivery/agile-delivery/)
* [Defect management](../../testing/defect-management/)

__Tools__
* [Jira] :wrench: :rocket: :bar_chart:

## Documentation

Project documentation captures requirements, decisions and operational procedures in a centralised, accessible format. It ensures knowledge continuity beyond any individual and helps new team members understand system context.

__Guidance__
* [APIs](../../development/coding-apis/)
* [Test documentation](../../testing/documentation/)

__Tools__
* [Confluence] :bar_chart:
* [Lucidchart] :bar_chart:
* [Miro] :bar_chart:
* [OpenAPI] :wrench: :bar_chart:

## Version control

Version control maintains a complete history of all code changes. It lets teams track who made what changes, when, and why. You can revert to previous versions if issues arise. Version control enables parallel development by allowing multiple developers to work on the same codebase simultaneously without conflict. It supports branching strategies that isolate feature development, bug fixes, and releases. This ensures unstable code doesn't impact production systems while enabling experimentation and collaboration. Version control provides an essential audit trail for compliance and security purposes.

__Guidance__
* [Git usage](../../development/dev-git/)

__Tools__
* [Git] :wrench: :rocket:
* [Gitlab] :wrench: :rocket: :bar_chart:

## Build automation

Create reproducible builds, with integrated controls to ensure quality.

__Tools__
* [Maven] :wrench: :rocket:
* [NPM] :wrench: :rocket:
* [Docker] :wrench: :rocket: :bar_chart:
* [Gitlab-CI] :rocket: :bar_chart:

## Cloud native, open source application and security frameworks

Use open source application and security frameworks. They're reliable because they're used worldwide and supported by large communities. Use cloud native services to reduce maintenance work and leverage built-in security features.

__Guidance__
* [Technologies](../../technologies/)

## Database Migration & Schema Management

Manage database schemas with source controlled migration files. This ensures traceability of change and reproducible environments from local development through to production.

__Tools__
* [Liquibase] :wrench: :rocket:
* [Gitlab-CI] :rocket: :bar_chart:

## Infrastructure as Code

Use Infrastructure as Code (IaC) for source controlled change management of environments. Provide a local equivalent of cloud infrastructure for rapid development cycles.

__Tools__
* [Terraform] :wrench: :rocket:
* [Localstack] :wrench:
* [AWS SAM CLI] :wrench:
* [Gitlab-CI] :rocket: :bar_chart:

## Dependency Chain Protection

Protect against [dependency chain abuses](https://owasp.org/www-project-top-10-ci-cd-security-risks/CICD-SEC-03-Dependency-Chain-Abuse) such as dependency confusion, dependency hijacking, typosquatting and brandjacking 

__Tools__
* [Nexus] :wrench: :rocket: :bar_chart:
* [Docker] :wrench: :rocket: :bar_chart:
* [Maven] :wrench: :rocket:
* [NPM] :wrench: :rocket:

## Secrets Detection

Prevent  sensitive information such as credentials and API keys from being committed to version control.

__Guidance__
* [Secrets detection](../../development/coding-secrets-detection/)

__Tools__
* [GitLeaks] :wrench: :rocket:
* [Git] hooks  :wrench:
* [GitLab-CI] :rocket:

## Unit Test Coverage

Ensure code is unit tested through comprehensive automated testing.

__Guidance__
* [Testing for developers](../../development/dev-tests/)
* [Writing clean tests](../../development/dev-tests-coding/)
* [Writing integration tests](../../development/dev-tests-integration/)

__Tools__
* [JUnit] :wrench: :rocket:
* [Jacoco] :wrench: :rocket:
* [Jest] :wrench: :rocket:
* [SonarQube for IDE] :wrench:
* [SonarScanner] :rocket:
* [GitLab-CI] :rocket:
* [SonarQube] :bar_chart:

## Code Quality

Enforce coding standards and identify technical debt by static analysis of code.

__Guidance__
* [Static code analysis](../../development/coding-quality-assurance/)
* [Coding](../../development/coding/)
* [Frontends](../../development/coding-frontend/)
* [APIs](../../development/coding-apis/)

__Tools__
* [SonarQube for IDE] :wrench:
* [SonarScanner] :rocket:
* [GitLab-CI] :rocket:
* [SonarQube] :bar_chart:

## Static Application Security Testing (SAST)

Extend Code Quality checks with security specific SAST tooling.

__Guidance__
* [Static code analysis](../../development/coding-quality-assurance/)
* [SonarQube in Gitlab-CI](https://bsa2468.atlassian.net/wiki/spaces/KB/pages/3699507238/SonarQube+in+Gitlab-CI+build+sonar-ci+v3)

__Tools__
* [SonarQube for IDE] :wrench:
* [SonarScanner] :rocket:
* [GitLab-CI] :rocket:
* [SonarQube] :bar_chart:

## Software Composition Analysis (SCA)

Analyse software dependencies for vulnerabilities.

__Guidance__
* [Static code analysis](../../development/coding-quality-assurance/)
* [OWASP Dependency Check](https://bsa2468.atlassian.net/wiki/spaces/KB/pages/5001314484/Dependency+Check+Tool+Usage)

__Tools__
* [OWASP Dependency Check] :wrench: :rocket:
* [SonarQube for IDE] :wrench:
* [SonarScanner] :rocket:
* [GitLab-CI] :rocket:
* [SonarQube] :bar_chart:

## Patching

Regularly patch software dependencies and plan ahead for major dependency upgrades

__Guidance__
* [Application patching](../../technologies/tech-patching/)
* [Release Adoption Schedule](../../technologies/tech-release-adoption-schedule/)

__Tools__
* [Maven] :wrench:
* [NPM] :wrench:

## License Compliance

Ensure use of third-party dependencies comply with their licence terms and conditions. 

__Tools__
* [SonarQube LicenseCheck] :wrench: :rocket:
* [SonarQube for IDE] :wrench:
* [SonarScanner] :rocket:
* [GitLab-CI] :rocket:
* [SonarQube] :bar_chart:

## Container Scanning

Scan container images for vulnerabilities and misconfigurations.

__Tools__
* [Docker Scout] :wrench: :bar_chart:
* [AWS Inspector] :rocket:
* [AWS Security Hub] :bar_chart:

## Peer Review

All code must be peer reviewed to ensure quality and security requirements are met.

__Guidance__
* [Peer review](../../development/coding-peer-review/)

__Tools__
* [Pair/mob programming] :wrench:
* [Gitlab-CI] merge request and approval workflow :wrench: :rocket:
* [GitLab] code review analytics :rocket:

## Pipeline Compliance

Ensure pipeline controls are configured correctly.

__Tools__
* [Pre-commit] :wrench:
* [GitLabform] :rocket:

## Dynamic Application Security Testing (DAST)

Test running applications for security vulnerabilities.

__Process__
* IT Health Checks :bar_chart:

## Acceptance Testing

Validate application functionality meets business requirements.

__Guidance__
* [Acceptance Testing](../../testing/test-frameworks/acceptance-test/)

__Tools__
* [Cucumber] :wrench: :rocket:
* [Selenium] :wrench: :rocket:
* [Test reports] :bar_chart:

## API Testing

Ensure APIs meet functional requirements.

__Guidance__
* [API Testing](../../testing/test-frameworks/api-test/)

__Tools__
* [Karate] :wrench: :rocket:
* [Test reports] :bar_chart:

## Accessibility Testing

Ensure applications meet accessibility standards.

__Guidance__
* [Accessibility Testing](../../testing/test-frameworks/accessibility-test/)

__Tools__
* [Axe] :wrench: :rocket:
* [Wave] :wrench: :rocket:
* [Lighthouse] :wrench: :rocket:
* [NVDA] :wrench:
* [Mac Voiceover] :wrench:
* [Dragon] :wrench:
* [Mac Voice Control] :wrench:
* [Test reports] :bar_chart:

## Compatibility Testing

Verify applications work across different environments and browsers.

__Guidance__
* [Compatibility Testing](../../testing/test-frameworks/compatibility-test/)

__Tools__
* [Saucelabs] :wrench: :rocket:
* [Test reports] :bar_chart:

## Performance Testing

Measure application performance under various load conditions.

__Guidance__
* [Performance Testing](../../testing/test-frameworks/performance-test/)

__Tools__
* [JMeter] :wrench: :rocket:
* [Test reports] :bar_chart:

## Release Assurance

Sign-off for release into production

__guidance__
* [Release Assurance](../../testing/release-assurance/)

## Continuous Monitoring

Ongoing security and compliance monitoring in production.

__Guidance__
* [Logging](../../testing/test-frameworks/performance-test/)

__Tools__
* [Datadog] :bar_chart:

[Jira]: https://www.atlassian.com/software/jira
[Confluence]: https://www.atlassian.com/software/confluence
[Lucidchart]: https://www.lucidchart.com/
[Miro]: https://miro.com/index/
[OpenAPI]: https://www.openapis.org/
[Git]: https://git-scm.com/
[Gitlab]: https://about.gitlab.com/
[Docker]: https://www.docker.com/
[Gitlab-CI]: https://docs.gitlab.com/ee/ci/
[GitLeaks]: https://github.com/GitLeaks
[Git hooks]: https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks
[Maven]: https://maven.apache.org/
[NPM]: https://www.npmjs.com/
[Nexus]: https://www.sonatype.com/products/repository-oss
[JUnit]: https://junit.org/
[Jacoco]: https://www.jacoco.org/jacoco/
[Jest]: https://jestjs.io/
[Liquibase]: https://www.liquibase.com/
[Terraform]: https://developer.hashicorp.com/terraform
[Localstack]: https://www.localstack.cloud/
[AWS SAM CLI]: https://github.com/aws/aws-sam-cli
[SonarQube]: https://www.sonarsource.com/products/sonarqube/
[SonarQube for IDE]: https://www.sonarsource.com/products/sonarlint/
[SonarScanner]: https://docs.sonarqube.org/latest/analysis/scan/sonarscanner/
[OWASP Dependency Check]: https://owasp.org/www-project-dependency-check/
[SonarQube LicenseCheck]: https://github.com/porscheinformatik/sonarqube-licensecheck
[Docker Scout]: https://docs.docker.com/scout/
[AWS Inspector]: https://aws.amazon.com/inspector/
[AWS Security Hub]: https://aws.amazon.com/security-hub/
[Pair/mob programming]: https://martinfowler.com/articles/on-pair-programming.html
[Gitlab merge request and approval workflow]: https://docs.gitlab.com/ee/user/project/merge_requests/approvals/
[GitLab code review analytics]: https://docs.gitlab.com/ee/user/analytics/code_review_analytics.html
[Pre-commit]: https://pre-commit.com/
[GitLabform]: https://gitlabform.github.io/gitlabform/
[Cucumber]: https://cucumber.io/
[Karate]: https://karatelabs.github.io/karate/
[Selenium]: https://www.selenium.dev/
[Wave]: https://wave.webaim.org/
[Axe]: https://www.deque.com/axe/
[Lighthouse]: https://github.com/GoogleChrome/lighthouse
[NVDA]: https://www.nvaccess.org/
[Mac Voiceover]: https://support.apple.com/en-gb/guide/voiceover/welcome/mac
[Dragon]: https://www.nuance.com/en-gb/dragon.html
[Mac Voice Control]: https://support.apple.com/en-gb/102225
[Test reports]: https://nhsbsa.github.io/nhsbsa-digital-playbook/testing/documentation/
[Saucelabs]: https://saucelabs.com/
[JMeter]: https://jmeter.apache.org/
[Datadog]: https://www.datadoghq.com/
