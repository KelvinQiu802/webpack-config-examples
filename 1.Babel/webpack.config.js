module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
  },
  // 不使用任何预设
  mode: 'none',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
    ],
  },
};
