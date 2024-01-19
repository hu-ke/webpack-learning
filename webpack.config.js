const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    // print: './src/print.js',
  },
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  optimization: {
    runtimeChunk: 'single',
  },
  devServer: {
    static: './dist',
    hot: 'only',
    liveReload: false,
    port: 8082,
  },
  plugins: [
    new HtmlWebpackPlugin({
     title: 'Development',
     template:"./public/index.html"
    }),
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