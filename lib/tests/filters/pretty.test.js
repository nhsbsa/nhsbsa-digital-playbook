const removeIndexHtml = require('../../_filters/pretty');

describe('pretty', () => {
  test('should export module as a function', () => {
    expect(typeof removeIndexHtml).toBe('function');
  });

  test('should remove index.html from a string', () => {
    expect(removeIndexHtml('index.html')).toBe('');
    expect(removeIndexHtml('path/to/index.html')).toBe('path/to/');
    expect(removeIndexHtml('path/to/index.html/')).toBe('path/to//');
    expect(removeIndexHtml('index.html/path/to')).toBe('/path/to');
  });

  test('should return an empty string when given an empty string', () => {
    expect(removeIndexHtml('')).toBe('');
  });

  test('should return a string of other types', () => {
    expect(removeIndexHtml(123)).toBe('123');
    expect(removeIndexHtml(null)).toBe('null');
    expect(removeIndexHtml(undefined)).toBe('undefined');
  });
});
