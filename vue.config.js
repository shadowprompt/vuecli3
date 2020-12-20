const ConsoleLogOnBuildWebpackPlugin = require('./diy/daozhao_plugin/index');
const path = require('path');
const CKEditorWebpackPlugin = require('@ckeditor/ckeditor5-dev-webpack-plugin');
const { styles } = require('@ckeditor/ckeditor5-dev-utils');

module.exports = {
  transpileDependencies: [/ckeditor5-[^/\\]+[/\\]src[/\\].+\.js$/],
  chainWebpack: config => {
    console.log('12121 -> ', 877);
    // (1.) To handle editor icons, get the default rule for *.svg files first:
    const svgRule = config.module.rule('svg');

    // Then you can either:
    //
    // * clear all loaders for existing 'svg' rule:
    //
    // eslint-disable-next-line no-tabs
    //		svgRule.uses.clear();
    //
    // * or exclude ckeditor directory from node_modules:
    svgRule.exclude.add(path.join(__dirname, 'node_modules', '@ckeditor'));

    // Add an entry for *.svg files belonging to CKEditor. You can either:
    //
    // * modify the existing 'svg' rule:
    //
    // eslint-disable-next-line no-tabs
    //		svgRule.use( 'raw-loader' ).loader( 'raw-loader' );
    //
    // * or add a new one:
    // config.module
    //   .rule('cke-svg')
    //   .test(/ckeditor5-[^/\\]+[/\\]theme[/\\]icons[/\\][^/\\]+\.svg$/)
    //   .use('raw-loader')
    //   .loader('raw-loader');

    // (2.) Transpile the .css files imported by the editor using PostCSS.
    // Make sure only the CSS belonging to ckeditor5-* packages is processed this way.
    // config.module
    //   .rule('cke-css')
    //   .test(/ckeditor5-[^/\\]+[/\\].+\.css$/)
    //   .use('postcss-loader')
    //   .loader('postcss-loader')
    //   .tap(() => {
    //     return styles.getPostCssConfig({
    //       themeImporter: {
    //         themePath: require.resolve('@ckeditor/ckeditor5-theme-lark'),
    //       },
    //       minify: true
    //     });
    //   });
  },
  configureWebpack: {
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\\.js$/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['env'],
              plugins: ['istanbul'],
            },
          },
          exclude: /node_modules/,
        },
        {
          test: /ckeditor5-[^/\\]+[/\\]theme[/\\]icons[/\\][^/\\]+\.svg$/,
          use: {
            loader: 'raw-loader'
          },
        },
        {
          test: /ckeditor5-[^/\\]+[/\\]theme[/\\].+\.css$/,
          use: [
            {
              loader: 'postcss-loader',
              options: styles.getPostCssConfig({
                themeImporter: {
                  themePath: require.resolve('@ckeditor/ckeditor5-theme-lark'),
                },
                minify: true,
              }),
            },
          ],
        },
      ],
    },
    plugins: [
      new ConsoleLogOnBuildWebpackPlugin(),
      new CKEditorWebpackPlugin({
        // See https://ckeditor.com/docs/ckeditor5/latest/features/ui-language.html
        language: 'en',

        // Append translations to the file matching the `app` name.
        translationsOutputFile: /app/,
      }),
    ],
  },
  devServer: {
    // host: '0.0.0.0',
    // port: 80,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:5050',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
};
