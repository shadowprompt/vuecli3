const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CreateManifest = require('./diy/daozhao_plugin/CreateManifest');
module.exports = {
  mode: 'development',
  entry: {
    app: './src/main.js',
  },
  output: {
    filename: 'js/[name].[hash].js',
    publicPath: './dist',
  },
  devServer: {},
  module: {
    rules: [
      // ...(config.dev.useEslint ? [createLintingRule()] : []),
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        // options: vueLoaderConfig
        options: {
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this necessary.
            scss: 'css-loader!sass-loader',
            sass: 'css-loader!sass-loader?indentedSyntax',
          },
        },
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: [path.join(__dirname, 'node_modules')]
      },
      {
        test: /.css$/,
        loader: 'css-loader',
      }
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'public/index.html',
      chunks: ['app'],
      inject: true,
    }),
    new CreateManifest(),
  ],
};
