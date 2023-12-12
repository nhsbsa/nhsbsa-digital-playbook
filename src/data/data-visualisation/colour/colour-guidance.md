---
layout: article
title: "Colour guidance"
description: "Aspects to be considered regarding colour for data visualisation at the NHSBSA"
status: REVIEW
tags: dv-colour
order: 1
---
{% from "colorBlock/macro.njk" import colorBlock %}
## NHS colour palette  
  
This guidance uses the NHS Colour palette as a basis for data visualisation colour requirements within the NHS Business Services Authority (NHSBSA).  
It has been created to help standardise our products in line with best practice, for internal and external users, ensuring: 

- consistency 
- brand reputation
- familiarity with our dashboards 

This makes it easier for users to understand and gain valuable insights from our data visualisation products.  

For more information read [the internal NHSBSA branding site][colours 1].

## Accessibility of colours  
  
To make sure our charts are accessible to all users, colours must be used with enough contrast, sparsely and purposefully. You can find out more about success criteria for colours in charts on the [Civil Service data visualisation colours page][colours 2].  

Contrast ratios should be checked to help with conditions such as low vision and colour blindness. It’s important to keep a 3 to 1 contrast ratio between adjacent colours (as set out in [WCAG accessibility success criterion 1.4.11][https://www.w3.org/TR/WCAG22/#non-text-contrast]) for people with low vision. 

You can find out more about what to consider when using colour in charts on the [Civil Service data visualisation colours page][colours 3].   

## Things to consider  
  
Try to:

- limit the number of colours – use only the colours needed to improve the user’s understanding 
- align colours consistently to the same variables (Example A) 
- use colours that have meaningful associations or personalisations - for example, use NHS blue if you're comparing the NHS to another organisation 
- make sure colour contrast is at least 3:1 for graphics and 4.5:1 for text, in line with [Web Content Accessibility Guidelines (WCAG)][https://www.w3.org/TR/WCAG22/#contrast-minimum]
- use the [WebAIM colour contrast checker][webaim 1] or the [Acart contrast checker][contrast 2]
- make sure colour is not the only way to access information – provide an alternative way, as required by accessibility [success criterion 1.4.1 (Use of Colour)][https://www.w3.org/TR/WCAG22/#use-of-color] 

You can find out more about what to consider when using colour on the [Civil Service data visualisation colours page][colours 3].

Consider the type of chart you’re using and the relevant colour palette. You can refer to the Categorical and Sequential Standards pages for more information: 

- [Categorical Data Colour Standards](../cat-data/)
- [Sequential Data Colour Standards](../seq-data/)  

Colour can be used to connect information. For example, if you’re showing data about various suppliers, individual suppliers should be represented by the same colour across charts. So, if ‘Supplier H’ appears across multiple visualisations, use the same colour for ‘Supplier H’ each time it appears. 

You can find out more about [how to choose colours for data visualisations at Atlassian][colours 5].
  
![Pie chart with 3 slices, coloured with tints of NHS Blue](../images/pie_eg.png)  
![Column chart with 3 bars, coloured with tints of NHS Blue](../images/column_eg.png)

## Focus charts  

Focus charts are charts which use colour to highlight specific elements to help users understand the information.  
The primary colour NHS Blue should be used to pull focus against NHS Grey 3.  

`#005EB8` is the hex code for NHS Blue (strong blue):  

{{ colorBlock({
    "color": "#005EB8",
    "blockSize": "l"})
}}

`#AEB7BD` is the hex code for NHS Grey 3 (grayish blue):  

{{ colorBlock({
    "color": "#AEB7BD",
    "blockSize": "l"})
}}

You can find out more about focus charts colour palette on the [Civil Service data visualisation colours page][colours 6].  

You can find out more about colour in the [NHS digital service manual][colours 7]. 

## Text  

The primary text colour to use is: #212B32. This should be used across most headers and body of text. 
 
The secondary text colour to use is: #4C6272. This can be used for things such as a search box, or secondary content such as the heading of a links section.   
  
`#212B32` is the hex code for very dark (mostly black) blue:  

{{ colorBlock({
    "color": "#212B32",
    "blockSize": "l"})
}}

`#4C6272` is the hex code for very dark greyish blue:  

{{ colorBlock({
    "color": "#4C6272",
    "blockSize": "l"})
}}

You can find out more about colour in the [NHS digital service manual][colours 8]

## Alerts  

You can focus the reader’s attention by using a background of NHS Blue (#005EB8) with a bold white text. Otherwise, if the alert is urgent or extremely important, the NHS Pale Yellow (#FFF9C4) background can be used with the primary text colour (#212B32).   

`#FFF9C4` is the hex code for NHS Pale Yellow (very pale yellow):  

{{ colorBlock({
    "color": "#FFF9C4",
    "blockSize": "l"})
}}

`#212B32` is the hex code for very dark (mostly black) blue:  

{{ colorBlock({
    "color": "#212B32",
    "blockSize": "l"})
}}

## Useful links

- [Government Analysis Function guidance][link 1]
- [Digital Service Manual, NHS Colours][link 2]
- [NHS Identity Standards][link 3]
- [GOV.UK Design System, Colours][link 4]  
- [Tint and Shade Generator][link 5]

[colours 1]: https://nhsbsauk.sharepoint.com/sites/CommsMarketing/SitePages/Our-brand.aspx
[colours 2]: https://analysisfunction.civilservice.gov.uk/policy-store/data-visualisation-colours-in-charts/#relevant-success-criterion-for-colours-in-charts
[colours 3]: https://analysisfunction.civilservice.gov.uk/policy-store/data-visualisation-colours-in-charts/#section-3
[webaim 1]: https://webaim.org/resources/contrastchecker/
[contrast 2]: https://contrastchecker.com/
[colours 5]: https://chartio.com/learn/charts/how-to-choose-colors-data-visualization/#be-consistent-with-color-across-charts
[colours 6]: https://analysisfunction.civilservice.gov.uk/policy-store/data-visualisation-colours-in-charts/#section-7
[colours 7]: https://service-manual.nhs.uk/design-system/styles/colour  
[colours 8]: https://service-manual.nhs.uk/design-system/styles/colour
[link 1]: https://analysisfunction.civilservice.gov.uk/policy-store/data-visualisation-colours-in-charts
[link 2]: https://service-manual.nhs.uk/design-system/styles/colour 
[link 3]: https://www.england.nhs.uk/nhsidentity/identity-guidelines/colours/
[link 4]: https://design-system.service.gov.uk/styles/colour/
[link 5]: https://maketintsandshades.com