---
layout: article
title: "Key performance indicator (KPI) cards"
description: "Guidance for using KPI cards at the NHSBSA"
status: REVIEW
tags: data-viz-home
order: 55
review:
    last_reviewed_date: 2024-12-31
    review_cycle: ANNUAL
---
{% from "colorBlock/macro.njk" import colorBlock %}
## Layout  
  
KPI cards are the most important measures to show a user and should be placed in the top left-hand corner of a page, spanning the top of a page if necessary.  
  
Users typically start at the top left-hand corner of a page, scan horizontally, then work down the page, scanning horizontally from left to right in an ‘F’ pattern until they find something of interest.

![Visual representation of the 'F' pattern](f-pattern.png)

A ‘Z’ pattern, scanning horizontally from left to right, then in the centre of the page, before scanning again left to right also follows a similar concept but requires fewer eye movements.  
The location of important content on a page should follow this pattern.  

The most important information should be located in the top left of the page, with other important informationin the centre of the page. Secondary or more specific information should be in the top right and bottom left of the page, with the least important information in the bottom right.
  
![Example page showing where information should be located according to importance](info-layout.png)  
  
Ensuring your visuals are thoughtfully chosen and providing a concise and meaningful message gives a logical flow to the page and improves the user journey.  
A logical flow is one that follows the 'F' or 'Z' pattern. A choice of layout that promotes any other pattern encourages a disorderly flow.  
  
![Example of logical flow versus disorderly flow](logical-flow.png)  
  
It is advisable to use no more than four KPI cards on a page, so as not to distract and confuse a user.  
KPI cards should be thoughtfully chosen to highlight key takeaways to a user, and support with the storytelling of the page the KPI card is on.  
  
For more information, see these [easy dashboard design tips][https://www.seerinteractive.com/insights/3-easy-dashboard-design-tips] from Seer Interactive.  
  
## Best practice  
  
It's important that the format of a KPI card is clear and concise to the user. The user should be given only enough information to understand the KPI card.  
  
When developing KPI cards, you should:

- be descriptive in what the KPI card shows, it should complement the context of the report page 
- not use ‘Count’ or ‘Sum’ if possible 
- consider the appropriate precision for the end user, they may not need to see ‘12,234.56 prescriptions’, if ’over 12,000 prescriptions’ is appropriate
- avoid abbreviations, for example using ‘Last 12 Months instead’ of ‘L12M’, or ‘This Month’ instead of ‘MTD’ 
- make sure the date range and any filters are clear to the user, including if filters do not affect the KPI card, without specifying a date range or filters on the card itself

KPI Cards should give context or show the user a key point. For example, if the KPI card states ’over 12,000 prescriptions’, the user may want to know if the number of prescriptions has increased for an ICB, and what the trend is.  
Include information to ensure the KPI card is meaningful to a user. In this example, the use of a trend, colour, context and symbol can be used to inform the user that the monthly unit amount is under the maximum threshold.  
  
![Example KPI card](units-by-month-card.png)  
  
KPI cards that use the NHS toolkit should be clear to the user, with the main value in the largest font, and trend values shown in a smaller font, accompanied by a symbol as well as an appropriate colour.  
  
![Example KPI cards using NHS toolkit](toolkit-cards.png)  
  
## Format  
  
Callout values and labels should always be centrally aligned. If a title is included, this should be left aligned and located in the top right corner.  
  
The callout value should be the largest font size as it is the most important value (in Power BI font size 36 is used).  

![Example simple KPI card](sales-card.png)  
  
The font colour to be used, unless conditionally formatting is used to give an indication of performance, is NHS Dark Grey #425563:  
  
 {{ colorBlock({
    "color": "#425563",
    "blockSize": "l"})
}} 
    
The label should support the callout value, providing information on the value shown. The font size for this is 12, with NHS Black #231F20 used:  
  
{{ colorBlock({
    "color": "#231F20",
    "blockSize": "l"})
}}
