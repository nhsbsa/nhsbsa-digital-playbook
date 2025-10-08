---
layout: article
title: "Accessible development"
description: "Building accessibily from the start"
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

As a developer, you play a key role in making our services accessible. Good design is only effective if it’s built correctly. Accessibility must be considered in every line of code, from the start.

Accessible development ensures that everyone, including disabled people, can use our services. It also reduces technical debt, since fixing accessibility issues later is more costly.

Using NHS.UK frontend does not mean your service automatically meets level AA of WCAG 2.2. You’ll still need to make sure your service as a whole meets accessibility requirements.

## Working with others
- Collaborate with interaction and content designers to make sure designs translate into accessible code.
- Pair with testers so accessibility checks are included as part of the definition of done.

### Web Content Accessibility Guidelines (WCAG)
WCAG is a list of criteria your website or mobile application need to meet to be legally compliant with the accessibility regulations. The latest published version of WCAG is [WCAG 2.2](https://www.w3.org/TR/WCAG22/).

The WCAG criteria are divided into three levels: A, AA and AAA. Each level builds on the one before it, so to meet AA, your product must meet all the A and AA criteria.

For your website or application to be compliant, it needs to meet the level of AA.

WCAG has 55 criteria at levels A and AA. This can feel like a lot, but some criteria only apply if your service uses features like video or audio.

While the official guidelines can be detailed, there are user-friendly versions with plain English explanations and practical examples that make them easier to follow:

- [GOV.UK accessibility testing guide](https://github.com/alphagov/wcag-primer/wiki) – Features explanations of WCAG criteria written in plain English, with examples of passes and failures
- [How to meet WCAG (Quick reference) - W3C](https://www.w3.org/WAI/WCAG22/quickref)

### The four WCAG principles
WCAG 2.2 is a list of criteria. Each one is specifically designed to consider a particular user need, but will fit into one of the following 4 categories:

- Perceivable – information must be visible or audible (e.g. text alternatives for images, not relying on colour to convey information)
- Operable – users must be able to interact with it (e.g. navigating to all interactive components using only a keyboard)
- Understandable – content must be clear and predictable (e.g. forms tell you what went wrong)
- Robust – works across devices and assistive technologies (e.g. screen readers, voice controllers, screen magnifiers)



## Things to consider

### Existing patterns and components

### Alternative text for non-text content

### Announce dynamic content

### Using semantic HTML


## Common accessibility failures


## Where to learn more
- [Accessible guidance for: Development - NHS Digital service manual](https://service-manual.nhs.uk/accessibility/development)
- [GOV.UK Design System accessibility guidance](https://design-system.service.gov.uk/accessibility/)
- [DWP accessibility manual](https://dwpdigital.github.io/accessibility-manual/)
- [Accessible HTML - Mozilla](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility/HTML)
- [WAI-ARIA basics](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics)

## Resources
- [Guidance for Developers - DWP Accessibility Manual](https://accessibility-manual.dwp.gov.uk/guidance-for-your-job-role/software-engineer-or-frontend-developer)
- [10 digital accessibility mistakes to avoid - GOV.UK Blog](https://accessibility.blog.gov.uk/2025/02/04/10-digital-accessibility-mistakes-to-avoid/)
- [Unlocking Accessibility: Frontend developer discuss semantic HTML and accessible code - GOV.UK Blog](https://accessibility.blog.gov.uk/2025/04/25/unlocking-accessibility-frontend-developers-discuss-semantic-html-and-accessible-code/)
