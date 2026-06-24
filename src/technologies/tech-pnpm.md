---
layout: article
title: "pnpm for Node.js"
tags: tech
order: 21
related:
  tag: node
review:
  last_reviewed_date: 2026-05-28
  review_cycle: ANNUAL
---

[pnpm](https://pnpm.io) is the preferred package manager for Node.js projects within NHSBSA. It was selected to improve dependency management, strengthen protection against supply chain attacks, improve CI/CD performance, and provide a more consistent and reproducible developer experience.

## Why pnpm?

- **Faster**: Up to 2x faster than npm due to efficient caching
- **Disk Space Efficient**: Uses content-addressable storage to avoid duplication
- **Secure**: Stricter dependency resolution preventas phantom dependencies
- **Monorepo Support**: Support for multi-package repositories
- **Stronger Supply Chain Security**: Lifecycle scripts disabled by default

## Local Environment Setup

Since Node.js 24 bundles Corepack, you do not need to install pnpm globally. This ensures every developer uses the exact version defined in your project.

### Initial Setup

```bash
# Switch to the correct Node version
nvm use 24

# Enable Corepack (built into Node.js 24)
corepack enable

# Verify pnpm installation (type 'y' when prompted)
pnpm -v
# Output: 10.30.2
```

## Project Configuration

### pnpm-workspace.yaml

Create this file at the root of your project to manage monorepo structure and enforce security/stability.

```yaml
# Security: 24-hour "cool-down" for new package versions to prevent supply chain attacks
minimumReleaseAge: 1440

# Stability: Blocks installation of packages incompatible with Node 24
engineStrict: true

# Monorepo structure
packages:
  - "./packages/*"
```

### package.json

Enforce environment constraints to prevent accidental npm usage.

```json
{
  "engines": {
    "node": "24",
    "pnpm": ">=10"
  },
  "packageManager": "pnpm@10.0.0",
  "devEngines": {
    "packageManager": {
      "name": "pnpm",
      "onFail": "error"
    },
    "runtime": {
      "name": "node",
      "version": "24",
      "onFail": "error"
    }
  }
}
```

### Build Scripts

Build scripts are disabled by default for security. Run the following to approve dependencies that need to run build scripts:

```bash
pnpm approve-builds
```

## Common Commands

| Action               | Command                                   |
| -------------------- | ----------------------------------------- |
| Install dependencies | `pnpm install`                            |
| Add a dependency     | `pnpm add express`                        |
| Add a dev dependency | `pnpm add -D nodemon`                     |
| Run a script         | `pnpm <script_name>` (e.g., `pnpm start`) |
| Update dependencies  | `pnpm update`                             |
| Interactive update   | `pnpm update -i`                          |
| Remove a dependency  | `pnpm remove express`                     |
| Install for CI/CD    | `pnpm ci`                                 |

## Monorepo & Workspace Commands

When working with multiple packages in a workspace, use these commands:

### Recursive Operations

Update dependencies in every package within your workspace:

```bash
pnpm update -r
```

### Filtering

Restrict a command to a specific package:

```bash
# Run the 'dev' script only in the 'api' package
pnpm --filter api dev

# Add a package only to the 'web-auth' package
pnpm --filter web-auth add jose
```

### Interactive Update

Provides a terminal UI to choose which packages to upgrade:

```bash
pnpm update -i --recursive
```

## Migrating from npm

### Migration Steps

1. Ensure you're using Node.js 24 and have Corepack enabled
2. Convert your existing `package-lock.json`:

```bash
pnpm import
```

3. Verify the migration by running:

```bash
pnpm install
```

4. Once verified, clean up the old lockfile:

```bash
rm package-lock.json
```

Most commands are intentionally compatible with npm:

| npm             | pnmp             |
| --------------- | ---------------- |
| `npm install`   | `pnpm install`   |
| `npm run build` | `pnpm run build` |

## CI/CD Integration

### GitLab CI

Optimized configuration for caching the pnpm global store to speed up pipeline execution.

```yaml
image: node:24

variables:
  PNPM_CACHE_DIR: .pnpm-store

cache:
  key:
    files:
      - pnpm-lock.yaml
  paths:
    - .pnpm-store

before_script:
  - corepack enable
  - pnpm config set store-dir $PNPM_CACHE_DIR

build_and_test:
  script:
    - pnpm ci
    - pnpm run test
    - pnpm run build
```

### Docker Integration

Multi-stage build for a slim production image:

```dockerfile
# Stage 1: Build & Dependencies
FROM node:24-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
COPY . /app
WORKDIR /app

FROM base AS prod-deps
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile

FROM base AS build
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm run build

# Stage 2: Runtime (Express Server)
FROM node:24-slim
WORKDIR /app
COPY --from=prod-deps /app/node_modules /app/node_modules
COPY --from=build /app/dist /app/dist
COPY package.json .

EXPOSE 3000
CMD [ "node", "dist/index.js" ]
```

### Docker Migration Notes

When migrating existing Dockerfiles:

- Replace `npm ci` with `pnpm install --frozen-lockfile`
- Replace `npm install` with `pnpm install`
- Update base image to Node.js 24
- Add Corepack enable step
- Copy `pnpm-lock.yaml` instead of `package-lock.json`

## Best Practices

- **Always commit** `pnpm-lock.yaml` to source control
- **Use `--frozen-lockfile`** in CI/CD to ensure reproducible builds
- **Enable Corepack** in all environments to ensure consistent pnpm versions
- **Set `minimumReleaseAge`** in `pnpm-workspace.yaml` to prevent supply chain attacks
- **Use workspaces** for monorepo projects to share dependencies efficiently

## Troubleshooting

### Common Issues

**Issue**: "Command not found: pnpm"

```bash
# Solution: Enable Corepack
corepack enable
```

**Issue**: Build scripts fail

```bash
# Solution: Approve build scripts
pnpm approve-builds
```

**Issue**: Wrong pnpm version

```bash
# Solution: Ensure packageManager field is set in package.json
# Corepack will automatically use the specified version

# Check which pnpm version Corepack is using
pnpm -v
# Enable Corepack
corepack enable

# Refresh Corepack package manager mappings
corepack install

# Use the version defined in package.json
corepack use
```

Ensure your package.json contains:

```bash
{
  "packageManager": "pnpm@10.0.0"
}
```

You can also explicitly activate a version manually:

```bash
corepack prepare pnpm@10.0.0 --activate
```

Verify pnmp version again.

If you still have questions or need support, reach out to the Node Guild or the wider developer community.

## Further Reading

- [pnpm Documentation](https://pnpm.io/)
- [Corepack Documentation](https://nodejs.org/api/corepack.html)
- [pnpm Workspace Guide](https://pnpm.io/workspaces)
