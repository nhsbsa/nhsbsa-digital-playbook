const container = require('markdown-it-container');

module.exports = function contentTabsMarkdown(markdown) {
  for (const name of ['tabs', 'tab']) {
    markdown.use(container, name, {
      validate: (info) => new RegExp(`^${name}\\s+.+$`).test(info.trim()),
      render: (tokens, index) => {
        if (tokens[index].nesting === -1) {
          return name === 'tabs' ? '</div>\n' : '</section>\n';
        }

        const label = markdown.utils.escapeHtml(
          tokens[index].info.trim().slice(name.length).trim(),
        );

        return name === 'tabs'
          ? `<div class="app-content-tabs" data-content-tabs data-label="${label}">\n`
          : `<section class="app-content-tabs__panel" data-content-tab data-label="${label}">\n`;
      },
    });
  }
};
