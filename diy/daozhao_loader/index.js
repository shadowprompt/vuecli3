const loaderUtils = require('loader-utils')
setTimeout(() => console.log('timeout1'));
setTimeout(() => {
  console.log('timeout2')
  Promise.resolve().then(() => console.log('promise resolve'))
});
setTimeout(() => console.log('timeout3'));
setTimeout(() => console.log('timeout4'));
module.exports = function (content, map, meta) {
  console.log('teet', loaderUtils.getOptions(this));
  debugger;
  console.log('--- type ', typeof content);
  console.log(content);
  return `module.exports = {
    key: ${content}
  }`;
};
