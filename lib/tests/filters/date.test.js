const { DateTime } = require('luxon');
const formatDate = require('../../_filters/date');

describe('formatDate', () => {
  const date = DateTime.now().minus({ days: 1 });

  test('should export module as a function', () => {
    expect(typeof formatDate).toBe('function');
  });

  test('should return a formatted date string when given a valid date and format', () => {
    const expected = date.toFormat('yyyy LL dd');
    expect(formatDate(date, 'yyyy LL dd')).toBe(expected);
  });

  test.each([null, undefined, ''])(
    "should return '-' when value is: %s and format present",
    (value) => {
      expect(formatDate(value, 'yyyy LL dd')).toBe('-');
    }
  );

  test('should return the original value when given no format', () => {
    const result = DateTime.fromISO(formatDate(date)).toISODate();
    const expected = date.toISODate();
    expect(result).toStrictEqual(expected);
  });

  test('should return a undefined when given no value and no format', () => {
    expect(formatDate()).toBe(undefined);
  });
});
