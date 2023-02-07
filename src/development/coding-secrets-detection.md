---
layout: article
title: "Secrets detection"
description: "Avoid committing 'secrets' such as API keys into source control"
status: REVIEW
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

### Revoke keys immediately

From [Government guidance](https://www.gov.uk/government/publications/open-source-guidance/security-considerations-when-coding-in-the-open#assume-accidental-publications-are-compromised)

> If you accidentally publish a secret, you must revoke it and immediately provision new keys to the system. Once a secret has been published, you must assume that it is compromised no matter how quickly you are able to remove it as attackers have automated scanning tools that will pick up credential leaks immediately.
>
> This means you must make sure that your system allows for keys and credentials to be changed and rotated easily, and for secrets to be revoked.

### Consider rewriting history

If you accidentally commit secrets to a local repository, you cannot remove them by simply committing a change. You should consider ‘rewriting history’ to update the commit with the secret.

Accidental commits of personally identifiable information (PII) should be rewritten.

Rewriting history will change the Git commit graph. It has a high potential to create a mess of other contributer’s local repositories. It is advisable to only rewrite history on branches that are not shared. Proceed with caution and make sure that every team member is aware what is being done and how to align their repositories to the new state.

If the repository has already been Open Sourced, avoid rewriting history on key branches such as `main` or `develop`.

This article provides an in-depth guide to removing secrets from Git history by rewriting history: [Git Clean, Git Remove file from commit - Cheatsheet](https://blog.gitguardian.com/rewriting-git-history-cheatsheet/)

---

## Secrets detection tooling

Use secrets detection tools to protect against mistaken commits, and to alert if they get pushed to the central repository.

* [Gitleaks](https://github.com/zricethezav/gitleaks) as our secrets detection tool
* [NHSBSA Gitleaks configuration file](https://gitlab.com/nhsbsa/platform-services/gitleaks/gitleaks-nhsbsa) with verified rules
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
path = "nhsbsa-gitleaks.toml"
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

