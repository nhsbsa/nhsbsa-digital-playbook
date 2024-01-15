---
layout: article
title: "Primary Colours"
description: "Overview of the main colours that should be used at the NHSBSA"
status: DRAFT
tags: dv-colour
order: 2
---
## Primary colours  

See the [NHS Identity Guidelines Colours pages][pc 1] for more detail.

### Background  
  
Use a plain background, NHS Grey 5 (#F0F4F5) should be used.  

#F0F4F5:  
  
![Rectangle of block colour in the shade #F0F4F5 NHS Grey 5, light grayish cyan](../images/hex-f0f4f5.png)  
  
NHS White (#FFFFFF) is used to make important information stand out and for alternating backgrounds, for example on the NHS website home page.  

![Horizontal rectangular block of the colour NHS White with the name 'NHS White' as well as the CMYK, RGB and Hex codes for the colour all written below in black text on a white background](../images/nhs-white.png)

### Border  
  
Each visualisation and filter should have a border of NHS Grey 4 (#D8DDE0).  
  
![Example dashboard page with each visualisation outlined in the shade #D8DDE0 NHS Grey 4, light greyish blue.](../images/border-example.png)  
  
### Tooltips  
  
Each tooltip should have a label text colour of NHS Pale Grey (#E8EDEE), a value text colour of NHS White (#FFFFFF), and a Background colour of NHS Dark Grey (#425563).  
  
![Screenshot showing the 'Customize theme' pane in Power BI. On the left is a list from top to bottom: 'Name and colors', 'Test', Visuals', 'Page', 'Filter pane'. 'Visuals' is highlighted to show it has been selected. To the right of this is a central column with another vertical list. From top to bottom the list is: 'Background', 'Border', 'Header', 'Tooltip'. 'Tooltip' is selected. To the right again is the third section of the pane, with the title 'Tooltip' and beneath this are three dropdown boxes for selecting a colour for each feature of the tooltip. The top dropdown is for selcting the 'Label text color'. The second is for 'Value text color'. The third, bottom, dropdown is for 'Background color'. The colours selected are #E8EDEE, #FFFFFF, and #425563 respectively.](../images/tooltip-customize.png)  
  
![Vertical bar graph with the title 'Croydon has the most monetary transactions out of all suppliers'. The bar representing 'Croydon' has a tooltip pointing to it, which has a background colour of #425563 NHS Dark Grey, labels reading 'Supplier' and 'Sum of transaction amount (£)' both in #E8EDEE NHS Pale Grey, and values of 'Croydon' and '£187,420.00' both in #FFFFFF NHS White.](../images/tooltip-croydon.png)

::: details Source - NHS digital service manual

[NHS digital service manual; Colour][pc 2]

:::

### Single variables  

NHS Blue (#005EB8) is the primary colour to be used across our products.  
  
![Horizontal rectangular block of the colour NHS Blue with the name 'NHS Blue' as well as the Pantone, CMYK, RGB, Hex, and RAL codes for the colour all written below in black text on a white background](../images/nhs-blue.png)

### Two variables  

NHS Blue (#005EB8) alongside NHS Light Blue (#41B6E6) is recommended for two variables.  
  
![Horizontal rectangular block of the colour NHS Blue with the name 'NHS Blue' as well as the Pantone, CMYK, RGB, Hex, and RAL codes for the colour all written below in black text on a white background](../images/nhs-blue.png)      ![Horizontal rectangular block of the colour NHS Light Blue with the name 'NHS Light Blue' as well as the Pantone, CMYK, RGB, and Hex codes for the colour all written below in black text on a white background](../images/nhs-light-blue.png)

### Related variables  

NHS Blue (#005EB8) alongside NHS Light Blue (#41B6E6) is recommended for two variables. For related variables such as comparing adults and children across two groupings, a 50% tint if recommended. Meaning for each grouping, the colour will be consistent, with two tints.  

If you need to use tints of this palette and have a small number of tints needed, use either 25% or 50%. We recommend 50%. If tints do not pass contrast ratio checks and the visualisation is suitable (i.e. not a line graph), a border should be created to further enhance the colour.  

Otherwise, tints of 80%, 60%, 40% and 20% can be used. Any % value is accepted as long as it is visible, clear and accessible.  

To find tints you can use [this website][pc 7].  
Otherwise, these are the tints of the NHS Blue at each 10% interval:  


<html>
<style>
.container {   display: flex;   align-items: center;   justify-content: center }
.div_gap { width: 40px }
.tint_colours img {height:500px;}
 </style>  

 <body>
 <div class="container">
 <div class="tint_colours">
  <img src="../images/gradient_crop.png" alt="visual representation of the tints of NHS Blue listed on this page. The list of hex codes and the percentage tint they represent appears in the same order as lsited on the page, and to the left of each hex code is a small rectangle block of colour orientated horizontally, each in the colour that corresponds to the hex code it is next to. From top to bottom the colours shown are: #005EB8 (NHS Blue) - 100%, #337EC6 - 90%, #5C98D1 - 80%, #7DADDA - 70%, #97BDE1 - 60%, #ACCAE7 - 50%, #BDD5EC - 40%, #CADDF0 - 30%, #D5E4F3 - 20%, #DDE9F5 - 10%, #FFFFFF (White) - 0%">
</div>
<div class="div_gap"></div>
<div>
    #005EB8 (NHS Blue) - 100%  <br><br>
    #337EC6 - 90%  <br><br>
    #5C98D1 - 80%  <br><br>
    #7DADDA - 70%  <br><br>
    #97BDE1 - 60%  <br><br>
    #ACCAE7 - 50%  <br><br>
    #BDD5EC - 40%  <br><br>
    #CADDF0 - 30%  <br><br>
    #D5E4F3 - 20%  <br><br>
    #DDE9F5 - 10%  <br><br>
    #FFFFFF (White) - 0% <br><br>
</div>
</div>
<br>
</body>
</html>

Note: we only recommend outlining the bars when using tints of a palette, in general, bar outlines add unnecessary clutter. We outline all bars to maintain consistency.  

::: details Source - colour palette and NHS identity

[GOV.UK Design System; Colour][pc 3]  
[Sequential data colour palette][pc 4]  
[NHS identity guidelines; Using tints][pc 5]

:::  

For an indication of colour schemes and combinations using binary, qualitative, diverging and sequential data the diagram below is useful:  

![Diagram showing the relationships between different colours and different groups of colours, with the labels 'binary', 'qualitative', 'diverging', and 'sequential' to indicate when each colour scheme is most appropriate](../images/scheme.png)  

::: details Source - colour use guide

[Colour use guidelines for mapping and visualization][pc 6]

:::

[pc 1]: https://service-manual.nhs.uk/design-system/styles/colour
[pc 2]: https://service-manual.nhs.uk/design-system/styles/colour
[pc 3]: https://design-system.service.gov.uk/styles/colour/
[pc 4]: https://analysisfunction.civilservice.gov.uk/policy-store/data-visualisation-colours-in-charts/#section-6
[pc 5]: https://www.england.nhs.uk/nhsidentity/identity-guidelines/colours/#:~:text=use%20of%20highlights.-,Using%20tints,-Tints%20are%20percentage
[pc 6]: https://web.natur.cuni.cz/~langhamr/lectures/vtfg1/mapinfo_2/barvy/colors.html
[pc 7]: https://www.htmlcsscolor.com/hex/005EB8
