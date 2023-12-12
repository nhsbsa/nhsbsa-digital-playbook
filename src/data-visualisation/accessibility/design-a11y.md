---
layout: article
title: "Designing for accessibility"
description: "How do we design for accessibiliity at the NHSBSA?"
status: DRAFT
tags: [data-viz, data-viz-a11y]
order:
    data-viz: 2
    data-viz-a11y: 3
---
## Designing for accessibility  

The UK Home Office created ['Designing for accessibility' posters.][home office posters] 

The posters include Dos and Don’ts for individuals:  
- on the autistic spectrum
- who use screen readers
- with low vision
- with dyslexia
- with physical or motor disabilities
- who are d/Deaf or hard of hearing
- with anxiety  
  
## Content design standards on numbers  

The following tips are the most relevant to data visualisation.  

Numbers:  
- Use ‘one’ unless you’re talking about a step, a point in a list or another situation where using the numeral makes more sense 
- Write all other numbers in numerals, including 2 to 9, except where it’s part of a common expression like ‘one or two of them’ 
- Insert a comma to add clarity for values over 1,000, for example, 9,000
- Use spacing between area and exchange codes for telephone numbers, for example, 0191 123 4567  

Money:
- Use the ‘£’ symbol  
- Do not use decimals unless pence are included, for example, '£75.50' but not '£75.00' 
- Separate large amounts of money using commas, for example, '£10,000' not '£10000' 
- For amounts in millions or billions, format as '£X million' or '£X billion', not written in full 
- Do not use '£0.XX millions' for amounts less than £1 million  

::: details Source
 
[Content Design Team ][numbers 1]

::: 


## Accessibility of colours  
Please refer to the [Colour Guidance document](../../colour/) for standards on accessible colour use, palettes and appropriate contrasts to use.  


For colour contrast; ensure there is enough of a contrast between the colours used. The Web Content Accessibility Guidelines (WCAG) which the UK accessibility legislation aligns to, require a 3 to 1 ratio for graphical elements and 4.5 to 1 ratio for text.  
The [WebAIM Colour Contrast Checker][webaim 1] may help, or [this Colour Contrast Checker][webaim 2].  

  
It is important to remember that you must not use colour as the only way to communicate something. Patterns can be used, but they can be cluttering and harder to see. It is always recommended to have an alternative way to gain the same information, for example, by having figures available to the user.  
  
::: details Source
 
[WCAG 2.1 Use of Colour][use of colour]

:::



## Designing charts for accessibility  
  
Charts can often be confusing to a user, and enabling a user to understand the content shown is one of our primary purposes in development.  

Some best practices for designing charts accessibly:  
- Declutter where possible, but do not remove any useful content. Content should be efficient and effective
* Remove gridlines 
* Minimum colours
* Don’t have a busy chart  
- Include alt text (for people with low vision or those who find charts confusing)
- Include the source of your data, to allow users to familiarise themselves with the data and aid data literacy
- No wonky text, horizontal is best
- Don’t use italics, this can be hard for a user to read
- Make sure your product adapts for smaller screens. This is another reason why a text alternative for a chart is recommended
- Sans serif font is more understandable for people with dyslexia. Make sure your chart text is as large as is reasonable
- Don’t mislead the user, for example, start a chart’s y axis from 0 can help ensure the user understands the data clearly
- Choosing the right type of chart, to aid a user’s understanding
- Be aware of where your content is placed. Chart descriptions should appear above a chart to allow a screen reader to pick up the information before a chart is shown
- Label all buttons, hyperlinks, and necessary features accurately
- If a hyperlink is included, hyperlink appropriate text describing the hyperlink; this is suitable for a screen reader to pick up

## Spreadsheet accessibility  
  
There is a checklist to follow online which the Government Analysis Function created.  
The following links may also be useful:  
- [Making spreadsheets accessible: a checklist of the basics – Government Analysis Function][gov 1]
- [Releasing Statistics in Spreadsheets][gov 2] 
- [Make your Excel documents accessible to people with disabilities - Microsoft Support][microsoft]  
  
    
[Back to Accessibility home](../a11y/)



[home office posters]: https://github.com/UKHomeOffice/posters/blob/master/accessibility/dos-donts/posters_en-UK/accessibility-posters-set.pdf
[gov 1]: https://analysisfunction.civilservice.gov.uk/policy-store/making-spreadsheets-accessible-a-brief-checklist-of-the-basics/
[gov 2]: https://analysisfunction.civilservice.gov.uk/policy-store/releasing-statistics-in-spreadsheets/
[microsoft]: https://support.microsoft.com/en-us/office/make-your-excel-documents-accessible-to-people-with-disabilities-6cc05fc5-1314-48b5-8eb3-683e49b3e593
[numbers 1]: https://nhsbsauk.sharepoint.com/sites/DigitalContentDesignTeam/SitePages/NHSBSA-digital-style-guide-and-standards.aspx
[webaim 1]: https://webaim.org/resources/contrastchecker/
[webaim 2]: https://contrastchecker.com/
[use of colour]: https://www.w3.org/TR/WCAG21/#use-of-color