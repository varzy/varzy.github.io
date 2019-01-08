// 引入资源
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CopyWebpackPlugin = require('copy-webpack-plugin')

const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
  mode: process.env.NODE_ENV,
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
    port: 8000
  },
  entry: path.resolve(__dirname, './src/entry.js'),
  output: {
    filename: devMode ? '[name].js' : '[name].[hash].js',
    path: path.resolve(__dirname, './dist')
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: {
                path: 'postcss.config.js'
              }
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 20480
            }
          }
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 20480
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css'
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/views/index.html'),
      filename: 'index.html'
    }),
    new CleanWebpackPlugin([
      'dist'
    ]),
    new CopyWebpackPlugin([
      { from: 'static/favicon.png', to: 'favicon.png' },
      { from: 'static/CNAME.txt', to: 'CNAME.txt' }
    ])
  ]
}
