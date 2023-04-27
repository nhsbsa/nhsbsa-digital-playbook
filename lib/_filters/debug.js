/**
 * Returns a string representation of the given object.
 * @param {any} o - The object to be represented as a string.
 * @returns A string representation of the object.
 */
module.exports = (o) => {
  return typeof o + ' ' + JSON.stringify(o);
};
