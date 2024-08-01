const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  mode: 'development',
  devServer: {
    hot: true, // 热更新
    open: true, // 自动打开浏览器
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'], // 支持 ts 和 tsx 文件的解析
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'babel-loader', // 通过 babel-loader 转换 jsx 语法到 js
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'], // 通过 style-loader 和 css-loader 处理 less 文件
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};
