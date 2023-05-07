---
layout: article
title: "Standard code repository files"
tags: dev
order: 12
related:
  tag: dev_docs
review:
    last_reviewed_date: 2023-05-06
    review_cycle: ANNUAL
---
We maintain a minimum level of documentation in all our project repositories.

A [standard set of file][nhsbsa_standard_repository_documents] are available to copy.

### Mandatory files

* __README.md__
  A README explains the purpose of the repository, how to build, run and use it.
  See our [guidance on writing READMEs](../dev-documentation-readme/)
* __CODE_OF_CONDUCT.md__
  The Code of conduct explains our expectations on behaviour from member of the community.
  It is based on the [Contributor Covenant code of conduct][contributor_covenant_coc]
* __CONTRIBUTING.MD__
  A brief explanation of how to contribute back to the repository. Closed source projects should amend the issue management section to reference Jira.
* __LICENCE.txt__
  We use [Apache 2][licence_apache2] licence for code and [Open Government Licence v3][licence_ogl3] for content.
* __SECURITY.md__
How to report security issues.

### Optional files

* __CHANGELOG.md__
  Describes the changes made in each version.

[nhsbsa_standard_repository_documents]: <https://gitlab.com/nhsbsa/Libraries/nhsbsa-standard-files>
[contributor_covenant_coc]: <https://www.contributor-covenant.org/version/2/1/code_of_conduct/>
[licence_apache2]: <https://www.apache.org/licenses/LICENSE-2.0>
[licence_ogl3]: <https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/>
