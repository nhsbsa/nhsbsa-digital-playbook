---
layout: article
title: "Compatibility Test Tools"
description: "The tools, methods and technologies using in compatibility testing"
tags: test-tools
order: 4
status: review
---

The following tools, methods and technologies are used in compatibility testing:

Methodology:

- Compatibility testing follows [UK Government guidelines](https://www.gov.uk/service-manual/technology/designing-for-different-browsers-and-devices).
- Testing is executed across different combinations of browsers, devices and operating systems.

Test Tool:

- Saucelabs for access to different versions of virtual and real devices with a combination of browsers and operating systems.
- All compatibility testing must use the NHSBSA Saucelabs service and account (speak to Test Lead). No other service or account should be used as this would violate security and IG rules.

Test Automation:

- We execute Selenium user journey tests through the Saucelabs service on the relevant browser, device and operating system combination.
- An automated regression test pack should be placed in the CI/CD pipeline where possible.

Manual Testing:

- When automation is not possible (for example where Saucelabs does not provide a necessary browser/device/operating system combination) manual testing feature must be used instead. This will require manually 'forcing' the combination in Saucelabs.

We do not support or promote the usage of any other tool for compatibility testing.
