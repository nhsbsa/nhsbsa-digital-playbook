---
layout: article
title: "Security headers"
description: "Use HTTP headers to protect our users"
status: FINAL
tags: [security, dev-security]
order:
  security: 10
  dev-security: 4
review:
  review_cycle:
    month: 6
issuesheet:
  reference: 
  author: "Professional Lead Software Development"
  owner:  "Security Operations Manager"
  issued_to: "DDaT"
  issued_reason: "Standard"
  approved_by: "DA"
  approval_date: 2022-06-30
  wellbeing_inclusion_approval_date: 
  accessibility_approval_date: 
  revisions:
    - version: "1.0"
      date: 2022-06-24
      amended_by: "PT"
      approved_by: "AW"
      details: "Initial release"
---
HTTP headers provide a way for web browsers and servers to exchange information in addition to the core request/response method and data . A subset of HTTP headers are specifically intended to improve security. Other HTTP headers although not specifically targetted at such, have security impacts and need to be considered when delivering services over HTTP.

This guidance identifies HTTP headers that must, should and could be used in web applications, as well as those that should not and must not be used.

If you want to learn more about security headers, check out:

* [OWASP Secure Headers Project][owasp_secure_headers_project]
* [OWASP HTTP Security Response Headers Cheat Sheet][owasp_http_security_response_headers_cheat_sheet]
* [Scott Helme][scott_helme]

!!! warning Consult a security expert
The advice and recommended values provided here should be taken as guidance only. Security headers can be complicated, with compounding effects depending on your web application and the diversity of user devices.

* Consult a security expert before applying values
* Follow a sensible route to live where changes are tested in a pre-production environment
* Thoroughly test your application against your expected devices

Readers should be careful when copying and pasting code from any website, this site included. NHS Business Services Authority, its employees and its representatives accept no liability for damage caused by the misuse, either intentional or unintentional, of the information presented in its articles.
!!!

## Terms

Edge
: An infrastructural component responsible for serving content to the browser. The actual component will depend on architectural design and capabilities, but this could be a WAF or reverse proxy like NGinx

Application
: The application component responsible for handling HTTP requests

OWASP
: [Open Web Application Security Project][owasp]&reg;

## Security header scan

If your site is publicly available, you can make use of this [online service from securityheaders.com][securityheaders_com] to scan your web application.

__Tick the 'hide results' option to prevent a potentially poor graded site from seeking more attention than it already has.__

## MUST NOT

::: card

### Public-Key-Pins

Reference
: <https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Public-Key-Pins>

Guidance
: Public key pinning should not be used as it leads to many security issues and no benefits

Edge
: Edge should not send this header and remove it if sent by application

Application
: Application should not send this header

OWASP
: <https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Headers_Cheat_Sheet.html#public-key-pins-hpkp>
  
  <https://owasp.org/www-project-secure-headers/#public-key-pins>

:::
::: card

### X-AspNetMvc-Version

Reference
: N/A

Guidance
: Unnecesarily exposes information about the infrastructure that can be used to focus exploits.

Edge
: Edge should not send this header and remove it if sent by application

Application
: Application should not send this header.

  To remove the `X-AspNetMvc-Version` header, add the below line in Global.asax file.

  ```cs
  MvcHandler.DisableMvcResponseHeader = true;
  ```

OWASP
: <https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Headers_Cheat_Sheet.html#x-aspnetmvc-version>

:::
::: card

### X-AspNet-Version

Reference
: N/A

Guidance
: Unnecesarily exposes information about the infrastructure that can be used to focus exploits.

Edge
: Edge should not send this header and remove it if sent by application

Application
: Application should not send this header.

  Add the following line in your web.config in the `<system.web>` section to remove it.

  ```cs
  <httpRuntime enableVersionHeader="false" />
  ```

OWASP
: <https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Headers_Cheat_Sheet.html#x-aspnet-version>

:::
::: card

### X-Powered-By

Reference
: N/A

Guidance
: Unnecesarily exposes information about the infrastructure that can be used to focus exploits. Do not send.

Edge
: Edge should not send this header and remove it if sent by application

Application
: Application should not send this header

OWASP
: <https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Headers_Cheat_Sheet.html#x-powered-by>

:::

## SHOULD NOT

::: card

### Expect-CT

Reference
: <https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Expect-CT>

Guidance
: Deprecated in favour of Content Security Policy

Edge
: Edge should not send this header

Application
: Migrate to [Content-Security-Policy](../content-security-policy)

OWASP
: <https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Headers_Cheat_Sheet.html#expect-ct>

:::
::: card

### Server

Reference
: <https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Server>

Guidance
: Unnecesarily exposes information about the infrastructure that can be used to focus exploits. Do not send.

Edge
: Edge should not send this header and remove it if sent by application

Application
: Application should not send this header

OWASP
: <https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Headers_Cheat_Sheet.html#server>

:::
::: card

### X-Permitted-Cross-Domain-Policies

Reference
: <https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers#x-permitted-cross-domain-policies>

Guidance
: Used by Adobe products to verify cross domain access to data is allowed.

  Access to sensitive data should be enforced through authentication and authorisation. There should be no need to use this header unless you are using Adobe products with specific requirements around cross domain access

Edge
: Edge should not send this header

Application
: Consult security team if you think you should be using this header

OWASP
: <https://owasp.org/www-project-secure-headers/#x-permitted-cross-domain-policies>

:::

## MUST

All headers below __MUST__ be used in web application responses

::: card

### Referrer-Policy

Reference
: <https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy>

Guidance
: Prevent sending unnecesary information to third party websites

Edge
: Edge should send recommended value only if nothing sent by application

Application
: Send recommended value

Recommended value
: `strict-origin-when-cross-origin`

OWASP
: <https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Headers_Cheat_Sheet.html#referrer-policy>

  <https://owasp.org/www-project-secure-headers/#referrer-policy>

Compatibility
: <https://caniuse.com/referrer-policy>

:::
::: card

### Strict-Transport-Security

Reference
: <https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security>

Guidance
: Force use of HTTPS and do not downgrade to HTTP.

  Avoid using `preload` unless you are intend to submit your site to the HSTS preload list that modern browsers use.
  Adding a domain to the preload list may well affect other services operating on that domain. Always consult our security team if in doubt.
  See <https://hstspreload.org/> for more details.
  If you choose to use it, the max age MUST be set to 2 years, or it will be ignored

Edge
: Edge should send recommended value only if nothing sent by application

Application
: Send recommended value

Recommended value
: `max-age=31536000 ; includeSubDomains`

OWASP
: <https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Headers_Cheat_Sheet.html#strict-transport-security-hsts>

  <https://owasp.org/www-project-secure-headers/#http-strict-transport-security>

Compatibility
: <https://caniuse.com/stricttransportsecurity>

:::
::: card

### X-Content-Type-Options

Reference
: <https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options>

Guidance
: Prevent browsers from MIME sniffing and mistakenly transforming non-executable content into executable content

Edge
: Edge should send recommended value only if nothing sent by application

Application
: Send recommended value

Recommended value
: `nosniff`

OWASP
: <https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Headers_Cheat_Sheet.html#x-content-type-options>

  <https://owasp.org/www-project-secure-headers/#x-content-type-options>

Compatibility
: <https://caniuse.com/mdn-http_headers_x-content-type-options>

:::
::: card

### X-Frame-Options

Reference
: <https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options>

Guidance
: Avoid clickjacking attacks, by ensuring that application content is not embedded into other sites

Edge
: Edge should send recommended value only if nothing sent by application

Application
: Send recommended value

Recommended value
: `DENY`

  or

  `SAMEORIGIN`

OWASP
: <https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Headers_Cheat_Sheet.html#x-frame-options>

  <https://owasp.org/www-project-secure-headers/#x-frame-options>

Compatibility
: <https://caniuse.com/x-frame-options>

:::
::: card

### X-XSS-Protection

Reference
: <https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection>

Guidance
: XSS Auditor causes insecure behavioiur in older browsers and must be disabled explicitly

Edge
: Edge should send recommended value only if nothing sent by application

Application
: Send recommended value

Recommended value
: `0`

OWASP
: <https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Headers_Cheat_Sheet.html#x-xss-protection>

  <https://owasp.org/www-project-secure-headers/#x-xss-protection>

Compatibility
: <https://caniuse.com/mdn-http_headers_x-xss-protection>

:::

## SHOULD

::: card

### Content-Security-Policy

Reference
: <https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy>

Guidance
: Content Security Policy is very complex to configure and maintain.

  Refer to our [Content-Security-Policy guidance](../content-security-policy) and consult with security team

Edge
: Edge should not send this header

Application
: Consult with security team

Recommended value
: N/A

OWASP
: <https://owasp.org/www-project-secure-headers/#content-security-policy>

  <https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html>

Compatibility
: <https://caniuse.com/mdn-http_headers_content-security-policy-report-only>

:::
::: card

### Cross-Origin-Embedder-Policy

Reference
: <https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy>

Guidance
: Prevent a document from loading any cross-origin resources that don't explicitly grant the document permission (using CORP or CORS).

Edge
: Edge should not send this header

Application
: Send recommended value

Recommended value
: `require-corp`

OWASP
: <https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Headers_Cheat_Sheet.html#cross-origin-embedder-policy-coep>

  <https://owasp.org/www-project-secure-headers/#cross-origin-embedder-policy>

Compatibility
: <https://caniuse.com/mdn-http_headers_cross-origin-embedder-policy>

:::
::: card

### Cross-Origin-Opener-Policy

Reference
: <https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Opener-Policy>

Guidance
: Ensure a top-level document does not share a browsing context group with cross-origin documents

Edge
: Edge should not send this header

Application
: Send recommended value

Recommended value
: `same-origin`

OWASP
: <https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Headers_Cheat_Sheet.html#cross-origin-opener-policy-coop>

  <https://owasp.org/www-project-secure-headers/#cross-origin-opener-policy>

Compatibility
: <https://caniuse.com/mdn-http_headers_cross-origin-opener-policy>

:::
::: card

### Cross-Origin-Resource-Policy

Reference
: <https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Resource-Policy>

Guidance
: Control the set of origins that are empowered to include a resource. It is a robust defense against attacks like Spectre, as it allows browsers to block a given response before it enters an attacker's process.

Edge
: Edge should not send this header

Application
: Send recommended value

Recommended value
: `same-site`

OWASP
: <https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Headers_Cheat_Sheet.html#cross-origin-resource-policy-corp>

  <https://owasp.org/www-project-secure-headers/#cross-origin-resource-policy>

Compatibility
: <https://caniuse.com/mdn-http_headers_cross-origin-resource-policy>

:::

## COULD

::: card

### Feature-Policy

Reference
: <https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy>

Guidance
: Allow and deny the use of browser features in its own frame, and in content within any `<iframe>` elements in the document.

  `Feature-Policy` has been superceded by `Permissions-Policy` however browser compatibility is better for Feature-Policy. Use both until browser uptake improves

Edge
: Edge should not send this header

Application
: Consult with security team

Recommended value
: N/A

OWASP
: <https://owasp.org/www-project-secure-headers/#feature-policy>

Compatibility
: <https://caniuse.com/feature-policy>

:::
::: card

### Permissions-Policy

Reference
: <https://w3c.github.io/webappsec-permissions-policy/#permissions-policy-http-header-field>

Guidance
: Allow and deny the use of browser features in its own frame, and in content within any `<iframe>` elements in the document

Edge
: Edge should not send this header

Application
: Consult with security team

Recommended value
: `interest-cohort=()`

OWASP
: N/A

Compatibility
: <https://caniuse.com/permissions-policy>

:::
::: card

### Clear-Site-Data

Reference
: <https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Clear-Site-Data>

Guidance
: Clear browsing data (cookies, storage, cache) associated with the requesting website

Edge
: Edge should not send this header

Application
: Consult with security team

Recommended value
: N/A

OWASP
: <https://owasp.org/www-project-secure-headers/#clear-site-data>

Compatibility
: <https://caniuse.com/mdn-http_headers_clear-site-data_cache>

:::
::: card

### Set-Cookie

Reference
: <https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie>

Guidance
: Restrict cookies for better security:

  - `HttpOnly` to prevent client side scripts from accessing them
  - `Secure` to only send over HTTPS
  - `Path` to limit to web application scope
  - Prefix cookie name with `__Secure-` as a convention to indicate the cookie is secure
  - Read [OWASP Session Management Cheat Sheet][owasp_session_management_cheat_sheet] for a detailed explanation on cookie configuration options.
  - Read [Scott Helme’s article on tough cookies][scott_helme_tough_cookies]

Edge
: Edge should not send this header

Application
: See guidance

  Example value:
  
  ```text
  Set-Cookie: __Secure-JSESSIONID=123ABC; path=/access-my-service; HttpOnly; Secure
  ```

OWASP
: <https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Headers_Cheat_Sheet.html#set-cookie>

  <https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html#cookies>

Compatibility
: <https://caniuse.com/mdn-http_headers_set-cookie>

:::
::: card

### X-DNS-Prefetch-Control

Reference
: <https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control>

Guidance
: The default behavior of browsers is to perform DNS caching which is good for most websites. If you do not control links on your website, you might want to set off as a value to disable DNS prefetch to avoid leaking information to those domains.

Edge
: Edge should not send this header

Application
: Consult with security team

Recommended value
: `off`

OWASP
: <https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Headers_Cheat_Sheet.html#x-dns-prefetch-control>

Compatibility
: <https://caniuse.com/mdn-http_headers_x-dns-prefetch-control>

:::

## References

* [NHSBSA Content-Security-Policy guidance](../content-security-policy)
* [OWASP Secure Headers Project][owasp_secure_headers_project]
* [OWASP HTTP Security Response Headers Cheat Sheet][owasp_http_security_response_headers_cheat_sheet]
* [securityheaders.com][securityheaders_com]
* [Scott Helme][scott_helme]

[owasp]: <https://owasp.org/>
[owasp_secure_headers_project]: <https://owasp.org/www-project-secure-headers/>
[owasp_http_security_response_headers_cheat_sheet]: <https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Headers_Cheat_Sheet.html>
[owasp_session_management_cheat_sheet]: <https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html>
[securityheaders_com]: <https://securityheaders.com/>
[scott_helme]: <https://scotthelme.co.uk/>
[scott_helme_tough_cookies]: <https://scotthelme.co.uk/tough-cookies/>
