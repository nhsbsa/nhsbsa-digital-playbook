---
layout: article
title: "Rewriting Git history"
description: "Removing sensitive data such as non-revokable secrets or contributor identities from Git"
status: DRAFT
tags: [dev-security, security]
order: 
  dev-security: 4
  security: 4
---
!!! warning Proceed with caution
Rewriting history will change the Git commit graph and has a high potential to create a mess of a repository. Incorrect or unmanaged use of tools can lead to an inconsistent Git repository which is difficult to recover from. Proceed with caution and follow this guidance to protect your project from unintended consequences.

__Consult with your professional lead and security operations before any rewrite activity.__
!!!

This guidance does not cover normal development activities such as squashing commits on a topic branch, or rebasing prior to merge. These branches are not shared widely and sensitive data is not involved. Collaborative Git practices should be agreed with your team.

## When to rewrite history

Many secrets can be revoked by deleting the secret and regenerating a new one. Applications must then be reconfigured with the new value. This is the preferred way to deal with secrets in code. The [NHSBSA Gitleaks project](https://gitlab.com/nhsbsa/platform-services/gitleaks/gitleaks-nhsbsa) includes links to the various secrets providers, with documentation on creating and revoking secrets. See our guidance on [ignoring revoked secrets in Gitleaks](../coding-secrets-detection/#ignore-false-positives).

Some sensitive information cannot be revoked, and should be removed from the Git history when open sourcing.

Consider:

::: card

Contributor identity
: We support code contributors who wish to remain anonymous when working on open source projects.

Non-revokable secrets
: Some secrets cannot be revoked, such as internal IP addresses and URLs.

Inappropriate language
: Inappropriate language should be removed to avoid reputational damage.

Personally Identifiable Information (PII)
: PII other than contributor identity should never be checked into source code repositories.
  Before removing PII data from source code, [raise a security incident](../../security) with the Information Security team.

:::

## Assess the impact

Consider all branches, including `main`, `develop` and `release`, in scope of rewrite. These branches are shared widely, especially when published in the open.

Assess who will be impacted by publishing destructive changes, including:

::: card

Team members
: Team members will be actively working on the codebase, and must be kept up to date at all stages of a rewrite.
  Use normal team communication channels.

NHSBSA DDaT staff and external suppliers
: Everyone with access rights to a repository has the potential to clone it.
  Use standard DDaT email, Teams, slack channels and professional community networks to publicise rewrite activities.

X-Gov collaborators and general public
: Open sourced projects may have been cloned far and wide.
  Consult with the NHSBSA communications team to agree an approach.

:::

## Get approval

You must obtain documented approval from these departments and roles, prior to any destructive rewrite:

* Information Governance
* Security Operations
* Architecture
* Software Development

If the impact extends to external collaborators and the general public, consult with the Communications team.

## Skills

Contributors who rewrite history must have the appropriate skills:

* Git concepts
  It's important to understand
  * The Git directed acyclic graph, how commits are immutable and must be replaced.
  * That branches and annotations must be assigned to the newly created commits and their children.
  * That a rewritten git repository will diverge from the original clone, and how this can cause damage if merged back into the original.
* Git commands
  You should be very comfortable with these commands and understand what they do:
  * `git log`
    A key skill is determining if a rewrite is successful. Git log is invaluable for this, as you can export logs before and after and compare the output.
    * `--all`
    * `--oneline`
    * `--graph`
    * `--abbrev-commit`
    * `--format`
    * `-sne`
  * `git shortlog`
    Shortlog is use to extract data for authors, in order to anonymise.
    * `-sne`
  * `git push`
    You must understand how to push the rewritten repository and replace all commits, branches, tags. The remote repository should not contain any orphan commits, or any references pointing to old commits.
    * `--force`
    * `--tags`
* Git filter-repo
  [git-filter-repo](https://github.com/newren/git-filter-repo) is the recommended tool for rewriting Git history. Do not use outdated tools such as BFG or git-filter-branch.
  The key commands to cover most cases are:
  * `--analyze`
  * `--mailmap`
  * `--replace-text`
* Bash scripting
  You will write a single script to perform all rewrite steps on a clean clone of the repository.

This article provides an in-depth guide to removing secrets from Git history by rewriting history:

* [Git Clean, Git Remove file from commit - Cheatsheet](https://blog.gitguardian.com/rewriting-git-history-cheatsheet/)

## Execution steps

* Create a __private__ subgroup called `backup`
  Fork the code repository here for safekeeping. The backup may be deleted at a later date
* Create a __private__ subgroup called `git-rewrite`.
  Fork the code repository here. This will be used to develop, test and review the rewrite. Rewrites to this repository must be performed as a single, scripted action and pushed only once. Any subsequent rewrites must be performed on fresh forks from the original. This ensures the rewrite is clean and repeatable.
* Fork the template project [git-rewrite-scripts](https://gitlab.com/nhsbsa/Libraries/git-rewrite-scripts) under the `git-rewrite` subgroup
  This will contain the scripted actions to rewrite history. It is important to script the actions, so that a peer may review and verify correctness.
  The scripted actions and associated resources will contain sensitive data and must be kept private. It will serve as an audit history if required.
* Develop the rewrite script and peer review with a Merge Request
  See the [template project](https://gitlab.com/nhsbsa/Libraries/git-rewrite-scripts) for guidance on script writing.
* Dry run
  Local development should stop.
  Consult with team to ensure all local branches are pushed to the production repository.
  Create a fresh fork of the repository in `git-rewrite`.
  Rewrites must be performed on a fresh clone of the forked repository
  Apply scripted rewrites and push force the repository
  Consult with team to assure all is as expected
* Apply the rewrite
  Repeat the clone, rewrite, push, review, but this time on the production repository

!!! warning All team members must re-clone from the rewritten remote
  Old clones should be discarded. Pulling a rewritten remote into the original can create a mess that is very difficult to recover from.
!!!
