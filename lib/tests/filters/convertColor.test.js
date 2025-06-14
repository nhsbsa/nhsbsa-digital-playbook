import convertColor from '../../_filters/convertColor.js';

describe('convertColor', () => {
  test('should export module as a function', () => {
    expect(typeof convertColor).toBe('function');
  });

  test.each([
    { value: '#000000', format: 'RGB', expected: '0,0,0' },
    { value: '#FFFFFF', format: 'RGB', expected: '255,255,255' },
    { value: '#FF0000', format: 'RGB', expected: '255,0,0' },
    { value: '#00FF00', format: 'RGB', expected: '0,255,0' },
    { value: '#0000FF', format: 'RGB', expected: '0,0,255' },
  ])('should return RGB when input is: %s', ({ value, format, expected }) => {
    expect(convertColor(value, format)).toBe(expected);
  });

  test.each([
    { value: '#000000', format: 'CMYK', expected: '0,0,0,100' },
    { value: '#FFFFFF', format: 'CMYK', expected: '0,0,0,0' },
    { value: '#FF0000', format: 'CMYK', expected: '0,100,100,0' },
    { value: '#00FF00', format: 'CMYK', expected: '100,0,100,0' },
    { value: '#0000FF', format: 'CMYK', expected: '100,100,0,0' },
    { value: '#00FFFF', format: 'CMYK', expected: '100,0,0,0' },
    { value: '#FF00FF', format: 'CMYK', expected: '0,100,0,0' },
    { value: '#FFFF00', format: 'CMYK', expected: '0,0,100,0' },
  ])('should return CMYK when input is: %s', ({ value, format, expected }) => {
    expect(convertColor(value, format)).toBe(expected);
  });
});
