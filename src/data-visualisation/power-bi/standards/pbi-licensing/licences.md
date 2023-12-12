---
layout: article
title: "Power BI licences"
description: "Guidance on Power BI licence types and current NHSBSA set-up"
status: DRAFT
tags: [power-bi, pbi-licences, pbi-home, pbi-standards]
order:
    power-bi: 2
    pbi-licences: 1
    pbi-home: 5
    pbi-standards: 3
related:
  tag: pbi-standards
---
!!! warning Please note
This documentation contains Microsoft guidance alongside our organisational guidance to ensure Power BI users are aware of the licence set-up needed in viewing and creating dashboards and reports using Power BI.
!!!  
  
## Licence types  
  
There are [three types of licences][link 1]:  

Free licence
: this is not needed for development as Power BI Desktop can be used in it’s own instance  

Pro licence
: this licence is needed for the deployment of Power BI dashboards  

Premium Per User
: also needed for the deployment of Power BI dashboards, and although more expensive at a monthly cost, this comes with additional capabilities

## Microsoft guidance  

### Free per-user license  
Users with free licenses can use the Power BI service to connect to data and create reports and dashboards for their own use. They can't use the Power BI sharing or collaborating features with others, or publish content to other people's workspaces.  
However, Pro and PPU users can share content and collaborate with free users if the content is saved in workspaces hosted in Premium capacity.  
To learn more about workspaces, see [Types of workspaces][link 4].  
To learn more about features available to users with a free license, see [Power BI service feature list][link 5].  

  
### Pro license  
[Power BI Pro][link 2] is an individual per-user license that lets users create content and also read, and interact with content that others have published to the Power BI service. Users with this license type can share content and collaborate with other Power BI Pro users.  
Only Power BI Pro users can publish or share content with other Pro users or consume content that's created by other Pro users, unless a Power BI Premium capacity hosts that content. If a Power BI Premium capacity hosts the content, then Pro users can share content and collaborate with free and PPU users too.  
  
### Premium per user (PPU) license  
A [PPU per-user license][link 3] provides the license holder with all of the capabilities of Power BI Pro plus access to most Premium capacity-based features. A Power BI PPU license unlocks access to a variety of features, capabilities, and types of content that are only available through Premium.  
This access is limited to the PPU license holder and other colleagues who also have a PPU license. For example, in order to collaborate and share content in a PPU workspace, all users must have a PPU license.  
When using a PPU license, content created by a PPU licensed user can only be shared with other users that have a PPU license, unless that content is specifically put in a workspace hosted in Premium capacity.  
  
    
## File sharing  
  
If users have Power BI Desktop (the development tool), the development file can be opened and navigated as if they were a developer (for free). This means individuals the development file has been shared with can also edit the file, and would need unblocked access to the data storage area to do so. Permitting access to the data storage area is not recommended as this is a secure team location. Sharing the development file, although downloaded as localised copy, may cause issues in version control and contribute to mistakes made when editing a dashboard.  
  
    
## Our current set up  
  
Currently across the NHSBSA we are on E5 licences, and Power BI Pro licences are used for development and publishing purposes. As developers are currently using Pro licences, Pro licences are also needed to be requested for the viewers of a dashboard published. Essentially, [you need a Pro licence to view a Pro output][link 6].  
  
[Premium Capacity][link 7] allows viewers to view reports and dashboards with no licence needed. For example, the Data Science and Official Stats team could share a link with anyone, internal or external to the organisation for the users to view, regardless of their license status. Currently we are not on Premium Capacity and therefore this functionality is not available.  


## Power BI Standards  
  


[link 1]: https://learn.microsoft.com/en-us/power-bi/fundamentals/service-features-license-type
[link 2]: https://learn.microsoft.com/en-us/power-bi/consumer/end-user-license#licenses
[link 3]: https://learn.microsoft.com/en-us/power-bi/consumer/end-user-license#licenses
[link 4]: https://learn.microsoft.com/en-us/power-bi/consumer/end-user-workspaces#types-of-workspaces
[link 5]: https://learn.microsoft.com/en-us/power-bi/consumer/end-user-features
[link 6]: https://community.fabric.microsoft.com/t5/Service/Licensing-requirements-for-viewing-a-shared-report/m-p/260914#:~:text=Yes.,be%20in%20a%20Premium%20capacity.
[link 7]: https://learn.microsoft.com/en-us/power-bi/fundamentals/service-features-license-type#premium-capacity