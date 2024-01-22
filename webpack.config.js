const path = require('path');

module.exports = {
  entry: {
    index: {
      import: './src/index.js',
      dependOn: 'shared'
    },
    another: {
      import: './src/another-module.js',
      dependOn: 'shared'
    },
    shared: 'lodash'
  },
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  optimization: {
    runtimeChunk: 'single', // 思考一下，注释和启用这一行有什么区别？
  },
};