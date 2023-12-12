---
layout: article
title: "Row Level Security (RLS)"
description: "Guidance for implementing Power BI Row Level Security"
status: DRAFT
tags: pbi-best-practice
order: 30
---
## User role authentication  
  
To control and manage access to workspaces, Azure AD (Microsoft Entra) security groups should be used as this is based on an internal colleague’s profile. Azure AD is now called Microsoft Entra.

User roles and security groups should be created to cover each group of user. This can be done via a Service Request. Please check prior to requesting a security group being created whether there is one in place.

If possible, don’t include RLS down to the user level unless there’s an absolute need for it. Microsoft Entra should be used as this is more manageable and frequently maintained.

For external users, the method of authentication is being looked into. [Methods such as CIS2,][rls 1] suitable for NHS employees may be useful.  
  
## Implementing RLS  
  
To implement RLS or OLS, the developer would need a Pro licence.

RLS is implemented on a dataset level. From there, access to roles can be managed. You can have multiple reports running from one dataset, with RLS implemented across each report.

Creating a suitable data model is key to ensuring RLS will be implemented correctly.  
  
![Example data model](../images/data-model.png)  
  
You can either import the access tables or do this as a Direct Query. OneLake does not yet have this functionality.  
  
User roles will be captured via a SharePoint list, with the bonus of Microsoft integration. The data will be kept for audit purposes, and the business owner will be determined based on the relevant data. For example, if the dataset was centrally managed by the Data Platforms team, the owner would be the Data Platforms Team.  
  
To manage roles, you can create Roles groupings, and add in the appropriate DAX expressions to specify which tables the user roles will have access to.  
  
The DAX expression would need to be TRUE to show results.  
  
Some options of a DAX expression you could put in place:

- access to certain user groups or individuals users. For example, users in a certain region, or users of a certain job role
- a start and end date for access to users during a certain timeframe
- an active flag for current individuals to filter out certain individuals
- bespoke filters, such as: ‘Do not show results for anything where # patients is between 1 and 4 etc’ for sensitive data purposes  
  
Please note, RLS is implemented before your data is read in, so if you need to redact your data it is preferable to calculate any aggregations before reading your data in. In terms of redacting data for small base sizes, RLS is a blanket rule which would be preferable, otherwise, you can apply suppression of values on individual visualisations. Please make sure you have tested and checked the data shown to ensure the counts are accurate when RLS is applied.  
  
Examples of DAX functions in the Manage Roles pop-up window, used to filter the data that a particular role can see:  
  
1. OR(User_Security[Region] = "NORTH EAST AND YORKSHIRE", User_Security[Region] = "NORTH WEST")  
  
2. "User_Security"[Username] = USERNAME()

These both return a true/false value, which is necessary.

![Example DAX formula](../images/dax-1.png)  

![Example DAX formula](../images/dax-2.png)  
  
## Access  
  
All admin rights have access to view/write to all data. If you have write access or admin access, no RLS will be applied.  
  
An admin can impersonate to test the security. For example, selecting a user to ‘show me what this person’s access would look like’.  
  
Once RLS is implemented it cannot be removed. This also means that if noone is assigned within RLS, noone sees anything. At least one role is needed to be specified in RLS.  
  
## Page level security  
  
Currently Power BI doesn't hide individual pages using RLS security (as RLS is implemented on the dataset itself), however [it is possible to implement page level security.][rls 2] For example, if you had users you wished to only have access to certain content.

[rls 1]: https://digital.nhs.uk/services/care-identity-service/applications-and-services/cis2-authentication/microsoft-authenticator
[rls 2]: https://radacad.com/page-level-security-workaround-in-power-bi