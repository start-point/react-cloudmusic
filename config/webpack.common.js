const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const resolve = function (dir) {
  return path.resolve(__dirname, dir);
};

const env = process.env.NODE_ENV;
const devMode = process.env.NODE_ENV === "development";

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "index.html",
      inject: true,
      title: "李子园",
      // favicon: "src/assets/favicon/favicon.ico",
      minify: {
        removeComments: true
      }
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name]-[hash].css",
      chunkFilename: "css/[name]-[hash].css"
    }),

    new webpack.DefinePlugin({
      "process.env": env
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              import: true,
              modules: {
                localIdentName: "[name]__[local]__[hash:base64:5]"
              },
              importLoaders: 1
            }
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: () => [require("autoprefixer")()]
            }
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          "less-loader",
          {
            loader: "style-resources-loader",
            options: {
              patterns: path.resolve(__dirname, "../src/style/val.less")
            }
          }
        ]
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: [
          {
            loader: "url-loader"
          }
        ]
      },
      {
        test: /\.svg$/,
        use: {
          loader: "svg-sprite-loader",
          options: {
            symbolId: "[name]"
          }
        },
        include: path.resolve(__dirname, "../src/assets/svg")
      },
      {
        test: /\.(ts|tsx)$/,
        use: [
          { loader: "babel-loader" },
          {
            loader: "ts-loader",
            options: {
              // 加快编译速度
              transpileOnly: true,
              // 指定特定的ts编译配置，为了区分脚本的ts配置
              configFile: path.resolve(__dirname, "../tsconfig.json")
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      assets: resolve("src/assets"),
      style: resolve("src/style"),
      components: resolve("src/components"),
      pages: resolve("src/pages"),
      utils: resolve("src/utils")
    },
    extensions: [".ts", ".tsx", ".js"]
  }
};
