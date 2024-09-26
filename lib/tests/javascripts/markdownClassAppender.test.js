const appender = require('../../_javascripts/markdownClassAppender');
const markdownit = require('markdown-it');

const fixture_h1 = '# heading 1';
const fixture_admonition = '!!! note\n    This is an admonition.';

function md(options = {}) {
  return markdownit().use(appender, options);
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
    expect(md({ excludeTokens: ['heading_open'] }).render(fixture_h1)).toEqual(
      '<h1 class="md">heading 1</h1>\n',
    );
  });

  test('should miss class when default rules excluded', () => {
    expect(
      md({ excludeTokens: [], appendRules: false }).render('`javascript`'),
    ).toEqual('<p><code>javascript</code></p>\n');
  });

  test.each(['admonition', /^admonition/])(
    'should exclude patterns specified as types of strings',
    (excludePattern) => {
      // given / when
      const result = md({ excludePatterns: [excludePattern] }).render(
        fixture_admonition,
      );

      // then
      expect(result).not.toContain('md');
    },
  );
});
