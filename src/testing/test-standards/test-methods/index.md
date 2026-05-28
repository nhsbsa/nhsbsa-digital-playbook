---
layout: article
title: "Testing Methods"
description: "The NHSBSA Test Frameworks and Test Strategy describe the test methods that the Test Community should apply to their test activities."
tags: test-standards
order: 1
---

The NHSBSA Test Frameworks and the NHSBSA Test Strategy describe the test methods that the NHSBSA Test Community should apply to their test activities.

As the test activities evolve, testers may need to consider other test methodologies.

### Test Proof of Concept (POC)

Prior to any test tool, method or approach being accepted into the NHSBSA Test Playbook, a proof of concept must be conducted and approved by the Professional Lead for Testing. This is to ensure you consider the possible positive and negative outcomes when using the tool.

Outline the remit of the POC you are proposing:

- what are you trying to prove
- what does success look like
- what guardrails are you putting in place to ensure the use of the tool is safe
- what guardrails are you putting in place to ensure the tool is accurate
- what tests are you looking to automate
- what metrics are you collecting and what are you comparing them to
- do you need to IG/IS/Security support to use the tool within the NHSBSA

And share it with your Test Lead for review and guidance.

Once the POC is complete, prepare a report considering all of the points above, emphasising the outcome of the POC and share it with your Test Lead and Professional Lead for Testing.

Remember, not all POCs are successful. However, this should not discourage innovation and continuous improvement.

### Multi Factor Authentication

To meet security standards, multi factor authentication (MFA) is being mandated across DDaT services. This causes an issue with automation test packs placed in the CI/CD pipeline as MFA requires manual intervention. The NHSBSA Test Community have worked with the NHSBSA DDaT Security Team to develop a way to [work-around this issue](https://bsa2468.atlassian.net/wiki/spaces/SENG/pages/5427003447/TESTING+SERVICES+WITH+MULTI+FACTOR+AUTHENTICATION+draft).

### AI Test Tools

The NHSBSA Test Community continuously improve our approach to testing. This means new technologies and innovations are considered to ensure we are being as efficient and accurate as possible. Artificial intelligence (AI) test tools are now commonly used across the DDaT private and public sectors. It is therefore important that the NHSBSA look at these tools to see if they would be beneficial to us.

The NHSBSA Test Guilds are considering different tools as they come on the market. The current list can be found [here](https://bsa2468.atlassian.net/wiki/spaces/SENG/pages/5333647573/USING+AI+IN+TESTING+draft?atlOrigin=eyJpIjoiZGZkZTIxOTVjMzYxNDc4MDkzYTZjZWNlMjIxMzk2NmEiLCJwIjoiYyJ9). When considering new tools, the Test Guilds, and other stakeholders, must be aware of the guidance on the use of AI in testing:

- The NHSBSA's [guidance on the use of AI](https://nhsbsauk.sharepoint.com/sites/MyHub-Help/SitePages/NHSBSA-guidance-for-using-generative-artificial-intelligence-in-the-workplace.aspx) in the workplace must be followed. This includes instructions on the use of Microsoft CoPilot
- To make use of GitHub CoPilot, [follow the DDaT SEng guidance](https://bsa2468.atlassian.net/wiki/spaces/KB/pages/4897832992) and access instructions
- Only [NHSBSA licensed versions](https://bsa2468.atlassian.net/wiki/spaces/KB/pages/5227511848) of AI can be used on NHSBSA DDaT services. Open source or free versions of tools cannot be used unless agreed by the Professional Lead

Prior to using any AI test tool, a Proof of Concept (POC) should be completed following the POC process described below.

When using GenAI, be it for test data preparation, test scripting, test execution or test reporting, you **MUST**:

- be clear how you are going to use GenAI and include it in your Test Approach documentation - will it be used to create test data, to scope test scenarios, to write test scripts, to check test results, to write test reports, etc
- not use test data containing Personally Identifiable Information (PII)
- use robust prompts that will provide accurate responses - writing strong and precise prompts is a skill, expect it to be a skill that you have to learn over a period of time before you can confidently rely on your inputs
- not 100% rely on the outputs - whilst AI is extremely powerful, we must continue to think as testers and question the output rather than making the assumption it is correct
- not solely rely on it as your only test tool/companion - you must continue to use other tools at your disposal to ensure we have a well-balanced approach to testing
- be aware of bias and the danger of false positives - this is especially the case if the AI's learning is based on narrow datasets

Ultimately, the tester will remain responsible for the testing they conduct, irrespective of the tools that they use. It is therefore important that the tester remains in control of those testing activities.