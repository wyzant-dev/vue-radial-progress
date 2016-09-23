module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module'
  },

  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  rules: {
    'import/no-unresolved': 0,

    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // allow console.log in dev.
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,

    'no-param-reassign': 0,
    'default-case': 0,
  },
}
