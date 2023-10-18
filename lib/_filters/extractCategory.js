/**
 * Extracts the category from a file path stem.
 * @param {string} filePathStem - The file path stem to extract the category from.
 * @param {string} defaultCategory - The default category to return if the extracted category is not found in the category list.
 * @param {Array<string>} [categoryList=[]] - The list of categories to check against. Defaults to an empty array if not provided.
 * @param {Object} [unifiedCategories={}] - An object mapping specific categories to the unified category. Defaults to an empty object if not provided.
 * @returns {string} The extracted category if it is found in the category list, otherwise the default category.
 */
module.exports = (
  filePathStem,
  defaultCategory,
  categories = [],
  unifiedCategories = {}
) => {
  if (defaultCategory === null) {
    throw new ReferenceError('defaultCategory is not defined');
  }
  const parts = filePathStem.split('/');
  const dir = parts[1];
  if (Object.prototype.hasOwnProperty.call(unifiedCategories, dir)) {
    return unifiedCategories[dir];
  }
  return categories.includes(dir) ? dir : defaultCategory;
};
