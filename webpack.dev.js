const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'serve'),
    publicPath: ''
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, 'src/static'),
        to: path.join(__dirname, 'serve')
      }
    ]),
    new BrowserSyncPlugin(
      {
        host: 'localhost',
        port: 3000,
        proxy: 'http://localhost:9000/'
      },
      {
        reload: false
      }
    )
  ],
  devServer: {
    compress: true,
    port: 9000,
    contentBase: [path.join(__dirname, 'serve')],
    historyApiFallback: true,
    clientLogLevel: 'none',
    hot: true
  }
};
