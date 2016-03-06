// var path = require('path');
import path from 'path';
import webpack from 'webpack';

module.exports = {
  entry: './src/index.js',
  output: {
    path: './dist/',
    filename: 'bundle.js',
    publicPath: '/dist/js/'
  },
  devServer: {
    inline: true,
    hot: true,
    port: 3434,
    open: true
  },
  // resolve: {
  //   extensions: ['', '.js']
  // },
  devtool: 'inline-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel',
        exclude: /node_modules/
        // include: path.join(__dirname, 'scripts'),
      }
    ]
  }
}
