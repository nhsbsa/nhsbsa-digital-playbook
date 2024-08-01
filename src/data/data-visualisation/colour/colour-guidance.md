---
layout: article
title: "Colour guidance"
description: "Aspects to be considered regarding colour for data visualisation at the NHSBSA"
status: REVIEW
tags: dv-colour
order: 1
---
## NHS colour palette  
  
This guidance uses the NHS Colour palette as a basis for data visualisation colour needs within the NHS Business Services Authority (NHSBSA). Using best practice, it has been created to help standardise our products for internal and external users, ensuring consistency, brand reputation and familiarity with our dashboards.  
This helps towards creating a cohesive user experience, and for data visualisation, helps the user to quickly and easily use our products, extracting meaningful and informed insight.  
[The internal NHSBSA branding site][colours 1] is useful.  

## Accessibility of colours  
  
To ensure our charts are usable to all users, colours must be used with enough contrast, sparsely and purposefully.

::: details Source - success criterion

[Success criterion for colours in charts][colours 2]

:::

Contrast ratios should be checked to help with conditions such as low vision and colour blindness. Keeping a 3 to 1 contrast ratio between adjacent colours (as set out in WCAG accessibility success criterion 1.4.11) is important for people with low vision.

::: details Source - things to consider

[What to consider when using colour in charts][colours 3]

:::  

## Things to consider  
  
- Limit the number of colours you use to be those necessary, and which helps the user’s clarity.
- Use colour consistently; colours should be aligned consistency to the same variables (Example A).
- Consider colour associations and personalisations; consider whether colours should be used to denote certain meanings. For example, if the NHS is being used as a comparison against another organisation, it might be appropriate to use NHS Blue.
- Colour contrast; ensure there is enough of a contrast between the colours used. The Web Content Accessibility Guidelines (WCAG) which the UK accessibility legislation aligns to, require a 3 to 1 ratio for graphical elements and 4.5 to 1 ratio for text.
* The WebAIM colour contrast checker may help: [WebAIM Contrast Checker 1][webaim 1] or [this Acart contrast checker][contrast 2]
- Colour should not be used as the only way to communicate information. This is stated in accessibility success criterion 1.4.1. Ensure there is an alternative option for users to obtain the same information.

::: details Source - things to consider

[What to consider when using colour in charts][colours 3]

:::

Consider the type of chart you are using and the relevant colour palette. Please refer to the Categorical and Sequential Standards pages for more information:

- [Categorical Data Colour Standards](../cat-data/)
- [Sequential Data Colour Standards](../seq-data/)  

Colour can be used to connect information. For example, if data is showing various suppliers, individual suppliers should be represented by the same colour across charts.  
ie: if 'Supplier H' appears across multiple visualisations, the same colour should be used to represent 'Supplier H' each time it appears.
  
![Pie chart with 3 slices, coloured with tints of NHS Blue](../images/pie_eg.png)  
![Column chart with 3 bars, coloured with tints of NHS Blue](../images/column_eg.png)

::: details Source - choosing colours

[How to Choose Colors for Data Visualizations][colours 5]

:::

## Focus charts  

Focus charts are charts which use colour to highlight specific elements to help users understand the information.  
The primary colour NHS Blue (#005EB8) should be used to pull focus, against NHS Grey 3 (#AEB7BD).  

#005EB8 is the hex code for NHS Blue (strong blue):  

![Block of colour #005EB8](../images/hex-nhs-blue.png)  

#AEB7BD is the hex code for NHS Grey 3 (grayish blue):  

![Block of colour #AEB7BD](../images/hex-nhs-grey3.png)  

::: details Source - colour palette and NHS manual

[Focus charts colour palette][colours 6]
[NHS digital service manual; Colour][colours 7]

:::  

## Text  

The primary text colour to use is: #212B32
This should be used across the majority of headers and body of text.
The secondary text colour to use is: #4C6272
This can be used for things such as a search box, or secondary content such as the heading of a links section.  
  
#212B32 is the hex code for very dark (mostly black) blue:  
  
![Block of colour #212B32](../images/hex-212b32.png)  
  
#4C6272 is the hex code for very dark grayish blue:  
  
![Block of colour #4C6272](../images/hex-4c6272.png)  

::: details Source - NHS digital service manual

[NHS digital service manual; Colour][colours 8]
:::  

## Alerts  

To focus the readers attention, you can use a background of NHS Blue (#005EB8), with a bold white text. Otherwise if the alert is urgent or extremely important the NHS Pale Yellow (#FFF9C4) background can be used with the primary text colour (#212B32).  

#FFF9C4 is the hex code for NHS Pale Yellow (very pale yellow):  

![Block of colour #FFF9C4](../images/hex-fff9c4.png)  

#212B32 is the hex code for very dark (mostly black) blue:  

![Block of colour #212B32](../images/hex-212b32-text.png)  

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