# 外部资源

## 使用Asset Modules加载外部资源

- `raw-loader` to import a file as a string
- `url-loader` to inline a file into the bundle as a data URI
- `file-loader` to emit a file into the output directory

这三个loader在Webpack5中都可以使用AssetModules进行配置，不需要单独安装

https://webpack.js.org/guides/asset-modules/

Asset Modules types replace all of these loaders by adding 4 new module types:

- `asset/resource` emits a separate file and exports the URL. Previously achievable by using file-loader.
- `asset/inline` exports a data URI of the asset. Previously achievable by using url-loader.
- `asset/source` exports the source code of the asset. Previously achievable by using raw-loader.
- `asset` automatically chooses between exporting a data URI and emitting a separate file. Previously achievable by using url-loader with asset size limit.

## 图片压缩

使用`image-webpack-loader`进行图片压缩