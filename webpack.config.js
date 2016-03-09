const path = require('path');
const autoprefixer = require('autoprefixer');
const precss = require('precss');

const buildPath = path.resolve(__dirname, './build/');

const configClient = {
  entry: './app/entry.js',
  output: buildPath,
  filename: 'client-bundle.js',
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader!postcss-loader'
      }
    ]
  },
  postcss: function () {
    return [autoprefixer, precss];
  }
};

module.exports = configClient;
