const sanitizeString = require('../../_filters/tokenize');

describe('toekenize', () => {
  test('should export module as a function', () => {
    expect(typeof sanitizeString).toBe('function');
  });

  test('should convert to lowercase', () => {
    expect(sanitizeString('NHS')).toBe('nhs');
  });

  test('should remove HTML elements', () => {
    expect(sanitizeString('<p>Hello</p>')).toBe(' hello');
  });

  test('should remove punctuation and newlines', () => {
    expect(sanitizeString('nhs, bsa!\nplaybook')).toBe('nhs bsa! playbook');
  });

  test('should remove short and less meaningful words', () => {
    expect(sanitizeString('The weather is nice today.')).toBe(
      ' weather nice today.'
    );
  });

  test('should remove duplicated tokens', () => {
    expect(sanitizeString('nhs nhs bsa')).toBe('nhs bsa');
  });

  test('should remove repeated spaces', () => {
    expect(sanitizeString('nhs      bsa')).toBe('nhs bsa');
  });
});
