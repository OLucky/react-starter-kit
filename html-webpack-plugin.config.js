const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const templateFiles = fs.readdirSync(__dirname + '/src/html/pages');

const pluginConfig = templateFiles.map(fullName => {
  const nameWithoutExtension = fullName.replace(/\.[^/.]+$/, '');
  return new HtmlWebpackPlugin({
    filename: `${nameWithoutExtension}.html`,
    template: `./html/pages/${fullName}`
  });
});

module.exports = pluginConfig;
