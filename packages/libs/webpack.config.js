const webpack = require('webpack'); // 用于访问内置插件
const path = require('path');

module.exports = {
  // entry: './core/index.js',
  entry: './index.js',
  output: {
    // filename: 'index.[name].js',
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    // libraryTarget: 'umd',
    library: "domTools",// 在全局变量中增加一个library变量
    clean: true,
  },
  mode: 'production',
  module: {
    rules: [{ test: /\.txt$/, use: 'raw-loader' }],
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/, // 排除node_modules
        loader: 'babel-loader',
      },
    ]
  },
  plugins: [
    new webpack.ProgressPlugin()
  ],
  resolve: {
    extensions: ['.js', '.ts', '.json'],
  },
  devtool: 'source-map',
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    // runtimeChunk: 'single',
  },
  stats: 'errors-only',
};