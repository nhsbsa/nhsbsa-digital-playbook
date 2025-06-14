import dateConverter from '../_javascripts/dateConverter.js';

/**
 * Format a data using tokens
 *
 * @param {String} string Date to convert
 * @param {String} format Token-based formatting.
 * @example {{ date | date("OPTIONAL FORMAT STRING") }}
 *
 */
export default (value, format) => {
  if (value) {
    let date = dateConverter(value);
    // Format date if formatting tokens provided
    // See: https://moment.github.io/luxon/docs/manual/formatting.html#table-of-tokens
    if (format) {
      date = date.toFormat(format);
    }
    return date;
  } else if (format) {
    return '-';
  }
};
