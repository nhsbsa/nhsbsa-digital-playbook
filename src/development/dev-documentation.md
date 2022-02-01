---
layout: article
title: "Documentation for developers"
tags: dev
order: 12
related:
  tag: dev_docs
---
## Repository documentation

We need a minimum level of documentation for all our project repositories. A [standard set of default documents][nhsbsa_standard_repository_documents] are available to copy.

### Mandatory files

* __README.md__
  A README explains the purpose of the repository, how to build, run and use it.
  See our [guidance on writing READMEs](/development/dev-documentation-readme)
* __CODE_OF_CONDUCT.md__
  The Code of conduct explains our expectations on behaviour from member of the community.
  It is based on the [Contributor Covenant code of conduct][contributor_covenant_coc]
* __CONTRIBUTING.MD__
  A brief explanation of how to contribute back to the repository. Closed source projects shuld amend the issue management section to reference Jira.
* __LICENCE.txt__
  We use [Apache 2][licence_apache2] licence for code and [Open Government Licence v3][licence_ogl3] for content.
* __SECURITY.md__
How to report security issues.

### Optional files

* __CHANGELOG.md__
  Describes the changes made in each version.

[nhsbsa_standard_repository_documents]: <https://dps-gitlab.service.nhsbsa/nhsbsa-libs/bsa-os-prototype>
[contributor_covenant_coc]: <https://www.contributor-covenant.org/version/2/1/code_of_conduct/>
[licence_apache2]: <https://www.apache.org/licenses/LICENSE-2.0>
[licence_ogl3]: <https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/>
[licence_spdx]: <https://spdx.org/licenses/>
[licence_spdx_apache2]: <https://spdx.org/licenses/Apache-2.0.html>
