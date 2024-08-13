const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    assetModuleFilename: 'images/[hash][ext][query]', // 配置资源模块输出文件名
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource', // 配置资源模块类型
        use: [
          {
            loader: 'image-webpack-loader', // 图片压缩
            options: {
              disable: process.env.NODE_ENV === 'development' ? true : false, // 开发环境不压缩
              optipng: {
                optimizationLevel: 3, // 0-7
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};
