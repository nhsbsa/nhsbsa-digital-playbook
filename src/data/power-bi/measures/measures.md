---
layout: article
title: "Measures in Power BI"
description: "Guidance and best practice for using measures in Power BI"
status: DRAFT
tags: pbi-home
order: 10
review:
    last_reviewed_date: 2025-03-24
    review_cycle: ANNUAL
---
## What is a measure?  
  
In Power BI, a measure is a calculation using Data Analysis Expressions (DAX) language.  
  
Measures compute in real time as queries are generated in response to user interactions with visuals.  

It is best practice to transfer measures to the semantic model rather than having them on a single report, to avoid duplication. Multiple items (such as reports) can connect to one semantic model. This applies to all modes including direct lake and import.  
Examples of semantic model measures could be sum of sales split by salesperson or distinct count of employees that attended a meeting, as these may be used in multiple reports.  
  
Measures can exist only in a report if they will not be used elsewhere.  
Examples of report measures could be a dynamic title or a report version number, as these will not be used outside the individual report.  
  
Example DAX code for creating a sum of sales by salesperson measure:  
  
```
Total sales by salesperson = CALCULATE(SUM('Sales'[Value]), ALLEXCEPT('Sales', 'Sales'[Salesperson]))

```

Example DAX code for creating a dynamic title measure:  

```
Sales performance title = "Sales performance - " & SELECTEDVALUE('Date_dim'[Year], "all years")

```
  
!!! warning Important
DAX is used for many purposes, not just for creating measures
!!!  
  
## Measure vs calculated column  
  
A measure is different from a calculated column.  
  
Calculated columns exist as part of tables and are calculated on refresh, row by row.  
Measures are calculated on the fly, column by column.  
  
Examples of calculated columns include:

- a flag to identify a status
- duration between 2 dates
- age (today using DOB)  
  
## Implicit vs explicit measures  
  
It is best practice to use explicit, rather than implicit, measures to:  
  
- eliminate ambiguity
- avoid duplication
- be specific
- avoid renaming per use
- avoid configuring per use
- assign a meaningful name
- use complex DAX
- create item in Analyse in Excel
- use with Copilot    

### Implicit measures  
  
Implicit measures are not specific. If you do not specify the table name in the measure, you have to know which table it belongs to in order to know which columns are being referred to.  
  
For example:  
  
 ```
    Total sales = CALCULATE(SUM([Value]), [Refund flag] = 0)  

```  
In this example you have to know which table the measure is on, to know which "Value" to use.  
In Power BI you would not know if `[Value]` or `[Refund flag]` are columns or measures purely by this syntax.  

### Explicit measures  
  
These are measures that are specific, meaning that the DAX refers to exact tables and columns.  
  
For example:  
  
 ```
     Total sales = CALCULATE(SUM('Sales'[Value]), 'Sales'[Refund flag] = 0)  

```  
In this example the use of the table name means you can see that 2 columns from the Sales table are used.  
  
You should always create explicit measures so they are reusable. Using summarisation in visuals means setting the conditions and title manually everytime.
  
## Measure containers  
  
It is best practice to use measure containers, rather than to create measures on fact tables.  
  
Measures held in the semantic model should be stored in a "_Measures" table.  
Measures specific to a single report should be stored in a "_Measures for report" table.  
  
When looking at an in-service model there should be nothing listed in “_Measures for report” table.
  
### Why use measure containers?  
  
Use measure containers to:  
  
- ensure measures that relate to multiple tables are always accessible regardless of object security
- ensure consistency
- keep measures centralised
- organise measures into sub-folders
- make it easier to find measures
- use with Analyse in Excel
- force explicit measures