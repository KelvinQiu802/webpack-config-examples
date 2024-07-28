const ESLintPlugin = require('eslint-webpack-plugin')

module.exports = {
  entry: './index.js',
  mode: 'development',
  devtool: false,
  plugins: [new ESLintPlugin({ extensions: ['js'], configType: 'flat' })],
}
