const markdown = require('../../_filters/markdown');

describe('markdown', () => {
  test('should export module as a function', () => {
    expect(typeof markdown).toBe('function');
  });

  test('should render with html p tag and default value', () => {
    const string = 'Digital, Data and Technology **playbook**';
    expect(markdown(string)).toEqual(
      '<p>Digital, Data and Technology <strong>playbook</strong></p>\n'
    );
  });

  test('should render inline html without p tag', () => {
    const string = 'Digital, Data and Technology **playbook**';
    const value = 'inline';
    expect(markdown(string, value)).toMatch(
      'Digital, Data and Technology <strong>playbook</strong>'
    );
  });

  test('should render html block with correct attributes', () => {
    const string = '# Digital';
    const value = 'block';
    expect(markdown(string, value)).toEqual(
      '<h1 id="digital" tabindex="-1"><a class="header-anchor" href="#digital">Digital</a></h1>\n'
    );
  });

  test.each([null, undefined, ''])(
    'should return undefined when %s string input',
    (string) => {
      expect(markdown(string)).toBeUndefined();
    }
  );
});
