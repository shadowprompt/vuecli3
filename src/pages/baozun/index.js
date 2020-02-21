export default Vue => {
  const files = require.context("./", false, /\.vue$/);
  // console.log('file ', files, files.keys());
  files.keys().forEach(item => {
    const name = item.replace(/^\.\/|\.vue$/g, "");
    // console.log('name', name, files(item).default);
    Vue.component(name, files(item).default || files[item].default);
  });
};
