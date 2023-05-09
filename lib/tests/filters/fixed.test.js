const formatNumber = require('../../_filters/fixed');

describe('formatNumber should format number to the specified number of digits. If more or no digits provided then input will be returned', () => {
  test('should export module as a function', () => {
    expect(typeof formatNumber).toBe('function');
  });

  test.each`
    input        | digit | expected
    ${0.1}       | ${''} | ${'0.1'}
    ${0.6}       | ${''} | ${'0.6'}
    ${0.64}      | ${1}  | ${'0.6'}
    ${0.66}      | ${1}  | ${'0.7'}
    ${123.45678} | ${''} | ${'123'}
    ${123.45678} | ${0}  | ${'123'}
    ${123.45678} | ${1}  | ${'123'}
    ${123.45678} | ${2}  | ${'123.4'}
    ${123.45678} | ${3}  | ${'123.45'}
    ${123.45678} | ${4}  | ${'123.456'}
    ${123.45678} | ${5}  | ${'123.4567'}
    ${123.45678} | ${6}  | ${'123.45678'}
    ${123.45678} | ${10} | ${'123.45678'}
  `('returns $expected when: $input is input', ({ input, digit, expected }) => {
    expect(formatNumber(input, digit)).toMatch(expected);
  });
});
