---
layout: article
title: "Table standards"
description: "Data visualisation standards in relation to tables, at the NHSBSA"
status: DRAFT
tags: [data-viz, data-viz-tables, data-viz-home]
order:
    data-viz: 2
    data-viz-tables: 1
    data-viz-home: 10
related: 
    tag: data-viz-tables
---
## Best practice for tables  
  
There are aspects we can implement to help enable users to read a table effectively.  
  
**1. Avoid unnecessary ink to page ratio.**
- Avoid gridlines
- The less space colours fill in, the brighter and more different they should be to be distinguishable; this is in order to give adequate contrast  
      
**2. Align the content appropriately.**
- A table should always contain headers. The background of these headers should be distinguishable from the main body of table: a NHS Blue (#005EB8) background with white titles should be used 
- Numbers should be aligned to the right
- Text should be aligned to the left
- Times series should read left to right
- Categorical values should be displayed in columns to the left of quantitative values
- Calculated values should be placed to the right of the values from which they are derived
- Values to be compared should be placed next to each other
- It is possible to embed linked footnotes into a table. However, jumping from one section of text to another can be disruptive. It is better to put the information at the point of need whenever possible. It is best practice to place footnotes in the table title, column headings or row labels. Avoid placing them in cells with data as it affects the alignment of the figures [Source - Examples of tables and charts][table 1]
      
**3. Consider condensing the information included.**
- Use icons and abbreviations
- Bring repeating words in the column header
- Use a shorter number format or rounded numbers (like 1.3m instead of 1.300.000 and 0.1 instead of 0.1129302) – this is dependent on the customer’s need for accuracy  
      
**4. Consider narrowing (down) your columns.**
- Consider what information is essential
- You should use more rows than columns. The fewer columns your table has, the more readable it becomes (especially on mobile phones). 3 columns will comfortably fit on mobile- more will not  
      
**5. Prioritise rows over columns.** 
- Consider restructuring your data
- Humans find it easier skimming through information that’s vertically aligned, not horizontally  
      
**6. Consider highlighting tables with many rows.** 
- If you can’t avoid many columns, stripe every second row with a light grey, such as NHS Grey 5 (#f0f4f5). This helps aide the user’s gaze
- Consider the ink to page ratio. Do not use this unnecessarily  

#f0f4f5:  

![Rectangle of block colour in the shade #f0f4f5 NHS Grey 5, light grayish cyan](../hex-nhs-grey-5.png)  
  
    
**7. Limit your use of pagination.**
- Only use pagination if necessary
- Pagination is not as easily accessible for a screen reader
- It also runs the risk of all content not being seen to users, meaning users may miss out on key details, or they may have assumed there is no remaining data left to see  
      
**8. [Focus attention where necessary](../../decluttering/).**
- Separate (using a bold line) or highlight columns or rows that readers shouldn’t miss, such as an overall total
- Group summaries should be visually distinct
- Use bold, italics or colour only to group or highlight data
- [Colour](../../colour/) can be used to focus attention, and to help the user navigate the table
- Consider using different colours for different categories to help navigation
- Consider colouring or using symbols for values, such as the highest and lowest values in a column
- When colouring text use bright colours such as NHS blue (#005EB8)
- When colouring whole cells, rows or columns, choose a pastel background such as a 20% tint of the NHS blue (#B8DCFF)  

#B8DCFF:  

![Rectangle of block colour in the shade #B8DCFF NHS Blue 20% tint, pale blue](../hex-20-nhs-blue.png)  
  
    
**9. [Use filters and sorts to help the user](../../filters/).**
- Consider making your table filterable, searchable and sortable
- This should be easily accessible to the user, positioned in the top right above the table
- Consider how your table will be sorted  
      
**10. [Add suitable visualisations where appropriate](../../charts/chart-types/).**
- Bar charts, heatmaps and sparklines pull focus
- To show comparison and general trends
  
::: details Source

[What to consider when creating tables][table 2]

:::  
  
## Articles in this section

[table 1]: https://www.gov.uk/government/publications/examples-of-visual-content-to-use-on-govuk/examples-of-visual-content-to-use-on-govuk#tables
[table 2]: https://blog.datawrapper.de/guide-what-to-consider-when-creating-tables/