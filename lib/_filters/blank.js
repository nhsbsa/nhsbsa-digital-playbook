/**
 * Returns the first non-null value from the given arguments.
 * @param {*} value - The first value to check.
 * @param {*} blank - The second value to check.
 * @returns The first non-null value, or '-' if both values are null.
 */
module.exports = (value, blank) => {
  return value || blank || '-';
};
