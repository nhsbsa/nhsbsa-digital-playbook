const markdown = require('markdown-it')
const anchor = require('markdown-it-anchor')
const slugify = require('../_filters/slug')

module.exports = (() => {

  const md = markdown({
    html: true,
    breaks: true,
    linkify: false,
    typographer: true
  })

  md
    .use(require('markdown-it-abbr'))
    .use(require('markdown-it-attrs'))
    .use(anchor, {
      permalink: anchor.permalink.headerLink(),
      slugify: s => slugify(s)
    })
    .use(require('markdown-it-codetabs'))
    .use(require('markdown-it-deflist'))
    .use(require('markdown-it-footnote'))
    .use(require('markdown-it-ins'))
    .use(require('markdown-it-mark'))
    .use(require('markdown-it-sub'))
    .use(require('markdown-it-sup'))
    .use(require('markdown-it-multimd-table'), {
      multiline:  true,
      rowspan:    true,
      headerless: true,
    })
    .use(require("markdown-it-admonition"))
    .use(require('markdown-it-emoji'))
    .use(require('markdown-it-container'), 'card');

  return md
})()
