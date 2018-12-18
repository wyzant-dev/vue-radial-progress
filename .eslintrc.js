module.exports = {
  root: true,
  env: {
    node: true
  },
  parserOptions: {
    sourceType: 'module',
    parser: 'babel-eslint'
  },

  extends: [
    "plugin:vue/essential",
    "eslint:recommended"
  ]
}
