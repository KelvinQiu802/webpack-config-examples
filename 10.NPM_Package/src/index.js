import _ from 'lodash';

export default add = (a, b) => a + b;

// 在我们的库中使用第三方模块，如果不进行相关配置，则会导致打包后的文件体积过大
// 因为 Webpack 默认会将所有第三方依赖都打包进产物中
export const max = _.max;
