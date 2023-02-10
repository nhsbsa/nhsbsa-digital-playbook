const dateConverter = require('../_javascripts/dateConverter');

/**
 * Format a data using tokens
 *
 * @param {String} string Date to convert
 * @param {String} format Token-based formatting.
 * @example {{ date | date("OPTIONAL FORMAT STRING") }}
 *
 */
module.exports = (value, format) => {
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
