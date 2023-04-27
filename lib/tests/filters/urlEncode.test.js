const urlEncode = require('../../_filters/urlEncode');

describe('urlEncode', () => {
  test('should export module as a function', () => {
    expect(typeof urlEncode).toBe('function');
  });

  test('should return empty string when empty string given', () => {
    expect(encodeURIComponent('')).toBe('');
  });

  test('should encode a string value', () => {
    expect(urlEncode('hello world')).toBe('hello%20world');
  });

  test('encodes special characters', () => {
    expect(encodeURIComponent('hello @#$%^&_+')).toBe(
      'hello%20%40%23%24%25%5E%26_%2B'
    );
  });
});
