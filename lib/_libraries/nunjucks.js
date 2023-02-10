const Nunjucks = require('nunjucks');

module.exports = (() => {
  var nunjucksEnvironment = new Nunjucks.Environment(
    new Nunjucks.FileSystemLoader(
      [
        'src/_includes',
        'src/_layouts',
        'lib/_layouts',
        'lib/_components',
        'node_modules/nhsuk-frontend/packages/components',
      ],
      {
        watch: process.env.NODE_ENV === 'development',
      }
    ),
    {
      lstripBlocks: true,
      trimBlocks: true,
    }
  );
  return nunjucksEnvironment;
})();
