import path from "path";
import webpack from 'webpack';
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


export default {
  output: {
    library: "AMUITouch2",
    libraryTarget: "umd"
  },
  externals: {
    react: {
      root: "React",
      commonjs2: "react",
      commonjs: "react",
      amd: "react"
    },
    "react-dom": {
      root: "ReactDOM",
      commonjs2: "react-dom",
      commonjs: "react-dom",
      amd: "react-dom"
    },
    // "prop-types": {
    //   root: "PropTypes",
    //   commonjs2: "prop-types",
    //   commonjs: "prop-types",
    //   amd: "prop-types"
    // }
  },
  resolveLoader: {
    alias: {
      "ignore-loader": path.resolve(__dirname, "scripts/ignore-loader")
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          plugins: require("./scripts/babel-require-ignore")
        }
      }
    ]
  },

  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new BundleAnalyzerPlugin()
  ]
};
