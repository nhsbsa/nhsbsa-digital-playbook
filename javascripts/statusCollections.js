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
        if (item.data.review?.requires_review) {
          // Force the article collection to REVIEW
          item.data.status = 'REVIEW';
          console.log(`status moved to REVIEW for ${item.data.title}`);
        }
        return item.data.status === status;
      });
    });
  });
};
