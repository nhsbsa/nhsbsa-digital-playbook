---
layout: article
title: "Perfomance Testing"
description: "Performance testing focuses on key factors like responsiveness, stability, speed, and reliability to ensure the application runs smoothly"
tags: test-frameworks
order: 5
status: Review
---


#### What is performance testing?

Performance testing assesses how a service performs under certain conditions. It focuses on key factors like responsiveness, stability, speed, and reliability to ensure the application runs smoothly. It is important because it ensures optimal load times, reduces the risk of crashes, and identifies potential issues with scalability in the amount of data processed, the number of transactions and the number of users. For services built on cloud infrastructure, it will also allow live service owners to monitor performance and deploy auto-scaling attributes to ensure there is little impact to users when a service hits its peak.

The types of performance testing we consider are:

- Load testing -- to validate the system responsiveness under expected peak usage
- Soak testing -- to assess long-term stability under sustained load
- Stress testing -- to determine system limits and graceful failure behaviour
- Spike testing -- to measure resilience against sudden traffic surges

Our technical designs will consider the required performance such that any new or refined technical architecture will be optimised from its conception through to its build. This means that the performance test phase should not be the first time that the performance of a solution is considered.

## Performance Test Requirements

To conduct comprehensive and informative performance tests we require several inputs into the test planning activities. This includes an agreement from different disciplines that a performance test is required, and the agreed non-functional requirements for the service:

- **An agreement that a performance test is required** - the decision is usually with the technical lead and the business lead and is based on risk. For example, is there a risk in the technical design that the solution cannot accommodate the business requirements. If the risk is not acceptable then there is a requirement to test;
- **An agreed objective to the test** -- for example, are we testing to show a new service can function under the expected volumes of users and transactions, or to prove a new release has no impact on the service's performance, or something more fundamental such as proving that moving from on-prem infrastructure to cloud infrastructure has no impact on the performance;
- **An agreement on the boundaries of the test** -- this is to ensure we understand which interfaces, if any, will be included in the test, whether it will be a full end-to-end test involving the whole user journey or whether it will focus on specific areas of the solution that are considered to be at risk;
- **An agreement on where the test will be conducted** -- this includes which test environment will be used and an understanding of how it compares from an infrastructure and code baseline point of view to the Production environment;
- **An agreed list of business processes and user journeys that will be tested** -- the assumption will be that a risk-based approach will be taken, and testing will focus on the most common and the most complex areas of the solution;
- **An understanding of the Service Level Agreements (SLAs) for the service** -- i.e. the expected
  - availability of the service (in hours, or as a percentage)
  - response times (throughout the solution and its components)
  - number of transactions per second
  - end-to-end user journey times
- **An understanding of the expected volumes that the solution will deal with**, i.e. the expected
  - number of users
  - number of concurrent users
  - size of batches
  - amount of data being processed
- **An agreement on what metrics will be captured** -- this is to ensure the appropriate metrics are captured for analysis after the test

In addition to that, performance testing requires:

- Production-like test data at the volumes agreed to push through the service
- A stable functional baseline on which to test
- Monitoring and logging in place to capture the agreed metrics for analysis
- A test environment dedicated to performance testing for the duration of the performance test

## New Performance Test Framework

Our new Performance Test Framework (PTF) allows us to conduct performance tests on services on AWS Cloud in parallel. This means that if more than one service requires a performance test at any one time, we can accommodate this.

Our test tool of choice is JMeter, an easily available tool which fits into the GDS open-source ethos and is not restricted by paid licensing restrictions.

Work is continuing to enhance the PTF so that we can also test on services on Azure Cloud, and we can create costings models based on usage and cross charge services.
