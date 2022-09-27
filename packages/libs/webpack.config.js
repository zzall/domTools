const webpack = require('webpack'); // 用于访问内置插件
const path = require('path');
const glob = require('glob')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const entry = glob.sync('./core/*').reduce((a, b) => ({ ...a, [b.match(/(?<=\/)\w+(?=\.js)/)[0]]: b }), {});

module.exports = {
  // entry,
  entry: './index.js',
  output: {
    // filename: 'index.[name].js',
    filename: 'index.js',
    // filename: '[name].js',
    path: path.resolve(__dirname, 'lib'),
    // libraryTarget: 'es',
    library: "domTools",
    // library: ["domTools", '[name]'],// 在全局变量中增加一个library变量
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
    new webpack.ProgressPlugin(),
    // new CopyWebpackPlugin({
    //   patterns: [
    //     { from: path.resolve(__dirname, './core'), to: path.resolve(__dirname, './dist') },
    //   ]
    // })
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