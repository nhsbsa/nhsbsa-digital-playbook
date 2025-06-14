import slugify from 'slugify';

/**
 * Slugify string by removing special characters
 * replacing any space with a hypen, and transforming
 * to lower case
 *
 * @param {String} string String to slugify
 * @return {String} Slugified string
 *
 */
export default (string) => {
  return slugify(string, {
    replacement: '-',
    remove: /[*+~.,()'"!?:@–]/g,
    lower: true,
  });
};
