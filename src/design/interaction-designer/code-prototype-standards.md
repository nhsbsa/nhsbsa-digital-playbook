---
layout: article
title: "Code prototype standards"
description: "What standards code prototypes follow"
status: DRAFT
tags: interaction-design
order: 8
---

This guide lists all standards to be followed for code prototypes within the NHS Business Services Authority.

---

## Password protection
All prototypes are to follow the same password format as per agreed with Information Governance, this allows easier access internally.

Prototype passwords should be set to, NHSBSA.

---

## Up to date readme file
The readme file should be clear and concise, written in plain english, accessible to technical and non-technical people, and keep use of acronyms to a minimum.
### What you can include
- overview of the service or product
- what phase the service or product is in
- tech stack used (Node.js, NHS.UK Frontend, NHS.UK Prototype Kit, Nunjucks, HTML, CSS, JavaScript)
- prototype disclaimer i.e. may contain incomplete functionality, may use mock or static data, is subject to change, should not be used for operational or live decision-making
- NHSBSA specific instructions on installing
- instructions for running local

---

## Informative index page
The index page of a prototype should be informative and provide easy access to the following:

- overview of the service or product
- what phase the service or product is in
- latest prototype version link
- link to version history
- link to supporting documentation i.e. design log, confluence pages
- UCD members name and email (optional)

---

## Version history

All prototypes are to have a version history, and is accessible via the frontend. This should clearly present each version of the prototype, starting with the most recent.

If your list of versions goes beyond a point where the page is getting too long, use the pagination component.

### What to include within each version
- version number
- last updated (date)
- list of what the version includes i.e. iterations that have been made
- directory of all pages to allow quick access to any page
- relevant links to additional information i.e. design log

--- 

## Code comments
Provide comments against all custom code which may require additional context for a new designer on what it is doing.

If you think it could take some understanding, provide comments.

---

## Custom components and patterns
All custom designs must be documented in a design log, this should clearly state:

1. why there was a need to go off-pattern
2. what steps were taken to try and reuse a common component or pattern
3. what research has been completed for this off-pattern design
4. is it fully accessible to WCAG 2.2 standards

If you have created any custom components or patterns, all custom classes must start with the following prefix, `.nhsbsa-custom-componentName`, this will allow someone to find custom designs easier.

Once fully tested with users, share these with the BSA community and wider public sector.

### Sharing custom designs
[NHS - propose a component or pattern](https://service-manual.nhs.uk/community-and-contribution/propose-component-pattern)
[GOV.UK - propose a component or pattern](https://design-system.service.gov.uk/community/propose-a-component-or-pattern/)

You can also share custom designs on the [x-gov slack](https://ukgovernmentdigital.slack.com/) and [nhs service manual channels](https://nhs-service-manual.slack.com/signup#/domain-signup).

---

## Routes file versioning
Routes.js should be versioned along with a new iteration of the prototype, each version of the prototype created should have it's own routes.js file, this will then be added to the main routes.js file at the root of your app folder.

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
All prototypes should be versioned, therefor folder structure should also be clear.

### Example folder structures
```
app/views/
- v1
- v2
- v3
```

If your set up varies, each variation should also be clearly structured, for example,
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
Prototypes should have the default NHS England copyright changed to Crown copyright.

On a live service, this notice may differ depending on where the service is located, you may need to seek legal advice within your service around ownership.

Reach out to the Head of Service or Product Owner for confirmation of service or product ownership.

--- 

## Prototype data

Provide less restrictions on data required to navigate through a prototype's happy path.

When providing different flows and unhappy paths, then provide the relevant data needed clearly, or provide a different way to start the flow, for example, a way for someone to choose which flow they want to go through.

### Example of directing specific flows
This can be done by providing buttons, radio buttons or checkboxes at the beginning to decide a specific user flow to take, instead of needing to enter specific data to navigate the prototype screens.

--- 

## Use of nunjucks

Nunjucks is provided for common components in the NHS Service Manual, it is recommended to use these where possible, this is to allow an easier update of the prototype with less manual input being required.

This is optional, you will not be expected to use nunjucks if your prototype requires custom code to be written, or if you require further skills in the use of nunjucks.

### Nunjucks support
- [Nunjucks template documents](https://mozilla.github.io/nunjucks/templating.html)
- You can see nunjucks used in [Build a basic prototype](https://prototype-kit.service-manual.nhs.uk/guides/build-basic-prototype/) on the service manual

---

## Footer links

At the time of prototyping, include relevant footer links.

For example,
- Accessibility statement
- Cookies
- Privacy policy
- Terms and conditions

New links may need adding at a later stage.