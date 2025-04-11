
module.exports = {

    markdownFileToSvgFile: async (inputPath, outputPath) => {
        await import("@mermaid-js/mermaid-cli").then(cli =>
            cli.run(inputPath, outputPath)
        );
    },

    markdownToSvgFile: async () => {
        let tmpFolder = await mkdtemp('mermaid-');
        let outputFile = basename(inputPath) + '.svg';

    },

    markdownToSvg: async () => {
`${tmpFolder}/${outputFile}`
        let outputContent = readFileSync(`${tmpFolder}/${outputFile}`);
    },

    markdownItPlugin: () => {

    }
};
