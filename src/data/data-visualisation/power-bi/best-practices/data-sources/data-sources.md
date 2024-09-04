---
layout: article
title: "Data sources"
description: "Overview of data sources compatible with Power BI"
status: REVIEW
tags: pbi-best-practice
order: 20
---
!!! warning Please note
The Power BI section includes functionalities and ways of working specific to Power BI but it is worth mentioning that the Power BI guidance must go hand in hand with the data visualisation standards when producing data visualisation products.
!!!

## Data connection guidance  
  
Where possible, use web-based technology to connect to data, rather than a local file. Data should not be permanently stored on your machine. For example, connecting to Fabric’s OneLake or a team workspace would be best to store your data. When data is stored offline, it is difficult to manage from a Security perspective. Aim to keep data in the cloud and not in a personal OneDrive. A team SharePoint instance can be used instead. Data being stored in the cloud on a shared drive helps to reduce any single person dependencies if someone were to leave the organisation and the data is deleted due to a personal OneDrive being deleted. This also helps aid collaboration and provides better user experience, for example, by avoiding multiple copies of data, out of sync data, and data not being available.  
  
A useful reference on the security benefits of modern collaboration in the cloud is available at [NCSC.GOV.UK][gov-security].  
  
The ESR learning module for Data & Insight Information Security Procedure is a useful resource for NHSBSA colleagues, to familiarise yourself with data best practices.  
  
## Data source methods  
  
There are various data sources available in Power BI. Your use case depends on which method you use.  
In DirectQuery mode, the Power BI engine queries the data at the source, which can be slow but avoids having to copy the data. Any changes at the data source are immediately reflected in the query results.  
  
DirectQuery in Power BI offers the greatest benefits in the following scenarios:

- the data changes frequently, and you need near real-time reporting.
- you need to handle large data without having to pre-aggregate.
- the underlying source defines and applies security rules.
- data sovereignty restrictions apply.
- the source is a multidimensional source containing measures, such as SAP BW.  
  
::: details Source - DirectQuery

[Microsoft learn; DirectQuery use cases][source 1]

:::

With import mode, performance can be better because the data is cached and optimised for business-intelligence queries without having to query the data source for each DAX query submitted by a report. However, the Power BI engine must first copy the data into the dataset during refresh. Any changes at the source are only picked up with the next dataset refresh.  

Direct Lake mode eliminates the import requirement by loading the data directly from OneLake. Unlike DirectQuery, there is no translation to other query languages or query execution on other database systems, yielding performance similar to import mode. Because there's no explicit import process, it's possible to pick up any changes at the data source as they occur, combining the advantages of both DirectQuery and import modes while avoiding their disadvantages. Direct Lake mode can be the ideal choice for analyzing very large datasets and datasets with frequent updates at the data source.  

Direct Lake Mode can pull directly from the system and caches the data, which means this is faster (alike Import mode), but also has regular data refreshes (if required). Currently Direct Lake mode is not available, but this is an area we will be looking into. Trusted datasets within the DataLake will be endorsed by the Data Platforms teams, this marks a dataset as recommended to use.  

Currently, to connect Power BI to the Data Warehouse, this would need to be done through the AVDs (Azure Virtual Desktops), which the [Data Platforms Team][DPT] manage access to.  

::: details Source - Direct Lake

[Microsoft learn; Direct Lake][source 2]

:::

## Scheduling refreshes  

DirectQuery and Direct Lake Mode read straight from the system meaning refreshes of your data do not need to be scheduled. If you are reading your data through import mode you may wish to automatically schedule a refresh (otherwise, you can refresh your data as and when needed). The [Microsoft Learn page 'Configure scheduled refresh'][source 3] gives more information.  
  
Alternatively, tools such as Power Automate, R or Alteryx can be used to pick up recent additions and amendments to the data. For example, a workflow to clean and update the data could be useful before the data is loaded in. Setting data flows to run automatically out of office hours may be useful dependent on your levels of data and data refresh requirements.  

## Modelling data  
  
When importing the data, ensure that your data is modelled efficiently.  
Microsoft have [data reduction techniques for import modelling guidance][source 4] available.  

There are eight different data reduction techniques covered in this article. These techniques include:

- [remove unnecessary columns][source 5]
- [remove unnecessary rows][source 6]
- [group by and summarize][source 7]
- [optimise column data types][source 8]
- [preference for custom columns][source 9]
- [disable Power Query query load][source 10]
- [disable auto date/time][source 11]
- [switch to mixed mode][source 12]  
  
The [‘Data Modelling In Power BI: Helpful Tips & Best Practices’ article][source 14] may be useful.  
And [‘Model data with Power BI’ training][source 13] is also available.  

[source 1]: https://learn.microsoft.com/en-us/power-bi/connect-data/desktop-directquery-about#directquery-use-cases
[source 2]: https://learn.microsoft.com/en-us/power-bi/enterprise/directlake-overview
[DPT]: https://nhsbsauk.sharepoint.com/sites/DAI_DataWarehouse/SitePages/Our-Team(1).aspx
[source 3]: https://learn.microsoft.com/en-us/power-bi/connect-data/refresh-scheduled-refresh
[source 4]: https://learn.microsoft.com/en-us/power-bi/guidance/import-modeling-data-reduction
[source 5]: https://learn.microsoft.com/en-us/power-bi/guidance/import-modeling-data-reduction#remove-unnecessary-columns
[source 6]: https://learn.microsoft.com/en-us/power-bi/guidance/import-modeling-data-reduction#remove-unnecessary-rows
[source 7]: https://learn.microsoft.com/en-us/power-bi/guidance/import-modeling-data-reduction#group-by-and-summarize
[source 8]: https://learn.microsoft.com/en-us/power-bi/guidance/import-modeling-data-reduction#optimize-column-data-types
[source 9]: https://learn.microsoft.com/en-us/power-bi/guidance/import-modeling-data-reduction#preference-for-custom-columns
[source 10]: https://learn.microsoft.com/en-us/power-bi/guidance/import-modeling-data-reduction#disable-power-query-query-load
[source 11]: https://learn.microsoft.com/en-us/power-bi/guidance/import-modeling-data-reduction#disable-auto-datetime
[source 12]: https://learn.microsoft.com/en-us/power-bi/guidance/import-modeling-data-reduction#switch-to-mixed-mode  
[source 13]: https://learn.microsoft.com/en-us/training/paths/model-data-power-bi/
[source 14]: https://community.fabric.microsoft.com/t5/Community-Blog/Data-Modelling-In-Power-BI-Helpful-Tips-amp-Best-Practices/ba-p/1977956
[gov-security]: https://www.ncsc.gov.uk/blog-post/the-security-benefits-of-modern-collaboration-in-the-cloud