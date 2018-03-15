const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

var DIST_DIR = path.resolve(__dirname, "public");
var SRC_DIR = path.resolve(__dirname, "src");

module.exports = {
  entry: SRC_DIR + "/index.js",
  output: {
    path: DIST_DIR,
    filename: "bundle.js",
    publicPath: ""
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["env", "react", "stage-2"]
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, "public"),
    compress: true,
    host: "127.0.0.1",
    port: 3001
  }
};
