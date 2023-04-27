const checkBlank = require('../../_filters/blank');

describe('blank', () => {
  test('should export module as a function', () => {
    expect(typeof checkBlank).toBe('function');
  });

  test.each([
    { value: 'defined', blank: undefined },
    { value: undefined, blank: 'defined' },
    { value: 'defined', blank: 'defined' },
    { value: '', blank: 'defined' },
  ])(
    'should return first defined value when input is: %s',
    ({ value, blank }) => {
      expect(checkBlank(value, blank)).toBe('defined');
    }
  );

  test.each([
    { value: undefined, blank: undefined },
    { value: undefined, blank: '' },
    { value: '', blank: undefined },
    { value: null, blank: '' },
    { value: '', blank: null },
    { value: null, blank: null },
    { value: '', blank: '' },
  ])("should return '-' when input is: %s", ({ value, blank }) => {
    expect(checkBlank(value, blank)).toBe('-');
  });
});
