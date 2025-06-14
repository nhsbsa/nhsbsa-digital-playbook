/**
 * Returns a string representation of the given object.
 * @param {any} o - The object to be represented as a string.
 * @returns A string representation of the object.
 */
export default (o) => {
  return typeof o + ' ' + JSON.stringify(o);
};
