/**
 * URL encode a value
 *
 * @param {String} value Value to encode
 * @example {{ "hello world" | url-encode }}
 *
 */
module.exports = (value) => {
  return encodeURIComponent(value);
}
