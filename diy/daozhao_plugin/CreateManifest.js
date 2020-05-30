const path = require('path');
const fs = require('fs');

class CreateManifest {
  constructor(options = {}) {
    this.fileName = options.fileName || 'manifest.json';
  }

  apply(compiler) {
    const targets = {};
    let publicPath = '';

    compiler.hooks.compilation.tap('compilation', compilation => {
      publicPath = compilation.outputOptions.publicPath;
      console.log(' compilation-> ', publicPath, Date.now());
      // compilation.hooks.chunkAsset.tap('chunkAsset', (chunk, name) => {
      //   const filePath = '/' + path.join(publicPath, name);
      //   targets[filePath] = filePath;
      //   console.log('--> ', filePath.replace(/^.?\//, '/'));
      // });
      if (compilation.hooks.htmlWebpackPluginBeforeHtmlGeneration) {
        compilation.hooks.htmlWebpackPluginBeforeHtmlGeneration.tap('dda', (data) => {
          console.log(' data-> ', data);
        })
      }
    });
    compiler.hooks.done.tap('done', states => {
      console.log(' done-> ', Date.now());
      fs.writeFile(
        path.join(compiler.context, this.fileName),
        JSON.stringify(targets),
        function(err) {
          if (err) {
            console.error('create manifest error', err);
          } else {
            console.log('create manifest successful');
          }
        },
      );
    });
  }
}
module.exports = CreateManifest;
