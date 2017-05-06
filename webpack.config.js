const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')

const BUILD_DIR = path.resolve(__dirname, 'build')
const APP_DIR = path.resolve(__dirname, 'app')

const sassLoaders = [
    "css-loader",
    "autoprefixer-loader?browsers=last 2 version",
    "sass-loader?indentedSyntax=sass&includePaths[]=" + path.resolve(__dirname, "./src"),
  ]

const config = {
  entry: [APP_DIR + '/main/index.js', APP_DIR + '/main/index.scss'],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js/,
        include: APP_DIR,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          use: 'css-loader?importLoaders=1',
        }),
      },
      {
       test: /\.(sass|scss)$/,
       loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
     },
      {
        test: /-spec\.js$/,
        loader: 'ignore-loader'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({ // define where to save the file
      filename: './bundle.css',
      allChunks: true,
    }),
    new webpack.NoEmitOnErrorsPlugin(),
  ]
};

module.exports = config
