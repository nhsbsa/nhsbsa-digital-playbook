---
layout: article
title: "Frontends"
tags: dev
order: 11
review:
    last_reviewed_date: 2023-05-06
    review_cycle: ANNUAL
---
## Accessibility

Producing accessible websites and applications is a fundamental part of frontend development at the NHSBSA.

For detailed guidance, read our [Accessible development](/nhsbsa-digital-playbook/development/coding-accessibility/) page. It explains how to build accessible services, use existing NHS and GOV.UK components, create new components, and test your work using manual and automated tools.

You should also refer to:
- the Government service manual for guidance on [making your service accessible][making_your_service_accessible] and [publishing accessibility statements][gov_accessibility_statement]
- the NHS service manual for [design][nhs_accessibility_design], [development][nhs_accessibility_development] and [testing][nhs_accessibility_testing] guidance.

As a frontend developer at the NHSBSA you should:
- design and build using [progressive enhancement][gov_progressive_enhancement]
- build responsive, mobile-first interfaces that work across the devices in the [GOV.UK browser and device guidance][gov_browser_compatibility]
- keep up to date with NHS, GOV.UK and accessibility best practice
- follow the accessibility checks and processes listed in our [Accessible development](/nhsbsa-digital-playbook/development/coding-accessibility/) page before pushing code
- test your work with a keyboard, assistive technologies and automated tools

## NHS and GOV.UK design systems

We use the [NHS design system][nhs_design_system] and the [NHS frontend][nhs_frontend] package to make sure our services follow standard styles, components and patterns that have been tested with users. When government branding is required, we use the GOV.UK Design System and GOV.UK Frontend instead.

Both NHS and GOV.UK Frontends are implemented in Node.js and Nunjucks. Where possible, we prefer to build services in Node.js so we can take full advantage of these frontend packages.

Sometimes user research may show that an existing pattern does not meet user needs. In these cases we may need to create a non-standard pattern. Any new pattern must be user tested and fed back to the NHS or GOV.UK Design System teams so others can benefit from it. Accessibility considerations for creating new components can be found on our [Accessible development](/nhsbsa-digital-playbook/development/coding-accessibility/) page.

If you find accessibility or usability issues when testing existing components, you can also feed these back to the design system teams using their public issue backlogs on GitHub.

### Keeping frontend packages up to date

Remember to include updates to the frontend toolkit in your service roadmap. You can keep up to date with changes by checking the GitHub changelogs for [NHS Frontend](https://github.com/nhsuk/nhsuk-frontend/blob/main/CHANGELOG.md) and Github releases [GOV.UK Frontend](https://github.com/alphagov/govuk-frontend/releases).

Updating regularly is important because new versions often include accessibility improvements, performance enhancements and updates to existing components. Be aware that some releases may include breaking changes that take additional time to implement.

## Multi-lingual support

Services may need to support content in different languages. The UI should be coded with this in mind from the start. Localising content is more difficult if not considered upfront. Most platforms have inbuilt features or extensions to support it.

Externalise content in whole sentences, with placeholders for dynamic content: Do not decompose content into sentence fragments as this can break grammar rules when translated to a different language.

Services should understand whether they have a statutory duty to provide a Welsh language service. The Welsh Language Commisioner's Office are available for advice and provide a [bilingual design guide][wlc_bilingual_design_guide]:

- the website front page should be bilingual, with a clear language choice option. The best way to do this is with a ‘splash’ page.
- it should always be possible and easy to switch from one language to another on any page, going straight to the same page in the chosen language.
- the language switch toggle should ideally be placed in the top right hand corner of the screen.
- organisations can register domains in both Welsh and English, for example welshlanguagecommissioner.wales and comisiynyddygymraeg.cymru
- e-mail addresses should be either language neutral or bilingual, e.g. post@cyg-wlc.wales or separate Welsh and English versions should be available which will reach the
same mailbox.
- translations must be performed by human translators. Software can support a translator’s work, but it should never be used instead of a professional translator.
- update the page’s `lang` attribute when switching languages so screen readers announce content correctly

## General guidance

- our web application must function correctly on the range of browsers and devices specified in the latest [Government compatibility guidance][gov_browser_compatibility].
- web based user interface page interactions should follow the POST-Redirect-GET pattern for POSTed data. See [Wikipedia Post/Redirect/Get][wikipedia_prg] for more on this pattern.
- HTML markup must contain `id` attributes to allow functional testing of the user interface. ID format should be agreed with the testers and captured in project documentation.
- URLs must be agreed by a Content Designer and align to [URL design standards][gov_url_standards]
- prototype code mustn't be used verbatim. Prototype code is indicative of how a user interface should look and behave, but we don't require them to meet our production quality standards. Prototypes are there to test designs with users. You will need your skill and coordination with the designer to translate them into production grade code.

<!-- TO DO: 
- coding standards
- JS standards
- CSS architecture
- Performance
- Security
- Tooling and pipelines
- Testing
- environmental impact
-->

[making_your_service_accessible]: <https://www.gov.uk/service-manual/helping-people-to-use-your-service/making-your-service-accessible-an-introduction>
[gov_accessibility_statement]: <https://www.gov.uk/service-manual/helping-people-to-use-your-service/publishing-information-about-your-services-accessibility>
[gov_progressive_enhancement]: <https://www.gov.uk/service-manual/technology/using-progressive-enhancement>
[gov_design_system]: <https://design-system.service.gov.uk/>
[gov_frontend]: <https://github.com/alphagov/govuk-frontend>
[gov_browser_compatibility]: <https://www.gov.uk/service-manual/technology/designing-for-different-browsers-and-devices>
[gov_url_standards]: <https://www.gov.uk/guidance/content-design/url-standards-for-gov-uk>
[nhs_design_system]: <https://service-manual.nhs.uk/design-system>
[nhs_frontend]: <https://github.com/nhsuk/nhsuk-frontend>
[nhs_accessibility]: <https://service-manual.nhs.uk/accessibility>
[nhs_accessibility_design]: <https://service-manual.nhs.uk/accessibility/design>
[nhs_accessibility_development]: <https://service-manual.nhs.uk/accessibility/development>
[nhs_accessibility_testing]: <https://service-manual.nhs.uk/accessibility/testing>
[wlc_bilingual_design_guide]: <https://arts.wales/sites/default/files/2021-02/Bilingual%20Design%20Guide%202018.pdf>
[wikipedia_prg]: <https://en.wikipedia.org/wiki/Post/Redirect/Get>
