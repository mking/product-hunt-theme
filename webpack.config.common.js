var autoprefixer = require('autoprefixer');
var path = require('path');

module.exports = {
  jsLoader: {
    test: /\.js$/,
    include: [
      path.join(__dirname, 'src'),
    ],
    loaders: ['babel', 'eslint']
  },
  cssLoader: {
    test: /\.scss$/,
    include: [
      path.join(__dirname, 'src'),
    ],
    loaders: ['style', 'css?localIdentName=react-product-hunt-[name]-[local]', 'postcss', 'sass']
  },
  svgLoader: {
    test: /\.svg$/,
    include: [
      path.join(__dirname, 'src'),
    ],
    loaders: ['file']
  },
  postcss: [autoprefixer],
};
