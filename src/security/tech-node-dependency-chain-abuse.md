---
layout: article
title: "Protecting against NPM dependency chain abuse"
tags: [node, security]
order: 20
review:
    last_reviewed_date: 2025-11-27
    review_cycle: ANNUAL
---
!!! warning Key takeaways

1. **Use malware detection software including [OSV Scanner](#osv-scanner)**

2. **Use `npm ci` as the default method of [installing depencencies](#safe-execution)**
   * __Local development__ commands including IDE automation settings
   * __CI build__ including job definitions and associated scripts
   * __Docker builds__ including Dockerfile and associated scripts

3. **Avoid [uncontrolled dependencies](#declare-dependencies)**
   * **Do not** use the `npx` command
   * **Do not** use global installs
   * **Do not** script Node package installations as command line calls

!!!

[Dependency chain abuse](https://owasp.org/www-project-top-10-ci-cd-security-risks/CICD-SEC-03-Dependency-Chain-Abuse) is a way of injecting malicious software into a local development environment or continuous integration build. Attacks can result in credentials theft, lateral movement or even ongoing deployment into a production environment.

Malware should not be confused with software vulnerabilities:

* A **Vulnerability** is an unintended defect in a legitimate software package that can be exploited to attack a component that uses it.
* **Malware** is a malicious piece of software that has been deliberately placed in an environment for criminal purposes.

## Malware detection

### Anti-virus protection

Anti-virus software can block malware payload execution by detecting a file checksum or fingerprint. During the early response to a new attack, ensure that published fingerprints are added by your device protection to block execution.

Execution logs should be analysed for malware fingerprints and filenames to identify historic exploitation.

Suppliers to the NHSBSA must notify our [Security](../../security/) team of compliant configuration following notification of a malware attack.

### OSV Scanner

[OSV Scanner](https://github.com/google/osv-scanner) is an open source tool for vulnerability and malware detection. It uses the [osv.dev](https://osv.dev/) API which consolidates information from multiple sources. The prefix `MAL` is used for malware compromised packages.

!!! warning Scan modules before install

On download and install of new or updated packages, pre-install and post-install scripts will execute. It is too late to scan after malware has executed.

__Always__ use the OSV scanner to scan the `package-lock.json` __before__ install, update or audit of packages.

See the [safe execution](#safe-execution) section below for more detail.
!!!

To scan a package lock for malware and vulnerabilities:

```bash
osv-scanner scan -f markdown --lockfile=package-lock.json --output osvscan.md
```

This will write a markdown formatted report. Other formats are available (table, html, vertical, json, markdown, sarif, gh-annotations, cyclonedx-1-4, cyclonedx-1-5, spdx-2-3). Scan reports should be Git ignored to avoid unnecessary maintenance.

The report **must** be inspected for potential malware, identified by a `MAL` prefix.

### Manual review

Tooling can identify some malware, but it isn't 100% effective. Package changes should always be reviewed manually:

* **Review package-lock changes carefully.** When reviewing changes to `package-lock.json`, verify that the modifications align with the expected package additions or version changes
  * Check packages for for new authors or maintainers
  * Watch for new dependencies with very recent publish dates unexpected version increments
  * Highlight “high-churn” packages as suspicious
  * Guard against dependency confusion (namespaces, internal scopes)

* **Be vigilant with merge requests.** In a well-established project, unless the merge request is explicitly for updating a package, there should never be a need for `package-lock.json` to be included in a merge request.

* **Choose packages carefully.** Before adding a new dependency, evaluate its necessity, maintenance status, community support and security track record. Consider the package's download statistics, last update date, number of open issues, and whether it's actively maintained. Prefer well-established packages with strong security practices over newer, less proven alternatives.

### Malware response

If the OSV scanner or any other tools detect Malware:

1. Rename the `package-lock.json` file to `package-lock-MALWARE.json` and restore the previous version from Git history.
2. Notify your team of the risk and instruct everyone to stop working on that repository.
3. Notify your Software Engineering leads.

## NPM Configuration

### Declare dependencies

All software builds **must** declare dependencies in a manifest file. For Node.js projects, we use `package.json` to declare them and `package-lock.json` to pin specific versions. A declarative manifest file allows tools to inspect dependencies and their transitive dependencies for malware or vulnerabilities.

!!! warning Avoid uncontrolled dependencies

**Do not** use the `npx` command to run scripts locally, in CI or Docker builds.
They should be installed as dev dependencies in your project's `package.json` and `package-lock.json` and called via `npm run`. Packages installed via npx cannot be checked for malware or vulnerabilities.

**Do not** use global dependencies (e.g., `npm install typescript --global`). Builds should be reproducible using code checked out from source control. Global dependencies cannot be checked for malware or vulnerabilities.

**Do not** script Node package installations as command line calls. Scripted installations cannot be checked for malware or vulnerabilities.
!!!

### Pin dependencies

All projects **must** pin their dependencies to known, safe versions to safeguard against uncontrolled upgrade to newly published, infected packages.

Pinning is done via the `package-lock.json` file.

**Note:** It is not necessary to pin versions in the `package.json` by removing `^` and `~`. Transitive dependencies would not be pinned by this method.

### Disable scripts

Malware can execute a payload via NPM event hooks such as `pre-install` and `post-install`.

Some legitimate packages require script execution to function correctly. In all other cases and by default, disable scripts through project configuration in a `.npmrc` file:

```ini
ignore-scripts=true
```

## Safe execution

Follow these steps when installing, updating or auditing dependencies.

### Use `npm ci`

`npm ci` is the only failsafe method of downloading and installing modules in adherance to the `package-lock.json` file.

All users of NPM **must** use `npm ci` to install dependencies:

* __Local development__ commands including any IDE automation
* __CI build__ jobs including build any scripts
* __Dockerfile__ builds

### 1. Generate or update lock file

Packages must **not** be downloaded and installed when there is a risk of updating `package-lock.json`. Use the `--package-lock-only` flag so that they can be scanned and verified as safe.

* Generate a new package-lock.json when it doesn’t exist
    ```bash
    npm install --package-lock-only
    ```

* Install a specific package
    ```bash
    npm install cypress@3.2.1 --package-lock-only
    ```

* Update the pinned versions in compliance with the package.json rules
    ```bash
    npm update --package-lock-only
    ```

* Audit the current pinned versions
    ```bash
    npm audit --package-lock-only
    ```
    
    …or fix according to audit advice
    ```bash
    npm audit fix --package-lock-only
    ```

### 2. Scan for malware

Use [OSV Scanner](#osv-scanner) to scan for malware:

```bash
osv-scanner scan -f markdown --lockfile=package-lock.json --output osvscan.md
```

### 3. Safe install

Once confirmed there are no infected dependencies, install them into `node_modules`.

Install using the versions pinned by the package-lock:

```bash
npm ci
```
