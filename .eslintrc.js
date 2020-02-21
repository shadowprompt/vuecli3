// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
    jquery: true
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard',
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    //全等规则关闭
    'eqeqeq':'off',
    "no-restricted-globals": 0,
    "vue/no-parsing-error": [2, { "x-invalid-end-tag": false }],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'space-before-function-parentheses': 0,
    'space-before-function-paren': 0,
    'comma-dangle': 0,
    'semi': 0,
    // 'flatTernaryExpressions': true // 指定是否需要缩进嵌套在其他三元表达式中的三元表达式 默认 false
  },
  // 把vue的缩进检测关掉
  overrides: [ { 'files': ['*.vue'], 'rules': { 'indent': 'off' } } ]
};
