---
layout: article
title: "Protecting against Python dependency chain abuse"
description: "Guidance on reviewing, scanning and installing Python dependencies to reduce supply-chain risks in uv and conda projects."
tags: [python, security]
order: 20
status: REVIEW
related:
  tag: python
review:
    last_reviewed_date: 2026-10-05
    review_cycle: ANNUAL
---
!!! warning Key takeaways

1. **Review dependencies and scan reviewed lockfiles before installation.** See [Detection and review](#detection-and-review). No advisory check proves that a package is safe.
2. **Separate dependency resolution from installation.** Follow the [uv workflow](#uv-managed-projects) or [conda workflow](#conda-managed-projects) in local development, CI and container builds.
3. **Declare and lock dependencies, including development and build tools.** Avoid [uncontrolled dependencies](#avoid-uncontrolled-dependencies) and use approved package indexes and channels.
4. **Treat package builds as code execution.** Source builds, editable packages and build backends can execute code before an application runs. A virtual environment is not a security sandbox.

!!!

[Dependency chain abuse](https://owasp.org/www-project-top-10-ci-cd-security-risks/CICD-SEC-03-Dependency-Chain-Abuse) introduces malicious dependencies into development environments, builds or deployed systems. Python projects can be affected through PyPI packages, conda channels, compromised maintainers, misleading package names or dependency confusion between private and public repositories.

Malware should not be confused with software vulnerabilities:

* A **vulnerability** is an unintended defect in legitimate software that can be exploited.
* **Malware** is software deliberately designed to compromise a system.

This guidance applies to applications, data pipelines and machine-learning workloads. Refer to the [Python standards](../../technologies/tech-python/) for technology choices.

## Detection and review

### Device protection

Keep approved endpoint protection enabled and up to date. When responding to a published attack, work with [Security](../../security/) to check affected devices and build environments against available indicators of compromise.

### Advisory scanning

Use [OSV Scanner](https://google.github.io/osv-scanner/) to check resolved dependencies against published advisories, including known malicious-package reports where available. Reports with a `MAL` prefix require investigation as potential malware.

[pip-audit](https://github.com/pypa/pip-audit) provides a Python-specific check for known vulnerabilities. It is not a malware or source-code scanner. Dependency resolution during an audit can execute build code; audit fully resolved inputs without invoking pip, as shown in the [uv workflow](#uv-managed-projects).

!!! warning Check coverage as well as findings

A successful scan only covers the packages and ecosystems the scanner recognises. Review skipped packages, unsupported inputs and lookup failures. PyPI advisory coverage does not establish the safety of conda packages, native libraries, GPU toolchains or private packages.

Do not install a suspicious package merely to make it available to a scanner. A clean report does not detect unreported malware.

!!!

Scan before installation and repeat checks in CI and periodically as new advisories are published. Include development tools, optional dependencies and build dependencies that will execute in your workflow, not just production runtime dependencies. Keep reports as build artifacts or Git ignore them rather than committing generated reports.

### Manual review

* **Review the package and publisher.** Confirm the exact name, intended project, source repository, maintainers and necessity of the dependency. Download counts and package age are useful context, not proof of trust.
* **Review manifest and lockfile changes.** Check new transitive dependencies, unexpected version changes, source URLs, channels, hashes and supported platforms.
* **Review execution paths.** Inspect build backends, build requirements, editable dependencies and installation scripts where applicable. Pre-built wheels reduce source-build execution but can still contain malicious code.
* **Review merge requests.** Dependency changes should have an explained purpose and receive review before environments or build jobs consume them.

### Malware response

If malware is detected or a dependency is suspected of compromise:

1. Stop installation, builds and execution involving the affected dependency. Notify the team and Software Engineering leads.
2. Report the incident to [Security](../../security/). Identify whether the package was only resolved or downloaded, or whether it was installed, built, imported or executed.
3. Preserve affected manifests, lockfiles, reports, logs and artifact identifiers as evidence. Do not delete environments or caches until Security advises how to preserve them.
4. Work with Security to contain affected devices and runners, investigate credential exposure and rotate credentials where required.
5. Restore reviewed dependencies and rebuild affected environments and artifacts from trusted sources once cleared to do so. Removing the dependency alone does not remediate a compromised system.

## Dependency configuration

### Declare and lock dependencies

All projects **must** declare dependencies and commit reviewed lockfiles:

* For uv-managed projects, use `pyproject.toml` and `uv.lock`.
* For conda-managed projects, use `environment.yml` and a platform-aware lockfile such as `conda-lock.yml`. An environment specification is not a lockfile.
* Include build and audit tooling in a reviewed, reproducible tool environment or build image. Apply the same dependency-review process to the tooling itself.

Lock direct and transitive dependencies. An exact version or artifact hash provides reproducibility and integrity checking, not proof that the artifact is benign.

### Package indexes and channels

Use approved HTTPS package indexes and conda channels. Review their configuration alongside dependencies, and never commit repository credentials.

Protect internal package names from being resolved from public repositories. For uv, retain the default `first-index` strategy and explicitly associate private packages with their approved index where needed. Do not switch to an unsafe index strategy to work around resolution failures without reviewing the security implications.

For conda, explicitly declare approved channels and use strict channel priority where compatible with the workload. Channel priority is not a substitute for checking the origin of each locked artifact, including pip dependencies.

### Avoid uncontrolled dependencies

!!! warning Keep installations reproducible

**Do not** install undeclared packages through notebook cells, IDE automation, CI scripts or Dockerfiles.

**Do not** use unpinned `uvx`, `uv tool run` or global package installations as a shortcut to run project or audit tools. Pinning only the tool's top-level version is insufficient if its transitive dependencies remain uncontrolled.

**Do not** run commands that automatically resolve and install unreviewed dependencies before scanning. This includes plain `uv add`, automatic environment synchronisation by `uv run`, and ad hoc `pip install` or `conda install` commands.

!!!

### Limit build execution

Prefer reviewed pre-built distributions where available. Source distributions may execute build-backend code during metadata preparation, resolution or installation. Conda packages can also contain installation scripts.

Use `--no-build` in uv resolution and installation commands to reject operations requiring source-distribution builds. This is not a universal execution barrier: uv can reuse previously built cached wheels, and first-party and editable packages can still invoke build backends. Review these inputs separately and do not bypass a failure by enabling builds without review.

Where source builds are necessary, use a controlled build environment without production credentials, with restricted access and reviewed build dependencies. Build isolation and virtual environments separate dependencies; they do not sandbox malicious code.

## Safe execution

Use approved, version-controlled tooling that supports the commands below. The uv audit and automatic malware-check features are currently preview features; confirm support in the project's approved uv version before relying on them.

:::: tabs Dependency manager

::: tab uv

### uv-managed projects

The following example adds `aspectlib==2.0.0`. The version is illustrative, not an endorsement of its safety. Review the package, publisher, source and transitive dependencies first.

#### 1. Generate or update the lockfile

Optionally preview the package resolution without installing it:

```bash
uv pip install --dry-run --no-build "aspectlib==2.0.0"
```

This preview does not represent the complete project's lockfile resolution. A dry run alone is not protection against build execution.

Add the dependency without synchronising the environment:

```bash
uv add "aspectlib==2.0.0" --no-sync --no-build
```

To generate a lockfile for an existing manifest, or update a selected dependency:

```bash
uv lock --no-build
uv lock --upgrade-package aspectlib --no-build
```

Review the resulting `pyproject.toml` and `uv.lock` changes before continuing.

#### 2. Scan and review the locked dependencies

Scan the lockfile without installing project dependencies:

```bash
osv-scanner scan source --lockfile=uv.lock --format markdown --output-file osvscan.md
```

Inspect the findings, especially malicious-package advisories, and resolve or obtain approval for relevant vulnerability findings. Do not ignore scanner failures or gaps in coverage.

Optionally run uv's project audit for known vulnerabilities and adverse package statuses, including quarantine and deprecation:

```bash
uv audit --preview-features audit-command --locked --no-build
```

For a second opinion using PyPI's advisory database, export the pinned third-party dependencies and use `pip-audit` from an already reviewed tool environment, not from the unreviewed project environment:

```bash
uv export --locked --format requirements.txt --all-groups --all-extras \
  --no-emit-project --output-file /tmp/python-audit-requirements.txt
pip-audit --no-deps --disable-pip --requirement /tmp/python-audit-requirements.txt
```

Adjust groups and extras to cover each supported deployment and development configuration. Mutually exclusive extras may need separate exports. Review local, editable, Git and direct-URL dependencies separately if they cannot be represented as pinned package versions for the audit.

#### 3. Install only after review

Synchronise the project from the reviewed lockfile:

```bash
uv sync --locked --no-build
```

The `--locked` option fails if the manifest and lockfile are out of date rather than updating the lockfile during installation. Apply this workflow to local development, CI jobs and Docker builds. Select the reviewed groups and extras required by each environment.

For an additional check against published malicious-package advisories during the actual sync, configure the optional preview feature in `pyproject.toml`:

```toml
[tool.uv]
preview-features = ["malware-check"]

[tool.uv.audit]
malware-check = true
```

Merge these settings into existing tables rather than declaring duplicate TOML tables. This check consults OSV before installation; it does not detect unreported malware or replace the earlier review. Enabling it only during a dry run is insufficient.

For an unsuitable dependency that has not been installed or executed, remove it without synchronising the environment, then review and scan the changed lockfile again:

```bash
uv remove aspectlib --no-sync --no-build
```

If compromise is suspected, follow [Malware response](#malware-response) rather than treating removal as remediation.

:::

::: tab conda

### conda-managed projects

#### 1. Generate or update the lockfile

Edit `environment.yml` to declare the intended dependencies and approved channels, then resolve the target platforms without installing the application environment:

```bash
conda-lock lock --file environment.yml --platform linux-64 --platform osx-arm64
```

Replace these illustrative platforms with the project's actual deployment and development targets. Review the generated `conda-lock.yml`, including package versions, build identifiers, URLs, hashes and pip-managed entries. Ensure it reflects the current environment specification before approving it.

Resolution involving pip source, Git or editable dependencies may execute metadata or build code. Perform such resolution in a controlled environment and review those dependencies separately; do not assume conda-lock provides uv's `--no-build` protection.

#### 2. Review and scan each ecosystem

Check conda artifacts against the approved channels' security advisories and use approved scanning tools with coverage for their native dependencies. Record coverage gaps and agree how they will be addressed with Security before installation.

OSV Scanner's [supported lockfiles](https://google.github.io/osv-scanner/supported-languages-and-lockfiles/) include `uv.lock`, but do not currently list `conda-lock.yml`. Do not treat it as a supported input or relabel conda packages as PyPI packages to obtain a clean scan. Scan pip-managed entries using their resolved PyPI identities and versions in a supported input format; review private and direct-URL dependencies separately.

#### 3. Install only after review

Create a project environment from the approved lockfile on a matching platform:

```bash
conda-lock install --name python-project conda-lock.yml
```

Use this approach in local development, CI and container builds rather than resolving again from `environment.yml`. Do not subsequently add packages with ad hoc conda or pip installations; update the specification and repeat the review process.

:::

::::