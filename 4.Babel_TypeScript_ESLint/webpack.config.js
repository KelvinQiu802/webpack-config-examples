const ESLintPlluin = require('eslint-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  mode: 'development',
  devtool: false,
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-typescript']
          }
        }
      }
    ]
  },
  plugins: [new ESLintPlluin({extensions: ['ts'], configType: 'flat'})]
}