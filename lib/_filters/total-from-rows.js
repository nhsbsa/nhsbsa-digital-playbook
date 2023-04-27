/**
 * Sums the second element of each array in the given array of arrays.
 * @param {Array<Array<number>>} rows - An array of arrays where each sub-array contains two numbers.
 * @returns {number} - The sum of the second element of each sub-array.
 */
module.exports = (rows) => {
  return rows.reduce((a, b) => a + b[1], 0);
};
