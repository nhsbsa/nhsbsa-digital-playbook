const slugify = require('../../_filters/slug');

describe('slugify', () => {
  test('should export module as a function', () => {
    expect(typeof slugify).toBe('function');
  });

  test('should replace spaces with hyphens', () => {
    expect(slugify('hello world')).toBe('hello-world');
  });

  test('should replace spaces with hyphens and return lowercase', () => {
    expect(slugify('HELLO WORLD')).toBe('hello-world');
  });

  test('should replace non-alphanumeric characters', () => {
    expect(slugify('hello@world')).toBe('helloworld');
  });

  test('should replace non-alphanumeric, spaces and uppercase characters correctly', () => {
    expect(slugify('heLlo@wor ld')).toBe('hellowor-ld');
  });

  test('should return empty string if input', () => {
    expect(slugify('')).toBe('');
  });

  test('should throw an error for null input', () => {
    expect(() => {
      slugify(null);
    }).toThrow('slugify: string argument expected');
  });

  test('should throw an error for undefined input', () => {
    expect(() => {
      slugify(undefined);
    }).toThrow('slugify: string argument expected');
  });
});
