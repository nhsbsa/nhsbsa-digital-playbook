---
layout: article
title: "Logging"
tags: dev
order: 10
---
Understand the reason for logging within a component and write log statements appropriate to these reasons.

Reasons may include:

* __Application support__
  Logs can be used to track down issues in production. It should be possible to read logs and understand the flow through a programme to help track down where something may have gone wrong.
* __Application monitoring__
  Logs can be monitored and used to trigger alerts when something goes wrong.Logs should be monitored for application errors and security events at a minimum. Client errors may not be actively monitored, although they should be logged.
* __Application profiling__
  Logs can be used to understand how an application is behaving in production. For instance to identify bottlenecks or performance issues.
* __Audit__
  Care must be taken when considering logging for audit purposes. __Personally Identifiable Information must not be recorded in logs__. Logs should only contain an audit of events, identified by system generated IDs. For instance:
  `User [id] logged into [application-a]`
* __Management information__
  Care must be taken when using logs for management information. The production database is a more accurate source of truth. However logs can provide a useful picture of how an application is behaving.

## Security

Adhere to best practice secure logging techniques as defined in the [OWASP logging cheatsheet][owasp_logging_cheatsheet]

Logging must adhere to the [Protective Monitoring Standard][nhsbsa_protective_monitoring_standard]. In particular, consult the security focussed monitoring standard to understand the various security events that must be logged.

## Data protection

Data access events must be logged in accordance with [ICO logging guidance][ico_logging_guidance].

At a minimum, the following events must be logged:

* Collection
* Alteration
* Consultation
* Disclosure (including transfers)
* Combination
* Erasure

From ICO guidance:

> “It is important that you do not record the data itself in your logs of erasure, as there is no need to retain a duplicate record of what you have erased. The requirement is to produce metadata which displays, for example, what a specific person on a specific date erased. The ‘what’ does not have to detail the content of the record/information that has been deleted – it can simply record that record X was updated by a specific individual.”

Data access event logs must include the reason for access and the system ID of the person who accessed the data, including recipient IDs in cases of disclosure.

From ICO guidance:

> “Logs must also record, where possible, the identity of the person who accessed (consulted) the data, the reason for the access, and the date and time of any associated action. You should also record the identity of any recipients, in cases of disclosure – this is particularly important as you will need to inform the recipients if you delete, amend or restrict the processing of this data following a request from the individual.”

Data used in log entries must not include Personally Identifiable Information except for internal system IDs. Logging IDs allows individuals to be identified if necessary by cross reference to a transactional data store. Access to production data stores is controlled.

For full guidance on use of PII, refer to [Guidance for Coding with Personal Data][nhsbsa_guidance_for_coding_with_personal_data].

## Tools

We make use of logging libraries that simplify adherance to good practice:

* Logging standard meta data (see below)
* Separation of log statements from output channel
* Logging with rich data formats

In Java, we use [Slf4J][java_slf4j] as our logging API, with [Logback][java_logback] as the logging implementation. We use the [Lombok][java_lombok] `@slf4j` annotation to ease creation of the logger in code.

In Node, we use [Winston][node_winston] for logging.

We use UTF-8 encoding and output in JSON for simpler integration into [Datadog][datadog], our centralised log collation service.

Never print logging information direct to 'system output' except through configuration of a logging library. For instance, avoid statements like this:

```java [g1:Java]
System.out.println("A useful log statement");
```

```javascript [g1:Javascript]
console.log("A useful log statement");
```

Logging libraries should provide data as arguments to log messages with placeholders. This has performance benefits in languages such as Java, but also allows data to be sanitised within the library. For instance, use this form:

```java [g1:Java]
logger.info("Here is some data - {}", data);
```

```javascript [g1:Javascript]
logger.log('info', 'Here is some data -  %s', data);
```

and avoid this form:

```java [g1:Java]
logger.info("Here is some data - " + data);
```

```javascript [g1:Javascript]
logger.log('info', 'Here is some data - ' + data);
```

## Logging levels

The following standard logging levels should be used:

* `DEBUG` is used for development purposes only.
  Do not rely on DEBUG to understand any potential production issue. DEBUG output must not be allowed on production systems as this exposes the risk of logging PII from library code such as object mappers and ORM frameworks
* `INFO` is used to present normal application flow.
  For example
  * On startup/shutdown it is helpful to log configuration properties although secrets and sensitive data must not be logged
  * On successful authentication
  * On creation/change of user privileges
  * On entry to/exit from the public interface to an application
  * On calls to/response from a downstream service
  * On notable business logic
  * On failed input validation (although WARN may be used instead)
* `WARN` is used to present undesirable but non-critical errors in application flow
  For example:
  * On failed authentication
  * On failed authorisation
  * On client error
  * On server error that is recoverable
  * On session management failures
  Events logged at WARN are candidates for monitoring so that alerts may be raised after multiple events
* `ERROR` is used to present errors in application flow that require immediate attention
  For example:
  * On server error that is unrecoverable
  * On failed output validation (e.g. database failed to insert)
  * On failed application startup/shutdown
  All events logged at ERROR should be monitored so that alerts may be raised after a single event

## Meta information

The following meta information should be logged:

* unique ID per log statement
* timestamp in ISO8601 format with minimum milliseconds precision and timezone information
* unique host identifier
* containerised environments should uniquely identify the container
* application/system name
* application specific _category_ e.g. class name
* process ID
* thread ID
* unique request ID
* unique correlation ID for requests that span multiple applications and services

The following meta information must not be logged:

* client session ID
  Client held session IDs should not be logged, as this opens a security risk. 
  If tracing session interactions is required, then it is permissable to log a secure hash of the session ID.

## Content

Log entries should represent atomic events with enough contextual information to understand that event.

* It should not be necessary to cross reference one log entry with another to understand it.
* Contextual information should include the application flow and logic that caused the event
* Contextual information should include enough data to identify what caused the event

```java [g1:Java]
logger.info("User {} successfully authenticated", user.getId())
```

```java [g1:Javascript]
logger.info("User %s successfully authenticated", user.id)
```

Data used in log entries should be wrapped in delimiters to facilitate parsing

* Depending on the capability of the logging library, delimiters may be automatically included for data items.
* Parsing of logged data should be verified with a working example script
* Don’t leave log parsing until its needed to resolve a live issue. A working script that parses data according to the defined delimiters will verify that the data can be parsed and used.

```java [g1:Javascript]
logger.info("User [{}] successfully authenticated", user.getId())
```

```java [g1:Javascript]
logger.info("User [%s] successfully authenticated", user.id)
```

Data in log statements should be placed in order of relevance to the event

* When reviewing log files it is very helpful to see data in priority order within a single log statement so that the most important aspect of the event is read first. For instance, you may want to search for all log events on a particular case by ID. Once that is done, the actual case ID become less relevant than the thing that happened to it.

```java [g1:Javascript]
logger.info("State change to [{}] for case [{}]", case.getState(), case.getId());
```

```java [g1:Javascript]
logger.info("State change to [%s] for case [%s]", case.state, case.id);
```

## Error cases

Exceptions should be logged with a full stack trace

* Some Exceptions will contain additional information that should also be logged.
  For example, Java SQLExceptions can contain a chain of other SQLExceptions. Ideally all of the exceptions should be logged
* Exceptions should not be logged and then thrown.
  The log and throw anti-pattern creates noisy logs with duplicate log entries for a single event.
* When throwing exceptions, the original exception should be passed into the new one to allow a full stack trace to be logged at the point the exception is handled

Applications should provide a top level exception handler so that all exceptions are logged. Asynchronous code must be guarded to ensure that exceptions do not propagate and break further calls by the calling framework.

Known errors should be logged with a unique error code to identify them. This requires the development team to create and maintain a catalogue of known system errors and codes

```java [g1:Java]
logger.error("[{}] status change [{}] > [{}] disallowed for case [{}]", 
    ServiceErrors.CASE_INVALID_STATUS_CHANGE, case.getStatus(), newStatus, case.getId());
```

```javascript [g1:Javascript]
logger.error("[%s] status change [%s] > [%s] disallowed for case [%s]", 
    ServiceErrors.CASE_INVALID_STATUS_CHANGE, case.status, newStatus, case.id);
```

## Log review

A review of log events must be undertaken prior to any minor release. A log review should show:

* application flow is descernable from reading logs alone: Do you know what’s happening from reading the logs
* all potential application errors are being logged and with enough contextual information to identify the cause of the error
* all potential client errors are being logged and with enough contextual information to identify the cause of the error
* all security events are being logged

## References

* [OWASP logging cheatsheet][owasp_logging_cheatsheet]
* [Protective Monitoring Standard][nhsbsa_protective_monitoring_standard]
* [ICO logging guidance][ico_logging_guidance]
* [Guidance for Coding with Personal Data][nhsbsa_guidance_for_coding_with_personal_data]
* [Slf4J][java_slf4j]
* [Logback][java_logback]
* [Lombok][java_lombok]
* [Winston][node_winston]
* [Datadog][datadog]

[owasp_logging_cheatsheet]: <https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html>
[nhsbsa_protective_monitoring_standard]: <https://bsa2468.atlassian.net/wiki/spaces/AR/pages/914489921/SEC-003+Protective+Monitoring+Standard>
[ico_logging_guidance]: <https://ico.org.uk/for-organisations/guide-to-data-protection/guide-to-le-processing/accountability-and-governance/logging/>
[nhsbsa_guidance_for_coding_with_personal_data]: <https://bsa2468.atlassian.net/wiki/spaces/KB/pages/659914927/Guidance+for+Coding+with+Personal+Data>
[java_slf4j]: <https://www.slf4j.org/>
[java_logback]: <https://logback.qos.ch/>
[java_lombok]: <https://projectlombok.org/>
[node_winston]: <https://www.npmjs.com/package/winston>
[datadog]: <https://www.datadoghq.com/>
