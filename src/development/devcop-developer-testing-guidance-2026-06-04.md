---
title: "Developer Community — developer testing guidance consultation"
created: '2026-06-04'
updated: '2026-06-04'
tags: [meeting, testing, developer-community, guidance, quality]
source: transcript
---

# Developer Community — developer testing guidance consultation

Pat Turner presented draft developer testing guidance to the Developer Community weekly meetup for consultation. The guidance covers unit testing, component testing, integration strategies, and technology choices. About 77 people attended. Participants included Adam Jahangiri, David Marshall, Haydn Small, Matthew Graham, Adeel Ahmed (Atul), Joseph Steel, Ximena Gallardo, and Vahid Hedayati.

## Why testing guidance is needed

- Guidance provides clarity on roles and responsibilities across the delivery pipeline: user researchers, developers, testers, and business users (UAT)
- Prevents gaps between roles — e.g. developers assuming testers will cover something and testers assuming developers already did
- Minimises unnecessary overlap so testers can have confidence in what developers have tested
- Supports **shift left** — catching defects as early as possible in the pipeline is cheaper and faster to fix

## The NHSBSA test pyramid (draft)

Presented as a first-pass for discussion, agreed in collaboration with the testing community led by Nicola and her test leads:

| Layer | Owner | Notes |
|---|---|---|
| Unit tests | Developer | Highest volume, fastest to run, granular |
| Component tests | Developer | Full stack within a deployable component |
| System tests | Tester | Deployed into an environment, UI journeys |
| System integration tests | Tester/Multiple teams | Cross-system testing, higher friction |
| UAT | Business users | Should be redundant if earlier stages are thorough |

Pat's stated aim: UAT should be unnecessary because quality is established upstream.

## Test scope — unit tests

- Developers are responsible for unit tests and component tests
- **Unit test** = testing a single module (class, function) in isolation via its public interface
- Internal/private methods should never be tested directly; test through public interfaces only
- BDD-style naming encouraged (given/when/then or should/when)
- Web layer tests should test the model, controller, and view together (e.g. using WebMVC test for Java, or equivalent for Node) — Pat classifies these as unit tests
- Web layer assertions should cover: HTTP status codes, rendered HTML structure, semantic correctness, ARIA error message links (accessibility shift-left), navigation/redirect URLs
- API layer tests should assert on JSON response content and adherence to OpenAPI/Swagger spec
- Data access layer tests: should run against **real databases** (e.g. via Docker containers), not mocked DBs — entity-to-schema mapping, complex queries with joins, filtering with WHERE clauses, aggregations

## Test coverage

- Standard: **80% line coverage and 80% branch coverage** — non-negotiable
- Coverage is an indicator only, not a measure of quality
- Example shared: a team that achieved 100% coverage with zero assertions — exercised code but asserted nothing
- Guidance on writing clean tests already exists; TDD content has been added to it

## Integration strategies

Three approaches for handling integration points within unit/component tests:

1. **Like-for-like containers** — run actual Docker containers (e.g. real Postgres) matching production; preferred approach
2. **Mock servers** — train a mock server to behave as the real service; essential for external services like GOV.UK Notify or OS Places that cannot be hit at every build
3. **Cloud-native replicas** — e.g. Floppy (or LocalStack, though licensing is unresolved); the Lambda Guild is deciding on the standard. Archie has built his own replica tool

## Component tests (full-stack within component)

- Previously called "full-stack" tests by Pat; the term **component test** comes from ISO testing standards (thanks to Nicola)
- All internal modules wired together running within the framework (Spring Boot, Node, etc.) — no internal mocks
- External dependencies use real Docker containers + mock servers (e.g. WireMock)
- Test accesses the component via its web interface and verifies responses, database state, and external mock interactions
- Q from David Marshall: Does a component test cover full page-to-page journeys? — Pat's clarification: component test is the deployable component all wired together within itself, not necessarily a multi-page end-to-end journey. Page-to-page journey flows sit at the interface between developer and tester scope

## Q&A

### David Marshall — component test scope and page-to-page journeys

David asked for clarification on what counts as a component: is it a single screen (one controller method, some inputs), or is it the whole flow (login → enter data → move through pages)? He noted that the latter is what he thinks testers do with their test automation.

Pat's response: the component test is the *deployable component, all wired together within itself* — it is not a full end-to-end page journey. He acknowledged this had not been made clear enough in the guidance.

Pat then clarified how page-level testing should work in practice:

- At the **unit/web-layer** level, a test hits a single URL, verifies all the error states that stay on that page, checks they are rendered correctly, and asserts that all possible navigations out of that page go to the correct target URL
- If the page has conditional routing (go to page B or page C depending on input), those navigations should all be tested at the unit web-layer level
- When all the individual pages are tested this way, the remaining question for the component test is: what more is left to test when they're joined together?
- The component test handles things the unit layer cannot — for example, a validation rule that depends on data held in a database, where the full stack (controller → service → repository → real DB container) is needed to verify the error shows correctly

David confirmed this made sense, noting his current approach is to manually run through the flow before writing unit tests, and he wasn't sure if he was being asked to do more. Pat: "I'm definitely asking you to do more than manually test." David acknowledged the point and thanked Pat.

Pat also admitted the guidance does not yet clearly define what component-level test cases should look like — specifically, whether a component test should cover a full journey or a single flow path. He took this as an action.

### Matthew Graham — testing the same thing at multiple levels

Matthew gave a concrete example: a method that calculates an amount would be tested at unit level (given inputs, what amount is returned?). At component level, that amount surfaces through to the front end, so you want a more joined-up test to verify the full operation produces the right result. At system/service level, the testers also verify the amount appears correctly in the UI.

His question: just because something is verified at an earlier level, does that mean it is skipped in higher-level tests?

Pat: "No, absolutely right." The goal is to *minimise* overlap, not eliminate it. There is genuine value in testing the same behaviour at more than one level; the pyramid shape just means you should have fewer higher-level tests, not zero.

Matthew's framing: "we want as many lines of defence as possible."

### Adeel Ahmed — contract testing and API payload verification

Adeel gave a specific scenario: a front-end application sends a request to a back-end payment API when a button is clicked. The API expects fields A, B, and C. How do you verify that the correct payload is being sent — that no fields are missing or added unexpectedly?

He noted that in test environments, testers can't see the payload between components unless verbose logging is enabled between them. He had previously used WireMock to stub and verify request patterns to assert the payload was sent correctly, but wasn't sure whether that was a developer or tester responsibility.

Pat's response:

- This is a **contract testing** problem, which is not yet covered in the guidance but needs to be
- The principle is: if you are a *client* calling an API, you should train WireMock (or equivalent) to adhere to the OpenAPI/Swagger spec of the real service — so you're verifying against the real contract, not a made-up stub
- If you are the *API server*, your tests should assert compliance with all aspects of your own contract
- Tools like **Pact** sit between the two components and can verify both sides of the contract — Pat noted he doesn't think anyone at NHSBSA has used Pact yet
- Pat's conclusion: Adeel's approach of using WireMock to verify payload patterns is exactly the right direction

Adeel confirmed that testers would have to do this manually, because they don't have the ability to intercept the payload between components programmatically.

Pat acknowledged the broader issue: this is another place where developers and testers need an **explicit written agreement** on scope. Testers need confidence that developers will test payload correctness thoroughly; without that agreement, things fall between the gaps. He took it as an action to cover this better in the guidance.

### Joseph Steel — developer use of Selenium for shift-left testing

Joseph asked how much scope developers actually have when shifting left. Specifically: do developers have free rein to write their own Selenium tests (WebDriver/page object tests) just for their own peace of mind and to catch issues early?

He noted:
- Testers write Selenium with Cucumber/BDD/Gherkin — a different style
- For a new piece of work he is developing (long runway before deployment), he has started writing some browser-based tests himself to get ahead and cut down the feedback loop
- He is also using Axe, Lighthouse, and Wave to check accessibility before it gets raised as a ticket
- He finds MVC web-layer tests (Spring Boot MockMvc) involve a lot of setup and can be "compulsive to write and maintain", whereas Selenium is relatively easy
- His intention is not to replicate tester test cases — more to run a few happy-path tests for assurance

Pat's response:

- Writing the *same type of test* using the *same technology* as the testers is a red flag for duplication — that seems wrong
- Developers should be able to run the tests already written by the test team (smoke tests etc.) and should talk to their testers if they think those tests could be improved or if they want to contribute to them
- The use of Axe, Wave, and Lighthouse is strongly endorsed — "all developers on front-end should be using that, that's great"
- Pat wondered whether a better approach would be to ask the tester team if developers can easily run their smoke test suite, rather than creating a parallel set of browser tests
- Pat asked what Joseph means by "Selenium" — Cucumber using Selenium, or raw WebDriver/page objects? Joseph confirmed: WebDriver with page objects, no Cucumber

Pat's conclusion: this is a good topic for a broader conversation with test leads and lead devs. The component test (full stack, all wired up, accessed via the web interface) may already cover what Joseph is trying to achieve at the web layer, if it is set up properly.

### Ximena Gallardo — classifying frameworks by test type

Building on Joseph's question, Ximena pointed out that the terms need to be precisely differentiated:

- Selenium = automation testing (a tool, not a methodology)
- BDD = Gherkin/Cucumber (a methodology, with automation underneath)
- TDD → unit tests (a development approach)

Her suggestion: the guidance should explicitly classify which testing frameworks are appropriate for each test type and which approach (TDD, BDD, automation) they correspond to. Without this, developers may reach for Selenium when a web-layer test with WebMVC or Supertest would be more appropriate.

Pat agreed and said it "could fit into" the guidance. He shared his screen to show the existing web-layer test guidance, noting he had specified using a "web framework" (e.g. WebMVC) to hit the production service running in memory. He acknowledged the technology section does not yet call this out explicitly.

Joseph and Ximena also converged on the view that browser-driven Selenium tests — even without Cucumber — start to look like a component test, since you are running the full stack end-to-end from a high level of abstraction. Pat said he wanted to be careful about that boundary.

### Vahid Hedayati

Vahid began to raise a point just as Pat was wrapping up the session at the 58-minute mark; it was not captured fully before the session closed.

## Technology choices (draft — needs input)

Pat asked attendees to provide feedback on what they actually use:

| Category | Current/proposed | Notes |
|---|---|---|
| Unit testing | JUnit (Java), Jest/Vitest (Node), PyTest (Python) | McLeod team using Vitest — faster, feature-rich, Jest-compatible |
| Mocking | Mockito (Java) | Need to understand what else is used |
| Web layer testing | WebMVC test (Spring), Supertest (Node) | Need wider picture |
| Data access | Testcontainers (preferred) | CI build has issues with Testcontainers; unresolved |
| API client mocking | WireMock (external), Fetch-mock / Mockito in-memory | Choice between external service and in-memory mocking still open |
| AWS SDK mocking | Mockito client mock available | Real story needed |
| Cloud-native replicas | Floppy, Archie's custom tool | Standard needed |

## Missing areas identified

- Contract testing (Pact or WireMock against OpenAPI spec)
- Mutation testing
- Snapshot testing
- Multi-page/journey testing scope at component level
- Cloud-native replica standard

## Next steps / actions

- [ ] Pat to send out a questionnaire for feedback on the guidance
- [ ] Pat to share slides after the session
- [ ] Pat to share existing "writing clean tests" guidance in chat
- [ ] Developer day planned for **July** with testing as the theme, including a focus on TDD
- [ ] Pat to set up a conversation with test leads and interested devs on browser-based testing scope (Selenium, Axe etc.)
- [ ] Guidance will go through a review phase before formal publication
- [ ] Route-to-live guidance also published for consultation — covers controls from JIRA ticket creation to production release
