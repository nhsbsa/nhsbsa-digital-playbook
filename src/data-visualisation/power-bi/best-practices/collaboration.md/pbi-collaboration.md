---
layout: article
title: "Collaborative working"
description: "Best practices for working collaboratively using Power BI"
status: DRAFT
tags: [power-bi, pbi-collab, pbi-home, pbi-best-practice]
order:
    power-bi: 2
    pbi-collab: 1
    pbi-home: 3
    pbi-best-practice: 3
related:
  tag: pbi-best-practice
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
  
Select 'Compare report':  
  
![Screenshot showing the first page that is shown when you open Power BI Explorer on your desktop, with four boxes in a horizontal row in the centre of the screen. From left to right the boxes are labelled 'Inspect report', 'Compare report', 'Analyze report', 'Guided tour'. The box labelled 'Compare report' has a pale yellow background and contains a simple image of two sheets of paper with an arrow pointing from each one to the other. This entire box is outlined in red to show that it is what you should select when you open Power BI Explorer with the intention of comparing reports.](../images/pbi-explorer1.png)  
  
Select the reports you wish to compare:  
  
![Screenshot of the page that appears after you select 'Compare report' from the initial screen. The page is made up of 4 main sections, with the 2 on the left hand side of the page for one report and the 2 on the right hand side for the second. The top left shows the file name of the left hand side's report, and in this screenshot is outlined in a red box for emphasis. The top right shows the words 'Click to open comparison report' and this is also outlined in a red box.](../images/pbi-explorer2.png)  
  
By expanding Pages you can see which pages have been added/removed/amended:  
  
![Screenshot showing the page that opens after you select 'Pages' on the previous screen. The file names of the 2 reports being compared are at the top of the screen, and the bottom half of the screen has on the left hand side a table for report 1's 'Object/Property' and 'Value', and on the right hand side the same for report 2. In this screenshot only the right table is populated](../images/pbi-explorer3.png)  
  
This section works like Git in that items highlighted in red have been removed, and items highlighted in green have been added.  
  
You can click on items under Visuals and see where they are positioned on the screen:  

![Screenshot showing the page that opens after you select 'Pages' on the previous screen. The file names of the 2 reports being compared are at the top of the screen, and the bottom half of the screen has on the left hand side a table for report 1's 'Object/Property' and 'Value', and on the right hand side the same for report 2. In this screenshot only the right table is populated. In this image there is a small box on the upper right hand side just below the file name that is outlined in a dotted black line to indicate where the section that has been selected from the 'Object/Property' table is on the report page.](../images/pbi-explorer4.png)  
  
You can compare an overview of the pages included in each version below:  
  
![Screenshot showing the page that opens after you select 'Pages' on the previous screen. The file names of the 2 reports being compared are at the top of the screen, and around halfway down the page there is a red box outlining tabs that can be selected. This is to show where you would click to compare an overview of the pages in each of the reports being compared.](../images/pbi-explorer5.png)  
  
You can refine what is shown and what you wish to compare in the drop down below:  
  
![Screenshot showing the page that opens after you select 'Pages' on the previous screen. The file names of the 2 reports being compared are at the top of the screen, and around halfway down the page there is a red box directly beneath the tabs for page overviews, which is outlining a drop down box that can be used to refine what is shown and compared on the reports.](../images/pbi-explorer6.png)  
  
![The drop down options for the refine and compare drop down box, from top to bottom: 'Show added items', 'Show deleted items', 'Show modified items', ;Show identical items', 'Hide minor changes (tab order)', 'Hide minor changes (positioning)'. In this image all of the check boxes to the left of each option, are selected (indicated by a 'tick' icon in each box.)](../images/pbi-explorer7.png)  
    

### Inspecting reports  
  
This section gives a breakdown of pages and visuals.  
  
Select 'Inspect report' and load in your .pbix file:  
  
![Screenshot showing the first page that is shown when you open Power BI Explorer on your desktop, with four boxes in a horizontal row in the centre of the screen. From left to right the boxes are labelled 'Inspect report', 'Compare report', 'Analyze report', 'Guided tour'. The box labelled 'Inspect report' has a pale blue background and contains a simple image to represent visualisations: 3 vertical bars increasing in height from left to right, in the colours blue, green and red (left to right), with a yellow right angled triangle covering the bottom right of the larger two bars, with the hypotenuese facing the bars. This entire box is outlined in red to show that it is what you should select when you open Power BI Explorer with the intention of breaking down pages and visuals of a report.](../images/pbi-explorer8.png)  
  
The Summary page gives you information on: Pages, Visuals, Fields, Filters, Issues and Themes.  
  
![Screenshot showing the page that appears after you select 'Inspect report' from the initial screen. On the left side of the page is a menu panel with a blue background. On the right hand side of the page is a table with two tabs. The one showing in this image is the left of the two, and is labelled 'Report Explorer'. The other tab is labeled 'Data Insight Explorer'. Between the left and right hand side sections, is the majority of the page. This section also has two tabs and the one selected in this image is labelled 'Summary' while the other is labelled 'Details'. The name of the report is at the top and beneath this the page is split into 8 equal-size boxes in 2 rows of 4. From left to right, top row first, the boxes are titled: 'Pages', 'Visuals', 'Fields', 'Filters', 'Issues', 'Themes', 'Misc'. The 8th box is empty.](../images/pbi-explorer9.png)  
  
The Details tab gives further information. You can see a wireframe of the dashboard, and when you select a visual: dimensions, x/y/z coordinates and drilldown functionality.  
  
![Screenshot showing the page that appears after you select 'Inspect report' from the initial screen. On the left side of the page is a menu panel with a blue background. On the right hand side of the page is a table with two tabs. The one showing in this image is the left of the two, and is labelled 'Report Explorer'. The other tab is labeled 'Data Insight Explorer'. Between the left and right hand side sections, is the majority of the page. This section also has two tabs and the one selected in this image is labelled 'Details' while the other is labelled 'Summary'. A wireframe of the dashboard is shown at the top of the screen, with one small section outlined in red. Beneath this is a table, also outlined in red, which displays properties of the dashboard.](../images/pbi-explorer10.png)  
  
Values such as dimensions, categories, series can be checked against the default values to see if any values have changed.  
  
Interactions between visuals can be shown:  
  
![Screenshot zoomed in to the top left corder of the 'Inspect report' page showing that when the 'Details' tab is selected there are two check boxeslabeled 'Show visual-level filter' and 'Show interaction'. In this image the 'Show visual-level filter' option is selected while the other is not, but there is a red box around the 'Show interaction' option to draw attention to the ability to show interactions between visuals using this tool.](../images/pbi-explorer11.png)  
  
When you hover over some of the visuals the inbound and outbound interactions are highlighted between visuals. These interactions would otherwise be invisible on Power BI Desktop.  
  
Inbound interactions are shown in yellow:  
  
![Screenshot showing what the wireframe of the dashboard may look like when the 'Show interaction' option is selected. Several filters and visual tiles have yellow arrows pointing to other visual tiles to represent an inbound interaction between them.](../images/pbi-explorer12.png)  
  
Outbound interactions are shown in blue:  
  
![Screenshot showing what the wireframe of the dashboard may look like when the 'Show interaction' option is selected. One visual tile has blue arrows pointing to several other visual tiles to represent an outbound interaction between them.](../images/pbi-explorer13.png)  
  
Track usage in the Data Model Explorer shows which variables are being used and where:  
  
![Screenshot showing the page that opens after selecting 'Inspect reports', with the 'Track usage' pane open at the right hand side of the screen. Under 'Track usage' there is a table and the 6th row down is highlighted blue and outlined in red to draw attention to it. The value of this row under the first column titled 'Name' is 'Date ended' and the value under the 2nd column titled 'Type' is 'Column'. There are 4 tabs at the bottom of the page that are labeled from left to right: 'Overall', 'Year', 'Month', Further details'. The 'Year' tab is selected and beneath this is a table outlined in a red box for emphasis. The table shows the usage information for the row selected in the table to the right of the page.](../images/pbi-explorer14.png)  
  
## Power BI Best Practices

[link1]: https://learn.microsoft.com/en-us/power-bi/developer/projects/projects-git
[link2]: https://www.pbiexplorer.com/