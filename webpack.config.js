const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const precss = require('precss');

const buildPath = path.resolve(__dirname, './build/');

const configClient = {
  entry: './app/client.js',
  output: buildPath,
  filename: 'client-bundle.js',
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader!postcss-loader'
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  postcss: () => {
    return [autoprefixer, precss];
  }
};

module.exports = configClient;
