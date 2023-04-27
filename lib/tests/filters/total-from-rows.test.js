const sumRows = require('../../_filters/total-from-rows');

describe('total-from-rows', () => {
  test('should export module as a function', () => {
    expect(typeof sumRows).toBe('function');
  });

  test('should return 0 for empty input', () => {
    expect(sumRows([])).toBe(0);
  });

  test('should return 0 when all rows have 0 as the second element', () => {
    expect(
      sumRows([
        [1, 0],
        [2, 0],
        [3, 0],
      ])
    ).toBe(0);
  });

  test('should return the sum of the second column even if an item is a string', () => {
    expect(
      sumRows([
        [1, 2],
        [3, 'four'],
        [5, 6],
      ])
    ).toBe('2four6');
  });

  test('should recieve NaN when undefined present', () => {
    expect(
      sumRows([
        [1, 2],
        [3, undefined],
        [5, 6],
      ])
    ).toBe(NaN);
  });

  test.each`
    input     | expected
    ${''}     | ${'26'}
    ${'four'} | ${'2four6'}
    ${null}   | ${8}
  `('returns $expected when input is: $input', ({ input, expected }) => {
    expect(
      sumRows([
        [1, 2],
        [3, input],
        [5, 6],
      ])
    ).toBe(expected);
  });
});
