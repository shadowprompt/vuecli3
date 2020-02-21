const pluginName = "ConsoleLogOnBuildWebpackPlugin";

module.exports = class ConsoleLogOnBuildWebpackPlugin {
  apply(compiler) {
    compiler.hooks.run.tap(pluginName, compilation => {
      console.log("The webpack build process is starting!!!");
    });
  }
};
