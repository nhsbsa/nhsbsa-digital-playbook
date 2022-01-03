---
layout: article
title: "Guidance for Coding with Personal Data"
tags: dev
order: 11
---
## Glossary

<table>
  <tr>
    <th>Personal Data</th>
    <td>Personal data is Information that relates to living individuals that can by identified or singled out directly or indirectly by anyone. Individuals can be identified by various means including, name, address, an identification number, location data, and an online identifier such as cookies or IP address or to one or more factors specific to their physical, physiological, genetic, mental, economic, cultural or social identity.</td>
  </tr>
  <tr>
    <th>Confidential Data</th>
    <td>Confidential data relates to information given with an expectation it would remain confidential e.g. what you say to your GP or Dentist or someone offering you counselling. So information about a patient’s care and their physical and mental health would be confidential.</td>
  </tr>
</table>

## Background

Software Developers must ensure that data protection regulations are adhered to when creating software solutions. This guidance is intended to cover the basic aspects of data protection that must be considered when handling Personal Data.

Regulations require us to understand when personal data is being captured, to identify the risks to the person whose data it is, and to take appropriate steps to secure the data. The Special Categories of personal data defined in this section are always considered high risk.

### Direct identifiers

A direct identifier is a piece of data that by itself will identify someone.

* General identifiers e.g. NHS Number or National Insurance Number
* Biometric information e.g. fingerprint, face, Iris etc.
* Local identifiers e.g. Pension number, employment number, login id, Pseudonymised identifiers etc.
* Email address
* Home phone number
* Mobile phone or device number
* Online identifiers e.g. IP address, event logs

### Indirect Identifiers

You need to use the information in combination with the information below or other information.  If in doubt please contact Information Governance.

This list is meant to be helpful but not comprehensive.

* Name
* Address
* Postcode (it can be a direct identifier if in a rural area with a low population density)
* Date of Birth
* Age
* Sex
* Marital Status
* Gender
* Living habits e.g. recorded by a smart meter or internet of things devices
* Professional training/awards
* Income/financial/Tax situation
* Physical description
* Website Cookies or technologies that achieve the same result e.g. Beacons
* Location Data (Travel/GPS/GSM data)
* Device MAC address (Wireless interface)
* Singled out in statistical information
* Unique mannerisms, ways or writing or unique ways of talking
* The way you walk (everyone is unique)
* Education/ professional training
* Employment / Career history
* Financial affairs
* Signature
* Genetic data – can be personal data for more than one person
* Offences committed / Alleged to have been committed
* Criminal proceedings/outcomes/sentences
* Physical /mental Health or Condition
* Sexual Life
* Sexual Orientation
* Family / Lifestyle/ Social Circumstances e.g. a social care record
* Religion or other beliefs
* Trade union membership
* Racial / Ethnic origin

### What is not Personal Data

* Summary statistical information with values above an agreed value e.g. 5
* Personal data that has been anonymised to the NHSBSA Anonymisation standard
* Information that does not relate to a person e.g. is about an inanimate object / concept and no individual can be linked to it e.g. by ownership or use
* Information about the deceased.  This can remain confidential e.g. Prescription and dental data or medical reports.

### Special Categories of Personal data

The use of the following types of personal data is prohibited unless permitted by law (GDPR Article 9):

* Physical /mental Health or Condition
* Sexual Life
* Sexual Orientation
* Family / Lifestyle/ Social Circumstances e.g. a social care record
* Religion or other beliefs
* Trade union membership
* Racial / Ethnic origin
* Biometric information e.g. fingerprint, face, Iris etc.
* Physical description
* Genetic data – can be personal data for more than one person
* Offences committed / Alleged to have been committed
* Criminal proceedings/outcomes/sentences

## Development Considerations

### Is Personal Data required?

There is most often a valid business or user need for us to capture and store personal data.

As a software development team, you should be enabled to challenge the need to store any personal data if you don't agree.

### Is Personal Data sent to uncontrolled locations?

The core design of a software solution usually entails transporting data over secure HTTPs storing in an encrypted database. However, there are other locations that can be overlooked.

#### Logs

There are very few reasons for software to log personal data. Data protection regulation mandates that data held for an individual must be removed according to its data retention schedule. This becomes very difficult if it has been logged in a file, and that file has potentially been backed up in long term storage. With advancements in log storage and analysis tools (e.g. Datadog), once logged it becomes very difficult to remove that data.

It is always easier not to log any personal data.

Considerations:

* Do not pass personal data directly through to anything that logs to a file (or any other destination).
  * This includes System.out/System.err calls
* Exclude or redact personal data in toString() methods.
  * It is very easy to pass a composite object into a log statement and not to realise that nested, personal data will be logged.
  * Use a library such as bsa-redact for a simple approach to redacting personal data
* Make use of log appenders that recognise personal data prefixes in log statements and obscure/remove them
  * This technique is not recommended as a primary mechanism as it relies on logging the data with appropriate markup to identify the personal data
  * It can be useful to catch unexpected logging of private data such as usernames and passwords
* Do not log Personal Data at debug level
  * Debug level can be turned on in production environments in order to track down production issues
  * It is always safer not to log any personal data
  * If debug logging of personal data is required, use a different technique, such as turning off data redaction with a system property.
* Review your logs
  * Prior to going live with software, always take time to review the logs to check personal data is not being logged
  * Review logs on every release to ensure Personal Data doesn't creep in somehow.

#### Google Analytics (or equivalent)

The [terms and conditions of Google Analytics (GA)][ga_terms_and_conditions] are very clear on the prohibition of sending Personally Identifiable Information to their servers (see section 7).

Considerations:

* Never use Personal Data in a URL
* Sophisticated use of GA increases the risk of accidentally sending Personal Data
  * If you are using Tag Manager or equivalent to send additional data to GA, ensure it does not include Personal Data

#### Email

Sending an automated email obviously includes the Personal Data of email address. However, there are risks associated with email that must be considered with respect to securing Personal Data

Considerations

* Email is insecure
  * Do you know if the recipient's email provider uses secure transport and storage.?
  * Do you know if the recipient will download the email to a secure location?
  * Some email providers guarantee secure transport and storage when sent internally (e.g. NHS Mail). This doesn't guarantee the email is secure once it has been delivered
* Keep Personal Data to a minimum in emails.
* Always seek advice from Information Governance when sending automated emails

### Is Personal Data secured?

Transport and storage of Personal Data must be secure. It  is beyond the scope of this guidance to go into depth on this topic. 

#### Recommended references

* <https://www.ncsc.gov.uk/guidance/security-design-principles-digital-services-main>

### Is Personal Data being used as intended?

#### Privacy Policy

Personal Data must be used in accordance to how we tell our users in the Privacy Policy.

Considerations:

* Is the software doing anything different to what the privacy notice says.
  * If so then we have an issue to be resolved.
  * See the NHSBSA Privacy Policy here: <https://www.nhsbsa.nhs.uk/yourinformation>

#### Data retention

Personal Data must be removed according to the service's data retention schedule.

See the BSA Data Retention Schedule here: <https://www.nhsbsa.nhs.uk/sites/default/files/2018-06/NHSBSARM012%20Retention%20Schedule_0.xls>

Considerations:

* Sometimes projects are permitted to pass into production without a data retention solution on the condition that it will be in place according to the retention schedule.
  * I.e. If data must be deleted 6 months from capture, then the team have 6 months from go-live to produce a solution
  * Ensure that an approach to data retention is understood and feasible within the timescales, even though the implementation is not ready
* Ensure that stored data is deleted according to its schedule regardless of whether the user clicked on a final submit button
  * Online application forms sometimes store data before it is actually submitted by the user into the business service.
  * For whatever reason, the user may never choose to submit that data.
  * Even this un-submitted data must be deleted according to a schedule.

### Anonymisation and pseudonymisation

A potentially useful definition of anonymisation is an irreversible method for removing the means to identify an individual from a dataset, even in the presence of additional information. In the same fashion, pseudonymisation is a method for removing the means to identify an individual from a dataset, reversible by applying additional information (potentially by linking to another dataset).

Although forming any link between datasets may suggest that only pseudonymisation is possible, we can retain links between anonymous datasets using destructive encoding.

For example, take a dataset in which all direct identifiers have been stripped except for a unique, direct identifier (such as an NHS number) which is destructively encoded in a reproducible manner. At this stage it is important to ensure that a combination of indirect identifiers which remain in the data cannot be used to identify an individual.

If another dataset is stripped of direct identifiers and the same unique, direct identifier is destructively encoded in the same manner, the link between the two datasets is preserved while safeguarding against individual identification. Crucially, the second (and any subsequent datasets) must not, when cross-referenced, allow the identification of an individual. If this were the case then the data sources would instead be pseudonymised.

Thus, links between datasets do not necessarily preclude anonymisation. This could be useful, for example, in conducting anonymous research across datasets from several organisations.

As per Information Governance guidance, it is often better to use destructive encoding to anonymise data in this fashion than delete them if there are likely to be data integrity issues.

It is possible that over time, this kind of destructive encoding may still be cracked, especially after the advent of quantum computing. If relatively low granularity data is held for an extended period, the probability that the data can still be declared as truly anonymous will decrease over time.

## References

* [Google Analytics (GA) terms and conditions][ga_terms_and_conditions]

[ga_terms_and_conditions]: <https://marketingplatform.google.com/about/analytics/terms/us/>