---
layout: article
title: "Workspaces"
description: "Overview of Power BI workspaces"
status: DRAFT
tags: [power-bi, pbi-workspaces, pbi-home, pbi-best-practice]
order:
    power-bi: 2
    pbi-workspaces: 1
    pbi-home: 2
    pbi-best-practice: 2
related:
  tag: pbi-best-practice
---
!!! warning Please note
The Power BI section includes functionalities and ways of working specific to Power BI but it is worth mentioning that the Power BI guidance must go hand in hand with the data visualisation standards when producing data visualisation products.
!!!   
   

This documentation contains Microsoft guidance alongside our organisational guidance to ensure we are following the necessary processes and keeping our data and reports secure.  
  
The intended audience of this document is developers or consumers of Power BI reports, of any skill level, who need access to Power BI reports, or the workspaces where those reports are published to, and who will need to understand the privilege levels involved in sharing access.  
  
  
     

## Workspace types  
  
A workspace is a central space (think alike a SharePoint folder), where a Power BI dashboard or report can be published to alongside the data.  
  
There are two types of workspaces:  
- Personal workspaces: Every user has a personal workspace. A personal workspace may be used for publishing certain types of content. Its primary purpose is to support personal BI usage scenarios.
- Workspaces: The primary purpose of a workspace is to support collaboration among multiple users. Secondarily, a workspace can also be used for viewing content. The type of workspace can then be broken down to team or product level.  
  
Using a personal workspace for anything other than learning personal BI, temporary content, or testing purposes can be risky because content in a personal workspace is managed and maintained by one person. Further, a personal workspace doesn't support collaboration with others.  
  
::: details Source
 
[Appropriate use of personal workspaces][ws 1]

:::  
    

## Guidance  
  
As personal workspaces have a single person dependency, we would recommend having a team level workspace (or appropriate), where reports and data can be shared with your team members.  
  
In order to share reports, dashboards and data with any users from within the workspace, sharing the report and dashboard directly from the report itself is the recommended method.  
  
Access to the data held within that workspace should be determined on the data itself (rather than the workspace), as giving access to the workspace gives access to all reports, dashboards and data within the workspace.  
  
  
## Workspace requests  
  
To create a workspace, create a Service Request with the Category being ‘Microsoft Applications’, the Sub Category as ‘Power BI’ and the Item as ‘Access’.  
  
![Screenshot showing how to configure the Category, Sub-category and Item fields of a service desk request](../categories.png)  
  
The following details should be included:  
- The name of the workspace, this should be at a team level (please check with your team if one is currently set up before making a request).
- The purpose of the workspace, for example: ‘a workspace to house reports for the MI team , holding 'ABC' data types including sensitive data, with the customers being x/y/z’.
- Any relevant contact details, such as the central team’s contact email address.
- The Member and Contributor users of your workspace. These users will need Power BI Pro licences and will consist of the team members who will be publishing to the workspace. For example, developers should have workspace Member or Contributor rights, however viewers of your report should not. For workspace roles please consult the Microsoft Learn page on [Roles in workspaces in Power BI.][ws 2].  
  
Once this Service Request is created, the Infrastructure, or Data Platforms Operations team will pick this request up, and save a description of the workspace with the Service Request number and details provided attached.  
  
Following this guidance, personal workspaces should only be used for personal developments. For reports and dashboards which are to be accessed wider, a team or product level workspace should be set up.  
  
To set up a team or product workspace, please first ensure you have checked there is not a workspace currently in place (by checking with your team members or product working group). If there is one needed, you can create a Service Request for the attention of the Infrastructure team. There are no costs involved in setting up a workspace.  
  
The content within this workspace should be relevant to the team. The team should be aware and manage relevant access and privileges to the workspace.  
  
  
## Workspace privileges  
  
There are 4 generic roles in workspaces:
1. Admin
2. Member
3. Contributor
4. Viewer

These roles determine the privileges available to users. Please refer to the [Microsoft guidance on Workspace roles and relevant privileges.][ws 3]  
  
The level of access decreases from Admin to Viewer.  
  
Member is the highest level of access granted to a team or product workspace (as Admin roles are reserved for the Infrastructure and Operations support teams). Member roles should be reserved for members within the team who have a developed understanding of Power BI and the surrounding infrastructure. Those who are more advanced developers will likely have Member privileges.  
  
For any team members who need to make updates to the report or data product, such as a data update, a Contributor role should be set. Members and Contributors have access to all content within the workspace. If colleagues solely need to view the content in the workspace, add them as Viewers. Please stay mindful that access to the workspace, allows access to all content within the workspace, and that viewers of individual reports should be shared access to the reports itself to maintain confidentiality.  
  
The Infrastructure and Operations support teams can centrally manage access to a workspace by creating AD groups containing a group of members, and then allowing access to the overall group. To create an AD group and allow access to a workspace, please raise a Service Request.  
  
  
## Sharing access to a workspace  
  
The development team, and those who are set as Members of a workspace will determine privileges assigned to the users within a workspace. Management of the users within a workspace should be frequently accessed and managed by the team.  
  
There are a couple of options around sharing reports.
For example, if the Management Information team created a Power BI report for HRSS there are two options:  
- The Management Information Team could publish the report to the Management Information team’s workspace and share the report directly from within the workspace.
- Otherwise, Management Information Team could publish straight into the HRSS team’s workspace, providing access has been shared with the Management Information Team to the HRSS workspace.  
  
Ownership of the content, relevance, and maintaining the content published to this workspace falls to the team who owns the workspace to manage.  
  
  
## Naming conventions  
  
Alike the [Content Design Standards for Domain names][ws 4], a similar structure is followed in setting up a workspace.  
  
<ins> Team level </ins>  
If your workspace is created for a team level, the team name of the development team should be used as the workspace title. For example, ‘Management Information Team’. If there is the likelihood of your team name being a duplicate across the organisation, this is to be prefixed by your directorate initials, for example ‘DDAT Management Information Team’.  
  
The directorates and initials are as follows:  
    Digital, Data and Technology - DDaT  
    Finance, Commercial and Estates - FCE  
    Leadership Team	- LT  
    Operations - OPS  
    People and Corporate Services - PaCS  
    Portfolio Management - PM  
    Primary Care Services - PCS  
    Strategy, Performance, Business Development and Growth - SPBDG  
    Workforce Transformation - WT  
  
<ins> Product level </ins>  
If your workspace’s primary purpose is delivering a product, and Development, Testing and Production workspaces are being used for your team, the domain name should be prefixed with DEV, TEST or PROD respectively. The name of the product will then follow, for example, ‘TEST eDen’ or ‘PROD NHS Jobs’.  
  
    
## Power BI Best Practices







[ws 1]: https://learn.microsoft.com/en-us/power-bi/guidance/powerbi-implementation-planning-workspaces-workspace-level-planning#appropriate-use-of-personal-workspaces
[ws 2]: https://learn.microsoft.com/en-us/power-bi/collaborate-share/service-roles-new-workspaces
[ws 3]: https://learn.microsoft.com/en-us/power-bi/collaborate-share/service-roles-new-workspaces#workspace-roles
[ws 4]: https://nhsbsauk.sharepoint.com/sites/DigitalContentDesignTeam/SitePages/NHSBSA-digital-style-guide-and-standards.aspx#domains