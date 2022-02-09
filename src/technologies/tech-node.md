---
layout: article
title: "Node.js"
tags: tech
order: 20
---
Here’s a list of our preferred technology choices when implementing in
JavaScript. We’re not prescriptive in these choices, but have a good reason to
deviate from the norm. If you there’s a better option, raise it at the
Developer Community.

## Node.js versions

We adopt releases as advised by [Node.js](https://nodejs.org/en/about/releases/):

* We prefer Long Term Support releases which should be used when in _active_ and _maintenance_ phases
* Projects may choose to use releases in _current_ if the features are very important and the risk is accepted
* Projects should budget time while in the _maintenance_ phase to upgrade to the next LTS

|Release|Status|Release date|Active start|Maintenance start|End of life|
| ----- | ---- | ---------- | ---------- | --------------- | --------  |
|v12|Maintenance LTS|2019-04-23|2019-10-21|2020-11-30|2022-04-30
|v14|Maintenance LTS|2020-04-21|2020-10-27|2021-10-19|2023-04-30
|v16|Active LTS|2021-04-20|2021-10-26|2022-10-18|2024-04-30
|v17|Current|2021-10-19||2022-04-01|2022-06-01
|v18|Pending|2022-04-19|2022-10-25|2023-10-18|2025-04-30

We use [NVM](https://github.com/nvm-sh/nvm) to manage our Node.js installations:

* Projects should use an `.nvmrc` file, checked in to source control, to identify the Node version in use

## IDE

Choose whatever you’re comfortable with, so as long as you can perform your
job, though our developers tend to opt for [VS Code](https://code.visualstudio.com/).

## Build

* Code coverage provided by [Jest](https://jestjs.io/)
* Static analysis with SonarQube
* [Sass](https://www.npmjs.com/package/sass) for CSS preprocessing and building CSS assets
* [Gulp](https://gulpjs.com/) is used for building clientside JavaScript assets
* [TypeScript](https://www.typescriptlang.org/) can be used as a superset of JavaScript to provide more confidence
* [Prettier](https://prettier.io/) for opinionated code formatting

## Application

Our standard JavaScript based application stack is built on Node.js.

* Environment variables and secrets are provided using [dotenv](https://www.npmjs.com/package/dotenv)
* User interfaces using the [NHS Frontend toolkit](https://service-manual.nhs.uk/design-system) and [Nunjucks](https://mozilla.github.io/nunjucks/) for templating
* Web services with [express](http://expressjs.com/)
* Session handling with [express-session](https://www.npmjs.com/package/express-session) and [connect-redis](https://www.npmjs.com/package/connect-redis) if using Redis as a session store
* [Redis](https://www.npmjs.com/package/redis) client if using Redis as a database
* Security with [Helmet](https://helmetjs.github.io/) and [csurf](https://www.npmjs.com/package/csurf) to prevent CSRF
* Dates and times are manipulated using [Luxon](https://moment.github.io/luxon/#/?id=luxon) or [date-fns](https://date-fns.org/) and not moment.js
* Logging provided by [winston](https://www.npmjs.com/package/winston), [express-winston](https://www.npmjs.com/package/express-winston) and [winston-daily-rotate-file](https://www.npmjs.com/package/winston-daily-rotate-file) for log rotation in live environments
* [Node Fetch](https://www.npmjs.com/package/node-fetch) to perform HTTP requests
* [cookie-parser](https://www.npmjs.com/package/cookie-parser) for working with cookies
* [I18n](https://www.npmjs.com/package/i18n) for providing internationalisation

## Testing

* [Jest](https://jestjs.io/) is our core testing framework
* [SuperTest](https://www.npmjs.com/package/supertest) is used to provide high level HTTP testing of web services
* [redis-mock](https://www.npmjs.com/package/redis-mock) for mocking of Redis in tests
* [ESLint](https://eslint.org/) to ensure we’re using JavaScript correctly
