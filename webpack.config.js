const path = require('path');

module.exports = {
  entry: {
    index: './src/index.js',
  },
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devtool: "cheap-module-source-map", // 解决eval问题
};