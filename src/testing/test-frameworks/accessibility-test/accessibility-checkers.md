---
layout: article
title: "Accessibility Checkers"
description: "Automated accessibility checkers in use at the NHSBSA"
tags: accessibility-framework
order: 10
---

## Wave 

Wave is a free open source tool that can be downloaded as a plugin for Chrome, Firefox and Edge.

To download it please go to [Wave download page](https://wave.webaim.org/)

Wave runs by simply selecting the Wave extension icon (grey W icon) from the toolbar menu. It will then scan the page that is open for any accessibility issues.

Wave reports its findings in 6 categories:

- Errors - Issues that will impact certain users, failures to meet WCAG.
- Contrast Errors - Text that does not meet WCAG contrast requirements.
- Alerts - Elements that may cause issues.
- Features - Elements that improve accessibility when implemented correctly.
- Structural Elements - identifies hidden elements, lists regions and headings in order.
- Aria - Present accessibility information, reduces accessibility when used incorrectly.


Errors, Contrast Errors and Alerts are issues that Wave has found that contradict accessibility guidance.

Features, Structural Elements and Aria are parts of the website that need to be reviewed to check that they are accessible.

## Axe Devtools

Axe is available as a licenced tool as well as the open source offering, Axe Devtools. 

Install Axe DevTools from the [Chrome Web Store](https://chrome.google.com/webstore/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd?utm_source=chrome-ntp-icon)

Axe DevTools runs from the Chrome DevTools panel. You can access this three ways:

- Use CMD + SHIFT + C on your keyboard
- Right click on the page and choose ‘Inspect’
- Click the menu icon three vertical dots in the top right of your browser screen, select more tools then developer tools.


Chrome Dev Tools has options for Elements, Console, Sources etc. One of those options is ‘more tabs’ which is marked by two small right facing arrows >>. Choose the ‘more tabs’ option, and then choose ‘axe DevTools’.

The first time you use Axe DevTools you will need to answer some questions. It is just analytics data for Deque to find out how their tool is being used.

Choose the ‘scan all of my page’ option to run the tests.

Axe DevTools reports five types of issues:

- Critical
- Serious
- Moderate
- Minor
- Needs Review

All of the above are issues that Axe has found on the page so these all need logging as defects.

If you click on 'highlight' this will also help to identify on the page where the issue has been found.

You can then select each issue in the list and Axe will give a breakdown of the issue and guidance on how to fix this.

To find out how and what we classify Axe accessibility defects please visit our accessibility defect standard page, link provided.

## Lighthouse

Lighthouse is an open source offering available through dev tools.

Lighthouse runs from the Chrome DevTools panel. You can access this three ways:

- Use CMD + SHIFT + C on your keyboard
- Right click on the page and choose ‘Inspect’
- Click the menu icon three vertical dots in the top right of your browser screen, select more tools then developer tools.

Chrome Dev Tools has options for Elements, Console, Sources etc. One of those options is ‘more tabs’ which is marked by two small right facing arrows >>. Choose the ‘more tabs’ option, and then choose ‘Lighthouse’.

Make sure only Accessibility is selected in the categories list. Then run each test separately for Mobile and Desktop.

Lighthouse then scans the page and reports:

- Score out of 100
- Issues list

Any score under 100 represents that the website has accessibility issues.

Click on any issue to see a screenshot and description of the issue.

To find out how and what we classify Lighthouse accessibility defects please visit our accessibility defect standard page, link provided.