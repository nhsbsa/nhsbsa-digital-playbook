---
layout: article
title: "Using pnpm"
description: "Migrating a Node.js project from npm to pnpm, and configuring it securely"
status: DRAFT
tags: [tech, node]
order: 21
review:
    last_reviewed_date: 2026-09-14
    review_cycle: ANNUAL
---
[pnpm](https://pnpm.io/) is a fast, disk space efficient package manager for Node.js. It's a drop-in alternative to npm, and provides stronger guardrails against [dependency chain abuse](../../security/tech-node-dependency-chain-abuse/) out of the box.

This guide covers migrating an existing npm project to pnpm, and configuring it in line with our Node.js security practices.

## 1. Decide your runtime baseline

Before starting:

* Confirm the Node.js version you'll use is compatible with your target pnpm version
* Confirm the CI image and any Docker base images match your local Node.js baseline
* Continue to use [NVM and a checked in `.nvmrc` file](../tech-node/#nodejs-versions) to manage Node.js versions in development

## 2. Install pnpm

Use [Corepack](https://nodejs.org/api/corepack.html) to install and pin pnpm alongside your existing NVM managed Node.js version:

```bash
corepack enable
corepack prepare pnpm@12 --activate
pnpm -v
```

!!! warning Corepack won't be available from Node.js 26

Corepack is no longer bundled by default with newer Node.js releases, and is removed entirely from Node.js 26 onwards. Once your project moves to Node.js 26 or later, Corepack will not be available, so either:

* install pnpm using the [standalone install script](https://pnpm.io/installation#using-a-standalone-script), which doesn't require Node.js to already be installed, or
* install pnpm as a global tool using your platform's package manager (e.g. `brew install pnpm`)

Track the [pnpm installation guidance](https://pnpm.io/installation) for the current recommended approach, and update your CI and Docker configuration when Corepack support is dropped.
!!!

## 3. Configuration guardrails

### 3.1 `pnpm-workspace.yaml`

Add a `pnpm-workspace.yaml` file at the project root to control workspace package discovery and dependency resolution policy.

```yaml
# Security: 7 day delay before newly published versions can be installed
minimumReleaseAge: 10080

# Do not run install scripts (pre/postinstall) for dependencies by default
ignoreScripts: true

# Only resolve transitive dependencies from trusted registries, not git/tarball URLs
blockExoticSubdeps: true

# Only needed for monorepos - replace with your workspace globs
packages:
  - './packages/*'
```

See [Mitigating supply chain attacks](https://pnpm.io/supply-chain-security) for the reasoning behind these settings. They're a stricter equivalent of our existing [NPM configuration guidance](../../security/tech-node-dependency-chain-abuse/#npm-configuration): disabling scripts by default, and delaying adoption of newly published versions so that compromised releases are more likely to have been caught and pulled first.

### 3.2 `package.json` enforcement

Pin the Node.js and pnpm versions your project requires, and fail fast if a developer or build agent uses the wrong tool:

```json
{
  "engines": {
    "node": ">=24",
    "pnpm": ">=12 <13"
  },
  "devEngines": {
    "packageManager": {
      "name": "pnpm",
      "version": "12.x",
      "onFail": "error"
    },
    "runtime": {
      "name": "node",
      "version": "24.x",
      "onFail": "error"
    }
  }
}
```

Notes:

* `devEngines.packageManager.onFail: "error"` blocks the command from running if pnpm isn't the version pinned. This is the key control that prevents npm being used by mistake.
* `devEngines.runtime.onFail` also accepts `"warn"` or `"download"`. We use `"error"` so that CI and Docker builds fail loudly on a runtime mismatch, rather than silently downloading an unreviewed Node.js build.
* Adjust the Node.js and pnpm version ranges to match your [release adoption schedule](../tech-release-adoption-schedule/).

## 4. Convert the lockfile and install

!!! warning Follow the pnpm supply chain security guide for all installs

Whenever you install, update or audit dependencies with pnpm - locally, in CI or in a Dockerfile - ensure to use the [3.1 configuration guardrails](#31-pnpm-workspaceyaml) above.

This is in addition to, not instead of, our existing [malware and vulnerability scanning](#6-update-malware-and-vulnerability-scanning) with OSV Scanner.
!!!

Generate `pnpm-lock.yaml` from your existing npm lockfile:

```bash
pnpm import
pnpm install
```

`pnpm import` reads from whichever of these is present:

* `package-lock.json`

After validating the install and test suite pass, remove the old lockfile so it doesn't drift out of sync:

```bash
rm -f package-lock.json
```

If any dependencies rely on lifecycle scripts to function, and are blocked by `ignoreScripts`, review and explicitly approve only the ones you trust:

```bash
pnpm approve-builds
```

## 5. Migrate developer commands

| npm | pnpm |
| --- | --- |
| `npm install` | `pnpm install` |
| `npm ci` | `pnpm ci` |
| `npm install <pkg>` | `pnpm add <pkg>` |
| `npm install -D <pkg>` | `pnpm add -D <pkg>` |
| `npm run <script>` | `pnpm <script>` |
| `npm run <script> --workspace=<pkg>` | `pnpm --filter <pkg> <script>` |
| `npx <pkg>` | `pnpm exec <pkg>` |
| n/a | `pnpm -r <command>` runs a command across all workspace packages |

!!! warning Use `pnpm ci` for reproducible installs

Since pnpm v11, `pnpm ci` is the direct equivalent of `npm ci`. It removes `node_modules` and then runs `pnpm install --frozen-lockfile`, which fails if `pnpm-lock.yaml` is missing or out of sync with `package.json`, rather than updating it.

All users of pnpm **must** use `pnpm ci` to install dependencies in local development, CI build jobs and Dockerfile builds, in the same way we require `npm ci` today.
!!!

As with npm, avoid running install scripts as ad-hoc command line calls, and don't use global installs.

If you previously ran `npx <pkg>`, prefer `pnpm exec <pkg>` over `pnpm dlx <pkg>`. `pnpm exec` only runs a binary from a package that is already declared as a dependency in `package.json` and installed from the lockfile, so it can be reviewed and scanned like any other dependency. `pnpm dlx` (like `npx`) fetches and executes a package on demand without it being declared anywhere, so it carries the same [uncontrolled dependency](../../security/tech-node-dependency-chain-abuse/#declare-dependencies) risk as `npx` and should be avoided in the same way.

## 6. Update malware and vulnerability scanning

Continue to scan the lockfile for malware and vulnerabilities before install, as described in our [OSV Scanner guidance](../../security/tech-node-dependency-chain-abuse/#osv-scanner), pointing it at `pnpm-lock.yaml` instead of `package-lock.json`:

```bash
osv-scanner scan -f markdown --lockfile=pnpm-lock.yaml --output osvscan.md
```

## 7. GitLab CI example

```yaml
image: node:24

variables:
  PNPM_HOME: "$CI_PROJECT_DIR/.pnpm"

before_script:
  - corepack enable
  - export PATH="$PNPM_HOME/bin:$PATH"

cache:
  key:
    files:
      - pnpm-lock.yaml
  paths:
    - .pnpm-store

build_and_test:
  script:
    - pnpm config set store-dir .pnpm-store
    - pnpm ci
    - pnpm run test
    - pnpm run build
```

## 8. Dockerfile example

```dockerfile
# Stage 1: Build & Dependencies
FROM node:24-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
COPY . /app
WORKDIR /app

FROM base AS prod-deps
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm ci --prod

FROM base AS build
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm ci
RUN pnpm run build

# Stage 2: Runtime
FROM node:24-slim
WORKDIR /app
COPY --from=prod-deps /app/node_modules /app/node_modules
COPY --from=build /app/dist /app/dist
COPY package.json .

EXPOSE 3000
CMD [ "node", "dist/index.js" ]
```

## 9. Validation checklist

* `pnpm install` succeeds locally
* `pnpm test` passes
* `pnpm run build` passes
* `pnpm-lock.yaml` is committed
* `package-lock.json` and any other npm lockfiles are removed
* CI and Dockerfiles use `pnpm ci`
* OSV Scanner is scanning `pnpm-lock.yaml`
* All scripts in `package.json` are updated to their pnpm equivalents and run correctly
* Team documentation is updated with the new pnpm commands

## 10. Suggested rollout

1. Raise a dedicated migration merge request - don't mix in feature changes
2. Add the toolchain pinning and guardrails from steps 2 and 3 first
3. Import the lockfile and validate build/test parity locally
4. Update CI and Docker configuration, and confirm a clean pipeline run
5. Merge once CI and runtime behaviour are stable, then remove the old npm lockfile

## References

* [pnpm CLI reference](https://pnpm.io/pnpm-cli)
* [pnpm: Mitigating supply chain attacks](https://pnpm.io/supply-chain-security)
* [pnpm: Continuous Integration](https://pnpm.io/continuous-integration)
* [Protecting against NPM dependency chain abuse](../../security/tech-node-dependency-chain-abuse/)
