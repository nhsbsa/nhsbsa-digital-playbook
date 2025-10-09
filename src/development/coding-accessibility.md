---
layout: article
title: "Accessible development"
description: "Building accessibly from the start"
tags: [dev, a11y]
order: 
  dev: 1
  accessibility: 1
related:
  title: Related articles
  tag: a11y
review:
    last_reviewed_date: 2025-10-7
    review_cycle: ANNUAL
---

Developers play a key role in making NHSBSA services accessible. Good design only works if it’s built accessibly. Accessibility must be part of every line of code, from the start.

Building accessibly means everyone, including disabled people, can use our services. It also reduces technical debt, as fixing accessibility issues later is more time consuming and costly than addressing them before they've been deployed.

Although the components in the NHS.UK frontend have been research, designed, developed and tested for accessibility. Using NHS.UK frontend components does not automatically guarantee WCAG 2.2 Level AA compliance. You must still implement them accessibly and test your pages before passing them on.

## Web Content Accessibility Guidelines (WCAG)
WCAG is a list of success criteria your website or mobile application need to meet to be legally compliant with the accessibility regulations. The latest published version of WCAG is [WCAG 2.2](https://www.w3.org/TR/WCAG22/).

At a minimum our services need to meet WCAG 2.2 to Level AA standard. There are 55 success criteria that your websites will need to meet. You can read more about WCAG on our [Accessibility playbook page](/nhsbsa-digital-playbook/accessibility/).

For further guidance on meeting the WCAG 2.2 success criteria, see:
- [GOV.UK accessibility testing guide](https://github.com/alphagov/wcag-primer/wiki)
- [Department for Education WCAG explorer](https://accessibility.education.gov.uk/guidelines/wcag/explorer)
- [How to meet WCAG (Quick reference) - W3C](https://www.w3.org/WAI/WCAG22/quickref)
- [The NHS accessibility checklist and guidance for developers](https://nhsdigital.github.io/accessibility-checklist/checklist-developer/)

## Existing patterns and components
Always start by using the existing patterns and components in the [NHS Design System](https://service-manual.nhs.uk/design-system) and the [GOV.UK Design System](https://design-system.service.gov.uk/).

These components often have accessibility considerations built in, so it’s not enough to just style your components to look similar.

You should work with an Interaction Designer to understand what parts of the design exist already. If you need to build something from scratch you will need to do additional work to make sure it’s accessible.

### Pattern libraries
Even if you’re using the NHS Frontend, the GOV.UK Design System can help you check which HTML attributes you need to make components accessible. 

For example, when building an email input, you can use the [NHS text input component](https://service-manual.nhs.uk/design-system/components/text-input), then check the [GOV.UK email address pattern](https://design-system.service.gov.uk/patterns/email-addresses/) to make sure you’re using the right HTML attributes such as `type` and `autocomplete`.

Use the NHS and GOV.UK pattern libraries to check components and find best practice examples:
- [NHS Design system patterns](https://service-manual.nhs.uk/design-system/patterns)
- [GOV.UK Design system patterns](https://design-system.service.gov.uk/patterns/)

## Creating new components
Occasionally you may be required to make new components. New components should be researched, designed and developed to be accessible from the start. 

Use your browser’s developer tools to inspect the [accessibility tree](https://developer.mozilla.org/en-US/docs/Glossary/Accessibility_tree). The accessibility tree shows how assistive technologies, like screen readers, will interpret your component. Check that components convey the correct information through their **roles**, **states**, and **properties**.

Test components to make sure they:
- work with assistive technologies, such as screen readers and voice control
- work with keyboard-only navigation
- work with zoom and large text
- do not rely on colour alone to convey information
- have accessible focus styles

For examples of common accessibility issues, view the [10 digital accessibility mistakes to avoid](https://accessibility.blog.gov.uk/2025/02/04/10-digital-accessibility-mistakes-to-avoid/) on the GOV.UK blog.

## Accessibility checks before pushing code
After writing code, check that your work meets accessibility standards. View the [NHS developer accessibility checklist](https://nhsdigital.github.io/accessibility-checklist/checklist-developer/) to help you check your code before you push it. 

The following sections include items you should review before pushing code. It applies to all pages and components, whether new or updated.

### Web pages
- page titles are correct and descriptive. They should include the H1, the service, and the organisation 
- HTML language is set correctly using the `lang` attribute
- use semantic HTML elements where possible, rather than relying on generic `<div>` or `<span>` tags
- landmark regions are used to help screen reader navigation
- skip links are present to assist keyboard users
- URLs are clear, unambiguous, easy to read, easy to type, and easy to share

### Form fields and inputs
- form inputs have correct labels, type, and autocomplete attributes
- error messages are implemented correctly and linked to inputs or fieldsets using `aria-describedby`
- components communicate correctly through roles, states, and properties in the accessibility tree

### Colour and visual design
- information is not conveyed by colour alone
- colour contrast ratios meet accessibility standards
- visually hidden text has been considered to assist screen reader users

### Check interaction and navigation
Before pushing your code, you should check your pages:
- with a screen reader
- with keyboard only navigation
- test at 400% zoom using a browser window of 1280 px × 1024 px to ensure content reflows into the viewport. 
- focus order and keyboard navigation behave as expected
- dynamic content updates are announced correctly and in a timely manner for users of assistive technologies

### Automated and technical checks
Automated tools don’t catch every issue, but used alongside manual testing they provide good coverage:
- [axe DevTools](https://chromewebstore.google.com/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd)
- [WAVE](https://wave.webaim.org/extension/)
- [Google Lighthouse](https://developer.chrome.com/docs/lighthouse/overview)
- [HTML validator](https://validator.w3.org/nu/)

## Working with others
- Collaborate with interaction and content designers to make sure designs translate into accessible code.
- Pair with testers so accessibility checks are included as part of the definition of done.

## Where to learn more
- [Accessible guidance for: Development - NHS Digital service manual](https://service-manual.nhs.uk/accessibility/development)
- [Accessibility guidance - GOV.UK Design System ](https://design-system.service.gov.uk/accessibility/)
- [Guidance for Developers - DWP Accessibility Manual](https://accessibility-manual.dwp.gov.uk/guidance-for-your-job-role/software-engineer-or-frontend-developer)
- [Accessible HTML - Mozilla](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility/HTML)
- [WAI-ARIA basics - Mozilla](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics)

## Acknowledgements
Parts of this page are adapted from guidance published by:
- [Department for Education Accessibility and inclusive design manual](https://accessibility.education.gov.uk/)  
- [DWP Accessibility manual](https://accessibility-manual.dwp.gov.uk/)
- [NHS Digital Service Manual](https://service-manual.nhs.uk/)  
- [GOV.UK Service Manual](https://www.gov.uk/service-manual)
