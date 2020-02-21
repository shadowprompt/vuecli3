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
  }
};
