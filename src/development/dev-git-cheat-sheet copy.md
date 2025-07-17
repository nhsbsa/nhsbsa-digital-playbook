---
layout: article
title: "Git cheat sheet"
description: "Important Git commands and workflow at a glance"
tags: [dev]
order: 8
status: DRAFT
related:
  title: Related articles
  tag: git
review:
    last_reviewed_date: 2025-03-20
    review_cycle: ANNUAL
---
## Create

Clone an existing repository

```bash
git clone ssh://user@domain.com/repo.git
```

Clone an existing repository to current folder

```bash
git clone ssh://user@domain.com/repo.git .
```

Create a new local repository

```bash
git init
```

## Local changes

Changed files in your working directory

```bash
git status
```

Changes to tracked files

```bash
git diff
```

Add all current changes to the next commit

```bash
git add .
```

Add some changes in `<file>` to the next commit

```bash
git add -p <file>
```

Commit all local changes in tracked files

```bash
git commit -a
```

Commit previously staged changes with message

```bash
git commit -m "message"
```

Change the last commit. Don‘t amend pushed commits!

```bash
git commit --amend
```

## Commit history

Show all commits, starting with newest

```bash
git log
```

Show changes over time for a specific file

```bash
git log -p <file>
```

Who changed what and when in `<file>`

```bash
git blame <file>
```

Show a graph of changes

```bash
git log --graph --oneline
```

## Branches

List local branches

```bash
git branch
```

List all existing branches

```bash
git branch -a
```

Create a new branch and check it out

```bash
git checkout -b <new-branch>
```

Checkout an existing branch. If the branch is remote then the local branch will automatically track remote

```bash
git checkout <branch>
```

Delete a local branch

```bash
git branch -d <branch>
```

Delete all local branches, where remote has been merged into master and deleted

```bash
git fetch --prune origin
```

## Remotes

List all currently configured remotes

```bash
git remote -v
```

Show information about a remote

```bash
git remote show <remote>
```

Add new remote repository, named `<remote>`

```bash
git remote add <remote> <url>
```

Change the URL of a remote repository, named `<remote>`

```bash
git remote set-url <remote> <url>
```

## Update & publish

Download all changes from `<remote>`, but don‘t integrate into HEAD

```bash
git fetch <remote>
```

Download changes and directly merge/integrate into HEAD

```bash
git pull <remote> <branch>
```

Push local changes to a new remote branch, and track changes

```bash
git push -u <remote> <branch>
```

Push local changes on current branch to its tracked remote 

```bash
git push <remote> <branch>
```

## Stash

Temporarily save changes that are not yet ready to commit

```bash
git stash
```

List all stashed changes:

```bash
git stash list
```

Reapply the most recent stashed changes (keeps stash in list):

```bash
git stash apply
```

Reapply and remove the most recent stash:

```bash
git stash pop
```

Clear all stashes:

```bash
git stash clear
```

## Merge & rebase

Merge `<branch>` into your current HEAD

```bash
git merge <branch>
```

Rebase your current HEAD onto `<branch>`. Don‘t rebase published commits!

```bash
git rebase <branch>
```

Abort a rebase

```bash
git rebase --abort
```

Continue a rebase after resolving conflicts

```bash
git rebase --continue
```

Use your configured merge tool to solve conflicts

```bash
git mergetool
```

Use your editor to manually solve conflicts and (after resolving) mark file as resolved

```bash
git add <resolved-file>
git rm <resolved-file>
```

## Chery Pick

Apply a specific commit from another branch to your current branch:

```bash
git cherry-pick <commit-hash>
```

Example:

```bash
git checkout feature/new-ui
git cherry-pick a1b2c3d
```

This applies commit a1b2c3d from another branch into feature/new-ui.

## Undo

Discard all local changes in your working directory

```bash
git reset --hard HEAD
```

Discard local changes in a specific file

```bash
git checkout HEAD <file>
```

Discard all local changes and replace with remote HEAD of named branch

```bash
git reset --hard <remote>/<branch>
```

Revert a commit (by producing a new commit with contrary changes)

```bash
git revert <commit>
```

Reset your HEAD pointer to a previous commit ...and discard all changes since then (hard reset)

```bash
git reset --hard <commit>
```

...or preserve all changes as unstaged changes (soft reset)

```bash
git reset --soft <commit>
```

...and preserve uncommitted local changes

```bash
git reset --keep <commit>
```

Instead of reset to a commit hash, you can use offsets relative to HEAD. To soft reset the last commit

```bash
git reset --soft HEAD~1
```

## Alias

Git allows you to set aliases to commonly used commands.

```bash
git config --global alias.<alias> "<command>"
```

Here are some suggested useful aliases:

```ini
[alias]
		# basic shortcuts
        st = status --short --branch
        co = checkout
        br = branch

        # compact log --graph
        lg = log --graph --abbrev-commit --decorate --format=format:'%C(bold blue)%h%C(reset) - %C(bold green)(%ar)%C(reset) %C(white)%s%C(reset) %C(dim white)- %an%C(reset)%C(bold yellow)%d%C(reset)'

		# commit/commit all with message
        cm = commit --message
		cma = commit --all --message

		# quick merge
		qm = !git checkout $1; git merge @{-1}

		# compact show
		so = show --pretty='parent %Cred%p%Creset commit %Cred%h%Creset%C(yellow)%d%Creset%n%n%w(72,2,2)%s%n%n%w(72,0,0)%C(cyan)%an%Creset %Cgreen%ar%Creset'

		# diff prose
		dp = diff --word-diff --unified=10

		# delete merged branches
		db = !"git branch --merged | grep -vE 'main|master|\\*' | xargs -n 1 git branch -D"
```

---
adapted from the [Git Cheet Sheet from Tower](https://www.git-tower.com/blog/git-cheat-sheet)