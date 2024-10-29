---
layout: article
title: "Chart types"
description: "Standards and guidance for choosing appropriate chart types"
status: REVIEW
tags: data-viz-home
order: 10
---
## Choosing an appropriate chart type  
  
Choosing an appropriate chart type is key in ensuring the end user is able to understand the data shown quickly, and as efficiently as possible. The choice of chart type is often dependant on the purpose of what you need the chart to show.  
  
Please refer to the [tables guidance](../../tables/table-or-chart/) on choosing between a table or a chart, table alternatives and best practice.  

This section will cover [four categories of chart types][chart 1]: comparison, composition, relationship and distribution charts.  
  
The [four main questions][chart 2] to help you decide which chart type to use are:

- do you want to **compare** values or show differences over time?
- do you want to display **composition** of something?
- do you want to better understand the **relationship** between two or more variables?
- do you want to show the **distribution** of your data?  
  
::: details Source - choosing the right chart

[Qlik: How to choose the right chart][chart 3]

:::  

### Comparison visualisations  
  
Comparison visualisations are used to compare two or more variables, or values over a period of time.  

#### Examples of comparison visualisations (and when they are appropriate)

Among items:

- variable width chart (2 variables per item)
- table or tables with embedded charts (one variable per item, many categories)
- bar chart horizontal (one variable per item, few categories)
- bar chart vertical (one variable per item, few categories)

Over time:

- circular area chart (many periods, cyclical data)
- line chart (many periods, non-cyclical data)
- bar chart vertical (few periods, single or few categories)
- line chart (few periods, many categories)  
  
Stay away from attempting to compare more than four categories. Using four categories is best practice for data visualisation. More than four categories can make a chart too cluttered. Consider merging multiple categories or focussing the chart on a single entity if suitable.

::: details Source - chart colours

[Colours in charts][chart 4]

:::  
  
![Examples of comparison visualisations](../images/comparison.png)  

##### Line charts
  
If you’re using a line chart:

- label the lines instead of using a legend
- for a singular line (including sparklines), use an NHS Blue (#005EB8) colour
- for more than one variable, use the [colour guidance](../../colour/index)
- for multiple lines, where you need to pull focus onto one of the lines, use NHS Blue (#005EB8) against a light grey NHS Grey 3 (#AEB7BD)  
  
##### Bar charts
  
If you’re using a bar chart:

- make sure the data is sorted or ordered appropriately, for example, from A to Z, high to low etc
- leave small gaps between the bars
- try to use NHS Blue (#005EB8) for bars which do not need groupings, otherwise use the Colour guidance for multiple groupings across bars
- use the [NHS Colour guidance][chart 8] to ensure that the order of colours used are distinct
- for multiple bars, where you need to pull focus onto one of the bars, use NHS Blue (#005EB8) against a light grey NHS Grey 3 (#AEB7BD)  
  
If you’re using a **clustered** bar chart:

- make sure the order and orientation of bar chart legends match how categories are presented, and state this above the chart, or label the bars in the first cluster directly.
- leave small gaps between the bars within clusters.
- give all bars an NHS Blue (#005EB8) outline  .
  
If you're using a **stacked** bar chart:  

- make sure the order and orientation of bar chart legends match how categories are presented, and state this above the chart.

### Composition visualisations  
  
Composition visualisations are used for part-to-whole comparisons. For example, percentage figures out of 100%. These charts can be changing over time, or static in which case the timeframe the data relates to is necessary to mention.  

#### Examples of composition visualisations (and when they are appropriate)

Changing over time:

- stacked 100% bar chart (few periods, only relative difference matters)
- stacked bar chart (few periods, relative and absolute differences matter)
- stacked 100% area chart (many periods, only relative differences matter)
- stacked area chart (many periods, relative and absolute differences matter)

Static:

- pie chart (simple share of total)
- waterfall chart (accumulation or subtraction to total)
- stacked 100% bar chart with subcomponents (components of components)
- tree map (accumulation to total and absolute difference matters)

![Examples of composition visualisations](../images/composition.png)

##### Stacked bar charts

If you’re using a stacked bar chart:

- make sure the order and orientation of bar chart legends match how categories are presented and state this above the chart
- ensure the [NHS Colour guidance][chart 8] is used to ensure that the order of colours used are distinct
- avoid stacked bar charts when categories have negative values. When negative values are used in stacked bar charts they can be difficult to understand  
  
::: details Source - chart accessibility

[Accessible charts: a checklist of the basics][chart 5]

:::  
  
##### Pie charts
  
If you’re using a pie chart:

- pie charts should be used to show part-to-whole comparisons
- ensure the [NHS Colour guidance][chart 8] is used to ensure that the order of colours used are distinct
- segments should be directly labelled
- refer to the [Pie and doughnut charts guidance](../../pie-and-doughnut-charts/pie-and-doughnut/) for further details  
  
::: details Source - chart accessibility

[Accessible charts: a checklist of the basics][chart 5]

:::  

### Distribution visualisations  
  
Distribution visualisations are used to visualise the distribution of data, useful especially for ordered data ranging from lowest to highest. The distribution is analysed and used for trend analysis to gain meaningful insights.  
  
#### Examples of distribution visualisations (and when they are appropriate)  
  
- bar histogram (single variable, few data points)
- line histogram (single variable, many data points)
- scatter plot (2 variables)

![Examples of the distribution visualisations](../images/distribution.png)  

##### Scatter charts
  
If you’re using a scatter chart:

- use four or less categories for comparison
- use [visual encoding](../../encoding/viz-encoding/), such as symbols or size where necessary, and clearly spell out what has been used to the user
- ensure a legend is available  
  
### Relationship visualisations  
  
Relationship visualisations are used to highlight a relationship or correlation between variables. Multiple variables and [visual encoding](../../encoding/viz-encoding/) practices can be used to add additional details, such as symbols on a scatter chart to demonstrate multiple groupings.  
  
#### Examples of relationship visualisations (and when they are appropriate)

- scatter plot (2 variables)
- scatter plot bubble size (3 variables)
  
![Examples of the relationship visualisations](../images/relationship.png)  

### Geospatial visualisations  
  
Geospatial visualisations demonstrate distribution across a set parameter, for example, a map.  
  
Some common geospatial visualisations used are:

- geographic heatmap
- choropleth map
- tile map  
  
### Infographics
  
Infographics, although not a specific type of visualisation itself, are often used to tell a story, and can used any visualisation method. The aim of an infographic is to quickly pull focus to a user. Infographics, although a type of data visualisation are not always accurate and can be sometimes simplified for the purpose of an infographic therefore it's always important to be mindful of any assumptions or biases infographics can cause.  
  
If you’re using an infographic:

- start with a story
- ensure your infographic is not misleading
- keep the infographic clear and concise
- do not overwhelm the user with too many infographics
- use colour to denote meaning, for example, NHS blue, or green for the environment
- if statistics are used, consider the accuracy of decimal places needed for the user  
  
::: details Source - infographics best practice

[Best practices for designing infographics][chart 7]

:::  

## Chart examples  
  
Further examples of charts available:  

**Comparison**

- bar chart
- column chart
- grouped bar/column chart
- lollipop chart
- bullet chart
- dot plot
- dumbbell
- pictogram
- icon chart
- range chart
- radial bar chart
- parallel coordinates
- radar chart
- nightingale chart
- waterfall chart
- matrix chart
- small multiples
- word cloud
- slop chart
- table chart
- categorical scatter plot
- quadrant chart  

**Correlation**

- heatmap
- bubble chart
- scatter plot
- connected scatter plot
- hexagonal binning
- contour plot  
  
**Part-to-whole and hierarchical**
  
- stacked bar/column chart
- diverging bar chart
- population pyramid
- icon array
- waffle chart
- pie chart
- doughnut chart
- semi-circle doughnut chart
- marimekko chart
- treemap
- circular treemap
- convex treemap
- dendrogram
- venn diagram
- euler diagram
- circular gauge
- sunburst chart
- funnel and pyramid chart  
  
**Data over time (temporal)**
  
- area chart
- stacked area chart
- stream graph
- bump chart
- bump area chart
- line chart
- spline chart
- step line chart
- candelstick chart
- gantt chart
- barcode chart
- OHLC chart  
  
**Distribution**
  
- density plot
- ridgeline plot
- horizon chart
- histogram
- radial histogram
- strip plot
- jitter plot
- one-dimensional heatmap
- beeswarm chart
- box chart
- violin plot  
  
**Geospatial and other**
  
- geographic heatmap
- choropleth map
- tile map
- chord diagram
- arc diagram
- sankey diagram
- network diagram
- flowchart  

![Examples of the visualisations](../images/chart-eg.png)  

[chart 1]: https://data-flair.training/blogs/qlikview-visualization/
[chart 2]: https://uxplanet.org/data-heavy-applications-how-to-design-perfect-charts-c0c893fef6de
[chart 3]: https://community.qlik.com/t5/Official-Support-Articles/How-to-Choose-the-Right-Chart/ta-p/1717241
[chart 4]: https://analysisfunction.civilservice.gov.uk/policy-store/data-visualisation-colours-in-charts/#section-5
[chart 5]: https://analysisfunction.civilservice.gov.uk/policy-store/charts-a-checklist/
[chart 7]: https://bootcamp.uxdesign.cc/best-practices-for-designing-infographics-16d622ca8e54
[chart 8]: https://service-manual.nhs.uk/design-system/styles/colour