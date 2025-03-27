---
layout: article
title: "User friendly naming conventions"
description: "Guidance for user friendly column and table names for reporting use"
status: FINAL
tags: data-viz-home
order: 130
review:
    last_reviewed_date: 2024-12-20
    review_cycle: ANNUAL
---
## Purpose of the document  
  
 The purpose of this document is for reporting use, for columns and tables in the Semantic model. If you are reporting data into a CSV or spreadsheet format, internal standard capitalisation and formatting should be used.  
   
## User-friendly names  
  
The term ‘user-friendly’ is used for names designed to be easily understood by end-users.  
  
User friendly names are designed for end-users, typically simpler, more descriptive, and non-technical. For example, ‘ICB name’.  
  
## Importance of user-friendly names  
  
Ensuring that user-friendly names given to columns and tables within the Semantic model is important, so that both report builders and consumers of the report can easily use and understand the column names and tables.  
  
Having set guidelines to follow on user-friendly names is important for the end-product as it enables ease-of-use in building and requires less manual intervention.  
  
For example, if column ‘REFERRAL_TREATMENT’ was renamed to ‘Referral treatment’, ‘AGE’ to ‘age’, and ‘YEAR_MONTH’ to ‘Year’ and ‘Month’ within a Date table, a report developer could drag and drop those columns into a bar chart, which would auto-populate:  
  
A title of: ‘Referral treatment by Year, Month and Age’  
The x axis: ‘Year, Month’  
The y axis: ‘Referral treatment’  
  
Please note, any summarisation and renames of titles or axis labels would need to be done by the developer, but may affect the dynamic title generation given. Any aggregations such as summation should be written as a measure, e.g. ‘Sum of referral treatment’.  
  
In a Date table, it is recommended to capitalise each word, e.g. ‘Year’ and ‘Month’. These fields will typically be used alone, as an axis label, or as a report slicer.  
  
## Unnecessary capital letters  
  
Avoid using [unnecessary capitals][naming 2]. They change the shape of the word which causes issues for some people with dyslexia, as well as causing confusion for some users.  
  
Only use capital letters for:  
  
- starting a sentence, column name or title name
- proper nouns, such as names and places
- schemes
- organisation names, such as 'NHS Business Services Authority'
- acronyms, such as 'NHS'
- job titles when linked to the holder, such as '(name), Software Developer'  
  
!!! warning Please note
The naming format of a system, for example 'eDEN', 'eOPS', 'ePACT2', is an exception to the proper noun rule.
!!!  
  
## Language  
  
Language should be simplified where possible, whilst retaining meaning. A data dictionary should be provided to the developer and end user to ensure data literacy regarding the data product.  
  
For example, columns:  
  
- 'TREATMENT_ON_REFERRAL' should be changed to 'Treatment'
- 'DATE_OF_REFERRAL' should be changed to 'Referral date'  
  
In both cases, the table name should reflect the data referred to, concise, user-friendly and explicit to end users. Using the column examples above, for a table name, additional details to include the content of the table can be added, e.g. ‘FP17 referral of other services’.  
  
Any names referring to data processing steps, and not for use in a report itself should be removed. For example: ‘S_DS_FORM_VISIT_FACT’ would have ‘Fact’ removed and may be amended to: ‘FP17 referral of other services’, as long as the meaning was clear to the end user.  
  
But for a renamed ‘ICB ID’ column, ‘ID’ which is typically used for data processing, may still be kept for use as this is often used by the end user to filter the data, keeping the column name as ‘ICB ID’.  
  
## General rules  
  
Write in plain English.  
  
Do not shorten words unnecessarily, for example:  
  
- 'Reg Forms With Medical History' would be 'Registration forms with medical history'
- 'Patient Count (Excl Triage)' would be 'Patient count excluding triage'  
  
Use well known words. Do not use jargon or technical language unless it is needed and you are writing for a user who is familiar with the terminology. The terminology should be defined in a glossary for the end user to refer to.  
  
If any additional information is needed to be given, this should be separated with a comma alike a sentence structure. For example, ‘Ortho Child Form Count Year to Date (age at DOA)’ would be ‘YTD orthodontic child form count, DOA age’.  
  
If you use an acronym, always refer to this in supporting documentation of the product.  
  
Ensure the meaning of your wording is clear to an end user. If there is possible doubt, describe this to the end user in the supporting document.  
  
Column titles should be as concise as possible. [Column titles][naming 3] are used for visualisation titles which need to be as concise as possible and be 15 words or fewer.  
  
## Data formats  
  
Reduce the use of symbols where possible unless needed for context. Dashes, hyphens and underscores should not be present in a column name unless absolutely necessary. For example, a dash can be used for a number range, such as ‘20-25 age’. Hyphens can be used where needed for a compound word, such as "socio-economic" and "world-class".  
  
Any data formats including currency such as pound sterling (£) should be placed at the end of a column.  
  
### Currency  
  
When mentioning [money][naming 4], use the ‘£’ symbol if this is needed to distinguish between an alternative currency but adding (£) to the end of the column name. As GBP (£) is the default currency used and there is typically not a need to distinguish between an alternative currency, currency can be removed. For example:  
  
- when solely working with GBP: ‘Clawback (£) DOM’ would be ‘Clawback DOM’
- when working across currencies: ‘Indicative Cost (£)’ would be ‘Indicative cost (£)’  
  
### Percentage  
  
Any data formats such as a percentage (%) should be placed at the end of a column. For example, ‘% Activity Delivered’ would be ‘Activity delivered (%)’.  
For ‘on-target percentage’ use the acronym OTP to prefix the column detail.  
  
### Units  
  
For units measuring weight or distance, include the unit at the end of the column name. For example:  
  
- ‘Distance Travelled in Miles (PPC)’ would be ‘PPC distance travelled (miles)’  
- ‘Distance Travelled in Miles (KM)’ would be ‘PPC distance travelled (km)’
- ‘Prescribing to Dispensing Distance Band (Miles)’ would be ‘Prescribing to dispensing distance (miles)’  
  
In the first example, PPC was removed from in the brackets and used for additional context to lead the column title. In the last example, the word ‘band’ was removed as it did not provide additional context.  
  
### Ampersands  
  
Use the word 'and' rather than the [ampersand symbol][naming 5].  
  
'And' is easier to read and easier to skim. Some people may find ampersands harder to understand.  
  
An exception to this would be when referring to a company's name as it appears on the [Companies House register][naming 6].  
  
### Clarity in terminology  
  
If age is needed, avoid acronyms such as ‘y/o’. Use the format ’26-32 age’ and specify further detail if needed, by using terms such as ‘inclusive’. For example:  
  
- ‘Assess & Review 0-9yo Rate’ would be ‘Access and review rate of 0-9 age’ 
- ‘Female Aged 0 To 18 Inclusive’ would be ‘Female 0-18 age inclusive’  
  
## Reporting acronyms  
  
Commonly known analytical terms can be used as acronyms as long as they are referred to in any supporting information, including the calculation used to produce them. Examples include:  
  
- FY – Financial Year 
- MTD – Month to Date 
- YTD – Year to Date 
- QTD – Quarter to Date 
- FYTD – Financial Year to Date 
- YoY – Year on Year 
- MoM – Month on Month 
- OTP – On-target percentage  
- 12MR – 12-month rolling 
- 12M – 12-month period of data  
  
Reporting acronyms should go before the remaining column detail. For example:  
  
- ‘YoY growth’ 
- ‘MTD performance’ 
- ‘LHB Dental History Green Forms – FYTD’ would be ‘FYTD LHB dental history green forms’ 
- ‘Ortho Child Form Count Year to Date (age at DOA)’ would be ‘YTD orthodontic child form count, DOA age’  
  
In the 4th example, words were extended and additional detail was given separated by a comma. The definition of LHB as a Local Health Board, and DOA as Date of Acceptance would be provided to users in a glossary.  
  
## Date formats  
   
If dates are needed in a column name, they should lead the column name to give additional details. Financial years should be in the format YYYY/YY, whereas Month-Year formats should be ‘MMMM YYYY’ format, where the full name of the month is given. This reduces confusion for the end user in the formats given. For example:  
  
- ‘Commissioner Code 2020/03’ would be ‘March 2020 commissioner code’ 
- ‘Adjusted Scheduled UDA 2019/20’ would be ‘2019/20 adjusted scheduled UDA’  
  
For the 2nd example, UDA will be defined as Units of Dental Activity in a glossary for the end user.  
  
## Table names  
  
The same naming conventions apply for table names. Table names should be used to give an umbrella understanding to the user of what the table includes. It is worth noting that in Power BI, the beginning words of a table name is the extent to which a report builder can see, therefore it is worth ensuring that the beginning words of a table are concise, distinctive and meaningful to an end user to separate the names.  
For example, table names ‘Dental history’, ‘Medical history’ and ‘Social history’ are the preferred format, rather than starting with ‘History of…’.

[naming 1]: https://nhsbsauk.sharepoint.com/sites/DigitalContentDesignTeam/SitePages/NHSBSA-digital-style-guide-and-standards.aspx#unnecessary-capital-letters
[naming 2]: https://nhsbsauk.sharepoint.com/sites/DigitalContentDesignTeam/SitePages/NHSBSA-digital-style-guide-and-standards.aspx
[naming 3]: https://nhsbsauk.sharepoint.com/:w:/s/DataWarehouse/EVregjegr6RImlbkunpSD58BDKGrz5tudmka6HBsfFPsVw?e=mn982r
[naming 4]: https://nhsbsauk.sharepoint.com/sites/DigitalContentDesignTeam/SitePages/NHSBSA-digital-style-guide-and-standards.aspx#money
[naming 5]: https://nhsbsauk.sharepoint.com/sites/DigitalContentDesignTeam/SitePages/NHSBSA-digital-style-guide-and-standards.aspx#ampersands
[naming 6]: https://find-and-update.company-information.service.gov.uk/