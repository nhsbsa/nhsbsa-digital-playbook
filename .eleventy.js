module.exports = function (eleventyConfig) {
  // Template libraries
  eleventyConfig.setLibrary('njk', require('./lib/_libraries/nunjucks'));
  eleventyConfig.setLibrary('md', require('./lib/_libraries/markdown'));

  //collections
  require('./lib/_javascripts/statusCollections')(eleventyConfig);

  //data
  const yaml = require('js-yaml');
  eleventyConfig.addDataExtension('yaml', (contents) => yaml.load(contents));

  // Plugins
  eleventyConfig.addPlugin(require('@11ty/eleventy-navigation'));
  eleventyConfig.addPlugin(require('@11ty/eleventy-plugin-syntaxhighlight'));
  eleventyConfig.addPlugin(require('eleventy-plugin-nesting-toc'), {
    tags: ['h2', 'h3'],
    wrapper: 'div',
    wrapperClass: 'nhsbsa-nav__list',
  });
  eleventyConfig.addPlugin(require('eleventy-plugin-dart-sass'), {
    watch: ['lib/_stylesheets/*.{scss,sass}'],
    sassLocation: 'lib/_stylesheets/',
    sassIndexFile: 'application.scss',
    outputStyle: 'expanded',
    outDir: '_site/nhsbsa-digital-playbook/',
    outPath: 'stylesheets',
    outFileName: 'application.css',
  });
  eleventyConfig.addPlugin(require('eleventy-plugin-external-links'), {
    name: 'external-links',
    regex: /^((https?:)|(\/\/))/i, // Regex that test if href is external
    target: '_blank',
    rel: 'noopener',
    extensions: ['.html'],
    includeDoctype: true,
  });
  eleventyConfig.addTransform('add-visually-hidden-text', function(content, outputPath) {
    if (outputPath && outputPath.endsWith('.html')) {
      return content.replace(
        /<a([^>]+href="(?:https?:)?\/\/[^"]+"[^>]*)>(.*?)<\/a>/gims,
        (match, attrs, innerText) => {
          if (innerText.includes('opens in a new tab')) return match;
          return `<a${attrs}>${innerText}<span class="nhsuk-u-visually-hidden"> (opens in a new tab)</span></a>`;
        }
      );
    }
    return content;
  });
  eleventyConfig.addPlugin(require('eleventy-auto-cache-buster'));
  eleventyConfig.addPlugin(require('@kevingimbel/eleventy-plugin-mermaid'), {
    mermaid_js_src: 'https://unpkg.com/mermaid@11/dist/mermaid.esm.min.mjs',
    mermaid_config: {
      theme: 'base',
      themeVariables: {
        background: '#f0f4f5',
        primaryColor: '#d8dde0',
        primaryTextColor: '#000',
        primaryBorderColor: '#212b32',
        secondaryColor: '#f0f4f5',
        secondaryTextColor: '#000',
        tertiaryColor: '#ffb81C',
        tertiaryTextColor: '#fff',
        noteBkgColor: '#fff9c4',
        noteTextColor: '#000',
        lineColor: '#212b32',
        errorBkgColor: '#d5281b',
        errorTextColor: '#d5281b',
        git0: '#005eb8',
        git1: '#007f3b',
        git2: '#ffb81C',
        git3: '#ffeb3b',
        git4: '#d5281b',
        git5: '#7C2855',
        git6: '#330072',
        git7: '#212b32',
        gitBranchLabel0: '#fff',
        gitBranchLabel1: '#fff',
        gitBranchLabel2: '#000',
        gitBranchLabel3: '#000',
        gitBranchLabel4: '#fff',
        gitBranchLabel5: '#fff',
        gitBranchLabel6: '#fff',
        gitBranchLabel7: '#fff',
      },
      gitGraph: {
        showCommitLabel: false,
      },
    },
  });

  // filters
  eleventyConfig.addFilter(
    'convertColor',
    require('./lib/_filters/convertColor'),
  );
  eleventyConfig.addFilter('date', require('./lib/_filters/date'));
  eleventyConfig.addFilter('fixed', require('./lib/_filters/fixed'));
  eleventyConfig.addFilter('markdown', require('./lib/_filters/markdown'));
  eleventyConfig.addFilter('pretty', require('./lib/_filters/pretty'));
  eleventyConfig.addFilter('slug', require('./lib/_filters/slug'));
  eleventyConfig.addFilter('sort', require('./lib/_filters/sort'));
  eleventyConfig.addFilter('tokenize', require('./lib/_filters/tokenize'));
  eleventyConfig.addFilter(
    'totalFromRows',
    require('./lib/_filters/total-from-rows'),
  );
  eleventyConfig.addFilter('widont', require('./lib/_filters/widont'));
  eleventyConfig.addFilter(
    'sortByOrder',
    require('./lib/_filters/sortByOrder'),
  );
  eleventyConfig.addFilter('blank', require('./lib/_filters/blank'));
  eleventyConfig.addFilter('urlEncode', require('./lib/_filters/urlEncode'));
  eleventyConfig.addFilter('debug', require('./lib/_filters/debug'));
  eleventyConfig.addFilter('absoluteUrl', require('./lib/_filters/urls'));

  // pass through
  eleventyConfig.addPassthroughCopy({ 'lib/_javascripts': '/javascripts' });
  eleventyConfig.addPassthroughCopy({ 'lib/_images': '/images' });
  eleventyConfig.addPassthroughCopy({ 'lib/_netlify': '/' });
  eleventyConfig.addPassthroughCopy({
    'node_modules/nhsuk-frontend/packages/assets': '/nhsuk-frontend/assets',
  });
  eleventyConfig.addPassthroughCopy({
    'node_modules/nhsuk-frontend/dist/*.js': '/javascripts',
  });
  eleventyConfig.addPassthroughCopy({
    'node_modules/@nhsbsa/cookie-consent-component/dist/*.js': '/javascripts',
  });
  eleventyConfig.addPassthroughCopy('src/**/*.jpg');
  eleventyConfig.addPassthroughCopy('src/**/*.jpeg');
  eleventyConfig.addPassthroughCopy('src/**/*.png');
  eleventyConfig.addPassthroughCopy('src/**/*.docx');

  return {
    dir: {
      input: 'src',
      includes: '_includes',
      layouts: '_layouts',
      output: '_site/nhsbsa-digital-playbook',
    },
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
  };
};
