---
layout: article
title: "Functional Acceptance Test Tools"
description: "The tools, methods and technologies using in functional acceptance testing"
tags: test-tools
order: 1
---

The following tools, methods and technologies are used in functional acceptance testing:

Methodology:

- BDD Cucumber for all our manual and automated test suites, scenarios and cases.

Test Automation:

- Automation using Java and Selenium (Serenity) for our UI and web-based services. This is our long term framework choice.
- Automation using Ruby and Watir for some of our UI and web-based services. This is in our short term plans and will be replaced by the Java / Selenium going forward with any new services.
- An automated regression test pack should be placed in the CI/CD pipeline.

Integrated Development Environment (IDE)

- Java: Eclipse or the preferred IntelliJ.
- Ruby: VS Code or IntelliJ Ultimate (if approved by the project)

We do not support or promote the usage of the following:

- Selenium IDE: record and playback tools are too instable for our acceptance testing and with flexibility for change in our services these tools would be difficult to maintain.
- Any other programming language binding: due to the NHSBSA tester skillsets and resourcing plans no other language is supported in the test community.
- Ruby Mine: we work predominantly with open-source tools and technologies with very little licensed products used in our testing. As Ruby is on our short term plans then investment in using Ruby Mine is not sustainable.