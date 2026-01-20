// Copyright 2023 Kevin Gimbel
// See https://github.com/KevinGimbel/eleventy-plugin-mermaid/blob/main/LICENSE
// fix for async race condition not updating the DOM

const he = require('he');

module.exports = (eleventyConfig, options = {}) => {
  const highlighter = eleventyConfig.markdownHighlighter;
  const html_tag = options?.html_tag || 'pre';
  const extra_classes = options?.extra_classes
    ? ' ' + options.extra_classes
    : '';
  let mermaid_config = {
    ...(options?.mermaid_config || {}),
    ...{ loadOnSave: true },
  };
  let src =
    options?.mermaid_js_src ||
    'https://unpkg.com/mermaid@11.11.0/dist/mermaid.esm.min.mjs';

  eleventyConfig.addShortcode('mermaid_js', () => {
    // Add startOnLoad: false to prevent automatic initialization
    const config = { ...mermaid_config, startOnLoad: false };
    return `<script type="module" async>import mermaid from "${src}";mermaid.initialize(${JSON.stringify(config)});const run=()=>mermaid.run();document.addEventListener('DOMContentLoaded',run);if(document.readyState!=='loading')run();</script>`;
  });

  eleventyConfig.addMarkdownHighlighter((str, language) => {
    if (language === 'mermaid') {
      return `<${html_tag} class="mermaid${extra_classes}">${he.encode(str)}</${html_tag}>`;
    }
    if (highlighter) {
      return highlighter(str, language);
    }
    return `<pre class="${language}">${str}</pre>`;
  });
  return {};
};
