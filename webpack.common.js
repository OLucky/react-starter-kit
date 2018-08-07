const path = require("path");
const webpack = require("webpack");

const HTMLPluginConfig = require("./html-webpack-plugin.config");

module.exports = {
	context: path.resolve(__dirname, "./src"),
	entry: {
		index: "./index.js"
	},
	output: {
		filename: "[name].js"
	},
	target: "web",
	module: {
		rules: [{
			test: /\.js$/,
			loader: "babel-loader",
			options: {
				cacheDirectory: true
			},
			include: [path.resolve(__dirname, "src")],
			exclude: /node_modules/
		},
		{
			test: /\.(jpe?g|png|gif)$/i,
			use: [{
				loader: "file-loader",
				options: {
					name: "[path][name].[ext]",
					outputPath: "./",
					context: path.resolve(__dirname, "src")          
				}
			}]
		},
		{
			test: /\.(ttf|eot|svg|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
			use: [{
				loader: "file-loader",
				options: {
					name: "[path][name].[ext]",
					outputPath: "./",
					context: path.resolve(__dirname, "src")   
				}
			}]
		},
		{
			test: /\.html$/,
			use: {
				loader:"html-loader",
				options: {
					attrs: ["img:src", "object:data"]
				}
			}
		}
		]
	},
	plugins: [
		...HTMLPluginConfig,
		new webpack.DefinePlugin({
			"process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
		})
	]
};