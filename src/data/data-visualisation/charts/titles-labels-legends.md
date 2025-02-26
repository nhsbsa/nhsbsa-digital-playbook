---
layout: article
title: "Chart titles, labels and legends"
description: "Standards and guidance for chart text at the NHSBSA"
status: DRAFT
tags: data-charts
order: 2
review:
    last_reviewed_date: 2024-12-30
    review_cycle: ANNUAL
---
## Chart titles  
  
Chart titles should be appropriate, detailing a main message, key point or trend which the chart is demonstrating.  
  
Chart titles should be: 

- front-loaded 
- in the active voice 
- in sentence case 
- as concise as possible 
- 15 words or fewer  
  
For example, ‘Croydon has the most monetary transactions out of all suppliers’.  
  
Chart titles should also be tagged correctly. Whether you publish your chart in a document or on a webpage, the background code will have ‘tags’ for the heading structure.  
These tags help users understand the structure of the document by putting visual cues on section headings and subheadings (for example, different font sizes and bold text).  
They also help screen reader users to better understand document structure. Screen reader software reads out tags and screen reader users use them to find the content they need.  
  
## Chart subtitles  
  
Chart subtitles should provide a specific description of the data used in the chart. This must include the: 

- statistical measure 
- geographic coverage 
- time-period  
  
For example, ‘Sum of all transactions (£) from Jan 2025 to Feb 2025 by supplier.’  
  
For more information refer to the [ONS guide on chart titles and subtitles][titles 1]  
  
## Chart labels  
  
Any text that has to live within a chart, such as axis labels, data labels, annotations or legends should be made as accessible as possible.  
  
Use a font size large enough for all labels to be legible. As images often get resized when published, it is not possible to suggest a specific minimum font size. Instead, this is something that needs to be judged when creating the chart.  
  
All text should be horizontal. If it is difficult to fit the chart labels into the space, try transposing the chart or changing the units. You could also drop some of the labels.  
For example, only label every other year in a time series. If you do this, use tick marks to show the regularity of the data.  
  
According to [numeric formatting rules][titles 2], commas should be used to separate thousands on chart label values.  
  
Only use colours that have the reuired level of contrast with the background. See the [Colours guidance](../colour/colour-guidance.md) for more information on this.  
  
## Chart legends  
  
Legends should be avoided where possible. If legends are used, the layout should be stated, and any lines and categories should be labelled directly.  
  
### Bar charts  
If legends are used, they should be presented in the same order and orientation as the stacks in the bars or the bars in the clusters. The legend layout should be stated, just above the chart so users know they can match labels using positioning alongside colour, or alternative encoding methods.  
  
### Line charts  
Try to place labels at the end of the lines, on the right-hand side of the chart. Legends rely on users matching labels to lines using colours which can be difficult for some users. Therefore, legends should only be used when essential, for example when lines are very close together.  
  
### Pie and doughnut charts  
Categories should be labelled directly. Legends and keys rely on users matching labels to categories using colour alone. This fails [accessibility success criterion 1.4.1 Use of Colour][titles 4].  
  
For more information about subtitles and legends, visit the [Government Analytics Framework accessible charts checklist][titles 3].  
  
## Chart layout  
  
Chart titles, source information and footnotes should be placed in the body text, or as separate text, rather than in an image.  
  
Presenting titles, source information and footnotes within an image may fail [accessibility success criterion 1.4.5 Images of Text][titles 5]. Images of text may be difficult for some people to read and users of screen reader software would be likely to miss this content completely. 

[titles 1]: https://service-manual.ons.gov.uk/data-visualisation/guidance/chart-text#chart-titles
[titles 2]: https://nhsbsauk.sharepoint.com/sites/DigitalContentDesignTeam/SitePages/NHSBSA-digital-style-guide-and-standards.aspx#numbers%2C-dates-and-times
[titles 3]: https://analysisfunction.civilservice.gov.uk/policy-store/charts-a-checklist/
[titles 4]: https://www.w3.org/TR/WCAG22/#use-of-color
[titles 5]: https://www.w3.org/TR/WCAG22/#images-of-text