---
layout: article
title: "Peer review"
description: "The process for reviewing changes in production code"
tags: dev
order: 8
review:
    last_reviewed_date: 2023-05-06
    review_cycle: ANNUAL
---
!!! warning NHSBSA peer review process is mandatory
Only deviate with agreement from your Delivery Manager and Professional Lead
!!!

The high level process is:

![Code review process showing swimlanes for author and reviewer](../images/code-review-process.png)

## 1. Author creates Branch

All new code should be committed on a topic branch from the mainline production code (main).

Topic branches should follow the [naming convention](../coding-naming-conventions):

> `{change-type}/{JIRA ticket number}-{dash separated human description}`

E.g.

> `feature/LISD-1782-private-pension-order-fix`

## 2. Author commits new code and pushes branch

All changes for the ticket should be committed against the topic branch. It is fine to branch from this branch for experimentation, and to merge locally or in a separate review.

Branches should be pushed to gitlab no less than daily to ensure safe-keeping of code.

### Guidelines for code changes

* __Keep change to a minimum__
  The bigger the change, the longer it will take to understand and review. Large changes bring a higher risk of breaking something.
* __Do one thing__
  Avoid adding multiple functional changes in a single branch. Structure changes to allow isolated change requests
* __Avoid reformatting__
  Reformatted code can make it difficult to see functional changes. Reformatting should be done in a separate request, making clear that it only contains non-functional changes.
* __Ensure the build passes__
  Builds must pass all code quality checks.
* __Tests are written__
  Review the [testing guidelines](../dev-tests-coding) to make sure they are fit for purpose.
* __Consider squashing commits__
  Squashing commits can provide a cleaner Git history, and removes unwanted or experimental changes.
  Forced pushes can make it difficult for your reviewer to collaborate. Take time to keep them informed.

## 3: Author creates/assigns Merge Request for review

A Merge Request (MR) should be created in Gitlab and either:

* assign to a different person for code review
  or
* set as `READY FOR REVIEW` to allow a different person to claim

> __NB: Do not use automatic MR creation in the build pipeline. These are created by the _gitlab-runner_ user meaning it isn't obvious who the MR came from. Furthermore, the merge commit will also belong to the MR creator and traceability is lost.__

Merge requests in Gitlab can be prefixed with `Draft:`. This is a useful way to separate ongoing work in a list of Merge Requests. They can be ignored by a reviewer until the draft status is removed.

### Guidelines for merge requests

* __Update draft descriptions__
  A quick summary of what's left to do or why it might be on hold makes it easier to recall the current status. This is very important if a MR goes stale.
* __Ensure the build passes__
* __Ensure the code is mergeable__
  You should resolve any merge conflicts prior to assigning to review
  Sometimes code gains merge conflicts after the request is created. The Reviewer should notify the Author if this happens
* __Communicate__
  Let your reviewers know that the MR is waiting and seek acknowledgement.

## 4. Reviewer reviews code

> __NB: Reviewers should never sit on an active merge request without talking to the author.
> If you are unable to review, seek approval to defer from the Author. The MR can then be re-assigned to another Reviewer or a deferral deadline agreed.__

Code review is an important process, and should not be undertaken lightly. Unless you have been actively involved in a very minor change, do not simply browse the changes and hit merge if it 'looks right'.

### When reviewing

* __Communicate__
  Let the author know that you are reviewing. Use the 👀 emoji against the author's Slack message as a quick way to let them know you're looking.
* __Understand the requirement__
  Locate and read the JIRA ticket to understand what is required. Seek clarification from the project team if needed.
* __Check out code locally__
  It can be tempting to review solely in Gitlab. This is a major cause for merging defective code.
* __Build locally__
  Include unit and/or integration tests.
* __Run and verify functionality of web application/web service against requirement__
* __Review Sonar code quality__
* __Review impact of the change__
  Do not be constrained to the specific code changes: If the changed code calls unchanged code, but that code appears faulty, consider the faulty code 'in scope' of review.

### Guidelines for reviewing code quality

There is no magic formula or checklist to ensure code quality, but consider the following:

* __Is the code readable?__
  Badly formatted code should be rejected
* __Is the code understandable?__
  Complex code can usually be refactored to be more simple.
  Partial features should only be allowed into main (production) if protected by a feature flag
* __Is the code tested?__
  Untested code should not be merged
  Tests must be understandable. If you don't understand the test, you can't be sure they are effective
  Its fine to add review comments to test code
* __Are there any bugs?__
  Its fine to write, commit and push new tests to illustrate a bug
* __Could it be done in a better way?__
  Talk to the Author
  There is often a fine line between coding style and good practice. Have a chat with the Author over more complex issues.

## 5. Reviewer add (or un-resolve) comment

Always add a descriptive comment in Gitlab for any issue found.

The reviewer should talk to the author about the contentious issues, but leave a comment regardless. Code review comments in Gitlab act as an issue tracker: If you don't leave a comment there is a chance the issue will be forgotten.

Optionally mark the MR as WIP to clarify that the MR won't be merged until discussions resolved.

### Guidelines for comments

* __Clearly state the problem__
  Add alternative implementation code if it helps illustrate a solution.
  Direct the Author to any helpful resources, such as javadoc, reference docs or articles.
* __Communicate__
  Although the Author will receive an email from Gitlab, it is helpful to notify the Author in person or via Slack for a speedy response.

## 6. Author reviews comments

Review the comments. If they are not clear, talk to the Reviewer.

* __Challenge Reviewer__
  If you disagree with the comment, talk to the reviewer, and agree a resolution
* __Resolve comment__
  Once the comment has been addressed, the Author should mark the comment as resolved
* __Remove WIP status__
  If the reviewer had tagged the MR as WIP, remove the WIP status
* __Communicate__
  Although the Reviewer will receive an email from Gitlab, it is helpful to notify the Reviewer in person or via Slack for a speedy response

## 7. Reviewer approves code

The Reviewer should approve the code, only when all comments are resolved and they approve the change.

> __NB: Merged code is the shared responsibility of the Reviewer and the Author__

* __Communicate__
  Let the author know that you have approved. Use the :white_check_mark: emoji against the author's Slack message as a quick way to let them know the change is approved.

## 8. Merge code

The reviewer or author may merge approved code in the mainline branch.

Note that Gitlab allows you to squash commits and to remove merged branches.
