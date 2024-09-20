---
layout: article
title: "Git branching"
description: "Define a branching strategy to avoid confusion and reduce risk"
tags: [dev, branching]
order: 8
review:
    last_reviewed_date: 2024-09-20
    review_cycle: ANNUAL
---
!!! warning Standard documentation

All projects must define and publish a branching strategy in the project documentation site.
See [project documentation](#documentation)

!!!

We define a branching strategy:

* to avoid confusion when creating feature branches
* to reduce risk of accidentally merging into the wrong branch
* so that hotfixes can be deployed in a timely manner

## Standard branching strategy

The standard NHSBSA branching strategy defines three types of branch:

* __Production__
* __Release candidate__
* __Change candidate__

### Production

The `main` branch must contain the exact same code as production. It is created at the start of a project and is maintained throughout the development process. When a change has been deployed to production successfully the branch of code will be merged back into `main`.

* Code must not be pushed directly to `main`. Use branch protection to prevent anyone (including maintainers) from pushing to `main`.
* Code must only be merged into main if it has not diverged. Configure your project's merge settings to `ff-only` to enforce this behaviour.
* The head of `main` should be git tagged with a semantic version number, indicating the current version of production software.

### Release candidate

A release candidate branch will hold code intended for release into production. Quality controls such as automated acceptance tests must succeed before a release candidate is accepted for release into production.

We use these branch names for release candidates:

* `develop`
  For newly developed features and low priority bugfixes
* `hotfix`
  For urgent fixes to address defects found in production

Projects teams may adopt a naming convention to convey additional information, such as the candidate release number and/or a release name.
e.g. `develop-1.2.0-wcag22`

* Changes must not be pushed directly to release candidate branches. Use branch protection to prevent developers from pushing.
* Rebased code may be force pushed by Maintainers only (see [rebasing](#rebasing) below). Rebasing a protected branch will require temporary rule changes.

### Change candidate

A change candidate branch is the most common type of branch, used by developers to iterate their change, before [review](../coding-peer-review/) and merge into a release candidate branch.

We adopt this convention for change candidate branch names:

* `build`
  Changes that affect the build system or external dependencies (example scopes: maven, npm).
* `ci`
  Changes to our CI configuration files and scripts (example scopes: Gitlab-CI, Azure Devops)
* `docs`
  Documentation only changes
* `feature`
  A new feature
* `fix`
  A bug fix
* `perf`
  A code change that improves performance
* `refactor`
  A code change that neither fixes a bug nor adds a feature
* `style`
  Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
* `test`
  Adding missing tests or correcting existing tests

Branch names must follow our [naming conventions](../coding-naming-conventions/) to include change ID and description. e.g. `feature/LIS-1234-add-back-button`

## Controls

Git repository hosting providers provide various features to add additional controls on what can be done. These must be configured to protect the branch and release process.

### Gitlab

* Under `Settings` > `Repository` > `Protected branches`:
  * Protect named `main` branch, and wildcard `develop*` and `hotfix*`
  * Allowed to merge: `Developers` and `Maintainers`
  * Allowed to push and merge: `No-one`
  * Allowed to force push: `No`
* Under `Settings` > `Repository` > `Branch rules`:
  * Add rule for `All protected branches`
  * Add approval rule
  * Required approvals at `1` as a minimum. Projects may choose more approvers.
* Under `Settings` > `Merge requests`
  * Merge method: `Fast-forward merge`

## Rebasing

### Rebase or merge

We recommend that project teams rebase their branches against the upstream branch whenever they diverge. This provides a more streamlined and understandable git history, and simplifies squashing.

!!! warning rebase requires team comms

Whenever a shared branch is rebased, the entire team needs to be notified. Every team member will need to reset their local branch to the rewritten remote:

e.g.

```bash
git fetch --all
git reset --hard <branch> origin/<branch>
```

!!!

### Squashing

We recommend that developers squash commits into logical commits for change candidate branches prior to merge into a release candidate branch. This removes unneccesary commits that can confuse.

## Process

### Preconditions

* A new repository must use `main` as the production branch.
* Imported repositories
  * may have adopted the non-standard `master` branch. This should be changed to `main`.
  * must import into an empty repository in the Git hosting provider. Merging a repository into a pre-existing `main` will cause confusion in the git history.
* [Controls](#controls) must be applied as above

### Release Candidate

* Maintainer creates a new release candidate branch `develop-xyz` from `main`
* Changes are developed, see [change candidate](#change-candidate) below.
* When the changes are fully tested and ready to go into production, a semver tag is created on the `develop-xyz` branch.
* CI/CD triggers to deploy to pre-prod environments and ultimately production
* On successful deployment to production, the branch is merged into `main`. Merge into `main` must be `ff-only`.
* Any concurrent release candidate branches should rebase to `main`.
  Any of their downstream change candidate branches should rebase to the new change candidate.

### Change Candidate

* Developer creates a new change candidate branch, `feature-xyz` branch from the newly created `develop-xyz` branch.
* When the feature changes are complete they raise a merge request for [review](../coding-peer-review/)
* The changes are merged (ideally [commits squashed](#squashing)) in to the `develop` branch. The change candidate branch should be deleted.
* The _change_ -> _release_ cycle is repeated until all the changes relating the release are stable and tested.

## Documentation

All projects must document their git branching and release strategy. Deviation from standards must also be documented along with decision records explaining the reason for deviation.

Documentation should cover:

* Root git branching strategy. e.g. git-flow, github-flow, other
* Branch naming convention
* Rebasing approach including rebase vs merge commits, and squashing
* Branch protection
* Approval rules
