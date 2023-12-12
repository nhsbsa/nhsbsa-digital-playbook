---
layout: article
title: "Suppression of values"
description: "Standards around the suppression of values with Power BI"
status: DRAFT
tags: [power-bi, pbi-val-supp, pbi-home, pbi-standards]
order:
    power-bi: 2
    pbi-val-supp: 1
    pbi-home: 6
    pbi-standards: 2
related:
  tag: pbi-standards
---
## Statistical Disclosure Control (SDC) Protocol  
  
The [Statistical Disclosure Control Protocol][link 1] was developed to suppress identifiable information and data from individuals where there is a small base size of between 1-4. Absolute 0 values are able to be shown within a table or chart. It is important to be mindful of percentages when implementing the SDC Protocol, as if the count can be worked out based on percentages, this will need to be suppressed.  
  
This chart is an example of what suppression of a count of between 1-4 can look like:  
  
![Column chart with the title '# Headcount by Directorate'. Beneath the title is the chart, with 9 shortened names of NHSBSA directorates listed along the x axis. From left to right: 'DDaT', 'FCE', 'Ops CS', 'Ops WS', 'P&CS', 'PCS', 'PMD', 'SPBDG', 'WT'. Above 'DDaT' is a dark green column with a value count label of '13' above the top of the column. Above 'Ops CS' is a slightly taller dark green column with a value count label of '17' in the top centre of the bar. Above 'PCS' is a shorter dark green column with a value count label of '9' above the bar. All other directorates have an asterix in place of a column.](../images/value-image.png)  
  
Note that the values of between 1 and 4 have been replaced with an asterisk (*) to indicate to the users that these values have been suppressed, and the bar size is shown as 0, to not give away the values.  
  

## Power BI implementation  
  
It is important to be able to implement this suppression within Power BI. To do this, an example will be shown using counts of leavers across the directorates.  
  
This is an example of the data to be used:  
  
![Screenshot of a table of data from the 'data' tab of Power BI. There are 4 columns, with the headings (from left to right): 'Director', 'termination_month', 'Count', 'Today or before'. There are 18 rows in the table, all of which are populated. In this image the 'Today or before' column has been selected as indicated by the heading box having a green background. We can also see that the 'Count' field is being sorted in descending order, and the 'Today or before' field has a filter applied.](../images/value-image2.png)  
  
The today or before column was created to filter on only dates only up to today’s date (in the past, rather than future amendments):  
  
= Table.AddColumn(#"Sorted Rows1", "Custom", each if [termination_month] > #date(2023, 11, 28) then null else [termination_month])  
  
Next a line chart was created with termination_month on the x axis, and Count on the y axis.  
  
The following measure was then created:  
  
![DAX code used to create a custom measure called '# Count'. The code is: '# Count = VAR _Count = SUM('Leavers all'[Count])+0 Return IF(_Count = 0,0, IF(_Count <= 4, -0.01, _COUNT))'](../images/value-image3.png)  
  
'# Count' does the following:  
- sums up the counts
- makes sure for any missing combinations, 0 is shown
- if the Count is 0, 0 is returned
- if the count is 4 or less, -0.01 is returned, otherwise the original values are present  
  
Now any values higher than 0 but equal or less than 4 will be given the arbitrary value of -0.01. This is so that the values are marked out as distinct from 0, for use in other measures.  
  
'Chart Count' was next created as a measure:  
  
![DAX code used to create a custom measure called 'Chart Count'. The code is: 'Chart Count = VAR _Count = [# Count] Return IF(_Count == -0.01, 0, _Count)'](../images/value-image4.png)  
  
This replaces any -0.01 values with 0. This measure is used for the y axis.  
The minimum value for the y axis has been set as 0 for consistency.  
  
![Screenshot showing Power BI desktop open to the report tab, with the canvas about 85% filled by a line graph with the title 'Leavers by month'. To the right the 'Filters', 'Vizualisations' and 'Data' panels are all open, with the minimum range set to '0' in the 'Visualizations' panel, and this is outlined in a red box to draw attention to it.](../images/value-image5.png)  
  
Redacted values of between 1 and 4 were not yet being labelled correctly for the user to see.
'# Headcount Label' was created as a measure to select these values. The below says if any values of '# Count' are greater than or equal to -0.001 (which all apart from the -0.01 values will be), then display 0*. The asterisk indicates to the user that low base sizes have been redacted. It is important to include this as a disclaimer on the dashboard so users are aware.  
  
![DAX code used to create a custom measure called '# Headcount label'. The code is: '# Headcount label = if([# Count] >= -0.001,[# Count], "0*")'](../images/value-image6.png)  
  
Add '# Headcount Label' on as a tooltip:  
  
![Screenshot showing the 'Filters' and 'Vizualisations' panels found on the right hand side of the report tab in Power BI desktop. Under 'Vizualisations', the custom measure '# Headcount Label' has been added to the tooltip field. This has been outlined in a red box to draw attention to it. ](../images/value-image7.png)  
  
To make this clear to users, so that they can clearly see the 0* values, toggle Data labels as on, and add '# Headcount Label' in as a Custom label:  
  
![Screenshot showing the 'Filters' and 'Vizualisations' panels found on the right hand side of the report tab in Power BI desktop. Under 'Vizualisations', the option for 'Data labels' is toggled 'on' and this is outlined in a red box. Further down the 'Vizualisations' panel the 'Custom label' toggle is also 'on' and the field selected is '# Headcount lebels'. This is also outlined in a red box. To the left of the 'Filters' panel, where part of the line graph on the canvas can be seen, the very end of the line is outlined in a red box to draw attention to the custom label. ](../images/value-image8.png)  
  
Next, add the disclaimer onto the dashboard by toggling on a subtitle.  
  
Some text to use as the disclaimer:  
"To protect personal identifiable information, small base sizes between 1-4 have been replaced with 0*."  
  
![Screenshot showing Power BI desktop open to the report tab, with the canvas about 85% filled by a line graph with the title 'Leavers by month' and a subtitle 'To protect personal identifiable information, small base sizes between 1-4 have been replaced with 0*.' This subtitle is outlined in a red box. To the right of the canvas the 'Filters' and 'Vizualisations' panels are open. Under 'Vizualisations' the option for a Subtitle is toggled to 'on' and this is outlined in a red box. ](../images/value-image9.png)  
  
Check and test the values against the raw data and the SDC Protocol should now be implemented within your chart. To reduce overhead, you can duplicate this chart and amend the measures/values where needed if the SDC Protocol is needed to be added to multiple charts.  
  
    
## Power BI Standards




  


[link 1]: https://www.nhsbsa.nhs.uk/sites/default/files/2020-10/nhsbsa-sdc-protocol.pdf