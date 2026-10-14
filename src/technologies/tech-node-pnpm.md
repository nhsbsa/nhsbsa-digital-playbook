---
layout: article
title: "Using pnpm"
description: "How we install and configure pnpm for Node.js projects"
status: DRAFT
tags: [tech, node]
order: 21
review:
    last_reviewed_date: 2026-09-14
    review_cycle: ANNUAL
---
[pnpm](https://pnpm.io/) is a fast, disk space efficient package manager for Node.js. It's a drop-in alternative to npm, and provides stronger guardrails against [dependency chain abuse](../../security/tech-node-dependency-chain-abuse/) out of the box.

This guide covers how we set up and configure pnpm in a Node.js project, in line with our Node.js security practices.

## 1. Runtime baseline

* Use a Node.js version that is compatible with your pnpm version
* Make sure the CI image and any Docker base images match your local Node.js baseline
* Continue to use [NVM and a checked in `.nvmrc` file](../tech-node/#nodejs-versions) to manage Node.js versions in development

## 2. Install pnpm

Use [Corepack](https://nodejs.org/api/corepack.html) to install and pin pnpm alongside your NVM managed Node.js version:

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

See [Mitigating supply chain attacks](https://pnpm.io/supply-chain-security) for the reasoning behind these settings. They're a stricter equivalent of our [NPM configuration guidance](../../security/tech-node-dependency-chain-abuse/#npm-configuration): disabling scripts by default, and delaying adoption of newly published versions so that compromised releases are more likely to have been caught and pulled first.

### 3.2 `package.json` enforcement

Pin the Node.js and pnpm versions your project requires, and fail fast if a developer or build agent uses the wrong tool (for example, npm):

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

## 4. Installing dependencies

!!! warning Follow the pnpm supply chain security guide for all installs

Whenever you install, update or audit dependencies with pnpm - locally, in CI or in a Dockerfile - ensure you use the [3.1 configuration guardrails](#31-pnpm-workspaceyaml) above.

This is in addition to, not instead of, our existing [malware and vulnerability scanning](#6-malware-and-vulnerability-scanning) with OSV Scanner.
!!!

Commit `pnpm-lock.yaml` to source control, and don't keep any other lockfiles (such as `package-lock.json`) in the project.

If any dependencies rely on lifecycle scripts to function, and are blocked by `ignoreScripts`, review and explicitly approve only the ones you trust:

```bash
pnpm approve-builds
```

## 5. Developer commands

| Task | Command |
| --- | --- |
| Install dependencies (reproducible) | `pnpm ci` |
| Install dependencies (updating the lockfile) | `pnpm install` |
| Add a dependency | `pnpm add <pkg>` |
| Add a dev dependency | `pnpm add -D <pkg>` |
| Run a script | `pnpm <script>` |
| Run a script in a workspace package | `pnpm --filter <pkg> <script>` |
| Run a binary from a declared dependency | `pnpm exec <pkg>` |
| Run a command across all workspace packages | `pnpm -r <command>` |

!!! warning Use `pnpm ci` for reproducible installs

Since pnpm v11, `pnpm ci` is the direct equivalent of `npm ci`. It removes `node_modules` and then runs `pnpm install --frozen-lockfile`, which fails if `pnpm-lock.yaml` is missing or out of sync with `package.json`, rather than updating it.

All users of pnpm **must** use `pnpm ci` to install dependencies in local development, CI build jobs and Dockerfile builds, in the same way we require `npm ci` for npm projects.
!!!

As with npm, avoid running install scripts as ad-hoc command line calls, and don't use global installs.

Use `pnpm exec <pkg>` rather than `pnpm dlx <pkg>`. `pnpm exec` only runs a binary from a package that is already declared as a dependency in `package.json` and installed from the lockfile, so it can be reviewed and scanned like any other dependency. `pnpm dlx` (like `npx`) fetches and executes a package on demand without it being declared anywhere, so it carries the same [uncontrolled dependency](../../security/tech-node-dependency-chain-abuse/#declare-dependencies) risk as `npx` and should be avoided in the same way.

## 6. Malware and vulnerability scanning

Scan the lockfile for malware and vulnerabilities before install, as described in our [OSV Scanner guidance](../../security/tech-node-dependency-chain-abuse/#osv-scanner), pointing it at `pnpm-lock.yaml`:

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

## 9. Project checklist

* `pnpm ci`, `pnpm test` and `pnpm run build` succeed locally
* `pnpm-workspace.yaml` and the `package.json` `engines` / `devEngines` settings are in place
* `pnpm-lock.yaml` is committed, and no other lockfiles are present
* CI and Dockerfiles use `pnpm ci`
* OSV Scanner is scanning `pnpm-lock.yaml`

## References

* [pnpm CLI reference](https://pnpm.io/pnpm-cli)
* [pnpm: Mitigating supply chain attacks](https://pnpm.io/supply-chain-security)
* [pnpm: Continuous Integration](https://pnpm.io/continuous-integration)
* [Protecting against NPM dependency chain abuse](../../security/tech-node-dependency-chain-abuse/)
