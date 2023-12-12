---
layout: article
title: "Tooltips"
description: "Standards for using tooltips at the NHSBSA"
status: DRAFT
tags: [data-viz, data-viz-tooltips, data-viz-home]
order:
    data-viz: 2
    data-viz-tooltips: 1
    data-viz-home: 11
---
## What is a tooltip?  
  
Definition: A tooltip is a brief, informative message that appears when a user interacts with an element in a graphical user interface (GUI).  
Tooltips are usually initiated in one of two ways: through a mouse-hover gesture or through a keyboard-hover gesture.  
  
Please note, data visualisations may have bespoke tooltips in which the developer has customised or amended the default tooltip, this customised tooltip could show as a different structure of detail, or as a visualisation itself.  
  
## Use of Tooltips  
  
As developers we recommend staying away from using tooltips as they are not always best for accessibility purposes as:  
- screen readers sometimes have difficulty reading the information
- they can be hard to spot
- they can obscure the screen
- they can appear cropped if the tooltip overhangs the dashboard size
- they don’t work well for speech recognition
- keyboard users cannot access them
- those with motor difficulties can find them hard to operate  
  
::: details Source
 
[The problem with tooltips and what to do instead][tool 1]
:::   
  
## Tooltips dos-and-don'ts  
  
The situation of when to use a tooltip needs to be considered:  
- Don’t use tooltips for information that is vital to task completion. Remember that tooltips disappear, so instructions or other directly actionable information, like field requirements, shouldn’t be in a tooltip.
- Provide brief and helpful content inside the tooltip. Lengthy content is no longer a ‘tip’, so keep it brief.
- Support both mouse and keyboard hover. Tooltips that appear only on mouse hover are inaccessible for users that rely on keyboards to navigate. Be inclusive in your design and ensure that your tooltips are accessible via keyboards.
- Use tooltip arrows when multiple elements are nearby. Arrows are beneficial to clearly identify to which element the tooltip is associated. When there are several nearby elements, these arrows help avoid confusion.
- Provide tooltips for unlabelled icons.  
  
Please note, the following three standards are especially important for data visualisation purposes:  
- Use tooltips consistently throughout your site. Consistency in the design, in the presence (for example, for all icons rather than a few), and in the content included is important. For example, in multiple charts with custom tooltips to display base sizes and percentages, ensure the format of your tooltip content is consistent.
- Placement: position tooltips so they don’t block related content. Often tooltips have automated placements in-built, in which the BI software used will automatically place the tooltip in the most appropriate place. Tooltips must be placed close to the content it is adding additional details to. 
- Contrasting colours: ensure tooltips have moderate contrast against the background.  
  
::: details Source
 
[Tooltip Guidelines][tool 2]
:::  
  
## Alternative options  
  
There are many alternative options of a tooltip, to ensure users have access to the necessary information.  
Some options are as follows:  
- Show the content, in more efficient way. For example, if your chart has tooltips to convey information:
* one option is being able to toggle between a chart and a table to show the same level of detail
* including a description of the chart, this can be dynamically updated by using Natural Language Query
* labelling the chart with key insights
- If you’re using an icon and a tooltip to convey the meaning of a button, use text instead.
- Allowing the users to open up a new view, screen or page of any additional significant details, for example, navigating to a page of additional details. Separating your content out into an alternative page can be useful. For example, if tooltips are being used to provide definitions a glossary page could be created instead.
- Inline toggle components are useful as they:
* do not rely on iconography alone
* will not be cropped by the viewport
* do not obscure content
* are activated on click which works well in all contexts
- If you need to provide users with clarification, show the content. Again, this information can be toggled on/off depending on a user input, for example, ‘your password must be at least 8-letters long’  
  
::: details Source
 
[Tooltip Guidelines][tool 3]
:::  
  

[tool 1]: https://adamsilver.io/blog/the-problem-with-tooltips-and-what-to-do-instead/
[tool 2]: https://www.nngroup.com/articles/tooltip-guidelines/
[tool 3]: https://www.nngroup.com/articles/tooltip-guidelines/