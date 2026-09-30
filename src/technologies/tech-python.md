---
layout: article
title: "Python"
description: "Preferred technology choices when implementing in Python."
tags: tech
order: 20
status: REVIEW
related:
  tag: python
review:
    last_reviewed_date: 2026-09-30
    review_cycle: ANNUAL
---
Here's a list of our preferred technology choices when implementing in Python. If you feel there's a better option, raise it at the Developer Community.

## Python versions

Refer to the [Release adoption schedule](../tech-release-adoption-schedule/) for general guidance.

### Exceptions
Machine-learning workloads may need longer to adopt new Python releases because dependencies with native extensions or platform-specific binaries can take time to support new interpreters. Where compatibility or operational stability requires it, a still-supported release such as N-2 or N-3 can be a pragmatic choice.


Use [pyenv](https://github.com/pyenv/pyenv) as a baseline Python runtime manager, independently of project and package-management tools.

Python projects must:

- Use a supported version of [CPython](https://www.python.org/), not an alternative implementation such as [PyPy](https://pypy.org/) or [IronPython](https://ironpython.net/).
- Commit a `.python-version` file to identify the Python version in use.
- Use [`pyproject.toml`](https://packaging.python.org/en/latest/guides/writing-pyproject-toml/) as the standard project configuration file and declare the supported Python range there.
- Manage dependency and supply-chain risks (see [Safe Dependency Management](#safe-dependency-management)).
- Lock dependencies to reviewed versions; a pinned version is not necessarily safe.

## IDE

Choose an IDE that supports your work. Common choices are [VS Code](https://code.visualstudio.com/) with [Pylance](https://marketplace.visualstudio.com/items?itemName=ms-python.vscode-pylance) and [PyCharm](https://www.jetbrains.com/pycharm/).

## Build

- Use the [`src/` layout](https://packaging.python.org/en/latest/discussions/src-layout-vs-flat-layout/) for deployable applications and libraries.
- Use [uv](https://docs.astral.sh/uv/) for project virtual environments, dependencies, lockfiles and builds.
- Use [Hatchling](https://pypi.org/project/hatchling/) as the build backend.
- Commit `uv.lock` for reproducible dependency resolution. Declare project metadata, direct dependencies and tool configuration in `pyproject.toml`; the lockfile records resolved versions.
- Export other dependency files, such as [requirements.txt](https://pip.pypa.io/en/stable/reference/requirements-file-format/), from the lockfile when needed.
- Use [Ruff](https://docs.astral.sh/ruff/) for formatting and linting, and [Pyright](https://github.com/microsoft/pyright) for static type checking.
- Use [SonarQube](https://www.sonarsource.com/products/sonarqube/) for static analysis and [Bandit](https://bandit.readthedocs.io/) for Python security checks.
- Use [DetectSecrets](https://pypi.org/project/detect-secrets/) for secret leak detection.
- Use [Deptry](https://deptry.com/) to compare dependency declarations with imports.

## Application

Choose application frameworks and libraries that fit the workload. Prefer established, maintained projects and the Python standard library where they meet the need; avoid introducing dependencies without a clear benefit.

- Read deployment-specific configuration from environment variables at the process boundary. Use [python-dotenv](https://pypi.org/project/python-dotenv/) only for local development; never commit credentials.
- Choose a framework that fits the service: [Django](https://www.djangoproject.com/) for batteries-included applications, [FastAPI](https://fastapi.tiangolo.com/) for typed ASGI APIs, or [Flask](https://flask.palletsprojects.com/) for smaller WSGI services. Deploy ASGI applications with a production server such as [Uvicorn](https://uvicorn.dev/).
- Use [HTTPX](https://www.python-httpx.org/) or [Requests](https://requests.readthedocs.io/) for HTTP clients. Set explicit timeouts, validate external responses and handle redirects carefully when sending credentials.
- Use [Pydantic](https://docs.pydantic.dev/latest/) for record-centric data validation.
- Use `datetime` and [`zoneinfo`](https://docs.python.org/3/library/zoneinfo.html) for date and time handling.
- Use Python's `logging` package with structured fields and appropriate correlation or run identifiers. Do not log credentials or sensitive data. Use [OpenTelemetry](https://opentelemetry-python.readthedocs.io/en/stable/index.html) for tracing.
- Use [SQLAlchemy](https://www.sqlalchemy.org/) for object-relational mapping and [Alembic](https://alembic.sqlalchemy.org/) for database migrations.
- Use [Babel](https://babel.pocoo.org/) for internationalisation.

## Machine Learning and Data Engineering

- Use [pandas](https://pandas.pydata.org/) when DataFrame operations suit the workload, and [Pandera](https://pandera.readthedocs.io/en/stable/) to validate important dataset contracts.
- Use [Great Expectations](https://docs.greatexpectations.io/) for comprehensive data-quality suites and documentation where needed.
- Use [JupyterLab](https://jupyter.org/) for notebook-based experimentation and [MLflow](https://mlflow.org/docs/latest/index.html) for experiment tracking.
- Use [scikit-learn](https://scikit-learn.org/) for feature engineering, traditional machine learning and model evaluation.
- Use [PyTorch](https://pytorch.org/) for deep learning.
- Only use [TensorFlow](https://www.tensorflow.org/) when model dependencies require it.
- Store models in the training framework's native serialisation format. Consider [ONNX](https://onnx.ai/) when the model and target runtime support portable deployment.
- Use [Matplotlib](https://matplotlib.org/), [Seaborn](https://seaborn.pydata.org/) or [Plotly](https://plotly.com/python/) for visualisation.

## Testing

- Use [pytest](https://docs.pytest.org/) as the core testing framework, with [pytest-xdist](https://pypi.org/project/pytest-xdist/) for parallel execution.
- Use [Hypothesis](https://hypothesis.readthedocs.io/) for property-based testing of invariants and input boundaries.
- Use [mutmut](https://pypi.org/project/mutmut/) for mutation testing.
- Measure coverage with [pytest-cov](https://pytest-cov.readthedocs.io/), but do not treat a high percentage as proof of test quality.
- Use [PyTestArch](https://pypi.org/project/PyTestArch/) to enforce important architectural dependency rules where static checks are valuable.

## Safe Dependency Management

The following example adds `aspectlib` to a uv-managed project. Review the package, publisher, source and transitive dependencies before installation; no advisory check proves that a package is safe.

1. Preview what would be installed without changing the environment:

	```bash
	uv pip install --dry-run "aspectlib==2.0.0"
	```

2. Add the dependency and update the lockfile without synchronising the project environment. `--no-build` fails if resolution requires building a source distribution:

	```bash
	uv add "aspectlib==2.0.0" --no-sync --no-build
	```

3. Check the locked packages against known OSV advisories. A match may include a published malicious-package advisory, but this is not a code or malware scan:

	```bash
	osv-scanner scan --lockfile=uv.lock --format markdown --output-file osvscan.md
	```

4. Optionally run uv's project audit for known vulnerabilities and adverse package statuses, including quarantine and deprecation. This command is a preview feature:

	```bash
	uv audit --preview-features audit-command --locked
	```

	For a Python-specific second opinion using PyPI's advisory database, export the pinned third-party dependencies and audit them without resolving them again. The example excludes the development group; include it when auditing development tools:

	```bash
	uv export --locked --format requirements.txt --no-dev --no-emit-project \
	  --output-file /tmp/etl-app-template-requirements.txt
	uvx pip-audit --no-deps --requirement /tmp/etl-app-template-requirements.txt
	```

5. Synchronise the project only after reviewing the findings. uv's optional, experimental malware check consults OSV before installation; it does not detect unreported malware. Enable it for the actual sync, not just a dry run:

	```bash
	UV_MALWARE_CHECK=1 uv sync --locked --preview-features malware-check
	```

	Alternatively, set `preview-features = ["malware-check"]` under `[tool.uv]` and `malware-check = true` under `[tool.uv.audit]` in `pyproject.toml`, then run `uv sync --locked`.

If the package is unsuitable, remove it from the project and lockfile with `uv remove aspectlib --no-sync`.