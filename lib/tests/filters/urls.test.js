const resolveUrl = require('../../_filters/urls');

describe('urlResolver', () => {
  test('should export module as a function', () => {
    expect(typeof resolveUrl).toBe('function');
  });

  test('should resolve URL with default base URL', () => {
    const result = resolveUrl('/path');
    expect(result).toBe('http://localhost:8080/path');
  });

  test('should resolve URL with query parameters', () => {
    const result = resolveUrl('/path?key=value');
    expect(result).toBe('http://localhost:8080/path?key=value');
  });

  test('should resolve URL with fragment identifier', () => {
    const result = resolveUrl('/path#fragment');
    expect(result).toBe('http://localhost:8080/path#fragment');
  });

  test('should resolve URL with special characters', () => {
    const result = resolveUrl('/path with spaces');
    expect(result).toBe('http://localhost:8080/path%20with%20spaces');
  });
});
