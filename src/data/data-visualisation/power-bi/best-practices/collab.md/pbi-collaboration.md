---
layout: article
title: "Collaborative working"
description: "Best practices for working collaboratively using Power BI"
status: REVIEW
tags: pbi-best-practice
order: 10
---
## Version control  
  
For dashboards which are being developed by more than one developer, it is possible for individuals to work on separate sheets in separate dashboards, likely a duplication of the dashboard (accessing to the same data set), developers would then copy the elements into a final dashboard. To do this, it is essential to manage the version control of dashboards, ensuring that dashboards are dated and the changes made to a dashboard are detailed for clarity when merging the dashboards.  
  
## Git integration  
  
[Power BI Desktop projects][link1] is currently in preview, which includes Git integration (a version control software). There are some pre-requisites to using Git included in the link provided. This allows changes to be merged using typical Git functionality. One of the advantages of Fabric is that it beings Git integration to Power BI which should allow more managed collaborative working once Fabric is more widely rolled out.  
  
## Power BI Explorer  
  
[Power BI Explorer is a free tool you can install on your machine][link2]. For dashboards which are being developed by more than one developer, you can create a copy of the dashboard and then compare changes, or compare changes of your report using Git. You can follow a tutorial within the tool itself.  
  
### Comparing reports  
  
Compare reports allows you to see two reports side by side and compare any changes between the two. The visuals and items each have a code which helps to track their changes across the dashboard versions.  
  
You can point this at a Git repository to compare versions, meaning you would not need to keep multiple versions of the same file. For Git, Power BI Explorer knows if your file is in a Git repository which allows you to see changes from a point in time, for example, to compare an uncommitted report to a committed report.  
  
- Select 'Compare report' from the Power BI Explorer landing page. It is the second box from the left in the centre of the screen.  
  
![Power BI Explorer landing page](../images/exp1.png)  
  
- Select the reports you wish to compare.  
  
![Report comparison page](../images/exp2.png)  
  
- Expanding Pages to see which pages have been added/removed/amended:  
  
![Example of expanded Pages view](../images/exp3.png)  
  
This section works like Git in that items highlighted in red have been removed, and items highlighted in green have been added.  
  
- You can click on items under Visuals and see where they are positioned on the screen.  

![Example report comparison page](../images/exp4.png)  
  
- You can compare an overview of the pages included in each version.  
  
![Example overview comparison](../images/exp5.png)  
  
- You can refine what is shown and what you wish to compare in the drop down. Options for the refine and compare drop down box include: "Show added items", "Show deleted items", "Show modified items", "Show identical items", "Hide minor changes (tab order)", "Hide minor changes (positioning)".
  
![Example drop down box refining selection](../images/exp6.png)  
  
![Example drop down options.](../images/exp7.png)  

### Inspecting reports  
  
This section gives a breakdown of pages and visuals.  
  
- Select 'Inspect report' and load in your .pbix file. It is the leftmost box in the centre of the screen.  
  
![Inspect report page](../images/exp8.png)  
  
- The Summary page gives you information on: Pages, Visuals, Fields, Filters, Issues and Themes.  
  
![Example summary page](../images/exp9.png)  
  
- The Details tab gives further information. You can see a wireframe of the dashboard, and when you select a visual: dimensions, x/y/z coordinates and drilldown functionality.  
  
![Example details page](../images/exp10.png)  
  
Values such as dimensions, categories, series can be checked against the default values to see if any values have changed.  
  
- Interactions between visuals can be shown.  
  
![Example showing interactions between visuals](../images/exp11.png)  
  
When you hover over some of the visuals the inbound and outbound interactions are highlighted between visuals. These interactions would otherwise be invisible on Power BI Desktop.  
  
Inbound interactions are shown with yellow arrows pointing into the visual in question.  
  
![Inbound interactions example](../images/exp12.png)  
  
Outbound interactions are shown with blue arrows pointing out from the visual in question.
  
![Outbound interactions example](../images/exp13.png)  
  
'Track usage' in the Data Model Explorer shows which variables are being used and where.  
  
![Track usage pane example](../images/exp14.png)

[link1]: https://learn.microsoft.com/en-us/power-bi/developer/projects/projects-git
[link2]: https://www.pbiexplorer.com/