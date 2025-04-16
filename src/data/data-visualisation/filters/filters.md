---
layout: article
title: "Filters"
description: "Guidance for using and designing filters for reports at the NHSBSA"
status: FINAL
tags: data-viz-home
order: 60
review:
    last_reviewed_date: 2025-01-30
    review_cycle: ANNUAL
---
## Filter purpose  
  
Filters should only be used when needed and to add to the value of a dashboard. The number of filters on a dashboard should be limited. Having more than three filters on a dashboard can take away the value and visual impact of the message and distract users.  
  
Parameters can be created and used to change variables within a chart.
  
To help our end users understand the data, any filters applied should always be clearly stated or viewable on the dashboard or report. For example, a disclaimer may be added onto the dashboard to state "Reporting month is April 2025".
  
## Placement of a filter  
  
Where possible, use the inbuilt filter functionality of the software. This will enhance the performance of a report, without taking up as much canvas space. 

Position the filters, or ‘slicers’, across the top of the page starting from the left, as focus naturally falls to the left. Having the filters running down the left-hand side of the page can take up unnecessary space. Consider the space available on the page when deciding where to place filters.  
  
For more information visit the [Towards data science dashboard design page](https://towardsdatascience.com/the-dos-and-donts-of-dashboard-design-2beefd5cc575).  
  
Icons can be used to hide filters if needed. If an icon is used the purpose of it should be stated by accompanying text, such as ‘Click the filter icon to filter the dashboard’. The icon should also have alternative text provided stating the purpose of the icon.  
If you have more than three filters on your page, icons can be a good way to hide the filters, and have the filters pop-out when the icon is selected. This can offer usability and flexibility within your report.  
  
Page filters should be prioritised and included at the top left of a dashboard, or first in a filter section. More specific filters can then follow below. Specific filters relating to a singular chart should be placed close to the chart in the right-hand side top corner opposite the title of the chart, aligned with the visualisation itself.  
  
An example of filters placed on the top left of a dashboard:  
  
![Filters for directorate, region and record type.](images/filters_4.png)  
  
Within some data visualisation tools, filter panels can be included which may use less resource within your report. However, with a standard in-built filter you cannot customise the panel. 

For more information visit the [Chartio dashboard design page](https://chartio.com/blog/dashboard-design-best-practices-the-dashboard-layout/).

Visualisations can also be used as a filter. Many data visualisation tools have this inbuilt functionality. It is important to be aware of, and optimise, the interactions affecting your visuals and filters.  
  
## Design of a filter  
  
A filter should be used to enable functionality of a dashboard for a user, but not distract from the main content. 
Using a label as a header for a filter, for example 'Contact type', is useful in making sure the purpose of a filter is clearly stated.   
It must also always be clear to a user which filters are in place, which can be achieved by using dynamic chart titles.  
  
Filters should have:  
  
- a font size of 12px for the header
- a font consistent with the rest of the report, either Frutiger or Arial
- equal heights and widths to one another if possible
- no borders or shadow borders, as they can distract users
- a white background

If the filter includes a timeline, use NHS Blue (#005EB8):  
  
![2001 to 2004 filter timeline using NHS Blue.](images/filters_5.png)
  
A ‘Remove applied filters’ button in the top right-hand side of the screen is optional. This allows the user to quickly remove any filters applied and makes sure the report can be quickly set to be unfiltered should a user need this:  
  
![Remove applied filter button shown on a Provider Assurance page.](images/filters_6.png)