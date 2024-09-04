---
layout: article
title: "Categorical Data"
description: "Colours used for categorical data at the NHSBSA"
status: REVIEW
tags: dv-colour
order: 3
---
## Categorical Data  
  
Categorical data can be divided into groups or categories by using names or labels.  
Using four or fewer categories or series is best practice for data visualisation. More than four series can make a chart too cluttered. Consider merging multiple categories or focusing the chart on a single entity if suitable.

::: details Source - colour palette

[Categorical data colour palette][cat 1]

:::
  
For categorical data, the following colours taken from the NHS identity guidelines can be used:  

|       Colour       |   Tint   |   Hex Code    |
|--------------------|----------|---------------|
|   NHS Blue         |  100%    |   #005EB8     |
|   NHS Aqua Green   |  100%    |   #00A499     |
|   NHS Pink         |  100%    |   #AE2573     |
|   NHS Orange       |  100%    |   #ED8B00     |
|   NHS Green        |  100%    |   #009639     |
|   NHS Light Blue   |  100%    |   #41B6E6     |
|   NHS Blue         |  50%     |   #80AFDC     |
|   NHS Aqua Green   |  50%     |   #80D2CC     |
|   NHS Pink         |  50%     |   #D792B9     |
|   NHS Orange       |  50%     |   #F6C580     |
|   NHS Green        |  50%     |   #80CB9C     |
|   NHS Light Blue   |  50%     |   #A0DBF3     |  

Bear in mind that certain colours have certain meanings, and that use of colour is important.  
Whilst over 4 categories, series or use of colours is not recommended, you will notice that after the first 6 colours, the colours are repeated at a 50% tint, still distinguishable to the user, and not adding in additional colours.

::: details Source - NHS identity

[NHS Identity guidelines; Using tints][cat 2]

:::

We recommend using our suggested colour palette in the order given in the list to make sure adjacent colours have enough contrast. It will also mean the colours will work for different types of colour blindness and in greyscale.

::: details Source - colour palette

[Categorical data colour palette][cat 1]  

:::
  
NHS Blue, NHS Aqua Green, NHS Pink, NHS Orange, NHS Green and NHS Light Blue can all be used at tints 100%, 80%, 60%, 40% and 20% if necessary and appropriate within a visualisation.  

 ![NHS Blue gradient example](../images/blue-gradient.png)   ![NHS Aqua Green gradient example](../images/aqua-gradient.png)    ![NHS Pink gradient gradient example](../images/pink-gradient.png)  
 ![NHS Orange gradient example](../images/orange-gradient.png) ![NHS Green gradient example](../images/green-gradient.png) ![NHS Light Blue gradient example](../images/light-blue-gradient.png)

### Simple charts  

Use a single colour for a single line chart, and all bars in vertical column charts and horizontal bar charts where there are no groups to highlight. NHS Blue (#005EB8) is the primary colour to be used across our products, and therefore the first colour in the palette.

::: details Source - colour palette

[Categorical data colour palette][cat 1]

:::  
  
### Line charts  
  
As with stacked and clustered bar charts, we advise that line charts should have no more than four series.  
It's difficult to choose colours for line charts with more than two series. This is because it's not possible to have a chart colour palette of more than two colours where all colours have at least a 3 to 1 contrast ratio with:

- the background
- all other colours in the palette

Lines do not always stay in the same order. So, it's not possible to make sure adjacent colours always have at least a 3 to 1 contrast ratio.  
This means that it's not possible to provide a palette for line charts with more than two series that would meet the contrast ratio requirements. So, you should only use line charts with more than two series when they are essential to getting information across. This will help you meet accessibility success criterion 1.4.11.  
  
Guidance, such as labelling lines, using textures or shapes for data points may work to distinguish multiple categories. You can see more advice on the [Categorical data colour palette][cat 1] page.  

### Pie charts  
  
Pie charts should use different shades of one colour where possible, rather than different colours. This is so a colour-blind user can easily distinguish between the segments with the colours being close together.
  
::: details Source - colour blindness

[Data visualisation: Colours][cat 6]
[About Colour Blindness][cat 7]

:::

### RAG (Red/Amber/Green) status  
  
Colour should not be the only method of conveying information.  
If you are using red to signal 'warning' or 'caution', and green to signal 'approval' or 'correctness' consider addign a symbol to make sure colour-blind users can still understand the message.  
  
Use additional encoding methods such as symbols (X, !, ✓) or positions (each colour appearing in a slightly different location, often like traffic lights with red at the top, amber below and green at the bottom) to convey meaning.  

 ![Examples of using RAG status with symbols](../images/RAG-symbols.png)

::: details Source - RAG status

[Five ways to... Design for red-green colour-blindness][cat 8]
:::

### ONS accessibility tested colours  
  
The following colours have been accessibility tested and should be used in addition to encoding methods to ensure an alternative option is available for users with accessibility needs:  

- Leaf green: #0F8243 (CSS variable: --ons-color-leaf-green)
![ONS colour Leaf green](../images/ons-green.png)

- Neon yellow: #F0F762 (CSS variable: --ons-color-neon-yellow)  
![ONS colour Neon yellow](../images/ons-neon-yell.png)

- Sun yellow: #FBC900 (CSS variable: --ons-color-sun-yellow)  
![ONS colour Sun yellow](../images/ons-sun-yell.png)  

- Jaffa orange: #FA6401 (CSS variable: --ons-color-jaffa-orange)  
![ONS colour Jaffa orange](../images/ons-orange.png)  

- Red: #D0021B (CSS variable: --ons-color-ruby-red)  
![ONS colour Ruby red](../images/ons-red.png)

::: details Source - ONS service manual

[ONS Service manual][cat 9]

:::

[cat 1]: https://analysisfunction.civilservice.gov.uk/policy-store/data-visualisation-colours-in-charts/#section-5
[cat 2]: https://www.england.nhs.uk/nhsidentity/identity-guidelines/colours/#:~:text=use%20of%20highlights.-,Using%20tints,-Tints%20are%20percentage
[cat 6]: https://analysisfunction.civilservice.gov.uk/policy-store/data-visualisation-colours-in-charts/
[cat 7]: https://www.colourblindawareness.org/colour-blindness/
[cat 8]: https://visualisingdata.com/2019/08/five-ways-to-design-for-red-green-colour-blindness/
[cat 9]: https://service-manual.ons.gov.uk/design-system/foundations/colours