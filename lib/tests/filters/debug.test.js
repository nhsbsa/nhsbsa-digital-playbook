const debug = require('../../_filters/debug');

describe('debug', () => {
  test('should export module as a function', () => {
    expect(typeof debug).toBe('function');
  });

  describe('should return object type and value as a string', () => {
    test.each`
      object       | expected
      ${{}}        | ${'object {}'}
      ${'hello'}   | ${'string "hello"'}
      ${42}        | ${'number 42'}
      ${true}      | ${'boolean true'}
      ${null}      | ${'object null'}
      ${undefined} | ${'undefined undefined'}
      ${''}        | ${'string ""'}
    `('returns $expected when: $object is input', ({ object, expected }) => {
      expect(debug(object)).toBe(expected);
    });
  });
});
