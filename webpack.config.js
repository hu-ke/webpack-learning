const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LogWebpackPlugin = require('./plugins/LogWebpackPlugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    index: './src/index.js',
  },
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    // 设置模块导出规范为 umd
    libraryTarget: 'umd',
    // 可选，设置模块在 window 上暴露的名称
    library: 'microApp',
    publicPath: '/'
  },
  optimization: {
    runtimeChunk: 'single',
  },
  devServer: {
    hot: 'only',
    liveReload: true,
    port: 8080,
    // allowedHosts: 'auto',
    // host: '0.0.0.0',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-with, content-type, Authorization'
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
     title: 'Development',
     template:"./public/index.html"
    }),
    new LogWebpackPlugin(() => {
      console.log('5.emit事件发生了，所有模块和代码对应的文件已经生成好')
    }, () => {
      console.log('4.done事件发生了，成功构建完成')
    }),
    new webpack.DefinePlugin({
      // Definitions...
      ENV: JSON.stringify(process.env.NODE_ENV === 'dev' ? 'this is dev' : 'this is production')
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', {
          loader: path.resolve(__dirname, 'loaders', 'testLoader.js')
        }],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test:/\.js$/,
        exclude:/node_modules/,
        loader:"babel-loader" 
      }
    ],
  },
};