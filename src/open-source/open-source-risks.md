---
layout: article
title: "Open source risks"
description: "How we mitigate the risks of open sourcing"
tags: open-source
status: DRAFT
order: 1
---
Open sourcing our code introduces risks. The risks must be captured by the NHSBSA, mitigated by the delivery team and accepted by the risk owner.

The table below shows the risks and mitigations covered by our open source guidance:

| Risk | Impact | Mitigation |
|------|--------|------------|
| Developer PII exposed | * reputational damage | * Contributor anonimity | \
|                       | * GDPR violation      | \
|                       | * staff wellbeing     |
| User PII exposed | * reputational damage | * Secrets detection | \
|                  | * GDPR violation      | * Contributor guidelines | \
|                  | * staff wellbeing     | |
| Secrets exposed | * malicious attack | * Secrets detection | \
|                 | * staff wellbeing | * Contributor guidelines |
| Copycat sites | * fraud | * Domain protection | \
|               | * reputational damage | |
| Exposing confidential business rules | * fraud | * Decision to open source | \
|                                      | * staff wellbeing | |
| Exposing unpublished policy | * reputational damage | * Decision to open source | \
| Poor code | * malicious attack | * Agile delivery | \
|           | * fraud | * Software development standards | \
|           | * reputational damage | * Contributor anonimity | \
|           | * staff wellbeing | |
| Targeted attack on vulnerable dependency | * malicious attack | * Patching strategy | \
|                                          |                    | * Manage vulnerabilities | \
|                                          |                    | * Secure build pipeline | \
| Extra workload on stretched developers | * staff wellbeing | * Agile delivery |
| Not responding to community interaction | * reputational damage | * Designated maintainers | \
| | | |
| Malicious contributions from externals | * malicious attack | * Code review | \
|                                          |                    | * Secure build pipeline | \
|                                          |                    | * User management |
| Code not actively supported once developed | * malicious attack | * Designated maintainers | \
|                                            | * reputational damage | * BAU policy |
| Retrospective open sourced code hiding issues | * reputational damage | * Retrospective open sourcing | \
| e.g. PII                                      | * GDPR violation | * Agile delivery | \
|                                               | * staff wellbeing | |
| Unexpected increase in work        | * staff wellbeing | * Agile delivery | \
| e.g. publishing internal libraries | |
| Poorly managed user access (JML) | * malicious attack | * User management | \
| | | |
| Held responsible for faulty code when used by third party | * reputational damage | * Licensing software or code | \
| | | |
| Online abuse of staff & external contributors | * reputational damage | * Code of conduct | \
|                                               | * staff wellbeing | |

[agile_delivery]: <https://www.gov.uk/service-manual/agile-delivery>
[bau_policy]: <todo>
[code_of_conduct]: <>
[code_review]: <>
[contributor_anonimity]: <>
[contributor_guidelines]: <>
[decision_to_open_source]: <>
[designated_maintainers]: <>
[domain_protection]: <>
[licensing_software_or_code]: <>
[manage_vulnerabilities]: <>
[mitigation]: <>
[patching_strategy]: <>
[retrospective_open_sourcing]: <>
[secrets_detection]: <>
[secure_build_pipeline]: <>
[software_development_standards]: <>
[user_management]: <>
