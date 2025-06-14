import { DateTime } from 'luxon';

/**
 * Convert a Date to Luxon DateTime
 *
 * @param {String} string Date to convert
 *
 */
export default (value) => {
  let date;
  if (value) {
    if (value instanceof DateTime) {
      date = value;
    } else if (value instanceof Date) {
      date = DateTime.fromJSDate(value, {
        locale: 'en-GB',
        zone: 'utc',
      });
    } else if (value == 'now') {
      // Enable special `now` value
      date = DateTime.local();
    } else {
      date = DateTime.fromISO(value);
    }
  }
  return date;
};
