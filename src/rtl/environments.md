---
layout: article
title: "Environments"
description: "How we segregate our work into different environments along the Route to Live"
tags: [dev, test]
order: 0
status: DRAFT
---

Environment segregation is a fundamental practice in any robust Software Development Lifecycle: Change is promoted through a series of environments, from lower to higher until ultimate deployment into the Production or Live environment. Each environment serves a specific purpose in verifying that the change is correct and will work when it reaches our end users.

Environment segregation and change progression provides multiple benefits:

* **Risk mitigation** - Changes can be tested and validated before reaching production, reducing the likelihood of incidents affecting end users
* **Security and compliance** - Sensitive data can be isolated to production environments, with lower environments using synthetic or anonymised data. Environments can be physically segregated to better support robust access controls.
* **Quality assurance** - Different environments support different activities, from development to formal acceptance testing
* **Parallel workstreams** - Concurrent workstreams can be deployed into ephemeral development environments to verify integration before formal testing

## Core Principles

* **Data Segregation** - Personally Identifiable Data (PID) is only allowed in Production. Use synthetic or anonymised data in lower environments
* **Environment Parity** - Keep environments as similar to Production as possible, with similarity increasing as change progresses up through the environments
* **Sequential Progression** - Change must not bypass any environment. Each one acts as a quality gate before moving to the next
* **Single Source of Truth** - Adopt a [branching and release strategy](../../development/dev-git-branching-strategy/) so that it is clear what is a change candidate vs a fully assured release.
* **Immutability** - Replace rather than modify infrastructure and artifacts. Handle differences through configuration, not code
* **Promote artifacts, don't rebuild** - Promote the same binary artifacts through environments rather than rebuilding
* **Infrastructure as Code (IaC)** - Changes to infrastructure should be encapsulated in code so that they may be tested and released as first class citizens
* **Automation First** - Provision environments, deploy artifacts and run tests within automated pipelines, for repeatability and reliability
* **Least Privilege Access** - Restrict access based on role. Controls become more stringent closer to Production

## Environments

We define five standard environments along the Route to Live:

* **Local**
  Developers and Testers write and execute code on their own workstations for rapid development, debugging, and early verification. Use mocks, stubs, or containerised services for integration dependencies.
* **Development**
  The first, shared integration environment along the Route to Live. May support concurrent development through deployment into logically separate, [ephemeral environments](#ephemeral-environments). Used by Developers, Testers and Platform Engineers for informal integration testing and Infrastructure as Code validation.
* **Test**
  Official sign-off environment for formal acceptance testing by Testers. Contains the next 'release candidate' versions of solution components.
* **Stage**
  Final pre-production environment before release, for final validation, business acceptance, and performance testing. Configuration identical to Production with production-like data volumes (anonymised/synthetic). Used by Delivery teams, Business stakeholders, and Platform Engineers for deployment rehearsal.
* **Production**
  The live environment serving end users. Production is the only environment where PID is permitted. Highest security controls, strict change control, and availability requirements according to service level agreements. Used by end users, support teams, and Platform Engineers (controlled access).

## Ephemeral Environments

Delivery teams often work on multiple workstreams at the same time. The restriction of only having a single Development Environment can severely impact the ability to develop the application components, infrastructure and write test scripts. 'Ephemeral environments' are a way to support multiple logical environments within the overall physical environment.

An ephemeral environment is able to be brought up or torn down with a complete set of components according to the needs of the delivery team. For instance, it may contain a single feature branch of one component alongside the production versions of everything else. Or it may contain a suite of many changed components according to the next full release.

## Release Manifest

Modern solutions often comprise multiple components, each at a specific version according to the release history. When a change is required, it may impact any number of the constituent parts. It is useful to describe the composition of components in a manifest file, declaring which version of each component should be deployed.


## Best Practices

### Local

* **Containerisation** - Use Docker or similar to replicate dependencies consistently
* **Automated setup** - Provide scripts or tooling to automate local environment setup
* **Environment parity** - Maintain similarity with other environments where practical
* **No real PID** - Never store real personally identifiable data locally

### Development & Test

* **Synthetic data** - Use synthetic or anonymised test data that reflects defined scenarios with acceptance criteria
* **Logical segregation** (Dev only) - Implement namespaces or separate instances to support concurrent workstreams
* **Strict change control** (Test only) - Only deploy approved release candidates.
* **Single version** (Test only) - Never allow concurrent versions. Test must be baselined against production

### Stage

* **Production parity** - Mirror production infrastructure as closely as possible
* **Production-scale data** - Use production-like data volumes (anonymised/synthetic)
* **Security controls** - Implement the same security controls as production
* **Deployment rehearsal** - Use stage to rehearse deployment and rollback procedures
* **Limited access** - Restrict access to authorised personnel

### Production

* **Comprehensive monitoring** - Implement monitoring, alerting, and audit logging
* **Strict access controls** - Follow least privilege principle. Log all access and changes
* **Formal change control** - Follow formal change control processes for all deployments
* **Automated rollback** - Implement automated rollback capabilities
* **Never test in production** - Never test or develop directly in production
* **PID isolation** - Personally Identifiable Data must never leave this environment
* **Disaster recovery** - Implement disaster recovery and business continuity procedures
