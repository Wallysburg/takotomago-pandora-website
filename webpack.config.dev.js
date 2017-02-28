const debug = process.env.NODE_ENV !== 'production'; // eslint-disable-line

const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    path.join(__dirname, 'src', 'app', 'app-client.js'),
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080'
  ],
  output: {
    path: path.join(__dirname, 'src', 'app', 'static', 'js'),
    publicPath: '/js/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: ['babel-loader'],
        exclude: /node_modules/,
        query: {
          cacheDirectory: 'babel_cache',
          presets: debug ? ['react', 'es2015', 'react-hmre'] : ['react', 'es2015']
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader'
      },
      {
        test: /\.css$/,
        loader: 'css-loader',
        query: {
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]'
        }
      },
      {
        test: /\.(jpg|png)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[hash].[ext]'
        }
      }
    ]
  },
  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.jsx'],
    root: [path.resolve(__dirname, 'src/')]
  },
  postcss: [
    autoprefixer
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('./../css/style.css', { allChunks: true }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV) // eslint-disable-line
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      mangle: true,
      sourcemap: false,
      beautify: false,
      dead_code: true //  eslint-disable-line
    })
  ]
};
