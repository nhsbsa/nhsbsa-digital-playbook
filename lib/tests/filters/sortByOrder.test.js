const sortByOrder = require('../../_filters/sortByOrder');

describe('sortByOrder', () => {
  test('should export module as a function', () => {
    expect(typeof sortByOrder).toBe('function');
  });

  it('should return an empty array when given an empty array', () => {
    const values = [];
    const order = 'asc';
    const result = sortByOrder(values, order);
    expect(result).toEqual([]);
  });

  it('should sort an array of one object correctly', () => {
    const values = [{ data: { order: 3 } }];
    const order = 'asc';
    const result = sortByOrder(values, order);
    expect(result).toEqual([{ data: { order: 3 } }]);
  });

  it('should sort an array of objects correctly with specified order parameter: asc', () => {
    const values = [
      { data: { order: { first: 3, second: 2 } } },
      { data: { order: { first: 2, second: 3 } } },
      { data: { order: { first: 1, second: 1 } } },
    ];
    const order = 'asc';
    const result = sortByOrder(values, order);
    expect(result).toEqual([
      { data: { order: { first: 3, second: 2 } } },
      { data: { order: { first: 2, second: 3 } } },
      { data: { order: { first: 1, second: 1 } } },
    ]);
  });
});
