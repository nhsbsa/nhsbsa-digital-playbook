---
layout: article
title: "Pie and doughnut charts"
description: "Guidance for using pie and doughnut charts at the NHSBSA"
status: FINAL
tags: data-viz-home
order: 100
review:
    last_reviewed_date: 2024-12-20
    review_cycle: ANNUAL
---
## Pie charts  
  
Pie charts are used to show part-to-whole relationships. Bar charts are typically used for this too.  
  
Pie charts are sometimes criticised for focusing on the relative sizes of the pieces to one another, but not clearly highlighting changes, as a whole, when compared to other pie charts.  
  
A pie chart may have 3 slices of different sizes. Each slice is a different colour, with the largest slice using NHS Blue (#005EB8). The actual value and percentage value should be labelled directly on or beside the appropriate slices.  

![example pie chart](../pie_1.png)
  
For further information, you can [read a blog about pie charts on the Office for National Statistics (ONS) Digital website.][pie 1]
  
## Doughnut charts  
  
A doughnut chart is a pie chart but with the area of the centre cut out.  
Doughnut charts are used to show the proportions of categorical data, with the size of each piece representing the proportion of each category.  
  
A doughnut chart de-emphasises the use of area, to make the viewer focus more on the changes in overall values.  
  
You are focused on reading the length of the arcs, rather than comparing the proportions between slices.  
  
Also, doughnut charts are more space-efficient than pie charts because the blank space inside a doughnut chart can be used to display information inside it.  

A doughnut chart may have 3 sections of different sizes. Each section is a different colour, with the largest section using NHS Blue (#005EB8). The actual value and percentage value should be labelled directly on or beside the appropriate sections.  

![example doughnut chart](../doughnut_1.png)  
  
For further information, you can [read a blog about doughnut charts on the Data Visualisation Catalogue website.][pie 2]

## Best practice for pie and doughnut charts  

If using pie or doughnut charts, make sure you:

- **only use them when the categories form part of a whole**, if the categories do not add up to a distinct ‘whole’, use a different chart
- **do not use them when two or more categories are a similar size**- in this situation, it's better to use a bar chart
- **do not use pie or doughnut charts with more than 4 categories**- if your chart has more than 4 categories, consider combining some of the categories or using a different type of chart
- **rank categories by size with the first at the 12 o’clock position**- ranking the categories in this way makes the chart easier to interpret, making it easier to identify the dominant categories
- **label the categories categories directly**- legends and keys rely on users matching labels to categories using colour alone, which fails [WCAG accessibility success criterion 1.4.1 Use of Colour][pie 4].  
  
Pie and doughnut charts need to be used appropriately. To do this, make sure they:

- **are well-formatted**- no 3D, exploding slices, leader lines, or legends
- **display nominal variables**- ordinal variables do not belong in a pie chart
- **contain positive numbers**- a mix of positive and negative numbers inside the same pie or doughnut chart does not make any sense
- **display a single point in time**- patterns over time belong in a time series graph, such as a slope chart, line chart, or dot plot
- **are displayed individually** and only show one pie or doughnut chart at a time- no small multiples pies or doughnuts, as comparisons across these are time-consuming
- **are the most appropriate data visualisation**- there are a number of alternatives, such as bar or stacked bar and line charts

You can [read a checklist for creating accessible charts on the Government Analysis Function website.][pie 5]  
  
For further information, you can [read a blog about pie chart and doughnut chart guidance on the Depict Data Studio website.][pie 3]

[pie 1]: https://digitalblog.ons.gov.uk/2017/02/28/the-humble-pie-chart-part2/
[pie 2]: https://datavizcatalogue.com/methods/donut_chart.html
[pie 3]: https://depictdatastudio.com/when-pie-charts-are-okay-seriously-guidelines-for-using-pie-and-donut-charts/
[pie 4]: https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html
[Pie 5]: https://analysisfunction.civilservice.gov.uk/policy-store/charts-a-checklist