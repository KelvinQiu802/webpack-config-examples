const ESLintPlluin = require('eslint-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  mode: 'development',
  devtool: false,
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: 'babel-loader',
          options: {
            // 相较于ts-loader，使用babel-loader无法检查类型，只能完成转译
            presets: ['@babel/preset-typescript'],
          },
        },
      },
    ],
  },
  plugins: [new ESLintPlluin({ extensions: ['ts'], configType: 'flat' })],
};
