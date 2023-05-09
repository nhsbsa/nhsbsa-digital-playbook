const { DateTime } = require('luxon');
const dateConverter = require('../../_javascripts/dateConverter');

describe('dateConverter', () => {
  test('should export module as a function', () => {
    expect(typeof dateConverter).toBe('function');
  });

  test('should return the input value when instance of luxon DateTime', () => {
    const value = DateTime.local();
    const expected = value;

    const result = dateConverter(value);
    expect(result).toBeInstanceOf(DateTime);
    expect(result).toStrictEqual(expected);
  });

  test('should return the current luxon date when value is a js date', () => {
    const value = new Date();
    const expected = DateTime.fromJSDate(value, {
      locale: 'en-GB',
      zone: 'utc',
    });

    const result = dateConverter(value);
    expect(result).toBeInstanceOf(DateTime);
    expect(result).toStrictEqual(expected);
  });

  test('should return the current luxon date when value is: now', () => {
    const value = 'now';
    const expected = DateTime.local();

    const result = dateConverter(value);
    expect(result).toBeInstanceOf(DateTime);
    expect(result).toStrictEqual(expected);
  });

  test('should return the correct luxon date from string', () => {
    const dateStringValue = '2023-05-25';
    const expected = DateTime.fromISO(dateStringValue);

    const result = dateConverter(dateStringValue);
    expect(result).toBeInstanceOf(DateTime);
    expect(result).toStrictEqual(expected);
  });

  test.each([null, undefined, ''])(
    'should return undefined when value is: %s',
    (value) => {
      expect(dateConverter(value)).toBeUndefined();
    }
  );
});
