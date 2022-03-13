const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");
module.exports = merge(common, {
  mode: "development",
  entry: path.resolve(__dirname, "../src/index.tsx"),
  resolve: {
    // 设置别名 指向src
    alias: {
      "@": path.resolve(__dirname, "../src")
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader"
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/",
    filename: "js/[name]-[hash].js"
  },
  devtool: "inline-source-map",
  devServer: {
    // contentBase: '../dist',
    historyApiFallback: true,
    hot: true,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        pathRewrite: { "^/api": "" }
      }
    }
  }
});
