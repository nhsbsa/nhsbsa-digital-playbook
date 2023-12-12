---
layout: article
title: "Designing for accessibility"
description: "How do we design for accessibiliity at the NHSBSA?"
status: REVIEW
tags: accessible-data
order: 3
---
## UK Home Office 'Designing for accessibility' posters  

The UK Home Office created ['Designing for accessibility' posters.][home office posters]

They include Dos and Don’ts for supporting individuals: 

- on the autistic spectrum 
- who use screen readers 
- with low vision 
- with dyslexia 
- with physical or motor disabilities 
- who are Deaf or hard of hearing 
- with anxiety  
  
## Content design standards on numbers and money  
  
The following tips are the most relevant to data visualisation. 

When writing numbers: 

- use ‘one’ unless you’re talking about a step, a point in a list or another situation where using the numerical symbol makes more sense 
- write all other numbers using the numerical symbol, including 2 to 9, except where it’s part of a common expression like ‘one or two of them’ 
- insert a comma to add clarity for values over 1,000, for example, 9,000 
- use spacing between area and exchange codes for telephone numbers, for example, 0191 123 4567 

When mentioning money: 

- use the ‘£’ symbol 
- do not use decimals unless pence are included, for example, ‘£75.50’ but not ‘£75.00’ 
- separate large amounts of money using commas, for example, ‘£10,000’ not ‘£10000’ 
- format amounts in millions or billions as ‘£X million’ or ‘£X billion’, do not writ out in full 
- do not use ‘£0.XX millions’ for amounts less than £1 million   

This information is based on the [GOV.UK style guide][https://www.gov.uk/guidance/style-guide/a-to-z].
Internal NHSBSA colleagues can find further information on the [Content Design Team page][numbers 1].

## Accessibility of colours  

Refer to the [Colour Guidance page](../../colour/) for standards on:

- accessible colour use
- palettes
- appropriate contrasts to use

We follow [NHS identity guidelines][service manual] to help make sure we are accessible to users.  

Make sure there is enough of a contrast between the colours used. The [Web Content Accessibility Guidelines (WCAG)][https://www.w3.org/TR/WCAG22/#contrast-minimum] require a 3 to 1 ratio for graphical elements and 4.5 to 1 ratio for text. 
The [WebAIM Colour Contrast Checker][webaim 1] may help, or this [Colour Contrast Checker][webaim 2].  

Do not use colour as the only way to communicate something. Patterns can be used, but they can be cluttering and hard to see. It’s recommended to have an alternative way to get the same information, for example, by having figures available to the user.   
  
::: details Source - WCAG

[WCAG 2.2 Use of Colour][use of colour]

:::

## Designing charts for accessibility  
  
Charts can often be confusing, and enabling a user to understand the content shown is one of our primary purposes in development.  

Some best practices for designing charts accessibly:

To design charts accessibly you should: 

1. declutter where possible, making content efficient and effective
    - removing gridlines 
    - using minimum colours
    - avoiding a busy chart 
2. include alt text (for people with low vision, those who find charts confusing or are unable to view the chart for other reasons) 
3. include the source of your data, to allow users to familiarise themselves with the data and aid data literacy 
4. use horizontal text
5. make sure your product adapts for smaller screens
6. use Sans serif font- it's more understandable for people with dyslexia
7. make sure your chart text is as large as is reasonable
8. choose the most appropriate chart type, to aid a user’s understanding
9. make sure chart descriptions are earlier in the tab order than the chart being described, to allow users (particularly those using a screen reader) to pick up the information before a chart is shown
10. label all buttons, hyperlinks, and necessary features accurately
11. make links descriptive of where they lead the user  

Some things to avoid are:

- removing useful content when decluttering
- usng wonky text
- using italics- they can be hard for a user to read
- misleading the user

## Spreadsheet accessibility  
  
There is a [checklist to follow online][gov 1] which the Government Analysis Function created.  
The following links may also be useful:

- [Releasing Statistics in Spreadsheets][gov 2]
- [Make your Excel documents accessible to people with disabilities - Microsoft Support][microsoft]  

[home office posters]: https://github.com/UKHomeOffice/posters/blob/master/accessibility/dos-donts/posters_en-UK/accessibility-posters-set.pdf
[gov 1]: https://analysisfunction.civilservice.gov.uk/policy-store/making-spreadsheets-accessible-a-brief-checklist-of-the-basics/
[gov 2]: https://analysisfunction.civilservice.gov.uk/policy-store/releasing-statistics-in-spreadsheets/
[microsoft]: https://support.microsoft.com/en-us/office/make-your-excel-documents-accessible-to-people-with-disabilities-6cc05fc5-1314-48b5-8eb3-683e49b3e593
[numbers 1]: https://nhsbsauk.sharepoint.com/sites/DigitalContentDesignTeam/SitePages/NHSBSA-digital-style-guide-and-standards.aspx
[webaim 1]: https://webaim.org/resources/contrastchecker/
[webaim 2]: https://contrastchecker.com/
[use of colour]: https://www.w3.org/TR/WCAG22/#use-of-color
[service manual]: https://service-manual.nhs.uk/design-system/styles/colour