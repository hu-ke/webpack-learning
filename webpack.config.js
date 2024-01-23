const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  entry: {
    index: './src/index.js',
    // print: './src/print.js',
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
    publicPath: 'http://localhost:8080/'
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
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
     title: 'Development',
     template:"./public/index.html"
    }),
    // new webpack.ProgressPlugin({
    //   activeModules: false,
    //   entries: true,
    //   handler(percentage, message, ...args) {
    //     // custom logic
    //     console.log('message, ...args>', (new Date()).getMilliseconds(), message, ...args)
    //   },
    //   modules: true,
    //   modulesCount: 5000,
    //   profile: false,
    //   dependencies: true,
    //   dependenciesCount: 10000,
    //   percentBy: null,
    // }),
    new BundleAnalyzerPlugin({
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