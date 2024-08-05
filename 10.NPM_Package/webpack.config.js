const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devtool: 'source-map', // 生成 source-map 方便调试
  output: {
    filename: `[name].js`, // 保持原文件名
    path: path.join(__dirname, 'dist'), // 输出到 dist 目录
    // 配置库的全局变量名和模块化方案
    library: {
      name: 'myLib',
      type: 'umd', // 可选 commonjs, umd, module, jsonp等, umd 是通用模块方案，可以根据环境自动选择模块化方案
    },
  },
  externals: [nodeExternals()], // 自动排除 node_modules, 不打包, 以减小打包体积
};
