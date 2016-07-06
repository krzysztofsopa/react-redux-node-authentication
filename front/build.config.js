var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: {
    demo: './index.js'
  },
  output: {
    path: path.resolve('./dist'),
    filename: 'index.js'
  },
  module: {
    loaders: [
      { //transpile ES2015 with JSX into ES5
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};
