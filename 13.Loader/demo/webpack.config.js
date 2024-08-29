const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: path.resolve(__dirname, '../src/index.js'),
          },
        ],
      },
    ],
  },
};
