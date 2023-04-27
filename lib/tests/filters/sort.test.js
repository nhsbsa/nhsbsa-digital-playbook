const sort = require('../../_filters/sort');

describe('sort', () => {
  test('should export module as a function', () => {
    expect(typeof sort).toBe('function');
  });

  it('should return empty array when input', () => {
    const array = [];
    const expected = [];
    expect(sort(array, 'age')).toEqual(expected);
  });

  it('should sort the array based on the given key', () => {
    const array = [
      { name: 'Item', number: 30 },
      { name: 'Item1', number: 25 },
      { name: 'Item2', number: 40 },
    ];
    const expected = [
      { name: 'Item1', number: 25 },
      { name: 'Item', number: 30 },
      { name: 'Item2', number: 40 },
    ];
    expect(sort(array, 'number')).toEqual(expected);
  });

  it('should sort when duplicate data present', () => {
    const array = [
      { name: 'Item', number: 30 },
      { name: 'Item', number: 30 },
      { name: 'Item1', number: 25 },
      { name: 'Item2', number: 40 },
      { name: 'Item2', number: 40 },
    ];
    const expected = [
      { name: 'Item1', number: 25 },
      { name: 'Item', number: 30 },
      { name: 'Item', number: 30 },
      { name: 'Item2', number: 40 },
      { name: 'Item2', number: 40 },
    ];
    expect(sort(array, 'number')).toEqual(expected);
  });

  it('should return same input if unknown key', () => {
    const array = [
      { name: 'Item', number: 30 },
      { name: 'Item1', number: 25 },
      { name: 'Item2', number: 40 },
    ];
    const expected = [
      { name: 'Item', number: 30 },
      { name: 'Item1', number: 25 },
      { name: 'Item2', number: 40 },
    ];
    expect(sort(array, 'id')).toEqual(expected);
  });
});
