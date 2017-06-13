var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: {
    bundle: './src/index.jsx'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: `[name].js`,
    publicPath: '/build/'
  },
  // plugins: [
  //   new webpack.optimize.CommonsChunkPlugin({
  //     name: 'test',
  //     chunks: ['test'],
  //     minChunks: Infinity
  //   })
  // ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel-loader'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  }
}
