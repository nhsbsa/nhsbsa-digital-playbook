---
layout: article
title: "Writing READMEs"
tags: dev_docs
order: 1
review:
    last_reviewed_date: 2023-05-06
    review_cycle: ANNUAL
---
There should be a README for every NHSBSA Git repository. A user expects a README to help them:

* understand what the project is
* evaluate whether the project is useful for them
* learn how to use the project
* understand how to contribute to the project

You should write READMEs in plain english and define any technical terms that may be unfamiliar to someone new to the project.

Avoid using terms like ‘just’ or ‘simply’ when writing your README. You should not assume your user has any prior knowledge of the project.

## Length of your README

A README should be an overview and list of instructions to help someone get started with your project.

If you find yourself writing a lot of content for your README, consider moving some of the more detailed documentation, such as API reference information or configuration advice, into a separate document. Please these in a docs folder within the same repository and link to them from the README.

## Structuring your README

Use the [NHSBSA template for READMEs][nhsbsa_readme].

* About the project
* Quick start
  * Building the application
  * Running the application
* How to contribute
* License

## Test your documentation

Test your README instructions before you publish to make sure users can follow them. Ask a member of the team to try the instructions and make sure they work

[nhsbsa_readme]: <https://gitlab.com/nhsbsa/Libraries/nhsbsa-standard-files/-/blob/main/README.md>
