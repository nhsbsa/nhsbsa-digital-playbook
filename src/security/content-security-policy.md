---
layout: article
title: "Content Security Policy"
description: "Use CSP as the modern approach to securing our web applications"
status: FINAL
tags: [security, dev-security]
order:
  security: 11
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
    - version: "1.1"
      date: 2022-09-17
      amended_by: "PT"
      approved_by: "AW"
      details: "CSP `navigate-to` directive removed from CSP L3 working draft"
---
A Content Security Policy (CSP) helps prevent unwanted content from being injected/loaded into your webpages. This can mitigate cross-site scripting (XSS) vulnerabilities, clickjacking, formjacking, malicious frames, unwanted trackers, and other web client-side attacks.

If you want to learn how CSP works, check out:

* [Web.dev guide to CSP][web_dev_csp]
* [Content Security Policy quick reference guide][csp_com]
* [W3C Content Security Policy specification][w3c_csp]
* [MDN Content Security Policy reference][mdn_csp]
* [Google’s guidance on CSP][csp_with_google]
* [OWASP CSP Cheat sheet][owasp_cheat_sheet_csp]

!!! warning Consult a security expert
The advice and recommended values provided here should be taken as guidance only. Security headers can be complicated, with compounding effects depending on your web application and the diversity of user devices.

* Consult a security expert before applying values
* Follow a sensible route to live where changes are tested in a pre-production environment
* Thoroughly test your application against your expected devices

Readers should be careful when copying and pasting code from any website, this site included. NHS Business Services Authority, its employees and its representatives accept no liability for damage caused by the misuse, either intentional or unintentional, of the information presented in its articles.
!!!

## Start early

Developing a site with CSP from the outset is much easier than retrofitting CSP to an existing site.

## CSP Header

Sending the standard `Content-Security-Policy` header as well as earlier `X-Content-Security-Policy` or `X-Webkit-CSP` headers causes unexpected behaviours on some browsers. Avoid using the deprecated `X-*` headers.

Chrome dev-tools hides the `X-` style CSP response headers in preference to the standard `Content-Security-Policy`, even when they are sent. Use this curl command to test whether your site is sending the deprecated headers:

```bash
curl --head <URL>
```

## CSP levels

CSP is an evolving standard, and with each new release comes tighter controls to protect users. These are referred to as CSP Levels. We aim to provide as secure an experience as possible with the browsers available to our users.

Design to Content Security Policy level 2 and above. At the time of writing, all modern browsers support Level 2. IE 11 supports parts of Level 1 and it relies on the deprecated and dangerous `X-Content-Security-Policy`. It can therefore be safely ignored from scope of the CSP.

## Browser support

To check CSP level support in browsers refer to the CanIUse website:

* [CSP Level 1](https://caniuse.com/contentsecuritypolicy)
* [CSP Level 2](https://caniuse.com/contentsecuritypolicy2)
* Browser support for CSP Level 3 is currently undocumented on CanIUse.

Cross reference our [supported browsers](https://nhsbsauk.sharepoint.com/sites/Digital872/SitePages/NHSBSA-Compatibility-testing-coverage.aspx) to get a clear understanding of which Level we must support.

## CSP Evaluator

To check what your CSP states at the different levels, and what the security implications are, use the [CSP Evaluator][google_csp_evaluator] from Google.

Be sure to check your CSP at level 2 and 3 (referred to as Versions in the evaluator)

## Hash and nonce

Some of the CSP directives can use a hash or a nonce value. A hash is a SHA hash of a resource such as a script file. A cryptographic nonce is a unique value that is generated once per request. Using a hash (preferred) or nonce will improve resilience to attacks. If you use a directive that supports them, then you should do so.

If using a nonce, be sure to understand the [security implications](https://www.w3.org/TR/CSP/#security-considerations) and talk to our security team.

## Framework support

### Node.js

[Helmet-CSP][helmet_js_csp] is an extension to the [Helmet.js][helmet_js] security library. It will generate dynamic CSPs for you through configuration, and has support for nonces.

Example Expess.js/Helmet.js configuration that’s aligned with the BSA HTTP Security Headers:

```js
import * as helmet from 'helmet';

...

// optional nonce middleware
app.use((req, res, next) => {
  res.locals.scriptNonce = Buffer.from(v4()).toString('base64');
  next();
});

const {
  'object-src': objectSrc,
  'script-src': scriptSrc,
  ...defaultDirectives
} = helmet.contentSecurityPolicy.getDefaultDirectives();

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      ...defaultDirectives,
      'default-src': ["'none'"],
      'form-action': ["'self'"],
      'frame-ancestors': ["'none'"],
      'plugin-types': ["'none'"],
      'prefetch-src': ["'none'"],
      'script-src': [
        ...scriptSrc,
        (req, res) => `'nonce-${res.locals.scriptNonce}'`,
      ],
      'style-src': ["'self'"],
    },
  })
);
app.use(helmet.crossOriginEmbedderPolicy());
app.use(helmet.crossOriginOpenerPolicy());
app.use(
  helmet.crossOriginResourcePolicy({
    policy: 'same-site',
  })
);
app.use(helmet.dnsPrefetchControl());
app.use(helmet.frameguard());
app.use(helmet.hidePoweredBy());
app.use(
  helmet.hsts({
    maxAge: 31536000,
  })
);
app.use(helmet.ieNoOpen());
app.use(helmet.noSniff());
app.use(helmet.originAgentCluster());
app.use(
  helmet.referrerPolicy({
    policy: 'strict-origin-when-cross-origin',
  })
);
app.use(helmet.xssFilter());
```

### Java/Spring

Spring-security only has support for a static CSP. This is insufficient for generation of a nonce/hash. See [this article](https://techblog.bozho.net/content-security-policy-nonce-with-spring-security/) for details of how to support CSPs with dynamic nonce generation, substitution in the CSP and usage in an HTML template. A similar technique could be used for hashing.

## Inline scripts

Try to avoid inline scripts.

If your application uses inline scripts such as the usual Google Analytics and/or Google Tag Manager snippets:

* Extract the inline script into file hosted by your service and allow that to load using the 'self' value

  otherwise…

* Ese a `nonce-*` value and add a nonce attribute to the inline script
  You may need to pass the nonce value downstream to the Google scripts loaded from the inline script.
  See this article for further detail: [Use Tag Manager with a Content Security Policy][google_tag_manager_csp]

## Reporting

While developing a CSP it can be useful to use the `Content-Security-Policy-Report-Only` header. The browser will report violations of the CSP without breaking the web application. Fix the policy or the application before switching to use the `Content-Security-Policy` header.

It is a good idea to release the CSP in report only mode to gain the confidence that no issues have been found in the wild.

Even after switching to an enforcing CSP, it is useful to receive reports. This will alert to any problems that are introduced, or to attacks being made in the wild. Add the report-uri and report-to directives to the CSP (see below).

## Example CSP

This is an example CSP to use as an initial basis for development.

Note:

* Use of Google Analytics and Google Tag Manager: Remove if not required
* Use of nonce: Remove if not supported in your framework

```csp
default-src 'none';
frame-ancestors 'none';
base-uri 'self';
form-action 'self';
plugin-types 'none';
prefetch-src 'none';
script-src 'self' 'nonce-{nonce}';
style-src 'self' 'nonce-{nonce}';
img-src 'self' 'nonce-{nonce}' https://www.google-analytics.com https://www.googletagmanager.com;
font-src 'self' 'nonce-{nonce}' https://assets.nhs.uk;
connect-src 'self' 'nonce-{nonce}' https://www.google-analytics.com https://www.googletagmanager.com;
report-uri TBD;
```

## MUST

::: card

### default-src

Reference
: * <https://content-security-policy.com/default-src/>
  * <https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/default-src>
  * <https://www.w3.org/TR/CSP/#directive-default-src>

Guidance
: Adopt the principle of least privilege by using a value of `'none'`, setting the default for:

  * [script-src](#script-src)
  * [style-src](#style-src)
  * [font-src](#font-src)
  * [img-src](#img-src)
  * [connect-src](#connect-src)
  * [worker-src](#worker-src)
  * [object-src](#object-src)
  * [media-src](#media-src)
  * [manifest-src](#manifest-src)
  * [frame-src](#frame-src)
  * [prefetch-src](#prefetch-src)
  * [child-src](#child-src)

  You may then re-enable specific `*-src` directives as required.

Recommended value
: `'none'`

:::
::: card

### frame-ancestors

Reference
: Defines valid sources for embedding the resource using `<frame>`, `<iframe>`, `<object>`, `<embed>`, `<applet>`.
  Setting this directive to `'none'` should be roughly equivalent to `X-Frame-Options: DENY`

  * <https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors>
  * <https://www.w3.org/TR/CSP/#directive-frame-ancestors>

Guidance
: Use recommended value of `'none'`

Recommended value
:  `'none'`

:::
::: card

### base-uri

Reference
: Defines a set of allowed URLs which can be used in the src attribute of a HTML base tag.

  * <https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/base-uri>
  * <https://www.w3.org/TR/CSP/#directive-base-uri>

Guidance
: Use recommended value of `'self'`
  Consult with security team if another base URI is required

Recommended value
:  `'self'`

:::
::: card

### form-action

Reference
: * <https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/form-action>
  * <https://www.w3.org/TR/CSP/#directive-form-action>

Guidance
: Form actions should be handled by the same origin as the application.
  Use recommended value of `'self'`
  Consult with security team if another form-action is required

Recommended value
:  `'self'`

:::
::: card

### plugin-types

Reference
: Defines valid MIME types for plugins invoked via `<object>` and `<embed>`. To load an `<applet>` you must specify `application/x-java-applet`.

  * <https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/plugin-types>

Guidance
: Use recommended value of `'none'`
  Consult with security team if a plugin is required

Recommended value
:  `'none'`

:::
::: card

### prefetch-src

Reference
: Defines valid sources for request prefetch and prerendering, for example via the link tag with `rel="prefetch"` or `rel="prerender"`

  * <https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/prefetch-src>

Guidance
: Use recommended value of `'none'`
  Consult with security team if prefetch is required

Recommended value
:  `'none'`

:::

## SHOULD

::: card

### script-src

Reference
: * <https://content-security-policy.com/script-src/>
  * <https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src>
  * <https://www.w3.org/TR/CSP/#directive-script-src>

Guidance
: Add additional domains such as Google Analytics/Tag Manager only when needed.
  Avoid `'unsafe-inline'` and `'unsafe-eval'`

Recommended value
:  `'self'`

:::
::: card

### style-src

Reference
: * <https://content-security-policy.com/style-src/>
  * <https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/style-src>
  * <https://www.w3.org/TR/CSP/#directive-style-src>

Guidance
: All styles should be defined in separate CSS files and served from the same origin.
  Avoid `'unsafe-inline'`

Recommended value
: `'self'`

:::
::: card

### img-src

Reference
: * <https://content-security-policy.com/img-src/>
  * <https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/img-src>
  * <https://www.w3.org/TR/CSP/#directive-img-src>

Guidance
: Additional domains such as Google Analytics/Tag Manager may be needed for beacon pixels.
  Avoid `'unsafe-inline'`

Recommended value
: `'self'`

:::
::: card

### font-src

Reference
: * <https://content-security-policy.com/font-src/>
  * <https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/font-src>
  * <https://www.w3.org/TR/CSP/#directive-font-src>

Guidance
: Fonts should be hosted by the NHS assets CDN.
  Avoid `'unsafe-inline'`

Recommended value
: `https://assets.nhs.uk`
  and/or
  `'self'`

:::
::: card

### report-uri

Reference
: Instructs the browser to POST a reports of policy failures to this URI. You can also use `Content-Security-Policy-Report-Only` as the HTTP header name to instruct the browser to only send reports (does not block anything). This directive is deprecated in CSP Level 3 in favor of the `report-to` directive.

  * <https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/report-uri>
  * <https://www.w3.org/TR/CSP/#directive-report-uri>

Guidance
: It is useful to report violations of the CSP in development and live running of a CSP.

Recommended value
: TBD

:::

## COULD

::: card

### connect-src

Reference
: * <https://content-security-policy.com/connect-src/>
  * <https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/connect-src>
  * <https://www.w3.org/TR/CSP/#directive-connect-src>

Guidance
: `'self'` is only required when client side application Javascript requires access to additional resources such as a web-service.
  
  Add additional domains such as Google Analytics/Tag Manager when needed.

Recommended value
:  with GA/GTM
  `https://www.googletagmanager.com https://www.google-analytics.com`

:::
::: card

### media-src

Reference
: * <https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/media-src>
  * <https://www.w3.org/TR/CSP/#directive-media-src>

Guidance
: Media can be useful, but large binary content should be served from a CDN external to the application.

Recommended value
:  CDN origin

:::
::: card

### upgrade-insecure-requests

Reference
: * <https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/upgrade-insecure-requests>
  * <https://www.w3.org/TR/upgrade-insecure-requests/#delivery>

Guidance
: Use this directive when resources could be served over insecure HTTP, but you wish to migrate over to HTTPS without the effort of fixing the pages.

Recommended value
:  N/A

:::
::: card

### report-to

Reference
: Defines a reporting group name defined by a Report-To HTTP response header. See the Reporting API for more info.

  * <https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/report-to>
  * <https://www.w3.org/TR/CSP/#directive-report-to>

Guidance
: It is useful to report violations of the CSP in development and live running of a CSP.

Recommended value
:  TBD

:::
::: card

### sandbox

Reference
: N/A

Guidance
: Consult with security team

Recommended value
: * <https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/sandbox>
  * <https://www.w3.org/TR/CSP/#directive-sandbox>

:::
::: card

### worker-src

Reference
: Restricts the URLs which may be loaded as a Worker, SharedWorker or ServiceWorker.

  * <https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/worker-src>
  * <https://www.w3.org/TR/CSP/#directive-worker-src>

Guidance
: `'self'` is only required when client side application Javascript requires access to additional resources such as a web-service from a worker thread.
  Otherwise avoid usage and fallback to the `default-src 'none';`

Recommended value
: N/A

:::
::: card

### manifest-src

Reference
: The web app manifest is a JSON file that tells the browser about your Progressive Web App and how it should behave when installed on the user's desktop or mobile device. A typical manifest file includes the app name, the icons the app should use, and the URL that should be opened when the app is launched.

  * <https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/manifest-src>
  * <https://www.w3.org/TR/CSP/#directive-manifest-src>

Guidance
: Only used by progressive web applications
  Otherwise avoid usage and fallback to the `default-src 'none';`

Recommended value
: N/A

:::
::: card

## SHOULD NOT

::: card

### object-src

Reference
: N/A

Guidance
: Sources of plugins such as `<object>`, `<embed>` or `<applet>`
  There are rarely any times that a modern web application will require this, so avoid usage and fallback to the `default-src 'none';`
  Consult with security team before use

  * <https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/object-src>
  * <https://www.w3.org/TR/CSP/#object-src>

Recommended value
: N/A

:::
::: card

### frame-src

Reference
: Defines valid sources for loading frames. In CSP Level 2 `frame-src` was deprecated in favor of the `child-src` directive. CSP Level 3, has undeprecated `frame-src` and it will continue to defer to `child-src` if not present.

  * <https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/frame-src>
  * <https://www.w3.org/TR/CSP/#directive-frame-src>

Guidance
: Web applications should avoid use of `<frame>` and `<iframe>` and fallback to the `default-src 'none';`
  Social media integration may require use of iframes.
  Consult with security team before use

Recommended value
: N/A

:::
::: card

### child-src

Reference
: Defines valid sources for web workers and nested browsing contexts loaded using elements such as `<frame>` and `<iframe>`

  * <https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/child-src>
  * <https://www.w3.org/TR/CSP/#directive-child-src>

Guidance
: Web applications should avoid use of `<frame>` and `<iframe>` and fallback to the `default-src 'none';`
  Social media integration may require use of iframes.
  Consult with security team before use

Recommended value
: N/A

:::

## References

* [W3C CSP specification][w3c_csp]
* [MDN Content Security Policy reference][mdn_csp]
* [Web.dev guide to CSP][web_dev_csp]
* [CSP with Google][csp_with_google]
* [Google - Strict Content Security Policy][google_strict_csp]
* [Google - CSP Evaluator][google_csp_evaluator]
* [Google Developers - Using Google Tag Manager with a Content Security Policy][google_tag_manager_csp]
* [Google fundamentals - Content security policy][google_fundamentals_csp]
* [Content Security Policy - OWASP Cheat Sheet Series][owasp_cheat_sheet_csp]
* [Content-Security-Policy][csp_com]
* [Can I use... CSP][caniuse_csp]
* [Helmet-csp][helmet_js_csp]
* [Should you deploy your own CSP reporting endpoint?][websec_csp]
* [CSP On Reporting and Filtering][dropbox_tech_csp]

[w3c_csp]: <https://www.w3.org/TR/CSP/>
[mdn_csp]: <https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy>
[web_dev_csp]: <https://www.html5rocks.com/en/tutorials/security/content-security-policy/>
[csp_with_google]: <https://csp.withgoogle.com/docs/index.html>
[google_strict_csp]: <https://csp.withgoogle.com/docs/strict-csp.html>
[google_tag_manager_csp]: <https://developers.google.com/tag-platform/tag-manager/web/csp>
[google_fundamentals_csp]: <https://developers.google.com/web/fundamentals/security/csp>
[google_csp_evaluator]: <https://csp-evaluator.withgoogle.com/>
[helmet_js]: <https://www.npmjs.com/package/helmet>
[helmet_js_csp]: <https://www.npmjs.com/package/helmet-csp>
[owasp_cheat_sheet_csp]: <https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html>
[csp_com]: <https://content-security-policy.com/>
[caniuse_csp]: <https://caniuse.com/?search=csp>
[websec_csp]: <https://websec.be/blog/cspreporting/>
[dropbox_tech_csp]: <https://dropbox.tech/security/on-csp-reporting-and-filtering>
