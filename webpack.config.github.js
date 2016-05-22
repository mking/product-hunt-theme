var common = require('./webpack.config.common');
var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/entrypoint',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'build'),
    publicPath: '/build/'
  },
  module: {
    loaders: [
      common.jsLoader,
      common.cssLoader,
      common.svgLoader,
    ]
  },
  plugins: [
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /^\.\/en$/),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
  postcss: common.postcss,
  devtool: 'source-map',
};
