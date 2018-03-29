const path = require('path');
const postcssImport = require('postcss-import');

const loaders = require('./loaders');
const plugins = require('./plugins');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'react-hot-loader/patch',
    './src/app.jsx',
  ],
  module: {
    loaders: [
      loaders.CSSLoader,
      loaders.JSLoader,
      loaders.ESLintLoader,
      loaders.HTMLLoader,
    ],
  },
  plugins: [
    plugins.StyleLintPlugin,
    plugins.ExtractTextPlugin,
    plugins.HTMLPlugin,
    plugins.HMR,
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: "js/[hash].js"
  },
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    host: 'localhost',
    port: '8080',
    publicPath: '/',
    hot: true,
  },
};

