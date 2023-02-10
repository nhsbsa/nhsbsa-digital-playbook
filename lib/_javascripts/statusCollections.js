/**
 * Add collections based on status frontmatter
 *
 * @param {EleventyConfig} eleventyConfig
 *
 */
module.exports = (eleventyConfig) => {
  let statuses = ['DRAFT', 'REVIEW', 'FINAL'];
  statuses.forEach((status) => {
    eleventyConfig.addCollection(status, function (collection) {
      return collection.getAll().filter((item) => {
        if (item.data.status === status) {
          console.log(status + ' status ' + item.data.title);
          return true;
        }
        return false;
      });
    });
  });
};
