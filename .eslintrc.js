module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  parser: 'babel-eslint',
  plugins: ['react', 'lookbehind-assertions'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ['eslint:recommended', 'plugin:lookbehind-assertions/all'],
  rules: {
    //'lookbehind-assertions/no-lookbehind-assertions-regexp': 'error',
  },
};
