---
layout: article
title: "Git"
description: "Define how your team use Git to avoid confusion and reduce risk"
tags: [dev]
order: 8
status: DRAFT
related:
  title: Related articles
  tag: git
review:
    last_reviewed_date: 2024-09-20
    review_cycle: ANNUAL
---
Teams should be autonomous and adopt tools and processes that fit their circumstances, however we have these non-negotiable standards that must be adhered to:

* __Project documentation__
  All projects must document their [branching strategy](#branching-strategy), [git usage](git-usage) and [controls](#controls). Changes from our standard approaches must be held as decision records with a rationale for the deviation.
* __Main is production__
  The `main` branch must always reflect the current release, running in production. Keeping `main` as production makes it easier to hotfix urgent changes, such as fixing zero-day exploits. Merging into main must be `ff-only` to ensure the commit that was reviewed becomes HEAD of main. If the branches have diverged, that must be resolved before merge into main.
* __Change attribution__
  Code changes must contain the [author](#git-configuration) and [issue ID](#conventional-commits) such as a Jira ticket number.
* __Release by SemVer Tag__
  Released versions of code must be identified by a Git tag on the commit that was quality assured. Release tags must follow the [Semantic Versioning standard 2.0.0](https://semver.org/spec/v2.0.0.html). Pre-release semantic versions must not be released into production.
* __Assure quality before release__
  Before a codebase is tagged for release, it must be assured as meeting requirements:
  * [Peer review](../coding-peer-review/)
  * [Quality assurance](../coding-quality-assurance/)
  * [Testing](../../testing/test-frameworks/)
* __Binary dependencies are not held in source control__
  Use package managers to declare dependencies, and resolve binaries within the build. This also lets us benefit from software composition analysis tools to check for vulnerabilities.

## Branching Strategy

A branching strategy is a set of rules to manage and organize code changes in a Git system. A strategy helps to:

* Prevent conflicts: Avoid merge conflicts that can occur when multiple people work on the same project at the same time
* Increase productivity: Allow the team to work on different features simultaneously
* Reduce version management time: Help teams to manage release of code more efficiently

There are [many Git branching strategies](https://graphite.dev/guides/git-branching-strategies) including:

* Git-flow
* GitHub-flow
* Trunk Based Development

We recommend using our [standard branching strategy](../dev-git-branching-strategy/), based on git-flow.

## Git usage

### Git configuration

Ensure your local Git configuration is correct.

* __Identity__
  Ensure that your committer identity (name and email) is the same as your Git hosting provider identity (Gitlab, Github, Azure).
  We endeavour to Open Source our code which will bring commit identities into the public realm. You may choose to remain anonymous by using a 'cipher' identity and email address.
* __Pull__
  Avoid merge commits on pull by setting the `pull.rebase` configuration option:

  ```bash
  git config --global pull.rebase true
  ```

* __Git alias__
  Optimise Git usage by providing aliases to complex or frequent git commands.

  ::: details Suggested alias configuration:

  ```text
  [alias]
    cp=cherry-pick
    co=checkout
    br=branch
    lg=log --graph --abbrev-commit --decorate --format=format:'%C(bold blue)%h%C(reset) - %C(bold green)(%ar)%C(reset) %C(white)%s%C(reset) %C(dim white)- %an%C(reset)%C(bold yellow)%d%C(reset)'
    pf=push --force-with-lease
    so=show --pretty='parent %Cred%p%Creset commit %Cred%h%Creset%C(yellow)%d%Creset%n%n%w(72,2,2)%s%n%n%w(72,0,0)%C(cyan)%an%Creset %Cgreen%ar%Creset'
  ```

  :::

### Conventional commits

We recommend adopting [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) to structure commit messages.

```html
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

* The commit header should contain the type of change, ticket reference and a short description.

  ::: details Conventional commit types

  * `build`
    Changes that affect the build system or external dependencies (example scopes: maven, npm).
  * `ci`
    Changes to the CI configuration files and scripts (example scopes: Gitlab-CI, Azure Devops)
  * `docs`
    Documentation only changes
  * `feat`
    A new feature
  * `fix`
    A bug fix
  * `perf`
    A code change that improves performance
  * `refactor`
    A code change that neither fixes a bug nor adds a feature
  * `style`
    Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc). We always recommend separating formatting changes from functional changes
  * `test`
    Adding missing tests or correcting existing tests

  :::

  ```text
  feat: LIS-123 adds back button
  ```

* The optional body should contain details of specific changes if required
* The optional footer should contain [git-trailer](https://git-scm.com/docs/git-interpret-trailers) formatted meta-information


### Issue trackers

Git hosting providers often integrate with issue tracking services. Use commit messages to automatically post updates or transition tickets:

::: details Gitlab to Jira

* [Gitlab Jira integration](https://docs.gitlab.com/ee/integration/jira/)
  On Merge Request creation, a Jira ticket ID in the branch name, commit message or MR title will link the ticket to the MR

:::

### Rebasing

Rebasing is a way to tidy up the Git commit history. It involves rewriting commits for a mix of purposes:

* Fixing merge conflicts: Rebasing can alter changes in a branch to avoid conflict with changes in another branch.
* Cleaning up project history: Rebasing can create a cleaner project history by combining multiple commits into one.
* Editing commit messages: Rebasing can be used to edit previous commit messages.
* Deleting or reverting commits: Rebasing can be used to delete or revert commits that are no longer necessary

!!! warning Rebase needs team consensus
Rebasing will change the Git commit graph and has potential to create an inconsistent repository that is difficult to recover from. Rebase with caution and consult your professional lead if you are unsure of what you are doing.

Whenever a shared branch is rebased, the entire team must be notified. Every team member will need to reset their local branch to the rewritten remote:

e.g.

```bash
git fetch --all
git reset --hard <branch> origin/<branch>
```

!!!

#### Squashing

We recommend that developers squash commits into logical commits prior to merge. This removes unneccesary commits that can confuse, providing a clean and logical git history. Use interactive rebase to take control of squashing, and the resulting commit messages.

Git hosting providers often support squashing on merge. We recommend against this. Automating removes control from authors on the resulting commit message. There is a risk that detail is lost from the squashed commits, or too much needless information is included. There is a further risk that issue IDs are lost, removing audit.

Git commits must never be squashed automatically when merging into `main`. Change is only allowed into `main` after it has been tested in a pre-production environment. Squashing will change the commit history, rendering the tests invalid.

#### Rebase or merge

We recommend that project teams rebase their branches against the upstream branch whenever they diverge. This provides a more streamlined and understandable git history, and simplifies squashing.

Using a merge commit from an upstream branch makes squashing and reverting change more difficult.

We also advise squashing unecessary commits before a rebase. This simplifies conflict resolution.

### Shared branches

We recommend against using shared branches between collaborators, except via a peer-reviewed merge/pull request:

* It misses the review step between collaborators
* There is increased chance of merge commits and complex Git history when pulling divergent changes

### Forced pushes

Sometime we need to overwrite a branch with a re-written Git history. Be very careful when force-pushing a shared branch. Ensure that every team member understands how to resolve their local repository against a force-pushed remote branch.

Use `force-with-lease` as a safer way to force push:

```bash
git push --force-with-lease
```

## Controls

Git repository hosting providers support adding controls on what can be done with a hosted Git repository. These must be configured to protect the branch and release process.

* Prevent unauthorised push to production and release branches
* Prevent unapproved merge of code into the release process
* Prevent non-compliant commits and branch names

::: details Gitlab configuration

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
* Under `Settings` > `Push rules` > `Branch name`
  * Branch name regex: `(main|develop|hotfix)|(build|ci|docs|feature|fix|perf|refactor|style|test)[\-\/]([A-Z]{3,4}|NO-JIRA)`

:::

