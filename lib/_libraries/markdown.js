import markdown from 'markdown-it';
import anchor from 'markdown-it-anchor';
import slugify from '../_filters/slug.js';

// Markdown-it plugin imports
import markdownItAbbr from 'markdown-it-abbr';
import markdownItAttrs from 'markdown-it-attrs';
import markdownItCodetabs from 'markdown-it-codetabs';
import markdownItDeflist from 'markdown-it-deflist';
import markdownItFootnote from 'markdown-it-footnote';
import markdownItIns from 'markdown-it-ins';
import markdownItMark from 'markdown-it-mark';
import markdownItSub from 'markdown-it-sub';
import markdownItSup from 'markdown-it-sup';
import markdownItMultimdTable from 'markdown-it-multimd-table';
import markdownItAdmonition from 'markdown-it-admonition';
import markdownItEmoji from 'markdown-it-emoji';
import markdownItContainer from 'markdown-it-container';
import markdownClassAppender from '../_javascripts/markdownClassAppender.js';

export default (() => {
  const md = markdown({
    html: true,
    breaks: true,
    linkify: false,
    typographer: true,
  });

  md.use(markdownItAbbr)
    .use(markdownItAttrs)
    .use(anchor, {
      permalink: anchor.permalink.headerLink(),
      slugify: (s) => slugify(s),
    })
    .use(markdownItCodetabs)
    .use(markdownItDeflist)
    .use(markdownItFootnote)
    .use(markdownItIns)
    .use(markdownItMark)
    .use(markdownItSub)
    .use(markdownItSup)
    .use(markdownItMultimdTable, {
      multiline: true,
      rowspan: true,
      headerless: true,
    })
    .use(markdownItAdmonition)
    .use(markdownItEmoji)
    .use(markdownItContainer, 'card')
    .use(markdownItContainer, 'details', {
      render: function (tokens, idx) {
        var m = tokens[idx].info.trim().match(/^details\s+(.*)$/);
        if (tokens[idx].nesting === 1) {
          // opening tag
          return (
            '<details class="nhsuk-details"><summary class="nhsuk-details__summary">' +
            '<span class="nhsuk-details__summary-text">' +
            md.utils.escapeHtml(m[1]) +
            '</span></summary>\n<div class="nhsuk-details__text">\n'
          );
        } else {
          // closing tag
          return '</div></details>\n';
        }
      },
    })
    .use(markdownClassAppender, {
      excludeTokens: ['dl_open'],
      excludePatterns: ['admonition'],
    });

  return md;
})();
