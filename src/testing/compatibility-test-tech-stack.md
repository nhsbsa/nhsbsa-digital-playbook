---
layout: article
title: "Compatibility Test Tech Stack"
description: "A breakdown of the tools and technologies test use in Compatibility testing"
tags: test-tech-stack
order: 10
---

### Compatibility Testing

- All compatibility testing must use the NHSBSA Saucelabs service and account. 
- No other service or account should be used as this would violate security and IG rules.
- Compatibility testing must be performed using automated user journeys that respresent or test as much of the service as possible. 
- If automation is not possible then manual testing must be performed.
- Compatibility testing must be performed as regular as possible with every release containing compatibility testing.

#### Automation

- We run our selenium user journey tests through the Saucelabs service on the relevant browser, tablet or phone.
- The coverage of browsers, tablets and phones can be found in the compatibility test coverage section.

#### Manual 

- When automation is not possible the manual testing feature must be used.
- For particular browser testing (Chrome on iOS and Samsung Internet on Android) you will need to manually test as the platform does not allow automation.
- This is where the Saucelabs service can be used to use virtual machines for browsers and devices as well as real devices to test user journeys if automation test can not be performed.
