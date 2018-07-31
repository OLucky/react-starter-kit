const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");

module.exports = {
  mode: "development",
  output: {
    path: path.resolve(__dirname, "serve"),
    publicPath: ""
  },
  devtool: "source-map",
  plugins: [
    new CopyWebpackPlugin([{
      from: path.join(__dirname, "src/static"),
      to: path.join(__dirname, "serve")
    }]),
    new BrowserSyncPlugin({
      host: "localhost",
      port: 3001,
      proxy: "http://localhost:9000/"
    }, {
      reload: false
    })
  ],
  serve: {
    port: 9000,
    content: [path.join(__dirname, "serve")]
  }
};