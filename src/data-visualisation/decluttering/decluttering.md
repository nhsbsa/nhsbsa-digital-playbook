---
layout: article
title: "Decluttering and pulling focus"
description: "Guidance on the importance of decluttering and pulling focus for data visualisation"
status: DRAFT
tags: [data-viz, data-viz-declutter, data-viz-home]
order:
    data-viz: 2
    data-viz-declutter: 1
    data-viz-home: 7
---
## Importance of decluttering  
  
To ensure users can quickly make effective and informed decisions, it is important to give the user all information necessary, without providing too much to distract the user.  
  
The purpose of decluttering is to:
- save the user time
- provide more time to make meaningful decisions
- provide less barriers to using a visualisation
- create less confusion
- create more purposeful chart/focus attention
- to help those with sight difficulties  
  
When a user first sees a chart, their focus will be drawn to particular elements. As developers, we need to ensure that the users eyes are drawn to the most important elements.  
  
## How to declutter  
  
Some steps that you can take to declutter a chart are:  
- removing heavy borders and gridlines. Any unnecessary ink on the page should be removed
- removing data markers without a purpose, such as dots on a line chart
- removing any redundant data. This includes improving the x and y axis labels to be more concise
- placing the legend as close to a line chart as possible
- considering the accuracy needed. For example, would the user need to see each decimal place of a figure, or would rounding a value be more effective
- pulling focus onto certain lines/bars by highlighting the most important element. For example, by using NHS Blue (#005EB8) against a light grey NHS Grey 3 (#aeb7bd).  

#005EB8:  

![Rectangle of block colour in the shade #005EB8 NHS Blue, strong blue](hex-nhs-blue.png)  

#aeb7bd:  

![Rectangle of block colour in the shade #aeb7bd NHS Grey 3, grayish blue](hex-nhs-grey-3.png)  
  
    
::: details Source

[What clutter can we eliminate?][declutter 1]

:::  
  
  
## Importance of pulling focus  
  
Using methods to focus the user’s attention is a quick way of ensuring the user obtains the maximum value possible from the data.  
  
## How to pull focus  
  
There are many methods you can use to pull focus:  
- [Use visual encoding](../encoding/viz-encoding/) such as size and shape to highlight any necessary items
- [Use colour](../colour/) and width, for example, where you need to pull focus onto a specific variable in a line chart, use a thicker NHS Blue (#005EB8) line, with the other lines set as NHS Grey 3 (#AEB7BD), this will ensure the other lines fade further into the background with the most dominant and useful line standing out
- Use markers or event lines to highlight certain values, or important and influencing aspects. A good example of this is adding a faded section in NHS Grey 4 (#D8DDE0) to denote forecasting, or adding a label to an individual value at a point in time  

#aeb7bd:  

![Rectangle of block colour in the shade #aeb7bd NHS Grey 3, grayish blue](hex-nhs-grey-3.png)  

#005EB8:  

![Rectangle of block colour in the shade #005EB8 NHS Blue, strong blue](hex-nhs-blue.png)  

#D8DDE0:  

![Rectangle of block colour in the shade #D8DDE0 NHS Grey 4, light grayish blue](hex-nhs-grey-4.png)  
  
  
::: details Source

[Two tips for better graphs][declutter 2]

:::  
  
[declutter 1]: https://www.storytellingwithdata.com/blog/what-clutter-can-we-eliminate
[declutter 2]: https://www.storytellingwithdata.com/blog/two-tips-for-better-graphs