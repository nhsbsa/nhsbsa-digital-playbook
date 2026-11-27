---
layout: article
title: "Dynamics Application Security Testing"
description: "Dynamic Application Security Testing (DAST) is conducted to find security vulnerabilities and weaknesses within a service."
tags: under-development
order: 1
---

Dynamic Application Security Testing (DAST) is conducted to find security vulnerabilities and weaknesses within a service.

DAST tools inject malicious payloads into running applications to identify potential security flaws (vulnerabilities and weaknesses). DAST tools are especially helpful for detecting input/output validation issues, authentication issues and server configuration mistakes.

It is best to conduct DAST on pre-Production environments so that issues are found early, though the environment and application(s) must be as stable and as close to Production as possible to ensure the test is meaningful.

The NHSBSA's Test community are considering a DAST Framework that can be embedded into a service's CI/CD pipeline with minimal impact and interference, but with maximum value in the wider Secure Development practices.