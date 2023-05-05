module.exports = function(eleventyConfig) {
    
  // Template libraries
  eleventyConfig.setLibrary('njk', require('./lib/_libraries/nunjucks'));
  eleventyConfig.setLibrary('md', require('./lib/_libraries/markdown'));

  //collections
  require('./lib/_javascripts/statusCollections')(eleventyConfig);

  //data
  const yaml = require("js-yaml");
  eleventyConfig.addDataExtension("yaml", contents => yaml.load(contents));

  // Plugins
  eleventyConfig.addPlugin(require('@11ty/eleventy-navigation'));
  eleventyConfig.addPlugin(require('@11ty/eleventy-plugin-syntaxhighlight'));
  eleventyConfig.addPlugin(require('eleventy-plugin-nesting-toc'), {
    tags: ['h2', 'h3'],
    wrapper: 'div',
    wrapperClass: 'nhsbsa-nav__list'
  });
  eleventyConfig.addPlugin(require("eleventy-plugin-dart-sass"), {
    watch: ['lib/_stylesheets/*.{scss,sass}'],
    sassLocation: "lib/_stylesheets/",
    sassIndexFile: "application.scss",
    outputStyle: "expanded",
    outDir: "_site/nhsbsa-digital-playbook/",
    outPath: "stylesheets",
    outFileName: "application.css"
  });
  eleventyConfig.addPlugin(require('eleventy-plugin-external-links'), {
    name: 'external-links',
    regex: /^((http[s]?:)|(\/\/))/i,  // Regex that test if href is external
    target: "_blank",
    rel: "noopener",
    extensions: [".html"],
    includeDoctype: true
})
  // filters
  eleventyConfig.addFilter('date', require('./lib/_filters/date'));
  eleventyConfig.addFilter('fixed', require('./lib/_filters/fixed'));
  eleventyConfig.addFilter('markdown', require('./lib/_filters/markdown'));
  eleventyConfig.addFilter('pretty', require('./lib/_filters/pretty'));
  eleventyConfig.addFilter('slug', require('./lib/_filters/slug'));
  eleventyConfig.addFilter('sort', require('./lib/_filters/sort'));
  eleventyConfig.addFilter('tokenize', require('./lib/_filters/tokenize'));
  eleventyConfig.addFilter('totalFromRows', require('./lib/_filters/total-from-rows'));
  eleventyConfig.addFilter('widont', require('./lib/_filters/widont'));
  eleventyConfig.addFilter('sortByOrder', require('./lib/_filters/sortByOrder'));
  eleventyConfig.addFilter('blank', require('./lib/_filters/blank'));
  eleventyConfig.addFilter('urlEncode', require('./lib/_filters/urlEncode'));
  eleventyConfig.addFilter('debug', require('./lib/_filters/debug'));
  eleventyConfig.addFilter('absoluteUrl', require('./lib/_filters/urls'));


  // pass through
  eleventyConfig.addPassthroughCopy({"lib/_javascripts": "/javascripts"});
  eleventyConfig.addPassthroughCopy({"lib/_images": "/images"});
  eleventyConfig.addPassthroughCopy({"lib/_netlify": "/"});
  eleventyConfig.addPassthroughCopy({"node_modules/nhsuk-frontend/packages/assets": "/nhsuk-frontend/assets"});
  eleventyConfig.addPassthroughCopy({"node_modules/nhsuk-frontend/dist/*.js": "/javascripts"});
  eleventyConfig.addPassthroughCopy("src/**/*.jpg");
  eleventyConfig.addPassthroughCopy("src/**/*.jpeg");
  eleventyConfig.addPassthroughCopy("src/**/*.png");
  eleventyConfig.addPassthroughCopy("src/**/*.docx");

  return {
    dir: {
      input: "src",
      includes: "_includes",
      layouts: "_layouts",
      output: "_site/nhsbsa-digital-playbook"
    },
    markdownTemplateEngine: "njk",
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: "njk"
  };
};

