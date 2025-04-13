---
layout: article
title: "Git"
description: "Define how your team use Git to avoid confusion and reduce risk"
tags: [dev]
order: 8
status: REVIEW
related:
  title: Related articles
  tag: git
review:
    last_reviewed_date: 2025-03-20
    review_cycle: ANNUAL
---
Git is a distributed version control system used to track changes in source code. It allows developers to collaborate on projects by managing different versions of the same files, creating branches for new features, before merging changes into software releases.

Git is built on simple and elegant principles that support independent work in an offline, local environment. Git hosting providers such as Gitlab, Github and Azure enhance the collaborative experience with features such as code review, and continuous integration and deployment build pipelines.

The command line interface to Git is notoriously unintuitive with inconsistent terminiology and arcane flags that change behaviour in unexpected ways. This often leads to users either knowing just enough to get by, or becoming experts that with strong opinions on topics such as keeping a clean commit history. This page provides key guidance to teams so that they may use Git to their best advantage.

Our [suggested learning resources](#learn-more) provide additional support for beginner and expert Git users.

## NHSBSA Mandatory Rules

Teams should be self directing and adopt tools and processes to fit their circumstances, however we have these non-negotiable standards that must be adhered to:

* __Project documentation__
  All projects must document their git conventions, including their [branching strategy](#branching-strategy) and [controls](#controls). Changes from the standard approaches defined here must be held as decision records with a rationale for any deviation.
* __Main is production__
  The `main` branch must always reflect the current release, running in production. Keeping `main` as production makes it easier to hotfix urgent changes, such as fixing zero-day exploits. Merging into main must be `ff-only` to ensure the commit that was reviewed and tested becomes HEAD of main. If `main` has progressed ahead of an upcoming release branch, the difference must be resolved and tested before merge into main.
* __Change attribution__
  Code changes must contain the [author](#git-configuration) and [issue tracker ID](#conventional-commits).
* __Release by SemVer Tag__
  Released versions of code must be identified by a Git tag on the commit that was quality assured. Release tags must follow the [Semantic Versioning standard 2.0.0](https://semver.org/spec/v2.0.0.html). Pre-release semantic versions must not be released into production.
* __Assure quality before release__
  Before a codebase is tagged for release, it must be assured as meeting requirements:
  * [Peer review](../coding-peer-review/)
  * [Quality assurance](../coding-quality-assurance/)
  * [Testing](../../testing/test-frameworks/)
* __Binary dependencies are not held in source control__
  Use package managers to declare dependencies, and resolve binaries within the build. Package descriptors also enable tool to check for downstream vulnerabilities and licence compliance.

## Git Hosting

The primary Git hosting provider at the NHSBSA is [Gitlab.com](https://gitlab.com/nhsbsa) although some teams use Github or Azure Repositories.

Access to Gitlab is controlled via Azure Entra ID and requested via Service Desk.

### Issue Trackers

Git hosting providers often integrate with issue tracking services. Use commit messages to automatically post updates or transition tickets:

::: details Gitlab to Jira

* [Gitlab Jira integration](https://docs.gitlab.com/ee/integration/jira/)
  On Merge Request creation, a Jira ticket ID in the branch name, commit message or MR title will link the ticket to the MR

:::

## Commits

A Commit records the changes made to files in a codebase. The message attached to a commit should clearly communicate what changed and why. A well written commit message will help people to understand a codebase, as modern IDEs can display commit information alongside each line of code.

### Clean code

Well written commit messages support clean code. For instance, they remove the motivation for these anti-patterns:

* __Journal comments__
  A log of changes written in every file.
* __Attribution and bylines__
  Adding comments with ticket number and author diverts a reader's attention from understanding the code as a whole. In a few months time, that change is no more important than any other.
* __Commented out code__
  Redundant code should always be removed.

### Logical commits

Logical commits refers organising change into well-defined, coherent units that represent a single logical change to the codebase:

* Each commit addresses a single concern or feature
* The commit can be understood on its own without requiring context from other commits
* The changes are complete enough to not break functionality
* The commit message clearly explains what changed and why

### Commit frequency

We recommend committing regular and often. Changes should be pushed to the Git hosting provider at least daily to serve as backup.

Take care not to sacrifice logical commits by committing too frequently. If you wish to commit unfinished work, then make this clear by labelling the commit as work in progress (wip), and later [squash](#squashing) the commits.

### Squashing

We recommend squashing commits into logical commits prior to merge downstream. This removes unneccesary commits that can confuse, providing a clean and logical git history. Use [interactive rebase](https://www.atlassian.com/git/tutorials/rewriting-history/git-rebase) to take control of squashing, and the resulting commit messages.

Most Git hosting providers support squashing on merge. We recommend against this. Automating removes control from authors on the resulting commit message. There is a risk that detail is lost from the squashed commits, or too much needless information is included. There is a further risk that issue IDs are lost, removing audit.

Commits should not be squashed automatically when merging downstream and never when merging into `main`. Change is only allowed into `main` after it has been tested in a pre-production environment. Squashing will change the commit history, rendering the tests invalid.

### Conventional Commits

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

## Merging

Consider the direction of flow for code change: 

* _Left_ or _Upstream_ is the source of change such as a feature branch
* _Right_ or _Downstream_ is the target of change, ultimately Production

### Promoting left to right

The normal direction of flow for change is left to right: A developer creates a feature branch to make a change. The change is promoted to a release candidate branch and then merged into the production, `main` branch.

* Promoting code must always be merged via a [peer review process](../coding-peer-review)
* Ensure promoted code is clean with few, logical commits
* Favour fast forward merge over merge commits

### Aligning right to left

Often a branch of code will fall behind the downstream code on the right, especially when working in larger teams. This _divergence_ of code should be resolved prior to promoting.

* Aligning downstream code should be merged locally
* Favour rebase over merge commit. A merge commit when aligning downstream code will result in a complicated Git graph, which is difficult to keep tidy
* Favour squashing commits to a small number before rebasing against downstream code. Fewer commits will mean fewer merge conflicts to resolve.

### Shared branches

We recommend against using shared branches between collaborators. Prefer author specific branches, with peer-reviewed merges.

* Shared branches miss the review step between collaborators
* There is increased chance of merge commits and complex Git history when pulling divergent changes. See [Git configuration](git-configuration) for controlling pull behaviour.

## Rebasing

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

### Rebase or merge

We recommend that teams rebase their branches against the downstream branch whenever they diverge. This provides a more streamlined and understandable git history, and simplifies squashing.

Using a merge commit from an downstream branch makes squashing and reverting change more difficult.

We also advise squashing unecessary commits before a rebase. This simplifies conflict resolution.

### Forced pushes

Sometime we need to overwrite a branch with a re-written Git history. Be very careful when force-pushing a shared branch. Ensure that every team member understands how to resolve their local repository against a force-pushed remote branch.

Use `force-with-lease` as a safer way to force push:

```bash
git push --force-with-lease
```

## Git configuration

Ensure your local Git configuration is correct.

* __Identity__
  Ensure that your committer identity (name and email) is the same as your Git hosting provider identity (Gitlab, Github, Azure).
  We endeavour to Open Source our code which will bring commit identities into the public realm. You may choose to remain anonymous by using a 'cipher' identity and email address.

* __Pull__
  Avoid merge commits on pull by setting the `pull.rebase` configuration option:

  ```bash
  git config --global pull.rebase true
  ```

* __autocrlf__
  Windows users should configure `autocrlf` to `true` to convert unix line endings (LF) to Windows on checkout and commit.
  Our standard is to store unix style line endings in Git.

  ```bash
  git config --global core.autocrlf true
  ```

* __Git alias__
  Optimise Git usage by providing aliases to complex or frequent git commands.

  ::: details Suggested alias configuration:

  ```text
  [alias]
    br=branch
    co=checkout
    cp=cherry-pick
    lg=log --graph --abbrev-commit --decorate --format=format:'%C(bold blue)%h%C(reset) - %C(bold green)(%ar)%C(reset) %C(white)%s%C(reset) %C(dim white)- %an%C(reset)%C(bold yellow)%d%C(reset)'
    pf=push --force-with-lease
    so=show --pretty='parent %Cred%p%Creset commit %Cred%h%Creset%C(yellow)%d%Creset%n%n%w(72,2,2)%s%n%n%w(72,0,0)%C(cyan)%an%Creset %Cgreen%ar%Creset'
  ```
  :::

* __.gitignore__
  Every repository must define a `.gitignore` file to avoid commit of build artefacts, IDE configuration and local development files.
  Our [standard files repository](https://gitlab.com/nhsbsa/libraries/nhsbsa-standard-files) contains an example covering most use cases.

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
* Under `Settings` > `Repository` > `Push rules`:
  * Check: `Reject unverified users`
  * Check: `Check whether the commit author is a GitLab user`
  * Branch Name: `([A-Z]{3,4})-|develop-|hotfix-|NO-JIRA-|main)`
* Under `Settings` > `Merge requests`
  * Merge method: `Fast-forward merge`
  * Merge checks:
    * Checked: `Pipelines must succeed`
    * Checked: `All threads must be resolved`
  * Merge request approvals
    * Checked: `Prevent approval by author`
    * Checked: `Prevent editing approval rules in merge requests`
    * When a commit is added: `Remove all approvals`

:::

## Learn more

* [Official Git documentation](https://git-scm.com/doc)
* [NHSBSA introduction to Git](https://bsa2468.atlassian.net/wiki/spaces/CPD/pages/1690435723/An+introduction+to+Git)
* [NHSBSA Git cheatsheet](https://bsa2468.atlassian.net/wiki/spaces/KB/pages/861667427/Git+Cheat+Sheet)
* [Baeldung Git for Beginners: The Definitive Practical Guide](https://www.baeldung.com/ops/git-guide)
* [Learn Git Branching](https://learngitbranching.js.org/)
* [Git Katas](https://github.com/eficode-academy/git-katas)
* [Atlassian on Git rebase](https://www.atlassian.com/git/tutorials/rewriting-history/git-rebase)
* [Git immersion](https://gitimmersion.com/)

