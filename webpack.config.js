'use strict';

const webpack = require("webpack");
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  // devtool: "sourcemap",
  // context: __dirname + "/src",
  entry: './src/entry.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: './bundle_[hash].js',
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
      {
        test: /\.scss$/,
        loader: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ['env'],
          plugins: ['transform-runtime']
        }
      },
      {
        test: /\.json$/,
        use: 'json-loader'
      },

      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'file-loader',
        query: {
          name: '[name].[ext]',
          outputPath: './img/',
          publicPath: ''
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('common.js'),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new ExtractTextPlugin("styles.css"),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new ExtractTextPlugin({
      filename: 'css/[name].[contenthash:8].css',
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html'),
      filename: './index.html'
    }),
    new CleanWebpackPlugin(['dist'])
  ]
}
