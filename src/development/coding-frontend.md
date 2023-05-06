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

Producing accessibile web sites and applications is a fundamental aspect of frontend development.

The Government service manual explains more about [making your service accessible][making_your_service_accessible] and writing an [accessibility statement][gov_accessibility_statement].

The NHS service manual also provides guidance on [accessibility][nhs_accessibility] including specific advice on [design][nhs_accessibility_design], [development][nhs_accessibility_development] and [testing][nhs_accessibility_testing].

As a frontend developer at the NHSBSA you should:

* Use semantic HTML.
* Use ARIA roles for interactive elements.
* Build user interfaces that work by default without rich client technology such as Javascript.
* Build user interfaces that adopt progressive enhancement and not use graceful degradation.
  Government advice is to [design the user interfaces with progressive enhancement][gov_progressive_enhancement].

## NHS and Gov design systems

We make use of the [NHS design system][nhs_design_system] and associated [NHS frontend][nhs_frontend] package to align to standard styles, components and patterns that have been proven with robust user testing. In cases where Government branding is required, we adopt the [Government design system][gov_design_system] and [frontend][gov_frontend].

Both NHS and Gov frontends are implemented in Node.js and Nunjucks. Our preference is to implement frontends in Node.js to take full advantage of the frontend packages.

We occasionally need to adopt non-standard patterns when user research proves specific difficulties with the standard patterns. Any new pattern should be user tested and then fed back into the NHS or Gov design system and frontend package.

## Multi-lingual support

Services may need to support content in different languages. The UI should be coded with this in mind from the start. Localising content is more difficult if not considered upfront. Most platforms have inbuilt features or extensions to support it.

Externalise content in whole sentences, with placeholders for dynamic content: Do not decompose content into sentence fragments as this can break grammar rules when translated to a different language.

Services should understand whether they have a statutory duty to provide a Welsh language service. The Welsh Language Commisioner's Office are available for advice and provide a [bilingual design guide][wlc_bilingual_design_guide]:

* The website front page should be bilingual, with a clear language choice option. The best way to do this is with a ‘splash’ page.
* It should always be possible and easy to switch from one language to another on any page, going straight to the same page in the chosen language.
* The language switch toggle should ideally be placed in the top right hand corner of the screen.
* Organisations can register domains in both Welsh and English, for example welshlanguagecommissioner.wales and comisiynyddygymraeg.cymru
* E-mail addresses should be either language neutral or bilingual, e.g. post@cyg-wlc.wales or separate Welsh and English versions should be available which will reach the
same mailbox.
* Translations must be performed by human translators. Software can support a translator’s work, but it should never be used instead of a professional translator.

## General guidance

* Our web application must function correctly on the range of browsers and devices specified in the latest [Government compatibility guidance][gov_browser_compatibility].
* Web based user interface page interactions should follow the POST-Redirect-GET pattern for POSTed data. See [Wikipedia Post/Redirect/Get][wikipedia_prg] for more on this pattern.
* HTML markup must contain `id` attributes to allow functional testing of the user interface. ID format should be agreed with the testers and captured in project documentation.
* URLs must be agreed by a Content Designer and align to [URL design standards][gov_url_standards]
* Prototype code mustn't be used verbatim. Prototype code is indicative of how a user interface should look and behave, but we don't require them to meet our production quality standards. Prototypes are there to test designs with users. You will need your skill and coordination with the designer to translate them into production grade code.

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
