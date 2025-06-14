import yaml from 'js-yaml';
import nunjucks from './lib/_libraries/nunjucks.js';
import markdown from './lib/_libraries/markdown.js';
import statusCollections from './lib/_javascripts/statusCollections.js';

// Plugin imports
import eleventyNavigation from '@11ty/eleventy-navigation';
import eleventySyntaxHighlight from '@11ty/eleventy-plugin-syntaxhighlight';
import eleventyNestingToc from 'eleventy-plugin-nesting-toc';
import eleventyDartSass from 'eleventy-plugin-dart-sass';
import eleventyExternalLinks from 'eleventy-plugin-external-links';
import eleventyAutoCacheBuster from 'eleventy-auto-cache-buster';
import eleventyMermaid from '@kevingimbel/eleventy-plugin-mermaid';

// Filter imports
import convertColor from './lib/_filters/convertColor.js';
import dateFilter from './lib/_filters/date.js';
import fixed from './lib/_filters/fixed.js';
import markdownFilter from './lib/_filters/markdown.js';
import pretty from './lib/_filters/pretty.js';
import slug from './lib/_filters/slug.js';
import sort from './lib/_filters/sort.js';
import tokenize from './lib/_filters/tokenize.js';
import totalFromRows from './lib/_filters/total-from-rows.js';
import widont from './lib/_filters/widont.js';
import sortByOrder from './lib/_filters/sortByOrder.js';
import blank from './lib/_filters/blank.js';
import urlEncode from './lib/_filters/urlEncode.js';
import debug from './lib/_filters/debug.js';
import absoluteUrl from './lib/_filters/urls.js';

export default function (eleventyConfig) {
  // Template libraries
  eleventyConfig.setLibrary('njk', nunjucks);
  eleventyConfig.setLibrary('md', markdown);

  //collections
  statusCollections(eleventyConfig);

  //data
  eleventyConfig.addDataExtension('yaml', (contents) => yaml.load(contents));

  // Plugins
  eleventyConfig.addPlugin(eleventyNavigation);
  eleventyConfig.addPlugin(eleventySyntaxHighlight);
  eleventyConfig.addPlugin(eleventyNestingToc, {
    tags: ['h2', 'h3'],
    wrapper: 'div',
    wrapperClass: 'nhsbsa-nav__list',
  });
  eleventyConfig.addPlugin(eleventyDartSass, {
    watch: ['lib/_stylesheets/*.{scss,sass}'],
    sassLocation: 'lib/_stylesheets/',
    sassIndexFile: 'application.scss',
    outputStyle: 'expanded',
    outDir: '_site/nhsbsa-digital-playbook/',
    outPath: 'stylesheets',
    outFileName: 'application.css',
  });
  eleventyConfig.addPlugin(eleventyExternalLinks, {
    name: 'external-links',
    regex: /^((https?:)|(\/\/))/i, // Regex that test if href is external
    target: '_blank',
    rel: 'noopener',
    extensions: ['.html'],
    includeDoctype: true,
  });
  eleventyConfig.addPlugin(eleventyAutoCacheBuster);
  eleventyConfig.addPlugin(eleventyMermaid, {
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
  eleventyConfig.addFilter('convertColor', convertColor);
  eleventyConfig.addFilter('date', dateFilter);
  eleventyConfig.addFilter('fixed', fixed);
  eleventyConfig.addFilter('markdown', markdownFilter);
  eleventyConfig.addFilter('pretty', pretty);
  eleventyConfig.addFilter('slug', slug);
  eleventyConfig.addFilter('sort', sort);
  eleventyConfig.addFilter('tokenize', tokenize);
  eleventyConfig.addFilter('totalFromRows', totalFromRows);
  eleventyConfig.addFilter('widont', widont);
  eleventyConfig.addFilter('sortByOrder', sortByOrder);
  eleventyConfig.addFilter('blank', blank);
  eleventyConfig.addFilter('urlEncode', urlEncode);
  eleventyConfig.addFilter('debug', debug);
  eleventyConfig.addFilter('absoluteUrl', absoluteUrl);

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
}
