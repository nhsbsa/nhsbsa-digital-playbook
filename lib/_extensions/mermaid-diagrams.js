const { basename } = require('node:path');
const { readFileSync } = require('node:fs');
const { mkdtemp } = require('node:fs/promises');

module.exports = {
   outputFileExtension: "svg",
   
   // `compile` is called once per .mmd file in the input directory
   compile: async function (inputContent, inputPath) {
      // This is the render function, `data` is the full data cascade
      let tmpFolder = await mkdtemp('mermaid-');
      let outputFile = basename(inputPath) + '.svg';
      await import("@mermaid-js/mermaid-cli").then(cli =>
         cli.run(inputPath, `${tmpFolder}/${outputFile}`)
      );
      let outputContent = readFileSync(`${tmpFolder}/${outputFile}`);
      return async (data) => {
         return outputContent;
      };
   }
};
