---
layout: article
title: "Acceptance Test Tech Stack"
description: "A breakdown of the tools and technologies test use in acceptance testing"
tags: test-tech-stack
order: 10
---

### Acceptance Test

- BDD Cucumber for all our manual and automated test suites, scenarios and cases.

#### Automation 

- Automation using Java and Selenium for our UI and web based services. This is our long term framework choice.
- Automation using Ruby and Watir for some of our UI and web based services. This is in our short term plans and will be replaced by the Java / Selenium going forward with any new services.

#### IDEs

- Java: Eclipse or the preferred IntelliJ.
- Ruby: Atom

#### Out of scope for acceptance testing

We do not promote or support the usage of the following:

- Selenium IDE: record and playback tools are too instable for our acceptance testing and with flexibility for change in our services these tools would be difficult to maintain.
- Any other programming language binding: due to the NHSBSA tester skillsets and resourcing plans no other language is supported in the test community.
- Ruby Mine: we work predominantly with open source tools and technologies with very little licensed products used in our testing. As Ruby is on our short term plans then investment in using Rubymine is not sustainable.