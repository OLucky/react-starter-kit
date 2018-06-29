const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  output: {
    path: path.resolve(__dirname, "serve"),
    publicPath: ""
  },
  devtool: "source-map",
  plugins: [
    new CopyWebpackPlugin([{from: path.join(__dirname, "src/static"), to: path.join(__dirname, "serve")}]),
  ],
  serve: {
    port: 9000,
    content: [path.join(__dirname, "serve")],
    hot: {
      hot: true
    }
  }
};