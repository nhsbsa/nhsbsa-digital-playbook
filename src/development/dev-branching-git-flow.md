---
layout: article
title: "Branching flow"
description: "Branching well from the start can avoid a lot of confusion and reduce risk"
tags: [dev, branching]
order: 8
review:
    last_reviewed_date: 2024-09-20
    review_cycle: ANNUAL
---
It is important to adopt a branching strategy:

* to avoid confusion when creating feature branches
* reduce risk of accidentally merging to the wrong branch
* so that hotfixes can be deployed in a timely manner

## Branch types

There are five different branch types:

* [`main`](#main)
* [`develop`](#develop)
* [`feature`](#feature)
* [`hotfix`](#hotfix)
* [`bug`](#bug)

The main, develop and hotfix branches should be protected from anyone pushing to it directly.

### Main

The purpose of the main branch is to contain production code that has been released.

The main branch is created at the start of a project and is maintained throughout the development process. Once something has been deployed to production successfuly those changes will be merged back into the main branch.

### Develop

The purpose of the develop branch is to contain pre-production code with newly developed features that are in the process of being tested.

Newly-created features should be based off the develop branch, and then merged back in when ready for testing.

### Hotfix

The purpose of the hotfix branch is to fix any bug(s) that have been found in production.

Any bug fixes should be based off the hotfix branch, and then merged back in when ready for testing.

### Suppporting branches

#### Feature

The feature branch is the most common type of branch in the workflow. It is used when adding new features to your code.

When working on a new feature, you will start a feature branch off the develop branch, and then merge your changes back into the develop branch when the feature is completed and properly reviewed.

#### Bug

The bug fix branch is used to quickly address necessary changes in your main branch.

The base of the bug fix branch should be your hotfix branch and should be merged back into both the hotfix and develop branches. Merging the changes from your bug fix branch back into the develop branch is critical to ensure the fix persists the next time the main branch is released.

## Process
Assuming that the main branch is already created and contains the latest changes deployed to production, the development process begins by creating a new develop branch from main.

The next step would be for a developer to start working on a new feature which they will do by creating a feature branch from the newly created develop branch.

Once the feature changes are complete they would then raise this for review, the changes would be merged (ideally commits squashed) on to the develop branch. It also makes sense to delete the feature branch after this.

The feature -> develop cycle would be repeated until all the changes relating to that particular release are stable and tested.

Next the changes are ready to go into production. A semver tag would be created from the develop branch that can be then used to deploy to any other pre-prod environments i.e. stage.

Since this develop branch is now ready for a production deployment any other develop branches should rebase these changes.

Finally, the tag would be deployed to production. After this the develop branch can be merged into the main branch (ensure that the commits are not squashed and it is ff-only).