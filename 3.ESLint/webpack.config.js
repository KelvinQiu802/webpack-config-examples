const ESLintPlugin = require('eslint-webpack-plugin')

module.exports = {
  entry: './index.js',
  mode: 'none',
  plugins: [new ESLintPlugin()]
}
