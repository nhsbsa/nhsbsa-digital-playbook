const markdown = require('markdown-it')
const anchor = require('markdown-it-anchor')

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
      permalink: anchor.permalink.headerLink()
    })
    .use(require('markdown-it-deflist'))
    .use(require('markdown-it-footnote'))
    .use(require('markdown-it-ins'))
    .use(require('markdown-it-mark'))
    .use(require('markdown-it-sub'))
    .use(require('markdown-it-sup'))

  return md
})()
