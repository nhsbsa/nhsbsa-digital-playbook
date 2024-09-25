const appender = require('../../_javascripts/markdownClassAppender');
const markdownit = require('markdown-it');

const fixture_h1 = '# heading 1';

function md(tokens, appendRules) {
  return markdownit().use(appender, { tokens, appendRules });
}

describe('markdownClassAppender', () => {
  test('should add class to default rules', () => {
    expect(md().render('`code`')).toEqual(
      '<p><code class="md">code</code></p>\n',
    );
  });

  test('will miss without config for explicit tokens', () => {
    expect(md().render(fixture_h1)).toEqual('<h1>heading 1</h1>\n');
  });

  test('should add class to configured tokens', () => {
    expect(md(['heading_open']).render(fixture_h1)).toEqual(
      '<h1 class="md">heading 1</h1>\n',
    );
  });

  test('should miss class when default rules excluded', () => {
    expect(md([], false).render('`javascript`')).toEqual(
      '<p><code>javascript</code></p>\n',
    );
  });
});
