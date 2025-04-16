---
layout: article
title: "Dashboard non-functional requirements (NFRs)"
description: "Guidance for drafting and monitoring non-functional requirements"
status: FINAL
tags: data-viz-home
order: 30
review:
    last_reviewed_date: 2024-12-20
    review_cycle: ANNUAL
---
## Non-functional requirements (NFRs)  
  
Non-functional requirements (NFRs) consider the efficiency of a product, describing how efficiently it should function. Functional requirements describe how a product should function, and what it should be able to achieve. Both sets of requirements are equally important.  
  
Non-functional requirements need to be defined from the outset to ensure the product runs smoothly, and provides a good user experience. Not considering non-functional requirements may cause critical problems for your service and users.  
  
Non-functional requirements affect the usability of a system, and if implemented correctly provide a good user experience.

::: details Source - NFR guide

[Non-functional requirements: a guide with examples][non-func 1]

:::  

## Dashboard non-functional requirements  
  
The following are some of many factors to consider when building a data product, such as a dashboard or a report:

- accessibility
- accuracy
- auditing
- capacity
- confidentiality
- error-handling
- maintenance
- performance
- reliability
- resilience
- scalability
- security
- testing
- usability  
  
### Operational requirements  
  
Operational requirements describe the performance requirements of a product. These considerations include:  

- accessibility
- confidentiality
- integrity
- safety
- usability
- security
- availability
- efficiency
- reliability
- suitability  
  
### Revision requirements  
  
Revision requirements define any changes or corrections to the product. This could be due to unexpected errors, or improvements made. The ability for a system, and any high-priority features to bounce back quickly, and maintain availability is of utmost importance.  
  
The following are all considered to be revision requiremnets:

- maintainability
- scalability
- flexibility
- verifiability
- modifiability  
  
### Transition requirements  
  
Transition requirements are system management considerations, including how the product will work within the surrounding environment and alongside other products.  
The following are all considered to be transition requirements:

- reusability
- ability to install
- portability
- interoperability
  
::: details Source - NFR guide

[Non-functional requirements: a guide with examples][non-func 1]

:::

## Monitoring non-functional requirements  
  
We can monitor non-functional requirements in a number of ways and plan for these in the development of your data product.  
We can do this by:

- linking in with the relevant teams when developing and rolling out your dashboard- for example security, architecture
- following best practices such as data storage and access privileges
- following testing processes- for example functions, accessibility, figures
- using in-built metrics, such as monitoring loading times
- collecting and monitoring feedback from users
- ensuring data literacy when checking figures
- processing improvements and automating alerts
- creating back-up plans and service wrappers
- using structured maintenance processes
- ensuring the appropriate infrastructure is in place such as capacity and tooling
- documenting processes and any considerations taken within the dashboard development process
- reusability and scalability planning of the product, minimising manual overhead
- ensuring version control processes are in place

[non-func 1]: https://www.plutora.com/blog/non-functional-requirements-guide