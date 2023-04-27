/**
 * Formats a number to a specified length.
 * @param {number} number - The number to format.
 * @param {number} [length] - The length to format the number to.
 * @returns {string} - The formatted number as a string.
 */
module.exports = (number, length) => {
  return number < 1 ? number.toFixed(length || 1) : number.toFixed(length || 0);
};
