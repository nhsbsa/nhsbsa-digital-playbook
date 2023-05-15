---
layout: article
title: "Secrets detection"
description: "Avoid committing 'secrets' such as API keys into source control"
status: REVIEW
tags: [dev-security, security]
order: 
  dev-security: 3
  security: 3
---
Sensitive information, or 'secrets', such as API keys and credentials must not be checked into source control.

Anyone who commits to a repository must be aware of:

* What constitutes a secret within their service architecture
* How to deal with a secret mistakenly committed to a source code repository
* How to use secret detection tools effectively

## What is a secret?

A secret is confidential information that is required to deliver a software solution. It should only be accessible to authorised people under appropriate access control.

We advise all delivery teams to assess their specific build pipeline and deployment architecture to catalogue all the secrets that must be protected.

Consider the following:

* __Build pipeline secrets__
  * SSH keys
  * Tooling API keys (SonarQube, Saucelabs, etc)
  * Internal topology
    Don’t expose information on internal topology when not necessary:
    * Protocols
    * Hostnames
    * Ports
* __Application runtime secrets__
  * Credentials
    * Usernames
    * Passwords
    * API keys
    * Client certificates
  * Encryption keys
* __Personally identifiable data__
  If you are processing personal data, consider the risk of committing personally identifiable data

!!! warning Risk assessment
A sensitive data risk assessment should be recorded in the project documentation site.
It should catalogue service specific secrets, the secret detection rule IDs and remediation steps to take if the secret is ever leaked.
!!!

---

## Dealing with committed secrets

[Raise a security incident](../../security) with the Information Security team when you discover secrets committed to a repository. They will engage with the relevant stakeholders to assess the impact, agree remediation actions, and provide an audit trail.

### Revoke keys immediately

__Do not wait for a response from Information Security before revoking keys.__

From [Government guidance](https://www.gov.uk/government/publications/open-source-guidance/security-considerations-when-coding-in-the-open#assume-accidental-publications-are-compromised)

> If you accidentally publish a secret, you must revoke it and immediately provision new keys to the system. Once a secret has been published, you must assume that it is compromised no matter how quickly you are able to remove it as attackers have automated scanning tools that will pick up credential leaks immediately.
>
> This means you must make sure that your system allows for keys and credentials to be changed and rotated easily, and for secrets to be revoked.

### Rewriting history

!!! warning Destructive rewrite of published Git history must follow NHSBSA process
Consult with your professional lead and the security team.

Refer to our [guidance on rewriting Git history](../coding-git-rewrite-history/).
!!!

---

## Secrets detection tooling

Use secrets detection tools to protect against mistaken commits, and to alert if they get pushed to the central repository.

* [Gitleaks](https://github.com/zricethezav/gitleaks) as our secrets detection tool
* [NHSBSA Gitleaks](https://gitlab.com/nhsbsa/platform-services/gitleaks/gitleaks-nhsbsa) configuration file with verified rules
* [Pre-commit](https://pre-commit.com/) managed Git hooks to prevent local commits of secrets
* [Gitlab-CI secrets detection](https://docs.gitlab.com/ee/user/application_security/secret_detection/) to alert in case a local pre-commit git hook has not prevented the commit

### Add Gitleaks configuration

To use the NHSBSA Gitleaks definitions:

* Copy the [nhsbsa-gitleaks.toml](https://gitlab.com/nhsbsa/platform-services/gitleaks/gitleaks-nhsbsa/-/raw/main/gitleaks-nhsbsa.toml) config file into your project

```bash
wget https://gitlab.com/nhsbsa/platform-services/gitleaks/gitleaks-nhsbsa/-/raw/main/gitleaks-nhsbsa.toml
```

* Create a project specific `gitleaks.toml` file and configure it to extend the NHSBSA file

```toml
title = "<project-name> gitleaks config"

[extend]
path = "gitleaks-nhsbsa.toml"
```

### Add a pre-commit hook

* Install [pre-commit](https://pre-commit.com/)
* Install [Gitleaks](https://github.com/zricethezav/gitleaks)
* Add a `.pre-commit-config.yaml` configuration file:

```yaml
repos:
-   repo: local
    hooks:
    - id: gitleaks
      name: Detect hardcoded secrets
      description: Detect hardcoded secrets using Gitleaks
      entry: gitleaks protect --config="gitleaks.toml" --verbose --redact --staged
      language: system
      pass_filenames: false
```

* Every contributor must install the Git hook using pre-commit:

```bash
pre-commit install
```

### Configure Gitlab secrets detection

* Include Gitleaks secret detection job template in `gitlab-ci.yml`

```yaml
include:
  - template: Security/Secret-Detection.gitlab-ci.yml
secret_detection:
  variables:
    SECRET_DETECTION_HISTORIC_SCAN: "true"
```

* Instruct secrets detection analyzer to use the project specific Gitleaks config toml file
  Create a file `.gitlab/secret-detection-ruleset.toml`

```yaml
[secrets]
description = 'secrets custom rules configuration'

[[secrets.passthrough]]
type  = "file"
target = "gitleaks.toml"
value = "gitleaks.toml"
```

### Ignore false positives

Detected secrets can be ignored in different ways:

* Secrets in history
  Add the fingerprint to a `.gitleaksignore` file.

* Uncommitted false positives
  Add a comment to the offending line with the `gitleaks:allow` keyword.
  
See [Gitleaks README](https://github.com/zricethezav/gitleaks) for further information
