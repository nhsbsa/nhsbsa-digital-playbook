/**
 * URL encode a value
 *
 * @param {String} value Value to encode
 * @example {{ "hello world" | url-encode }}
 *
 */
export default (value) => {
  return encodeURIComponent(value);
};
