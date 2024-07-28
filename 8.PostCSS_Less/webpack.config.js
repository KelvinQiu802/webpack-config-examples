const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'none',
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader', // 3. css-loader将css转换为commonjs模块
            options: {
              importLoaders: 2,
            },
          },
          'postcss-loader', // 2. postcss-loader添加浏览器前缀
          'less-loader', // 1. less-loader将less转换为css
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(), // 2. 提取CSS文件并插入到HTML文件中
    new HTMLWebpackPlugin({
      template: './src/index.html', // 1. 生成HTML文件
    }),
  ],
};
