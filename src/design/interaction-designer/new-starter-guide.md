---
layout: article
title: "New starter guide"
description: "Where to start as a new Interaction Designer within the NHS BSA?"
status: DRAFT
review:
    last_reviewed_date: 2024-02-09
    review_cycle: ANNUAL
tags: interaction-design
order: 2
---

## Where to start as a new Interaction Designer within the NHS BSA? 

Your team manager and / or team will tell you what you need to know about the project you're working on. They will also give you general information about working for the NHS BSA.

### 1. Create user accounts 

As part of your generic onboarding, the DDaT Business Operations team will: 

* create your Office 365 account; this will give access to Microsoft Teams and your NHS BSA email e.g. firstname.lastname@nhsbsa.nhs.uk 
* invite you to join our organisational Confluence / JIRA space; we use these to organize and manage our agile projects. Your username will be your NHS BSA email address. 
* invite you to join our organisational Miro space; this is our 'digital whiteboarding' tool of choice to enable distributed teams to brainstorm and collaborate with each other. Your username will be your NHS BSA email address. 

To store and host your [code prototypes](../prototypes/#using-code-prototypes), you will need access to the organisational GitHub and Heroku accounts. 

If your assigned project already has a prototype / repository, they will be able to tell you which ones you need access to. 

To get access, please speak to one of the Senior Interaction Designers who will invite you to our organisational space and give you whatever access you need. Your username will be your NHS BSA email address. 

### 2. Join our NHS BSA communities 

To help support each other, we have various Communities of Practice. 

As part of your onboarding, one of the Lead Service / Interaction / Content Designers will add you to all important Microsoft Teams channels / chats, and forward on any community invites. These include: 

#### Design Community 

For more information on when and where our Design Community runs, visit our [tools and resources page](../../design-tools-resources/#design-community)

#### Code Club 

For more information on when and where our Code Club runs, visit our [tools and resources page](../../design-tools-resources/#code-club)

### 3. Install required software / packages 

Your MacBook should come pre-installed with the software needed to perform your role. If not, please speak to your Team Manager. 

This software includes: 

* Chrome / Firefox / Safari / Edge 
* Microsoft Office Suite (Outlook, Word, Powerpoint etc…) 
* Microsoft Teams 
* Slack 
* Miro 
* Visual Studio Code (Code Editor) 
* Node Version Manager 

To build prototypes in code, you will also need to install the additional packages manually: 

#### Node.js 

The NHS / GOV Prototype Kits are built using a tool called [Node.js](https://nodejs.org/en). To install the latest version of Node.js, run the following command in terminal: 
 
`nvm install latest`
 
To install a specific version, run the following command (replacing the version when required): 
 
`nvm install 20.10.0`
 
To set a default version of Node.js, run the following command (replacing the version when required): 
 
`nvm alias default 20.10.0`
 
To use a different version of Node.js, first list the installed versions on your machine by running the following command: 
 
`nvm ls`
 
…then use the following command to select which version you want to use (replacing the version when required): 
 
`nvm use 20.10.0`

To check which version of Node.js you have installed, run the following command: 

`node --version` 

If you have any problems with the above, contact one of the Senior Interaction Designers. 

### 4. Generate an SSH Key to link with your GitHub account 

Once you have access to the NHS BSA GitHub account, for security you will need to install an SSH key onto your device. 

This will allow you to clone (copy) or push (store) any repositories to and from our organisational GitHub account and run them on your local machine. 

To do this: 

1. Open a terminal window 
2. Paste the below into your terminal and add your NHS BSA email address: 
 
`ssh-keygen -t ed25519 -C "your_email@nhsbsa.nhs.uk"`
 
3. When you're prompted to "Enter a file in which to save the key", press Enter. This accepts the default file location 
4. At the prompt, type a secure password 
5. Now you have your SSH key generated, you need to add this to your GitHub account. To do this you need to open terminal and run the following command: 
 
`pbcopy < ~/.ssh/id_ed25519.pub`
 
Although nothing shows visually, the SSH key is now copied to your clipboard ready to be pasted into GitHub. 

6. Now you have your SSH key in your clipboard it is ready to be pasted into your 
7. GitHub account. To do this, go to github.com and access your profile settings (top right)
8. Select "SSH and GPG keys" 
9. Select "New SSH key" 
10. Add a title of your choice and then paste your SSH key within the "Key" section and click "Add SSH Key" 

Your SSH key is now generated and associated with your GitHub account and you can now clone repositories and work securely on these. 

### 5. Resources and training 

#### Service Standard 

As part of building a product / service in the public sector, service teams are required to meet the Government / NHS Service Standard. 

The [service standard](https://service-manual.nhs.uk/standards-and-technology/service-standard) is set of 14 criteria which help us create and run good digital services. In addition to the 14 core criteria, the NHS Service Standard has 3 extra points for health and social care. 

To understand whether services have met this standard, service teams will often be assessed against the service standard during the lifetime of a service. 

For more information on the [service standard](../../design-tools-resources/#service-standards) and [service assessments](../../design-tools-resources/#service-assessments), visit our tools and resources page. 

#### Agile 

We work in agile service teams. Each product / service must include certain roles. For more information on [what each role does in a service team](https://www.gov.uk/service-manual/the-team/what-each-role-does-in-service-team), visit the GOV.UK Service Manual. 

For more information on [different types of designers in government](https://designnotes.blog.gov.uk/2016/04/22/the-different-types-of-design-in-government/), visit the 'Design in Government' blog. 

#### Prototyping 

Interaction Designers create prototypes of their services to explore, share and test different designs before committing to building anything. 

For more information on [when and where to use prototype](../prototypes/), visit our prototyping page. 

#### Accessibility 

Everyone who works within the NHS BSA has a role to play in making our services accessible and inclusive.  

We are [legally required](https://www.gov.uk/guidance/accessibility-requirements-for-public-sector-websites-and-apps) to ensure all content available through a browser (websites, services, and apps) are accessible, regardless of whether they are for internal use, or external users. 

At least [1 in 5 people report having a disability in the UK](https://www.scope.org.uk/media/disability-facts-figures/), making accessibility an essential consideration for all public sector services and websites. 

As an Interaction Designer, you play an important part in making sure a service or website is accessible. For more information on [things you should consider as an Interaction Designer](https://accessibility-manual.dwp.gov.uk/guidance-for-your-job-role/interaction-designer), visit the DWP Accessibility Manual. 

#### Further Reading / Training 

As part of your role, there are [skills required on certain topics](../about-role/#skills-matrix). These skills as based off the [Government Digital and Data Profession Capability Framework](https://ddat-capability-framework.service.gov.uk/interaction-designer.html). 

For suggested further reading / training on these areas, visit our [training and resources page](#). 