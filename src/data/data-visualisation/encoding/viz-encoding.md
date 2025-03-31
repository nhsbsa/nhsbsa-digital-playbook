---
layout: article
title: "Visual encoding"
description: "Guidance for visual encoding including pre-attentive attributes and Gestalt principles"
status: FINAL
tags: data-viz-home
order: 50
review:
    last_reviewed_date: 2024-12-20
    review_cycle: ANNUAL
---
## Visual encoding  
  
Visual encoding helps the user to gain insight into a visualisation. Visual encoding can use pre-attentive attributes, such as symbols, size, shapes and colours. It can also use the Gestalt principles, which focus on the placement of items, such as proximity, closure and continuity, to help the user’s understanding.  

### Pre-attentive attributes  
  
Pre-attentive attributes are information we can process visually almost immediately, before sending the information to the attention processing parts of our brain.  
  
We process this information quickly and subconsciously.  
  
Some attributes are processed better than others. For example, we do not process angles and areas as well as we process length. We process environment before we consciously think. By contrast, with length our brain often works out the difference pre-attentively.  
  
Some examples of pre-attentive attributes are:

- length
- width
- orientation
- size
- shape
- enclosure
- position
- grouping
- colour hue
- colour intensity  
  
![Examples of pre-attentive attrbutes](../images/pre-atten.png)  
  
::: details Source - visual analytics

[Why Visual Analytics?][encode 1]
:::  

### Gestalt principles  

The Gestalt principles can be used by designers to organise content on websites and data visualisation products. This makes the content aesthetically pleasing and easier to understand. If the design of the dashboard is considered, this helps aide the user’s understanding, journey and navigation, creating a smoother user experience as a result.   
  
These principles determine how people naturally perceive elements. If you understand how to use them, you can create a better user experience.  

Proximity
: Elements which are close together seem to be a group

Closure
: The human brain ignores gaps and tries to understand the bigger context

Similarity
: Elements which look similar seem to be a group

Common region
: Elements which are close together seem to be a group

Continuity
: Elements which are ordered in a line or curve seem to be a group

Figure and ground
: The human brain instinctively recognises if something is in the fore- or background

Symmetry
: Symmetric elements give the human brin the feeling that everything is ordered

Common fate
: Elements which move in the same direction seem to be a group  
  
![Example visualisations showing the Gestalt principles](../images/gestalt.png)  
  
::: details Source - Gestalt principles

[UXCam: 8 Gestalt principles to improve your app design (infographic)][encode 3]
:::  

### Including comparisons or context  
  
Comparisons are useful for the user because they provide context. For example, a year-on-year comparison. There are different methods of comparisons or adding context such as accompanying text, trend lines, colour and target lines.  
  
To give context to a user, and help improve the user’s understanding of the data being shown, an information page or a glossary might be useful to include in your dashboard. Refer to the [layout of a dashboard guidance](../../dashboard-layout/info-pages/) for further information on what these pages can contain.  

## How to use visual encoding  
  
Only use what is necessary. You do not want to over-clutter a dashboard or chart for a user as this can be distracting. It can also hinder their ability to make clear and meaningful decisions.  
  
It's important to make sure all encoding methods that are used are clear to the user. we do not want the user to misunderstand charts shown, and make an uninformed decision.  

## Things to be aware of  
  
Pre-attentive attributes can be used to our advantage to create powerful visualisations. For example, all grey bars with one red column can be used to highlight a particular focal point.  
  
As a result, pre-attentive attributes can be used or misused to tell a story. For example, if you rotate a chart and change the colour of bars in a chart to red to look like blood, you can change the inference of a story. These design levers have been used to change the message given.  
  
As developers you need to be aware of how your design choices can impact a user’s perception as you should not mislead a user and their perception of a chart.  

Info World provides [more examples on how these design choices can impact a user’s perception][encode 4].  

[encode 1]: https://help.tableau.com/current/blueprint/en-us/bp_why_visual_analytics.htm
[encode 2]: https://www.infoworld.com/article/3088166/why-how-to-lie-with-statistics-did-us-a-disservice.html
[encode 3]: https://uxcam.com/blog/8-gestalt-principles-design-infographic/
[encode 4]: https://www.infoworld.com/article/2246011/why-how-to-lie-with-statistics-did-us-a-disservice.html