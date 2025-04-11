const { markdownFileToSvgFile, markdownToSvgFile, markdownToSvg, markdownItPlugin } = require('../../_javascripts/mermaidSvg');
const { mkdtemp } = require('node:fs/promises');
// const path = require('node:path');
// const fs = require('node:fs');
const os = require('node:os');
const markdownit = require('markdown-it');

let _tmpFolder

function md(options = {}) {
  return markdownit().use(markdownItPlugin, options);
}

async function tmpFolder() {
  if (!_tmpFolder) {
    _tmpFolder = await mkdtemp(`${os.tmpFolder}/mermaid-`);
  }
  return _tmpFolder;
}

function readBytes(filePath) {
  return '';
}

describe('markdownFileToSvgFile', () => {
  test('should create svg file from mermaid markdown file', () => {
    expect(markdownFileToSvgFile('./mermaid-fixture.mmd')).toEqual(
      readBytes(`${tmpFolder()}/mermaid-fixture.svg`),
    );
  });

});

describe('markdownToSvgFile', () => {
  test('should create svg file from mermaid markdown', () => {
    expect(markdownToSvgFile('')).toEqual(
      '',
    );
  });

});

describe('markdownToSvg', () => {
  test('should create svg from mermaid markdown', () => {
    expect(markdownToSvg('')).toEqual(
      '',
    );
  });

});

describe('markdownItPlugin', () => {
  test('should create svg from mermaid markdown', () => {
    expect(md().render('`code`')).toEqual(
      '<p><code class="md">code</code></p>\n',
    );
  });

});
