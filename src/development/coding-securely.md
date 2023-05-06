---
layout: article
title: "Secure development"
description: "Security is everyone's responsibility"
tags: [dev, security]
order: 
  dev: 2
  security: 1
related:
  title: Related articles
  tag: dev-security
review:
    last_reviewed_date: 2023-05-06
    review_cycle: ANNUAL
---
## NCSC guidance

We follow NCSC's [8 principles of secure development and deployment][ncsc_8_principles].

* [Secure development is everyone's concern][ncsc_secure_development_is_everyones_concern]
  * Software Development candidates should expect to be asked about security risks and secure coding techniques during interview
  * All NHSBSA staff undergo mandatory training on security and data protection

* [Keep your security knowledge sharp][ncsc_keep_your_security_knowledge_sharp]
  * You should understand the [OWASP top 10 web application security risks][owasp_top_ten_risks] and [OWASP top 10 proactive controls][owasp_top_ten_proactive_controls]
  * We are comitted to the continuing professional development of our staff, with access to [Pluralsight](../../cpd/pluralsight) training platform and a dedicated 4 hours every 2 weeks for self-directed learning

* [Produce clean & maintainable code][ncsc_produce_clean_maintainable_code]
  * [Naming conventions](../coding-naming-conventions/)
  * [Coding guidance](../coding/)
  * [Logging guidance](../coding-logging/)
  * [Guidance for coding with Personal Data](../coding-securely-personal-data/).
  * [Testing by developers](../dev-tests/)
  * [Peer review](../coding-peer-review/)
  * [Code quality assurance](../coding-quality-assurance/)

* [Secure your development environment][ncsc_secure_your_development_environment]
  TODO - Development environment

* [Protect your code repository][ncsc_protect_your_code_repository]
  TODO - Git repo access control

* [Secure the build and deployment pipeline][ncsc_secure_the_build_and_deployment_pipeline]
  TODO - CI/CD

* [Continually test your security][ncsc_continually_test_your_security]
  TODO - ITHC

* [Plan for security flaws][ncsc_plan_for_security_flaws]

## OWASP

### Top ten web application risks

Production code must be written with an understanding of common security risks as defined in the latest [OWASP Top 10 web application security risks][owasp_top_ten_risks]

* [A01:2021-Broken Access Control](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)
* [A02:2021-Cryptographic Failures](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)
* [A03:2021-Injection](https://owasp.org/Top10/A03_2021-Injection/)
* [A04:2021-Insecure Design](https://owasp.org/Top10/A04_2021-Insecure_Design/)
* [A05:2021-Security Misconfiguration](https://owasp.org/Top10/A05_2021-Security_Misconfiguration/)
* [A06:2021-Vulnerable and Outdated Components](https://owasp.org/Top10/A06_2021-Vulnerable_and_Outdated_Components/)
* [A07:2021-Identification and Authentication Failures](https://owasp.org/Top10/A07_2021-Identification_and_Authentication_Failures/)
* [A08:2021-Software and Data Integrity Failures](https://owasp.org/Top10/A08_2021-Software_and_Data_Integrity_Failures/)
* [A09:2021-Security Logging and Monitoring Failures](https://owasp.org/Top10/A09_2021-Security_Logging_and_Monitoring_Failures/)
* [A10:2021-Server-Side Request Forgery](https://owasp.org/Top10/A10_2021-Server-Side_Request_Forgery_%28SSRF%29/)

### Top ten proactive controls

Production code must be written in accordance with good security practices as defined in the [OWASP top 10 proactive controls][owasp_top_ten_proactive_controls]

* [C1: Define Security Requirements](https://owasp.org/www-project-proactive-controls/v3/en/c1-security-requirements)
* [C2: Leverage Security Frameworks and Libraries](https://owasp.org/www-project-proactive-controls/v3/en/c2-leverage-security-frameworks-libraries)
* [C3: Secure Database Access](https://owasp.org/www-project-proactive-controls/v3/en/c3-secure-database)
* [C4: Encode and Escape Data](https://owasp.org/www-project-proactive-controls/v3/en/c4-encode-escape-data)
* [C5: Validate All Inputs](https://owasp.org/www-project-proactive-controls/v3/en/c5-validate-inputs)
* [C6: Implement Digital Identity](https://owasp.org/www-project-proactive-controls/v3/en/c6-digital-identity)
* [C7: Enforce Access Controls](https://owasp.org/www-project-proactive-controls/v3/en/c7-enforce-access-controls)
* [C8: Protect Data Everywhere](https://owasp.org/www-project-proactive-controls/v3/en/c8-protect-data-everywhere)
* [C9: Implement Security Logging and Monitoring](https://owasp.org/www-project-proactive-controls/v3/en/c9-security-logging)
* [C10: Handle All Errors and Exceptions](https://owasp.org/www-project-proactive-controls/v3/en/c10-errors-exceptions)

## References

* [NCSC 8 principles of secure development and deployment][ncsc_8_principles]
* [OWASP Top 10 web application security risks][owasp_top_ten_risks]
* [OWASP top 10 proactive controls][owasp_top_ten_proactive_controls]

[ncsc_8_principles]: <https://www.ncsc.gov.uk/collection/developers-collection>
[ncsc_secure_development_is_everyones_concern]: <https://www.ncsc.gov.uk/collection/developers-collection/principles/secure-development-is-everyones-concern>
[ncsc_keep_your_security_knowledge_sharp]: <https://www.ncsc.gov.uk/collection/developers-collection/principles/keep-your-security-knowledge-sharp>
[ncsc_produce_clean_maintainable_code]: <https://www.ncsc.gov.uk/collection/developers-collection/principles/produce-clean-maintainable-code>
[ncsc_secure_your_development_environment]: <https://www.ncsc.gov.uk/collection/developers-collection/principles/secure-your-development-environment>
[ncsc_protect_your_code_repository]: <https://www.ncsc.gov.uk/collection/developers-collection/principles/protect-your-code-repository>
[ncsc_secure_the_build_and_deployment_pipeline]: <https://www.ncsc.gov.uk/collection/developers-collection/principles/secure-the-build-and-deployment-pipeline>
[ncsc_continually_test_your_security]: <https://www.ncsc.gov.uk/collection/developers-collection/principles/continually-test-your-security>
[ncsc_plan_for_security_flaws]: <https://www.ncsc.gov.uk/collection/developers-collection/principles/plan-for-security-flaws>
[owasp_top_ten_risks]: <https://owasp.org/www-project-top-ten/>
[owasp_top_ten_proactive_controls]: <https://owasp.org/www-project-proactive-controls/>
