module.exports = {
  entry: './index.ts',
  mode: 'none',
  resolve: {
    extensions: ['.ts'], // 这样可以直接 import sayHello from './utils';
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
      },
    ],
  },
};
