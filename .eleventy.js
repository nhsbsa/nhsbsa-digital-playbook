module.exports = function (eleventyConfig) {
  // init nhsbsa-docs
  require('nhsbsa-docs/nhsbsa-docs')(eleventyConfig);

  // collections
  require('nhsbsa-docs/lib/_javascripts/statusCollections')(eleventyConfig);

  return {
    dir: {
      input: 'src',
      layouts: '_layouts',
      output: '_site/nhsbsa-digital-playbook',
    },
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
  };
};
