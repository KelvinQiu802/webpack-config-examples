module.exports = function loader(source) {
  return source.replace('Hello World', 'Hello Webpack');
};
