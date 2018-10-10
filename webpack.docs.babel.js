'use strict';

import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import autoprefixer from 'autoprefixer';
import markedOptions from './docs/utils/markeqOptions';
import pkg from './package.json';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import HappyPack from  'happypack';

const prod = process.env.NODE_ENV === 'production';

const dirs = {
  src: path.join(__dirname, 'js'),
  dist: path.join(__dirname, 'app/dist'),
  modules: path.join(__dirname, 'node_modules'),
  styles: path.join(__dirname, 'scss'),
};

const hotEntry =  [
  'webpack/hot/dev-server',
  'webpack-hot-middleware/client?reload=true',
];
const docsEntry = './docs/js/app.js';
const ksEntry = './kitchen-sink/entry.js';

let minify = prod ? {
  removeComments: true,
  collapseWhitespace: true,
  minifyCSS: true,
} : false;

let plugins = [
  new webpack.optimize.CommonsChunkPlugin({
    name: "vendor",
    minChunks: Infinity,
    // children: true,
  }),
  new HtmlWebpackPlugin({
    template: 'docs/index.html',
    prod,
    chunks: ['vendor','docs'],
    chunksSortMode: 'manual',
    minify,
  }),
  new HtmlWebpackPlugin({
    filename: 'kitchen-sink/index.html',
    template: 'kitchen-sink/index.html',
    chunks: ['vendor', 'ks'],
    chunksSortMode: 'manual',
    minify,
  }),
  new webpack.DefinePlugin({
    __VERSION__: JSON.stringify(pkg.version),
    SERVER_RENDING: false,
    'process.env': {
      'NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    },
  }),
  new HappyPack({
    id: 'jsx',
    loaders: ['transform-loader/cacheable?brfs=true', 'babel-loader']
  }),
  new HappyPack({
    id: 'md',
    loaders: ['babel-loader!md2react-loader']
  })
];

plugins = prod ? plugins.concat([
  new UglifyJsPlugin({
    uglifyOptions: {
      compress: {
        warnings: false
      }
    }
  }),
  new ExtractTextPlugin('[name].[hash:5].min.css'),
  new webpack.BannerPlugin({
    banner: `build: ${new Date().toString()}`
  }),
]) : plugins.concat([
  new webpack.optimize.ModuleConcatenationPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
]);

export default {
  devtool: prod ? false : 'eval',
  entry: {
    vendor: ['react', 'react-dom', 'react-router'],
    docs: prod ? docsEntry : [].concat(hotEntry).concat(docsEntry),
    ks: prod ? ksEntry : [].concat(hotEntry).concat(ksEntry),
  },
  output: {
    filename: `[name].[hash:5]${prod ? '.min' : ''}.js`,
    path: `${__dirname}/www`,
    // publicPath: '',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'happypack/loader?id=jsx',
      },
      // load .md as React Component
      {
        test: /\.md$/,
        use: 'happypack/loader?id=md',
      },
      {
        test: /\.scss$/,
        use: prod ? ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: (loader) => [
                  require('autoprefixer')({
                    browsers: ['> 1%', 'last 2 versions', 'ie 10']
                  })
                ]
              }
            },
            'sass-loader',
          ]
        }) :
        [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: (loader) => [
                require('autoprefixer')({
                  browsers: ['> 1%', 'last 2 versions', 'ie 10']
                })
              ]
            }
          },
          'sass-loader',
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(ttf|svg|woff|woff2|otf)$/,
        // loader: 'file?name=[path][name].[ext]&context=src',
        loader: 'url-loader',
        options: {
          name: '[name].[ext]'
        }
      }
    ]
  },

  plugins: plugins,

  resolve: {
    extensions: ['.js', '.jsx', '.md']
  },

  resolveLoader: {
    alias: {
      "md2react-loader": path.resolve(__dirname, "tools/md2react-loader")
    }
  },

  node: {
    fs: 'empty'
  },
};
