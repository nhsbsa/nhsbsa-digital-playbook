const extractCategory = require('../../_filters/extractCategory');

describe('extractCategory', () => {
  const defaultCategory = 'default';

  test('Default category is returned when no categories are provided', () => {
    const filePathStem = '/dir/file';

    const result = extractCategory(filePathStem, defaultCategory);

    expect(result).toBe(defaultCategory);
  });

  test('Default category is returned when no matching categories are provided', () => {
    const filePathStem = '/dir/file';
    const categories = ['development', 'security', 'testing'];

    const result = extractCategory(filePathStem, defaultCategory, categories);

    expect(result).toBe(defaultCategory);
  });

  test('Default category is returned when no matching unified or normal categories are provided', () => {
    const filePathStem = '/dir/file';
    const unifiedCategories = { research: 'UCD', design: 'UCD' };

    const result = extractCategory(
      filePathStem,
      defaultCategory,
      [],
      unifiedCategories
    );

    expect(result).toBe(defaultCategory);
  });

  test('should return default category when single file in filePathStem', () => {
    const filePathStem = '/file';

    const result = extractCategory(filePathStem, defaultCategory, [], {});

    expect(result).toBe(defaultCategory);
  });

  test('Specific category is returned when match found in categories', () => {
    const category = 'development';
    const filePathStem = `/${category}/file`;
    const categories = [category, 'security', 'testing'];

    const result = extractCategory(filePathStem, defaultCategory, categories);

    expect(result).toBe(category);
  });

  test('Specific category is returned when match found in unified categories', () => {
    const unifiedCategory = 'UCD';
    const filePathStem = `/research/file`;
    const unifiedCategories = { research: unifiedCategory };

    const result = extractCategory(
      filePathStem,
      defaultCategory,
      [],
      unifiedCategories
    );

    expect(result).toBe(unifiedCategory);
  });
});

describe('extractCategory - errors', () => {
  const filePathStem = '/development/file';

  test('should throw a ReferenceError when no defaultCategory provided', () => {
    expect(() => {
      extractCategory(filePathStem, null);
    }).toThrow(ReferenceError);
  });

  test('should throw a ReferenceError with correct error message when no defaultCategory', () => {
    expect(() => {
      extractCategory(filePathStem, null);
    }).toThrowError('defaultCategory is not defined');
  });
});
