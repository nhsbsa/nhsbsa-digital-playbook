---
layout: article
title: "Tooltips"
description: "Standards for using tooltips at the NHSBSA"
status: FINAL
tags: data-viz-home
order: 110
review:
    last_reviewed_date: 2024-12-20
    review_cycle: ANNUAL
---
A tooltip is a brief, informative message that appears when a user interacts with an element in a graphical user interface (GUI). Tooltips are usually initiated by a mouse-hover gesture or through a keyboard-hover gesture.  
  
Please note, data visualisations may have bespoke tooltips which the developer has customised or amended. A tooltip must not be the only way of getting infomation, another option should always be available.
  
## Use of Tooltips  
  
We recommend not to use tooltips, they can cause accessibility issues as:

- screen readers sometimes have difficulty reading the information
- they can be hard to spot
- they can obscure the screen
- they can appear cropped if the tooltip overhangs the dashboard size
- they do not work well for speech recognition
- keyboard users cannot access them
- those with motor difficulties can find them hard to operate  
  
::: details Source - tooltip problems

[The problem with tooltips and what to do instead][tool 1]
:::
  
## Tooltips guidance

### General guidance
  
Do not use tooltips for information that is essential for completing a task. Tooltips disappear, instructions or actionable information should not be in a tooltip.  
  
A tooltip should contain brief and helpful information.  
  
Use tooltip arrows when other elements are nearby. Arrows are beneficial as they clearly identify which element the tooltip is associated with. If there are several nearby elements, these arrows help avoid confusion.  
  
A tooltip should be provided for unlabelled icons.  
  
### Tooltips in data visualisation  

Tooltips should be used consistently throughout the site.  
  
Things to consider:  
  
- how they are used in the design, in the presence, and in the content included
- the position of the tooltip so no related content is blocked
- tooltips must be placed close to the content it is adding additoinal details to

### Accessibility guidance  
  
Allow users to use both mouse and keyboard hover, as tooltips that appear only on mouse hover are inaccessible for users that rely on keyboards to navigate. 

Ensure that tooltips have a suitable colour contrast against the background.

::: details Source - tooltip guidelines

[Tooltip Guidelines][tool 2]
:::  
  
## Alternative options  
  
There are other options available for providing information to users. The alternatives are as follows:  
  
- toggle between a chart and a table to show the same level of detail
- include a description of the chart, this can be dynamically used by using the Natural Language Query
- labelling the chart with key insights
- using text instead of an icon and tooltip to convey meaning
- allow users to open a new view, screen or page containing additional details
- separate your content out into an alternative page
- use an inline component
* inline components do not rely on iconography alone
* they will not be cropped by viewport
* they do not obscure content
* they are activated on click
- provide clarification for users by toggling on or off depending on a user input
  
::: details Source - tooltip guidelines

[Tooltip Guidelines][tool 2]
:::  

[tool 1]: https://adamsilver.io/blog/the-problem-with-tooltips-and-what-to-do-instead/
[tool 2]: https://www.nngroup.com/articles/tooltip-guidelines/