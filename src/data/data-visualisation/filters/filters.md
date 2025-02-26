---
layout: article
title: "Filters"
description: "Guidance for using and designing filters for reports at the NHSBSA"
status: DRAFT
tags: data-viz-home
order: 125
review:
    last_reviewed_date: 2025-01-30
    review_cycle: ANNUAL
---
# Filter purpose  
  
Filters should only be used when needed and to add to the value of a dashboard. The number of filters on a dashboard should be limited. If there are more than three filters on a dashboard this can take away the value and visual impact of the message and distract a user.  
  
Parameters can be created and used to change variables within a chart.
  
To help our end users understand the data, any filters applied should always be clearly stated or viewable on the dashboard or report. For example, on Oracle Analytics Classic a disclaimer may be added onto the dashboard:  
  
![image 3](images/filters_3.png)  
  
## Placement of a filter  
  
Where possible, the inbuilt filter functionality of the software should be used. This will slightly enhance the performance of a report, without taking up as much canvas space. 

Filters, or ‘slicers’, as best practice should be positioned as a banner across the top of the page starting from the left, as focus naturally falls to the left, or on the left-hand side. Having the filters on the left-hand side can take up unnecessary space. Considerations on the real estate of the page are important to consider in placing filters.  
  
For more information visit the [Towards data science dashboard design page](https://towardsdatascience.com/the-dos-and-donts-of-dashboard-design-2beefd5cc575).  
  
Icons can be used to hide filters if needed, if an icon is used the purpose of the icon should be stated for example, by accompanying text such as ‘Click the filter icon to filter the dashboard’. The icon should also have alternative text provided stating the purpose of the icon. If you have more than three filters on your page, using an icon can be a good way to hide the filters, and have the filters pop-out when the icon is clicked. This can offer usability and flexibility within your report.  
  
Global filters should be prioritised and included at the top left of a dashboard, or first in a filter section, with more specific filters following below. Specific filters relating to a singular chart should be placed close to the chart in the right-hand side top corner opposite the title of the chart, aligned with the visualisation itself.  
  
An example of filters placed on the top left of a dashboard:  
  
![image 4](images/filters_4.png)  
  
Within some data visualisation tools filter panels can be included which may use less resource within your report. However, with a standard in-built filter you cannot customise the pane. 

For more information visit the [Chartio dashboard design page](https://chartio.com/blog/dashboard-design-best-practices-the-dashboard-layout/).

Visualisations themselves can also be used as a filter. Many data visualisation tools have this inbuilt functionality.  
  
## Design of a filter  
  
A filter should be used to enable functionality of a dashboard for a user, but not distract from the main content. 
Using a label as a header for a filter, for example 'Contact type', is useful in making sure the purpose of a filter is clearly stated.   
It must also always be clear to a user which filters are in place, which can be achieved by using dynamic chart titles.  
  
Filters should have:  
  
- a font size of 12px for the header
- a font consistent with the rest of the report, either Frutiger or Arial
- equal heights and widths to one another if possible
- no borders or shadow borders, so as not to distract the user with additional ink to look at
- a white background

If the filter includes a timeline, NHS Blue (#005EB8) should be used:  
  
![image 5](images/filters_5.png)
  
A ‘Remove applied filters’ button in the top right-hand side of the screen is optional. This is to allow the user to quickly remove any filters applied and ensure that the report can be quickly set to be unfiltered should a user need this:  
  
![alt text](images/filters_6.png)