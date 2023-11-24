---
layout: page
title: "Cookies"
---

{% from 'cookie-preferences/macro.njk' import cookiePreferences %}

{{ cookiePreferences({
    preferenceText: "Toggle your cookies on and off",
    isPageHeading: true,
    radioYesText: "Yes - accept cookies",
    radioNoText: "No - do not allows cookies",
    saveCookiePreferencesButtonText: "Save",
    cookieConfirmationURL: "cookie-confirmation/"
}) }}