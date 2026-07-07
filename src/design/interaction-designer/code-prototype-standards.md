---
layout: article
title: "NHSBSA code prototype standards"
description: "What standards code prototypes follow"
tags: interaction-design
order: 8
---
--- 

## Password protection
All prototypes are to follow the same password format as per agreed with Information Governance, this allows easier access internally.

If you're unsure of the password format, you can reach out to the lead interaction designer or a member of the interaction design community.

---

## Up to date readme file
The readme file should:  
- be clear and concise 
- be written in plain English 
- be accessible to technical and non-technical colleagues 
- keep use of acronyms to a minimum 

You can include:
- an overview of the service or product
- the phase the service or product is in
- the tech stack used (Node.js, NHS.UK Frontend, NHS.UK Prototype Kit, Nunjucks, HTML, CSS, JavaScript)
- a prototype disclaimer (for example, may contain incomplete functionality, may use mock or static data, is subject to change, should not be used for operational or live decision-making) 
- NHSBSA specific instructions on installing
- instructions for running local

---

## Informative index page
The index page of a prototype should be informative and provide easy access to the:

- overview of the service or product
- what phase the service or product is in
- latest prototype version link
- link to version history
- link to supporting documentation i.e. design log, confluence pages
- UCD member's name and email (optional)

---

## Version history

All prototypes should have a version history that’s accessible in the frontend. You should clearly list each version of the prototype, starting with the most recent.

If your list of versions becomes too long, use the pagination component. 

In each version, you should include: 
- the version number
- the date the prototype was last updated 
- a list of what the version includes (for example, iterations that have been made) 
- a directory of all pages to allow quick access to any page 
- relevant links to additional information (for example, design logs) 

--- 

## Code comments
You should provide comments against all custom code as new designers may need additional context on what it is doing.

---

## Custom components and patterns
You must document all custom designs in a design log which clearly states: 

- why there was a need to go off-pattern 
- what steps you took to try and reuse a common component or pattern 
- what research you completed for this off-pattern design 
- if the off-pattern design is fully accessible to WCAG 2.2 standards 

If you’ve created any custom components or patterns, you must start all custom classes with the following prefix `.nhsbsa-custom-componentName`.

This will allow someone to find custom designs easier. 

Once you’ve fully tested this component with users, you should share these with the NHSBSA community and wider public sector. 

### Sharing custom designs
[NHS - propose a component or pattern](https://service-manual.nhs.uk/community-and-contribution/propose-component-pattern)
[GOV.UK - propose a component or pattern](https://design-system.service.gov.uk/community/propose-a-component-or-pattern/)

You can also share custom designs on the [x-gov Slack](https://ukgovernmentdigital.slack.com/) and [NHS service manual channels](https://nhs-service-manual.slack.com/signup#/domain-signup).

---

## Routes file versioning
Routes.js should be versioned along with a new iteration of the prototype, each version of the prototype created should have it's own routes.js file. You then need to add this to the main routes.js file at the root of your app folder.

For example, You would create a partial routes.js file (_routes.js) within the new version folder
`views/v3/_routes.js`, this would then be mounted (included) into the main routers file.

### Example main routes.js file
```
// External dependencies
const express = require('express');
const router = express.Router();

// versioned prototype routes
router.use('/v3', require('./views/v3/_routes'));
router.use('/v2', require('./views/v2/_routes'));
router.use('/v1', require('./views/v1/_routes'));

module.exports = router;
```

---

## Clear folder structure
As all prototypes are versioned, folder structure should also be clear.

### Example folder structures
```
app/views/
- v1
- v2
- v3
```

If your set up varies, each variation should also be clearly structured. For example,
```
app/views/admin/
- v1
- v2
- v3

app/views/external/
- v1
- v2
- v3
```

---

## Footer copyright
You should change the default NHS England copyright to Crown copyright in your prototypes. 

On a live service, this notice may differ depending on where the service is located. You may need to seek legal advice within your service around ownership. 

Reach out to the Head of Service or Product Owner for confirmation of service or product ownership. 

--- 

## Prototype data

Provide fewer restrictions on data required to navigate through a prototype’s happy path. 

When providing different flows and unhappy paths, you should clearly show the data needed to progress, or provide a different way to start the flow. For example, a way for someone to choose which flow they want to go through. 

Instead of the user needing to enter specific data to navigate prototype screens, you could add components at the beginning of the flow to help them decide which path to take. For example:
- buttons
- radio buttons  
- checkboxes 

--- 

## Use of nunjucks

Nunjucks are provided for common components in the NHS service manual.  

We recommend using nunjucks where possible - they make updating the prototype easier as less manual input is required. 

You do not need to use nunjucks if your prototype uses custom code.

### Nunjucks support
- [Nunjucks template documents](https://mozilla.github.io/nunjucks/templating.html)
- [Build a basic prototype on the NHS service manual](https://prototype-kit.service-manual.nhs.uk/guides/build-basic-prototype/)

---

## Footer links

Include relevant footer links in your prototype. 

For example,
- Accessibility statement
- Cookies
- Privacy policy
- Terms and conditions

You may need to add new links at a later stage.