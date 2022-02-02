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
