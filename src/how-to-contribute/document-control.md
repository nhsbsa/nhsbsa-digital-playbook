---
layout: article
title: "Document control"
description: "Add useful information so your readers can see what's changed"
tags: [playbook]
order: 5
review:
    last_reviewed_date: 2022-06-24
    review_cycle: ANNUAL
issuesheet:
    reference: 
    author: "Author Role"
    owner:  "Owner Role"
    issued_to: "DDaT"
    issued_reason: "For information"
    approved_by: "Approval body"
    approval_date: 2022-06-24
    wellbeing_inclusion_approval_date: 
    accessibility_approval_date: 
    revisions:
        - version: "1.0 RC-1"
          date: 2022-06-24
          amended_by: "Author initials"
          approved_by: "Approver initials"
          details: "Initial release"
---
The playbook allows you to declare an issue sheet and document review information using frontmatter data.

## Document status

You can add a status to your document frontmatter to make it clear when an article isn't fully complete.

Set the status using this frontmatter attribute:

```yaml
status: FINAL
```

Our standard statuses are:

* __DRAFT__
  The article is being written. Articles in `DRAFT` status will not be shown in related articles so you will need the URL to be able to view it.
* __REVIEW__
  The article is open for review. Reviewers should use [Github Issues](../github-issues) to request changes.
* __FINAL__
  The article has been approved and should be taken as authorised NHSBSA guidance.
  We display article status alongside the title except for `FINAL`.

## Issue sheet

The issue sheet provides information such as author, approver etc and complies with the [NHSBSA document control standard][nhsbsa_document_control_standard].

By example the issue sheet on this document is configured as:

```yaml
issuesheet:
    reference: 
    author: "Author Role"
    owner:  "Owner Role"
    issued_to: "DDaT"
    issued_reason: "Guidance"
    approved_by: "Approval body"
    approval_date: 2022-06-24
    wellbeing_inclusion_approval_date: 
    accessibility_approval_date: 
    revisions:
        - version: "1.0 RC-1"
          date: 2022-06-24
          amended_by: "Author initials"
          approved_by: "Approver initials"
          details: "Initial release"
```

### Issue sheet settings

| Field | Description |
|-------|-------------|
| reference | document reference number inline with your team/functional structure |
| author | job title of the document author |
| owner | job title of the accountable document owner |
| issued_to | departments and/or job titles or all staff |
| issued_reason | 'For action' and/or 'For information' |
| approved_by | approval body |
| approval_date | ISO-8601 formatted date. Date of approval |
| wellbeing_inclusion_approval_date | ISO-8601 formatted date. A Wellbeing and Inclusion Analysis (WIA) document is required to be completed by the documentation owner prior to work starting on new policies and other documentation, where relevant, if those documents impact on people, or provide guidance where adjustments need to be considered. If you are unsure whether your documentation would be applicable, please contact the Wellbeing and Inclusion team for further advice and guidance |
| accessibility_approval_date | ISO-8601 formatted date. NHSBSA documentation needs to be accessible to everyone. This ensures that everyone can access information easily and in a timely way. It is the responsibility of the person writing, creating or making changes to documents, to ensure they are accessible. This relates to the content and also format i.e. pdf. For more information on ensuring everything you produce is accessible please refer to the accessibility pages on My Hub. |
| revisions | any number of revisions may be listed, most recent at the top |

### Revision settings

| Field | Description |
|-------|-------------|
| version | version number |
| date | ISO-8601 formatted date. Date of change |
| amended_by | Author initials |
| approved_by | Approver initials |
| details | Change details |

## Document review

Documents should be reviewed on a regular basis. The normal interval would be one year. The playbook allows you to declare review criteria using frontmatter data. Review frontmatter is required to trigger automated reminders and to annotate the published pages.

By example the review data on this document is configured as:

```yaml
review:
    last_reviewed_date: 2022-06-24
    review_cycle: ANNUAL
```

<table>
<thead>
<tr><th> Field </th><th> Description </th></tr>
</thead>
<tbody>
<tr><th> last_reviewed_date </th><td> ISO-8601 formatted date </td></tr>
<tr><th> review_cycle </th><td> `ANNUAL` is the default value. Any other intervals should be configured using <a target="_blank" href="https://moment.github.io/luxon/api-docs/index.html#duration">Luxon duration notation</a>. e.g. 
<pre class="language-yaml"><code class="language-yaml"><span class="token key atrule">review_cycle</span><span class="token punctuation">:</span>
      <span class="token key atrule">years</span><span class="token punctuation">:</span> 2
</code></pre>
 </td></tr>
</tbody>
</table>

[nhsbsa_document_control_standard]: <https://nhsbsauk.sharepoint.com/sites/Governance/SitePages/Document-Management-and-Control.aspx?OR=Teams-HL&CT=1646726354655&params=eyJBcHBOYW1lIjoiVGVhbXMtRGVza3RvcCIsIkFwcFZlcnNpb24iOiIyNy8yMjAyMDcwMTgxMCJ9>
