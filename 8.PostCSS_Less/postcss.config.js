const postcssPresetEnv = require('postcss-preset-env'); // 包含autoprefixer插件的功能

module.exports = {
  plugins: [postcssPresetEnv()],
};
