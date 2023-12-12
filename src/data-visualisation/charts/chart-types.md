---
layout: article
title: "Chart types"
description: "Standards and guidance for choosing appropriate chart types"
status: DRAFT
tags: [data-viz, data-viz-charts, data-viz-home]
order:
    data-viz: 2
    data-viz-charts: 1
    data-viz-home: 1
related: 
    tag: data-viz-charts
---
## Choosing an appropriate chart type  
  
Choosing an appropriate chart type is key in ensuring the end user is able to understand the data shown quickly and as efficiently as possible. The choice of chart type is often dependant on the purpose of what you need the chart to show.  
  
In this section we will go through [four categories of chart types][chart 1]: comparison, composition, relationship and distribution charts.  
  
The [four main questions][chart 2] to help you decide which chart type to use are:  
- Do you want to display **composition** of something?
- Do you want to **compare** values or show differences over time?
- Do you want to better understand the **relationship** between two or more variables?
- Do you want to show the **distribution** of your data?  
  
![Green rectangle with the words 'What would you like to show?' in white text inside it. The words 'comparison', 'distribution', 'composition', and 'relationship' are in black text on the outside of each of the four sides (starting at the top andworking clockwise). Out from each of these words are tree diagrams with different chart type names and examples. ](../images/chart-tree.png)  
  
::: details Source

[Qlik: How to choose the right chart][chart 3]

:::  
  
  
### Comparison visualisations  
  
Comparison visualisations are used to compare two or more variables, or values over a period of time.  
  
Some common comparison visualisations used are:
- Bar charts
- Line charts
- Sparklines  
  
Stay away from attempting to compare more than four categories. Using four categories is best practice for data visualisation. More than four series can make a chart too cluttered. Consider merging multiple categories or focussing the chart on a single entity if suitable.

::: details Source

[Colours in charts][chart 4]

:::  
  
![The 'comparison' branches of the tree diagram from the 'Choosing an appropriate chart type' section. 'Comparison' is written at the base with a line splitting into two part. The left line is labelled 'among items' and the right line is labelled 'over time'. From the 'among items' line, the tree diagram forks again, with the left branch labelled 'two variables per item' and showing an example of a variable width chart. The right branch is labelled 'one variable per item' and this then splits into a left branch labelled 'many categories' with an example of a table or tables with embedded charts. the right branch is labelled 'few categories' and splita sgain to show two examples; one of a bar chart horizontal and one of a bar chart vertical. The 'over time' branch splits into 'many periods' and 'few periods'. The left 'Many periods' branch splits again into 'cyclical data', with an example of a 'circular area chart' and 'non-cyclical data', with an example of a 'line chart'. The 'few periods' branch also splits into two- 'single or few categories' with an example of 'bar chart vertical' and 'many categories' with an example of 'line chart'.](../images/comparison.png)  
  
  
**Line charts**  
  
If you’re using a line chart:
- label the lines instead of using a legend
- for a singular line (including sparklines), use an NHS Blue (#005EB8) colour
- for more than one variable, use the [Colour guidance](../../colour/) 
- for multiple lines, where you need to pull focus onto one of the lines, use NHS Blue (#005EB8) against a light grey NHS Grey 3 (#AEB7BD)  
  
**Bar charts**  
  
If you’re using a bar chart:
- make sure the data is sorted or ordered appropriately, for example, from A to Z, high to low etc
- leave small gaps between the bars
- try to use NHS Blue (#005EB8) for bars which do not need groupings, otherwise use the Colour guidance for multiple groupings across bars
- ensure the [NHS Colour guidance][chart 8] is used to ensure that the order of colours used are distinct
- for multiple bars, where you need to pull focus onto one of the bars, use NHS Blue (#005EB8) against a light grey NHS Grey 3 (#AEB7BD)  
  
If you’re using a **clustered** bar chart:
- make sure the order and orientation of bar chart legends match how categories are presented and state this above the chart, or label the bars in the first cluster directly
- leave small gaps between the bars within clusters
- give all bars an NHS Blue (#005EB8) outline  
    
  

### Composition visualisations  
  
Composition visualisations are used for part-to-whole comparisons. For example, percentage figures out of 100%. These charts can be changing over time, or static in which case the timeframe the data relates to is necessary to mention.  
   
Some common composition visualisations used are:
- Stacked bar charts
- Pie charts
- Area charts  
    
![The 'Composition' branches of the tree diagram from the 'Choosing an appropriate chart type' section. 'Composition' is written at the base with a line splitting into two parts. The left line is labelled 'Changing over time' and the right line is labelled 'Static'. From the 'Changing over time' line, the tree diagram forks again, with the left branch labelled 'Few periods' and the right branch is labelled 'Many periods'. The left branch splits into 'Only relative differences matter' with an example of a stacked 100% bar chart, and 'Relative and absolute differences matter' with an example of a stacked bar chart. The right 'Many periods' branch also splits into 'Only relative differences matter', but with an example of a stacked 100% area chart, and 'Relative and absolute differences matter' with an example of 'Stacked area chart'. The 'Static' branch split into four: 'Simple share of total', with the example 'Pie chart'; 'Accumulation or subtraction to total', with the example 'Waterfall chart'; 'Components of components', with the example 'Stacked 100% bar chart with subcomponents'; and 'Accumulation to total and absolute difference matters', with an example of 'Tree map'.](../images/composition.png)    

  
**Stacked bar charts**  

If you’re using a stacked bar chart:
- make sure the order and orientation of bar chart legends match how categories are presented and state this above the chart
- ensure the [NHS Colour guidance][chart 8] is used to ensure that the order of colours used are distinct
- avoid stacked bar charts when categories have negative values. When negative values are used in stacked bar charts they can be difficult to understand  
  
::: details Source

[Accessible charts: a checklist of the basics][chart 5]

:::  
  
**Pie charts**  
  
If you’re using a pie chart:
- pie charts should be used to show part-to-whole comparisons
- ensure the [NHS Colour guidance][chart 8] is used to ensure that the order of colours used are distinct
- segments should be directly labelled
- refer to the [Pie and donut charts guidance](../../pie-and-donut-charts/pie-and-donut/) for further details  
  
::: details Source

[Accessible charts: a checklist of the basics][chart 6]

:::  
  
  
### Distribution visualisations  
  
Distribution visualisations are used to visualise the distribution of data, useful especially for ordered data ranging from lowest to highest. The distribution is analysed and used for trend analysis to gain meaningful insights.  
  
Some common distribution visualisations used are:
- scatter charts
- histogram  
  
![The 'Distribution' branches of the tree diagram from the 'Choosing an appropriate chart type' section. 'Distribution' is written at the base with a line splitting into two parts. The left line is labelled 'Single variable' and the right line is labelled 'Two variables'. The left branch splits into 'Few data points' on the left, with an example of 'Bar histogram', and 'Many data points' on the right, with an example of 'Line histogram'. The 'Two variables' branch goes directly to an example of 'Scatter plot'.](../images/distribution.png)  
    

**Scatter charts**  
  
If you’re using a scatter chart:
- use four or less categories for comparison
- use [visual encoding](../../encoding/viz-encoding/), such as symbols or size where necessary, and clearly spell out what has been used to the user
- ensure a legend is available  
  
  
### Relationship visualisations  
  
Relationship visualisations are used to highlight a relationship or correlation between variables. Multiple variables and [visual encoding](../../encoding/viz-encoding/) practices can be used to add additional details, such as symbols on a scatter chart to demonstrate multiple groupings.  
  
Some common relationship visualisations used are:
- scatter charts
- cluster diagrams  
  
![The 'Relationship' branches of the tree diagram from the 'Choosing an appropriate chart type' section. 'Relationship' is written at the base with a line splitting into two parts. The left line is labelled 'Two varibales' and shows an example of 'Scatter plot'. The right line is labelled 'Three variables' and shows an example of 'Scatter plot bubble size'.](../images/relationship.png)  
  
  
### Geospatial visualisations  
  
Geospatial visualisations demonstrate distribution across a set parameter, for example, a map.  
  
Some common geospatial visualisations used are:
- geographic heatmap
- choropleth map
- tile map  
  
  
### Infographics  
  
Infographics, although not a specific type of visualisation itself, are often used to tell a story, and can used any visualisation mentioned. The aim of an infographic is to quickly pull focus to a user. Infographics, although a type of data visualisation are not always accurate and can be sometimes simplified for the purpose of an infographic therefore it is always important to be mindful of any assumptions or biases infographics can cause.  
  
If you’re using an infographic:
- start with a story
- ensure your infographic is not misleading
- keep the infographic clear and concise
- do not overwhelm the user with too many infographics
- use colour to denote meaning, for example, NHS blue, or green for the environment
- if statistics are used, consider the accuracy of decimal places needed for the user  
  
::: details Source

[Best practices for designing infographics][chart 7]

:::  
  
    
## Chart examples  
  
Some examples of charts available:  
  
![Six sections stacked on top of eachother, from top to bottom: 'Comparison', 'Correlation', 'Part-to-whole and hierarchical', 'data over time (temporal)', 'Distribution', 'Geospatial and other'. Under each heading is a series of square boxes, with each box containing a small visual depiction of a different chart type that fits within that category. These are listed later in this section.](../images/chart-eg.png)  

The charts mentioned in the image above are listed below for clarity.  

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
- donut chart
- semi-circle donut chart
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
  
  
## Choosing between a table or chart  
  
Please refer to the [Tables guidance](../../tables/table-or-chart/) on choosing between a table or a chart, table alternatives and best practice.  
  
Some key questions to ask yourself when deciding which to use are:
- Do individual values need to be looked up?
- Do individual values need to be compared?
- Are precise values needed?
- Are different units of measurements to be used?
- Is the trend or shape of the values important?
- Does the relationship between multiple values need to be shown?  
  
If the answers to the first four questions are 'Yes', a table might be most suitable.




  
  


[chart 1]: https://data-flair.training/blogs/qlikview-visualization/
[chart 2]: https://uxplanet.org/data-heavy-applications-how-to-design-perfect-charts-c0c893fef6de
[chart 3]: https://community.qlik.com/t5/Official-Support-Articles/How-to-Choose-the-Right-Chart/ta-p/1717241
[chart 4]: https://analysisfunction.civilservice.gov.uk/policy-store/data-visualisation-colours-in-charts/#section-5
[chart 5]: https://analysisfunction.civilservice.gov.uk/policy-store/charts-a-checklist/
[chart 6]: https://analysisfunction.civilservice.gov.uk/policy-store/charts-a-checklist/
[chart 7]: https://bootcamp.uxdesign.cc/best-practices-for-designing-infographics-16d622ca8e54
[chart 8]: https://service-manual.nhs.uk/design-system/styles/colour