const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'none',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          // 开发环境使用style-loader注入style，生产环境导出css文件
          process.env.NODE_ENV === 'development'
            ? 'style-loader'
            : MiniCssExtractPlugin.loader,
          'css-loader',
        ], // 相当于style-loader(css-loader(css)) 从右往左执行
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(), // 提取CSS文件
    new HTMLWebpackPlugin({
      template: './src/index.html',
    }), // 生成HTML文件
  ],
};
