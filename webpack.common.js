//@ts-nocheck
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

const HTMLPluginConfig = require('./html-webpack-plugin.config');

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    index: './index.tsx'
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].[contenthash].js',
  },
  target: 'web',
  resolve: {
    extensions: ['.js', '.json', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.js|ts|tsx$/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true
        },
        include: [path.resolve(__dirname, 'src')],
        exclude: /node_modules/
      },
      {
        test: /\.(scss|css)$/,
        exclude: /node_modules/,
        use: ['style-loader', {
          loader: 'css-loader',
          options: {
            modules: true,
            localIdentName: '[name]__[local]__[hash:base64:5]'
          }}, 'postcss-loader', 'sass-loader']
      },
      {
        test: [/\.(ttf|eot|svg|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/, /\.(jpe?g|png|gif)$/i],
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[hash].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(html|ejs)$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              attrs: ['img:src', 'object:data']
            }
          },
          {
            loader: 'ejs-html-loader',
            options: { htmlWebpackPlugin: HtmlWebpackPlugin }
          }
        ]
      }
    ]
  },
  plugins: [
    new ManifestPlugin({
      seed: {
        name: 'React Starter Kit',
        theme_color: 'red'
      }
    }),
    ...HTMLPluginConfig,
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new SWPrecacheWebpackPlugin({
      cacheId: 'my-project-name',
      filename: 'service-worker.js',
      minify: true,
      navigateFallback: '/index.html',
    })
  ]
};
