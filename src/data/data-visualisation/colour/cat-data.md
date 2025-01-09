---
layout: article
title: "Categorical Data"
description: "Colours used for categorical data at the NHSBSA"
status: REVIEW
tags: dv-colour
order: 3
review:
    last_reviewed_date: 2024-12-20
    review_cycle: ANNUAL
---
{% from "colorCard/macro.njk" import colorCard %}
{% from "colorBlock/macro.njk" import colorBlock %}
## Categorical Data  
  
Categorical data can be divided into groups or categories using names or labels.  
It’s best practice to use no more than 4 categories, labels, or series in a chart. Using more can make a chart too cluttered. If suitable, combine categories or focus the chart on a single item.   
  
You can find out more about colour palette on the [Civil Service categorical data colour palette][cat 1] page.
  
For categorical data, you can use the following colours taken from the [NHS identity guidelines][cat 2]:  

|   Colour         |  Example   | Tint  |   Hex Code    |
|------------------|------------|-------|---------------|
|   NHS Blue       |    {{ colorBlock({
    "color": "#005EB8",
    "blockSize": "m"})
}} | 100% |   #005EB8   |
|   NHS Aqua Green | {{ colorBlock({
    "color": "#00A499",
    "blockSize": "m"})
}}  | 100% |   #00A499   |
|   NHS Pink       | {{ colorBlock({
    "color": "#AE2573",
    "blockSize": "m"})
}}  | 100% |   #AE2573   |
|   NHS Orange     |    {{ colorBlock({
    "color": "#ED8B00",
    "blockSize": "m"})
}} | 100% |   #ED8B00   |
|   NHS Green      |    {{ colorBlock({
    "color": "#009639",
    "blockSize": "m"})
}} | 100% |   #009639   |
|   NHS Light Blue |    {{ colorBlock({
    "color": "#41B6E6",
    "blockSize": "m"})
}} | 100% |   #41B6E6   |
|   NHS Blue       | {{ colorBlock({
    "color": "#80AFDC",
    "blockSize": "m"})
}}  | 50%  |   #80AFDC   |
|   NHS Aqua Green | {{ colorBlock({
    "color": "#80D2CC",
    "blockSize": "m"})
}}  | 50%  |   #80D2CC   |
|   NHS Pink       |    {{ colorBlock({
    "color": "#D792B9",
    "blockSize": "m"})
}} | 50%  |   #D792B9   |
|   NHS Orange     | {{ colorBlock({
    "color": "#F6C580",
    "blockSize": "m"})
}}  | 50%  |   #F6C580   |
|   NHS Green      | {{ colorBlock({
    "color": "#80CB9C",
    "blockSize": "m"})
}}  | 50%  |   #80CB9C   |
|   NHS Light Blue | {{ colorBlock({
    "color": "#A0DBF3",
    "blockSize": "m"})
}}  | 50%  |   #A0DBF3   |  


After using the first 6 colours on a chart, you can use these again with a 50% tint. These should have enough contrast against the background. 
Remember that some colours have specific meanings, like blue for links. It’s important to choose the right colour.  
  
You can find out more on the [NHS Identity Guidelines page on using tints.][cat 3]

We recommend using our suggested colour palette in the given order to make sure adjacent colours have enough contrast. It'll also make the colours suitable for users with a range of colour vision deficiencies (colour blindness).

You can find outmore about colour palette on the [Civil Service categorical data colour palette page.][cat 1]  
  
The following can all be used at 100%, 80%, 60%, 40% and 20% tints, but only if necessary and appropriate for the visualisation: 

- NHS Blue  
![NHS Blue gradient example](../images/blue-gradient.png)

- NHS Aqua Green  
![NHS Aqua Green gradient example](../images/aqua-gradient.png)

- NHS Pink  
![NHS Pink gradient gradient example](../images/pink-gradient.png)

- NHS Orange  
![NHS Orange gradient example](../images/orange-gradient.png)

- NHS Green  
![NHS Green gradient example](../images/green-gradient.png)

- NHS Light Blue  
![NHS Light Blue gradient example](../images/light-blue-gradient.png)

### Simple charts  

NHS Blue (#005EB8) is the main colour used across our products, so it’s the first colour in the palette.   
Where there are no specific groups to highlight, use a single colour. Do this for single line charts and all bars in vertical and horizontal bar charts.

You can find outmore about colour palette on the [Civil Service categorical data colour palette page.][cat 1]  
  
### Line charts  
  
As with stacked and clustered bar charts, line charts should have no more than 4 series.  
Choosing colours for line charts with more than 2 series is difficult because it’s not possible to have a palette with more than 2 colours that each have at least a 3 to 1 contrast ratio with: 

- the background 
- all other colours in the palette 

Lines do not always stay in the same order so It’s not possible that adjacent colours will always have a 3 to 1 contrast ratio. Use line charts with more than 2 series only when they are essential to the understanding of the data. This will help you meet Web Content Accessibility Guidelines (WCAG) [success criterion 1.4.11][https://www.w3.org/TR/WCAG22/#non-text-contrast].

You can make multiple categories clearer by labelling lines or using textures or shapes for data points. More guidance can be found on the [Civil Service categorical data colour palette page.][cat 1]  

### Pie charts  
  
Where possible, pie charts should use different shades of one colour. This makes it easier for users with colour visions deficiency to tell the segments apart. 
  
You can find out more on the [Civil Service page for Data visualisation: colours][cat 6] and the [About Colour Blindness page][cat 7] from Colour Blind Awareness. 

### RAG (Red/Amber/Green) status  
  
Colour should not be the only method of conveying information. If you’re using red for ‘warning’ or ‘caution’, and green for ‘approval’ or ‘correctness’, consider adding a symbol. This will help users with colour vision deficiencies understand the data.   
  
To convey meaning you can use additional encoding methods such as symbols like X,!, ✓.  
You can also use positions where each colour appears in a slightly different location, like traffic lights with red at the top, amber below and green at the bottom.  

 ![Examples of using RAG status with symbols](../images/RAG-symbols.png)

To find out more, visit the [Visualising Data page on 5 ways to design for red-green colour blindness][cat 8].

### Office for National Statistics (ONS) accessibility tested colours  
  
The following colours have been tested for accessibility and should be used with the other encoding methods. This is to make sure users with accessibility needs have an alternative option:  

{{ colorCard({
    "heading": "Leaf green",
    "css": "ons-color-leaf-green",
    "color": "#0F8243",
    "blockSize": "l"})
}}

{{ colorCard({
    "heading": "Neon yellow",
    "css": "ons-color-neon-yellow",
    "color": "#F0F762",
    "blockSize": "l"})
}}

{{ colorCard({
    "heading": "Sun yellow",
    "css": "ons-color-sun-yellow",
    "color": "#FBC900",
    "blockSize": "l"})
}}

{{ colorCard({
    "heading": "Jaffa orange",
    "css": "ons-color-jaffa-orange",
    "color": "#FA6401",
    "blockSize": "l"})
}}

{{ colorCard({
    "heading": "Ruby red",
    "css": "ons-color-ruby-red",
    "color": "#D0021B",
    "blockSize": "l"})
}}

For more information visit the [ONS service manual colour page][cat 9].

[cat 1]: https://analysisfunction.civilservice.gov.uk/policy-store/data-visualisation-colours-in-charts/#section-5
[cat 2]: https://www.england.nhs.uk/nhsidentity/identity-guidelines/colours/#:~:text=use%20of%20highlights.-,Using%20tints,-Tints%20are%20percentage
[cat 3]: https://www.england.nhs.uk/nhsidentity/identity-guidelines/colours/#heading7
[cat 6]: https://analysisfunction.civilservice.gov.uk/policy-store/data-visualisation-colours-in-charts/
[cat 7]: https://www.colourblindawareness.org/colour-blindness/
[cat 8]: https://visualisingdata.com/2019/08/five-ways-to-design-for-red-green-colour-blindness/
[cat 9]: https://service-manual.ons.gov.uk/design-system/foundations/colours