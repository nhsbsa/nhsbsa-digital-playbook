---
layout: article
title: "Primary Colours"
description: "Overview of the main colours that should be used at the NHSBSA"
status: REVIEW
tags: dv-colour
order: 2
---
## Primary colours  

See the [NHS Identity Guidelines Colours pages][pc 1] for more detail.

### Background  
  
Use a plain background, NHS Grey 5 (#F0F4F5) should be used.  

#F0F4F5 is the hex code for NHS Grey 5 (light grayish cyan):  
  
![Block of colour #F0F4F5](../images/hex-f0f4f5.png)  
  
NHS White is used to make important information stand out and for alternating backgrounds, for example on the NHS website home page.  
  
NHS White:

- hex: #FFFFFF
- CYMK: 0/0/0/0
- RGB: 255/255/255

![Block of colour #FFFFFF](../images/nhs-white.png)

### Border  
  
Each visualisation and filter should have a border of NHS Grey 4 (#D8DDE0).  
  
![Examples of visualisations with border in colour #D8DDE0](../images/border-example.png)  
  
### Tooltips  
  
Each tooltip should have a label text colour of NHS Pale Grey (#E8EDEE), a value text colour of NHS White (#FFFFFF), and a Background colour of NHS Dark Grey (#425563).  
  
![Example of tooltip colour selection](../images/tooltip-customize.png)  
  
![Example of tooltip colour on a chart](../images/tooltip-croydon.png)

::: details Source - NHS digital service manual

[NHS digital service manual; Colour][pc 2]

:::

### Single variables  

NHS Blue is the primary colour to be used across our products.  

NHS Blue:

- hex: #005EB8
- CYMK: 99/50/0/0
- RGB: 0/94/184
- Pantone: 300
- RAL: 5017
  
![Block of colour NHS Blue](../images/nhs-blue.png)

### Two variables  

NHS Blue alongside NHS Light Blue is recommended for two variables.  

NHS Light Blue:

- hex: #41B6E6
- CYMK: 67/2/0/0
- RGB: 65/182/230
- Pantone: 298
  
![Block of colour NHS Blue](../images/nhs-blue.png)      ![block of colour NHS Light Blue](../images/nhs-light-blue.png)

### Related variables  

NHS Blue (#005EB8) alongside NHS Light Blue (#41B6E6) is recommended for two variables. For related variables such as comparing adults and children across two groupings, a 50% tint if recommended. Meaning for each grouping, the colour will be consistent, with two tints.  

If you need to use tints of this palette and have a small number of tints needed, use either 25% or 50%. We recommend 50%. If tints do not pass contrast ratio checks and the visualisation is suitable (i.e. not a line graph), a border should be added to further enhance the colour.  

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

Charts displaying data for 2 different categories should use NHS Blue (#005EB8) and NHS Light Blue (#41B6E6) to denote this. For other details, 100%, 80% and 60% tints can be used in descending order, with appropriate contrast for the corresponding numeric labels.

- NHS Blue: #005EB8 (100%), #5C98D1 (80%), #97BDE1 (60%)
- NHS Light Blue: #41B6E6 (100%), #66C4EB (80%), #8DD3F0 (60%)  
  
![bar graph demonstrating the use of colour](../images/nhs_blue_bars.png)
  
Note: we only recommend outlining the bars when using the lightst tints of a palette, if there is not enough colour contrast. In this case, we would outline all bars to maintain consistency. In general, bar outlines add unnecessary clutter.  

::: details Source - colour palette and NHS identity

[GOV.UK Design System; Colour][pc 3]  
[Sequential data colour palette][pc 4]  
[NHS identity guidelines; Using tints][pc 5]

:::  

Use different colours (e.g. #005EB8, #00A499, #AE2573) to represent different groups of qualitative data. When data is binary, use 100% and 50% tints of each colour to represent this.

![colour scheme for binary qualitative data](../images/binary_qual.png)  
  
Use two different colours (e.g. #005EB8, #AE2573), and white (#FFFFFF) as the central third colour, for diverging data. When data is sequential, use tints of each colour (e.g. 100%, 80%, 60% in descending order) to represent this.  
  
![colour scheme for diverging sequential data](../images/diverge_seq.png)  
  
Use Use two different colours (e.g. #005EB8, #AE2573), and white (#FFFFFF) as the central third colour, for diverging data. When data is binary, use 100% and 50% tints of each colour to represent this.  
  
![colour scheme for binary diverging data](../images/binary_diverge.png)  
  
Use different colours (e.g. #005EB8, #00A499, #AE2573) to represent different groups of qualitative data. When data is sequential, use tints of each colour (e.g. 100%, 80%, 60% in descending order) to represent this.  
  
![colour scheme for sequential qualitative data](../images/qual_seq.png)  

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
