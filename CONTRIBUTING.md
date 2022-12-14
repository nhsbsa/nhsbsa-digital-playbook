# Contributing to NHSBSA Digital, Data and Technology Playbook

NHSBSA Digital, Data and Technology Playbook is released under the [Apache 2 license](LICENCE.md). If you would like to contribute
something, or simply want to hack on the code this document should help you get started.

## Code of Conduct

This project adheres to the Contributor Covenant [code of conduct](CODE_OF_CONDUCT.md).
By participating, you are expected to uphold this code.

Please report unacceptable behavior to <nhsbsa.opensource@nhs.net>

## Using Gitlab Issues

We use Gitlab issues to track community reported bugs and enhancements.

If you are reporting a bug, please help to speed up problem diagnosis by providing as
much information as possible. Ideally, that would include a small sample project that
reproduces the problem.

## Reporting Security Vulnerabilities

If you think you have found a security vulnerability in this codebase please follow
our guidance on [reporting security vulnerabilities](SECURITY.md).

## A quick guide on how to contribute

1. Fork the project

2. Clone the repo from your own space

3. Use [README.md](/README.md) instructions to build/run.

4. Create a branch

5. Run the tests. Functional merge requests must include unit tests,
   so it is good to ensure you've got them passing to begin with.

6. Add your functionality or bug fix and a test for your change. Only refactoring and
   documentation changes do not require tests.

7. Make sure all the tests pass.

8. Push to your fork, and submit a merge request.

## Cloning the git repository on Windows

Some files in the git repository may exceed the Windows maximum file path (260
characters), depending on where you clone the repository. If you get `Filename too long`
errors, set the `core.longPaths=true` git option:

```bash
git clone -c core.longPaths=true {project URL}
```

## Comments on this policy

If you have suggestions on how this policy could be improved please submit a pull request.
