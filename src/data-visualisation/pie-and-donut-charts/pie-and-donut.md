---
layout: article
title: "Pie and donut charts"
description: "Guidance for using pie and donut charts at the NHSBSA"
status: DRAFT
tags: [data-viz, data-viz-donut, data-viz-home]
order:
    data-viz: 2
    data-viz-donut: 1
    data-viz-home: 9
---
## Pie charts  
  
Pie charts are used to show part-to-whole relationships. Typically, bar charts and pie charts are used for this.  
  
Pie charts are sometimes criticised for focusing on the relative sizes of the pieces to one another, but not clearly highlighting changes as a whole when compared to other pie charts.  
  
::: details Source

[source][pie 1]

:::  
  
## Donut charts  
  
A donut chart is essentially a pie chart but with the area of the centre cut out.  
Donut charts are used to show the proportions of categorical data, with the size of each piece representing the proportion of each category.  
  
A donut chart de-emphasises the use of area, to make the viewer focus more on the changes in overall values.  
  
You are focused on reading the length of the arcs, rather than comparing the proportions between slices.  
  
Also, donut charts are more space-efficient than pie charts because the blank space inside a donut chart can be used to display information inside it.  
  
::: details Source

[Donut charts][pie 2]

:::  
  
## Best Practice  
  
ONS have some best practice guidance on pie charts, and [a check list to follow](https://analysisfunction.civilservice.gov.uk/policy-store/charts-a-checklist).  
  
- **Only use pie charts when the categories form part of a whole.** If the categories do not add up to a distinct ‘whole’, use a different chart
- **Do not use pie charts when two or more categories are a similar size.** In this situation it is better to use a bar chart
- **Do not use pie charts with more than 5 categories.** If your chart has more than 5 categories, consider combining some of the categories or using a different type of chart
- **Rank categories by size with the first at the 12 o’clock position.** Ranking the categories in this way makes the chart easier to interpret. It also makes it easier to identify the dominant categories
- **Label pie chart categories directly.** Legends and keys rely on users matching labels to categories using colour alone. This fails [WCAG accessibility success criterion 1.4.1 Use of Colour][pie 4].  
  
Pie charts need to be used appropriately. To do this, ensure they:
- **are well-formatted.** No 3D, exploding slices, leader lines, or legends
- **display nominal variables.** Ordinal variables don’t belong in a pie chart
- **contain positive numbers.** A mix of positive and negative numbers inside the same pie chart, doesn’t make any sense
- **display a single point in time.** Patterns over time belong in a time series graph, like a slope chart, line chart, or dot plot
- **are displayed individually.** Only show one pie chart at a time. No small multiples pies. Comparisons across multiple pies are time-consuming
- **ensure a pie chart is the most appropriate data visualisation.** There are a number of alternatives, such as bar/stacked bar and line charts

::: details Source

[When pie charts are okay][pie 3]

::: 

[pie 1]: https://style.ons.gov.uk/data-visualisation/part-to-whole/
[pie 2]: https://datavizcatalogue.com/methods/donut_chart.html
[pie 3]: https://depictdatastudio.com/when-pie-charts-are-okay-seriously-guidelines-for-using-pie-and-donut-charts/
[pie 4]: https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html