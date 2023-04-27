const widont = require('../../_filters/widont');

describe('widont', () => {
  test('should export module as a function', () => {
    expect(typeof widont).toBe('function');
  });

  test.each`
    input                | expected
    ${''}                | ${''}
    ${'Hello, world'}    | ${'Hello,\xA0world'}
    ${'Hello,  world'}   | ${'Hello,\xA0world'}
    ${'Hello,  world  '} | ${'Hello,\xA0world'}
    ${'Hello'}           | ${'Hello'}
    ${' Hello'}          | ${'\xA0Hello'}
  `('returns $expected when input is: $input', ({ input, expected }) => {
    expect(widont(input)).toMatch(expected);
  });
});
