const ConsoleLogOnBuildWebpackPlugin = require("./diy/daozhao_plugin/index");

module.exports = {
  configureWebpack: {
    devtool: "source-map",
    module: {
      rules: [
        {
          test: /\\.js$/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["env"],
              plugins: ["istanbul"]
            }
          },
          exclude: /node_modules/
        }
      ]
    },
    plugins: [new ConsoleLogOnBuildWebpackPlugin()]
  },
  devServer: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:5050",
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
};
