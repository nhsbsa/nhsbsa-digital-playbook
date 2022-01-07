module.exports = function(eleventyConfig) {
    
  // Template libraries
  eleventyConfig.setLibrary('njk', require('./lib/_libraries/nunjucks'));
  eleventyConfig.setLibrary('md', require('./lib/_libraries/markdown'));

  // Plugins
  eleventyConfig.addPlugin(require('@11ty/eleventy-navigation'));
  eleventyConfig.addPlugin(require('@11ty/eleventy-plugin-syntaxhighlight'));
  eleventyConfig.addPlugin(require('eleventy-plugin-toc'), {
    tags: ['h2', 'h3'],
    wrapper: 'div',
    wrapperClass: 'nhsbsa-sticky-nav__list'
  });
  eleventyConfig.addPlugin(require("eleventy-plugin-dart-sass"), {
    watch: ['lib/_stylesheets/*.{scss,sass}'],
    sassLocation: "lib/_stylesheets/",
    sassIndexFile: "application.scss",
    outDir: "_site/",
    outPath: "stylesheets",
    outFileName: "application.css"
  });

  // filters
  eleventyConfig.addFilter('date', require('./lib/_filters/date'))
  eleventyConfig.addFilter('fixed', require('./lib/_filters/fixed'))
  eleventyConfig.addFilter('includes', require('./lib/_filters/includes'))
  eleventyConfig.addFilter('markdown', require('./lib/_filters/markdown'))
  eleventyConfig.addFilter('pretty', require('./lib/_filters/pretty'))
  eleventyConfig.addFilter('slug', require('./lib/_filters/slug'))
  eleventyConfig.addFilter('sort', require('./lib/_filters/sort'))
  eleventyConfig.addFilter('tokenize', require('./lib/_filters/tokenize'))
  eleventyConfig.addFilter('totalFromRows', require('./lib/_filters/total-from-rows'))
  eleventyConfig.addFilter('widont', require('./lib/_filters/widont'))
  eleventyConfig.addFilter('sortByOrder', require('./lib/_filters/sortByOrder'))
  eleventyConfig.addPassthroughCopy({"lib/_javascripts": "/javascripts"});
  eleventyConfig.addPassthroughCopy({"node_modules/nhsuk-frontend/packages/assets": "/"});
  eleventyConfig.addPassthroughCopy({"node_modules/nhsuk-frontend/packages/*.js": "/javascripts"});

  return {
    dir: {
      input: "src",
      includes: "_includes",
      layouts: "_layouts"
    },
    markdownTemplateEngine: "njk",
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: "njk"
  };
};

