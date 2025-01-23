---
layout: article
title: "Writing user stories"
description: "Best practice guide to writing user stories"
tags: product
order: 6
---

User stories should be a short, simple description of a feature or functionality told from the perspective of the end user. They typically follow a format like: 

**As a...** [type of user]
**I want...** [an action]
**So that...** [a benefit or a value]

User stories help teams understand what the user needs and why, ensuring that the development work is aligned with user needs.

User stories are usually written by product owners, but they can also be created by other people on the team such as business analysts, developers, or the members of the user centered design (UCD) team. The key is that they should be written collaboratively to ensure all perspectives are considered.

The product owner plays a crucial role in user stories. They are responsible for:

- creating and maintaining the product backlog, ensuring that user stories are well-defined and prioritised
- clarifying requirements and providing detailed explanations and answering questions from the development team
- agreeing what success looks like in the form of acceptance criteria for each user story
- ensuring that user stories align with stakeholder/user needs and expectations

User stories should be directly aligned with the product roadmap, which outlines the objectives and key results (OKRs) of the product. Each user story should contribute to achieving these goals. The product owner ensures that the user stories are prioritised based on their alignment with the roadmap and their impact on the product's success.

Reviewing user stories is a collaborative process involving:

- product owners - to ensure the stories align with the product vision and goals
- development team - to assess feasibility and provide estimates
- stakeholders - to validate that the stories meet their needs and expectations (often through demos or testing of the completed work)
- quality assurance - to ensure that the stories have clear acceptance criteria and are testable

User stories are prioritised based on several factors:

- value - how much value the story adds to the product
- user impact - the importance of the story to the end user
- dependencies - whether the story is dependent on other stories or tasks
- effort and complexity - the estimated effort required to complete the story
- risk - the potential risks associated with implementing or not implementing the story

## The lifecycle of a user story

1. The product owner or business analyst writes the user story.
2. The story is reviewed and refined with input from the development team and stakeholders.
3. The story is prioritised in the product backlog.
4. The story is included in a sprint or iteration planning session.
5. The development team works on the story.
6. The story is tested to ensure it meets the acceptance criteria.
7. The product owner reviews the completed story and accepts it if it meets the criteria.
8. The story is released to users.

## Template for user stories

::: card

**Title**  
User Story Title

**Description**  
As a [type of user], I want [an action] so that [a benefit/a value].

**Acceptance Criteria (written using 'Given When Then' format)**  
- [Criterion 1]  
- [Criterion 2]  
- [Criterion 3]  

**Additional Information**  
- Priority: [High/Medium/Low] (Priority ranking varies from project to project at BSA)  
- Story Points: [Estimate – time or complexity]  
- Dependencies: [Any dependencies]  
- Notes: [Any additional notes]  
- Prototype: [Link to relevant prototypes]  
- User need ID: [User need ID will support traceability and future service assessments]

:::

## Example user story

::: card

**Title**  
User Login

**Description**  
As a returning user, I want to log in to my account so that I can access my personalised dashboard.

**Acceptance Criteria**  
Scenario 1 – Login with correct details

- **Given...** the user is on the login page
- **When...** the user enters a valid username and password
- **Then...** the user should be redirected to their dashboard

Scenario 2 – Login with incorrect details

- **Given...** the user is on the login page
- **When...** the user enters an invalid username or password
- **Then...** the user should see an error message indicating the login failed

:::

The behavior driven development (BDD) format helps to clearly define the expected behavior of the system in different scenarios, making it easier for developers and testers to understand and implement the requirements.