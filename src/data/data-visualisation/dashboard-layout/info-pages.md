---
layout: article
title: "Layout of a dashboard: Information"
description: "Overview of the information pages to include in NHSBSA reports"
status: DRAFT
tags: dv-dashboard-layout
order: 1
---
## Information pages  
  
The information pages are a rough wireframe to be used as a guide to the features that could be included. The idea is that a dashboard developer has a rough template to use any features they see fit. The template can be used across the organisation.  
  
Benefits of information pages include:

- Encouraging data literacy, and a user’s understanding of what is being shown.
- Encouraging interactivity with dashboards.
- Encouraging confidence and self-sufficiency within users to use our dashboards and analyses to the full extent.
- Informing users of important relevant information.
- A standardised and reliable approach across dashboards, enabling a user’s ease-of-use.  
  
The information pages are designed to compliment the reporting pages, with an initial Dashboard information page, followed by the reporting pages, and with any other complimentary dashboard information pages at the end of the report for consultation by the user if needed. The pages mentioned in this example are:

- Info: Dashboard information
- Summary/highlights
- Insight 1
- Insight 2
- Info: Data Details
- Info: Updates
- Info: How to use

The content of the dashboard should be automated wherever possible to minimise manual intervention.  
Please note, this dashboard does not consider a personalised or role-based user journey based on user access.  

### General layout  
  
The information pages have the following features present across each page:

- The NHS Business Services Authority logo in the top left corner.
- The Report/Dashboard Title and name of the page, alongside the reporting month and year.
- Information in the main body of the page.
- A footer to state who created the dashboard, and a link to the [Accessibility Statement][info 0]
- The background is NHS Grey 5 (#F0F4F5). Please see the colour guidance for more details.  
  
### Text content  
  
Your content should follow the corporate NHS Business Services Authority Content Design Standards.  
Please note: [this link to the NHSBSA Content Design Standards][info 1] leads to an internal folder. This will be updated once the relevant content is added to the playbook.
  
Some important notes in relation to your text content:

- A Header 1 should be used on each page to help navigate a screen reader, Header 1 should be size 16px.
- The body of the text should be size 12px. [Source - Accessible print publications][info 2]
- Frutiger or Arial should be used as the font throughout the report. The core NHS font is Frutiger and the secondary font is Arial. [Source - NHS identity guidelines; Fonts][info 3]  

### Dashboard information section
  
The Dashboard Information section has been designed as an introduction to the dashboard, to allow the users to check the reporting period and refreshed date of the data. It clearly states the purpose of the dashboard to the user to give context.  
It also benefits the perceived performance of the dashboard being the initial page a user is directed to as charts and data can load on other pages whilst the user checks the details shown.  
  
It includes:

- In addition to the usual information page layout the Dashboard Information page has a title bar, more clearly stating the organisation name, and dashboard report title.
- Dashboard version number is included in the top right, this enables the user and developer to ensure they are working from the same dashboard version should an issue arise.
- Data last refreshed date is included in the top right to ensure the user can quickly check when the data was last refreshed.
- Latest reporting period is included in the top right as another key piece of information, this ensures that the user knows when the data will display up until, even if the data was refreshed more recently.
- The purpose of the report should give context to how the report came about, and what it hopes to achieve.
- A nudge theory box directing the user, to encourage the user to next access the summary page or help direct the user’s journey within the dashboard.
- The customer area should clearly state who the main users are and their interest in the data.
- A contact section for users in case of queries, feedback, training needs or technical support.
- An insight generator for users to ask questions and generate insights from the data.  

### Data details section
  
The Data Details section has been designed to inform the user further on the details of the data, enabling data literacy and aiding understanding and therefore use of the report.  
  
It includes the following:

- Methodology, for example, around the collection of data, or data included in the report.
- Any assumptions made to the datasets.
- Data source details, including various data sources, the date the data was last refreshed, the latest reporting period and number of records (which is useful to see if there are any issues, for example, if less records are showing than expected).
- Data Dictionary details, and a link so that users can see definitions of the data and formats. This helps users to see the data lineage and understand the metadata behind the reports.
- Glossary details around the terminology used, and a link so that users can access and understand relevant terminology included in the report.  
  
### Updates section
  
The Updates section is designed to help inform users on relevant news, release updates, and any other ongoing updates beneficial to the user.  
  
It includes the following:

- Relevant news to help inform users on key events which could have had an impact on the data shown.
- Links to relevant NHSBSA sites and news.
- Release notes relating to the dashboard version numbers so that users are informed of new features, improvements, or bug fixes.
- Announcements could be included in this section, for example if the NHSBSA has been made aware of an issue, and a fix is working to be put in place.
  
### How to use section  
  
The How to use section is relevant especially for users who have limited technological literacy and may not be as familiar with the reporting software used. It aims to help guide users, limit support needed, maximise usage and optimise intake of the dashboard and information shown. Please see the [Power BI User Hints standards](../../power-bi/standards/user-hints/) as an example of information to include on a How to use page.  
  
It includes the following:

- Dashboard functionality to give details on functions within the dashboard, for example, users may not be familiar with drill down functionality and how to access it, therefore might miss this feature and other insights if not prompted to look and use this function.
- Links to relevant articles or training courses could be useful, for example, NHSBSA training courses sign up or Microsoft could be referenced for Power BI reports.
- Accessibility hints could be included in this section, for example, how to change from a chart format to a table.
  
[info 0]: https://bsa2468.atlassian.net/wiki/spaces/CoP/pages/1559396709/STAGE+3+-+Accessibility+Statements
[info 1]: https://nhsbsauk.sharepoint.com/sites/DigitalContentDesignTeam/SitePages/NHSBSA-digital-style-guide-and-standards.aspx
[info 2]: https://www.gov.uk/government/publications/inclusive-communication/accessible-communication-formats#accessible-print-publications
[info 3]:  https://www.england.nhs.uk/nhsidentity/identity-guidelines/fonts/  
