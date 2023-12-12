---
layout: article
title: "Colour"
description: "Colour guidance for data visualisations at the NHSBSA"
status: DRAFT
tags: [data-viz, data-viz-colour, data-viz-home]
order:
  data-viz: 2
  data-viz-colour: 1
  data-viz-home: 5
related:
  tag: data-viz-colour
---
## NHS colour palette  
  
This guidance uses the NHS Colour palette as a basis for data visualisation colour needs within the NHS Business Services Authority (NHSBSA). Using best practice, it has been created to help standardise our products for internal and external users, ensuring consistency, brand reputation and familiarity with our dashboards.  
This helps towards creating a cohesive user experience, and for data visualisation, helps the user to quickly and easily use our products, extracting meaningful and informed insight.  
[The internal NHSBSA branding site][colours 1] is useful.  
  

## Accessibility of colours  
  
To ensure our charts are usable to all users, colours must be used with enough contrast, sparsely and purposefully.   
::: details Source
 
[Success criterion for colours in charts][colours 2]
:::  
Contrast ratios should be checked to help with conditions such as low vision and colour blindness. Keeping a 3 to 1 contrast ratio between adjacent colours (as set out in WCAG accessibility success criterion 1.4.11) is important for people with low vision.  
::: details Source
 
[What to consider when using colour in charts ][colours 3]
:::  
  
## Aspects to be considered  
  
- Limit the number of colours you use to be those necessary, and which helps the user’s clarity.
- Use colour consistently; colours should be aligned consistency to the same variables (Example A).
- Consider colour associations and personalisations; consider whether colours should be used to denote certain meanings. For example, if the NHS is being used as a comparison against another organisation, it might be appropriate to use NHS Blue.
- Colour contrast; ensure there is enough of a contrast between the colours used. The Web Content Accessibility Guidelines (WCAG) which the UK accessibility legislation aligns to, require a 3 to 1 ratio for graphical elements and 4.5 to 1 ratio for text.
* The WebAIM colour contrast checker may help: [WebAIM Contrast Checker 1][webaim 1] or [this Acart contrast checker][contrast 2] 
- Colour should not be used as the only way to communicate information. This is stated in accessibility success criterion 1.4.1. Ensure there is an alternative option for users to obtain the same information.  
::: details Source
 
[What to consider when using colour in charts ][colours 4]
:::

Consider the type of chart you are using and the relevant colour palette. Please refer to the Categorical and Sequential Standards pages for more information:
* [Categorical Data Colour Standards](../cat_data.md)
* [Sequential Data Colour Standards](../seq_data.md)  

Example A: Using colour to connect information. Note how ‘Services’ uses a dark blue in each chart, and Production is denoted by orange.  
  
![5 charts including a pie chart, 2 bar charts and 2 line charts](../colour/images/charts.png)  
 
::: details Source

[How to Choose Colors for Data Visualizations ][colours 5]  
:::


## Focus charts  

Focus charts are charts which use colour to highlight specific elements to help users understand the information.  
The primary colour NHS Blue (#005EB8) should be used to pull focus, against NHS Grey 3 (#aeb7bd).  

#005EB8:  

![Rectangle of block colour in the shade #005EB8 NHS Blue, strong blue](../colour/images/hex-nhs-blue.png)  

#aeb7bd:  

![Rectangle of block colour in the shade #aeb7bd NHS Grey 3, grayish blue](../colour/images/hex-nhs-grey3.png)  

  
::: details Source
 
[Focus charts colour palette][colours 6] 
[NHS digital service manual; Colour][colours 7]
:::  

  
## Text  

The primary text colour to use is: #212b32
This should be used across the majority of headers and body of text.
The secondary text colour to use is: #4c6272
This can be used for things such as a search box, or secondary content such as the heading of a links section.  
  
#212b32:  
  
![Rectangle of block colour in the shade #212b32, very dark (mostly black) blue](../colour/images/hex-212b32.png)  
  
#4c6272:  
  
![Rectangle of block colour in the shade #4c6272, very dark grayish blue](../colour/images/hex-4c6272.png)  
  
  
::: details Source
 
[NHS digital service manual; Colour][colours 8]
:::  


## Alerts  

To focus the readers attention, you can use a background of NHS Blue (#005EB8), with a bold white text. Otherwise if the alert is urgent or extremely important the NHS Pale Yellow (#fff9c4) background can be used with the primary text colour (#212b32).  

#fff9c4:  

![Rectangle of block colour in the shade #fff9c4 NHS Pale Yellow, very pale yellow](../colour/images/hex-fff9c4.png)  

#212b32:  

![Rectangle of block colour in the shade #212b32 primary text colour, very dark (mostly black) blue](../colour/images/hex-212b32-text.png)  

  
## Useful links  
- [Government Analysis Function guidance][link 1] 
- [Digital Service Manual, NHS Colours][link 2] 
- [NHS Identity Standards][link 3] 
- [GOV.UK Design System, Colours][link 4]  
- [Tint and Shade Generator][link 5]  


## Articles in this section 
  


[colours 1]: https://nhsbsauk.sharepoint.com/sites/CommsMarketing/SitePages/Our-brand.aspx
[colours 2]: https://analysisfunction.civilservice.gov.uk/policy-store/data-visualisation-colours-in-charts/#relevant-success-criterion-for-colours-in-charts
[colours 3]: https://analysisfunction.civilservice.gov.uk/policy-store/data-visualisation-colours-in-charts/#section-3
[webaim 1]: https://webaim.org/resources/contrastchecker/
[contrast 2]: https://contrastchecker.com/
[colours 4]: https://analysisfunction.civilservice.gov.uk/policy-store/data-visualisation-colours-in-charts/#section-3
[colours 5]: https://chartio.com/learn/charts/how-to-choose-colors-data-visualization/#be-consistent-with-color-across-charts
[colours 6]: https://analysisfunction.civilservice.gov.uk/policy-store/data-visualisation-colours-in-charts/#section-7
[colours 7]: https://service-manual.nhs.uk/design-system/styles/colour  
[colours 8]: https://service-manual.nhs.uk/design-system/styles/colour
[link 1]: https://analysisfunction.civilservice.gov.uk/policy-store/data-visualisation-colours-in-charts
[link 2]: https://service-manual.nhs.uk/design-system/styles/colour 
[link 3]: https://www.england.nhs.uk/nhsidentity/identity-guidelines/colours/
[link 4]: https://design-system.service.gov.uk/styles/colour/
[link 5]: https://maketintsandshades.com 