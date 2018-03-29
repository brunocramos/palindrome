const plugins = require('./plugins');
const path = require('path');

const JSLoader = {
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['env', 'react'],
      plugins: ['transform-react-jsx'],
    },
  },
};

const ESLintLoader = {
  test: /\.js$/,
  enforce: 'pre',
  exclude: /node_modules/,
  use: {
    loader: 'eslint-loader',
    options: {
      configFile: path.resolve(__dirname, '..', '.eslintrc'),
    },
  },
};

const CSSLoader = {
  test: /\.css$/,
  use: plugins.ExtractTextPlugin.extract({
    use: [
      {
        loader: 'css-loader',
        options: {
          modules: true,
          importLoaders: 1,
        },
      },
      {
        loader: 'postcss-loader',
        options: {
          config: {
            path: path.resolve(__dirname, 'postcss.config.js'),
          },
        },
      },
    ],
  }),
};

const HTMLLoader = {
  test: /\.html$/,
  use: [
    {
      loader: "html-loader"
    }
  ]
};

module.exports = {
  JSLoader,
  ESLintLoader,
  CSSLoader,
  HTMLLoader,
};
