---
layout: page
title: "Choose which cookies we use"
---

{% from 'cookie-preferences/macro.njk' import cookiePreferences %}
{% set containerClasses = "app-width-container" %}

# Choose which cookies we use

Let us know which cookies we can use. We'll use a cookie to save your settings.

## Cookies that measure website use (analytics cookies)

These cookies store information about how you use our website, such as the links you click on. We use them to help make our website better.

::: details List of cookies that make our website work    

### List of cookies that measure website use

| Name | Purpose | Expires |
| ----------- | ----------- | ----------- |
| _ga | Used by Google Analytics. Tells us how you use our services. | 2 years |
| _ga_NQ562NM01Z| This cookie registers a unique ID that is used to generate statistical data on how the visitor uses the website. | 2 years |

:::

{{ cookiePreferences({
    preferenceText: "Do you want to allow cookies to measure your website use?",
    fieldsetClasses: "nhsuk-fieldset__legend--m",
    radioYesText: "Use cookies to measure my website use",
    radioNoText: "Do not use cookies to measure my website uses",
    saveCookiePreferencesButtonText: "Save my cookie settings",
    cookieConfirmationURL: "/nhsbsa-digital-playbook/cookie-policy/cookies-confirmation/"
}) }}

{% block pageScripts %}
  <script>
    // Check the checkboxes based on status of cookie preferences
    window.addEventListener("load", function checkCookie() {
      document.getElementById("cookie-preference-1").checked = NHSCookieConsent.getStatistics();
      document.getElementById("cookie-preference-2").checked = !NHSCookieConsent.getStatistics();
    });
    // Edit consent preferences based on checkbox input
    function changeConsent() {
      NHSCookieConsent.setStatistics(document.getElementById("cookie-preference-1").checked);
      if (typeof NHSCookieConsent.setConsented === "function") {
        NHSCookieConsent.setConsented(true);
      }
    }
  </script>
{% endblock %}