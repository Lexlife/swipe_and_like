const path = require('path');
const miniCss = require('mini-css-extract-plugin');
const minify = require('optimize-css-assets-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/styles/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'scripts.js'
  },
  module: {
    rules: [{
      test: /.(s*)css$/,
      use: [
        miniCss.loader,
        'css-loader',
        'sass-loader',
      ]
    }]
  },
  optimization: {
    minimizer: [
      new minify({})
    ],
  },
  plugins: [
    new miniCss({
      filename: '../src/styles/css/index.css',
    }),
  ]
};