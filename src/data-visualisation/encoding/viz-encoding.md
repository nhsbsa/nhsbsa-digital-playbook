---
layout: article
title: "Visual encoding"
description: "Guidance for visual encoding including pre-attentive attributes and Gestalt principles"
status: DRAFT
tags: [data-viz, data-viz-encode, data-viz-home]
order:
    data-viz: 2
    data-viz-encode: 1
    data-viz-home: 12
---
## Visual encoding  
  
Visual encoding helps the user to gain insight into a visualisation. Visual encoding can use pre-attentive attributes, such as symbols, size, shapes and colours, along with the Gestalt principles, which focus on the placement of items, such as proximity, closure and continuity, to aide help the user’s understanding.  
  
  
## Pre-attentive attributes  
  
Pre-attentive attributes are information we can process visually almost immediately, before sending the information to the attention processing parts of our brain.  
  
We process this information quickly and subconsciously.  
  
Some attributes are processed better than others. For example, we don’t process angles and areas as well (as in pie charts) as length. We process environment before we consciously think; with length our brain often works out the difference pre-attentively.  
  
Some examples of pre-attentive attributes:  
  
Length, width, orientation, size, shape, enclosure, position, grouping, colour hue, and colour intensity.  
  
![10 square boxes arranged in 2 rows of 5, each with a visual representation of 1 pre-attentive attrbute. From left to right, beginning on the top row: length, width, orientation, size, shape, enclosure, position, grouping, colour hue, colour intensity](../images/pre-atten.png)  
  
::: details Source
 
[Why Visual Analytics?][encode 1]
:::  


## Gestalt principles  

The Gestalt principles can be used by designers to organise content on websites and data visualisation products so it is aesthetically pleasing and easy to understand.
If the design of the dashboard is considered, this help aide the user’s perception, and creates a smoother user experience as a result.  
  
Design &rarr; user perception &rarr; user experience  
  
These principles determine how people naturally perceive elements. If you understand how to use them, you can create a better user experience.  

![8 small images arranged in 4 rows of 2, each with a visual represntation of 1 of te gestalt principles. From left to right, beginning on the top row: proximity, closure, similarity, common region, continuity, figure and ground, symmetry, common fate](../images/gestalt.png)  
  

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

  
    
## Including comparisons or context  
  
Comparisons are useful for the user to give context. For example, a year-on-year comparison. There are different methods of comparisons or adding context such as accompanying text, trend lines, colour and target lines.  
  
To give context to a user, and help aide the user’s understanding of the data being shown, useful pages such as information pages including a glossary might be useful to include in your dashboard. Please refer to the [Layout of a dashboard guidance](../../dashboard-layout/db-layout/) for further information on what these pages can contain.  
  
  
## How to use visual encoding  
  
Only use what is necessary. You do not want to over clutter a dashboard or chart for a user as this can be distracting, and hinder their ability to make clear and meaningful decisions.  
  
It is important to make sure all encoding methods that are used are clear to the user as we equally do not want the user to misunderstand charts shown, and make an uninformed decision.  
  
  
## Considerations to be aware of  
  
Pre-attentive attributes can be leveraged to our advantage to create powerful visualisations. For example, all grey bars with one red column can be used to highlight a particular focal point.  
  
As a result, pre-attentive attributes can be used or misused to tell a story. For example, if you rotate a chart and change the colour of bars in a chart to red to look like blood, you can change the inference of a story. These design levers have been used to change the message given. As developers you need to be aware of how your design choices can impact a user’s perception as you should not mislead a user and their perception of a chart.  
  
::: details Source
 
[Lies, damn lies, and statistics: How to take something positive from the UK’s EU referendum campaign][encode 2]
:::


[encode 1]: https://help.tableau.com/current/blueprint/en-us/bp_why_visual_analytics.htm
[encode 2]: https://www.infoworld.com/article/3088166/why-how-to-lie-with-statistics-did-us-a-disservice.html