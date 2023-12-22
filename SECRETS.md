# Configuring secrets detection

The NHSBSA takes security seriously. We require:

* Contributors install and configure secrets detection tooling before commiting code
* Maintainers risk assess potential for sensitive data leaks and configure detection tooling accordingly

## Pre-requisites

Install the following:

* [Gitleaks][Gitleaks] is a secret detection tool to help prevent accidental commit of sensitive data in a local development environment Git repository.
* [Pre-commit][Pre-commit] is a framework for managing and maintaining multi-language pre-commit hooks

## Contributors

Git hooks can’t be commited into source control, so contributors must install manually.

* Install the Gitleaks git hook using the pre-commit framework.

```bash
pre-commit install
```

## Maintainers

Maintainers of newly initialised repositories should follow these instructions to configure Gitleaks and the pre-commit definition.

### Define rules

* Download the sample gitleaks configuration file and place in the root directory of your repository.
  Run this command from your repository root:

```bash
wget https://raw.githubusercontent.com/zricethezav/gitleaks/master/config/gitleaks.toml
```

* Configure the rules file to match the requirements from your risk assessment
* Commit the rules file into Git

### Pre-commit hook

* Download the sample `.pre-commit-config.yaml` and place in the root directory of your repository.
  Run this command from your repository root:

```bash
wget https://gitlab.com/nhsbsa/Libraries/nhsbsa-standard-files/-/raw/main/.pre-commit-config.yaml
```

* Commit the pre-commit file into Git
* Install the Gitleaks git hook using the pre-commit framework.

```bash
pre-commit install
```

* Test the pre-commit hook is working:

```bash
pre-commit run --verbose
```

### Scan history

* Add `gitleaks.json` to the `.gitignore` file
* Open a command terminal in your repository directory and run command

```bash
gitleaks detect -r gitleaks.json
```

If gitleaks detects any secrets, you can find details in the `gitleaks.json` file

__If you detect a secret, you must immediately follow the remediation plan from your risk assessment and take steps to remove the secret from wherever they are used.__

## Test the configuration

For every sensitive data type identified in the sensitive data risk analysis:

* Add sensitive data to one of your existing source file
* Test that you are unable to commit the file

## Comments on this policy

If you have suggestions on how this policy could be improved, please submit a pull request.

[Gitleaks]: https://github.com/zricethezav/gitleaks
[Pre-commit]: https://pre-commit.com/
