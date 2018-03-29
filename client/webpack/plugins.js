const path = require('path');
const webpack = require('webpack');

const _ExtractTextPlugin = require('extract-text-webpack-plugin');
const _StyleLintPlugin = require('stylelint-webpack-plugin');
const _HTMLPlugin = require("html-webpack-plugin");

const ExtractTextPlugin = new _ExtractTextPlugin('[hash].css', { allChunks: true });
const StyleLintPlugin = new _StyleLintPlugin({
  configFile: path.resolve(__dirname, 'stylelint.config.js'),
  context: path.resolve(__dirname, '../src/css'),
  files: '**/*.css',
  failOnError: false,
  quiet: false,
});

const HTMLPlugin = new _HTMLPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

const HMR = new webpack.HotModuleReplacementPlugin();

module.exports = {
  ExtractTextPlugin,
  StyleLintPlugin,
  HTMLPlugin,
  HMR,
};
