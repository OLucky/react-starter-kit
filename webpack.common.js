const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	context: path.resolve(__dirname, "./src"),
	entry: ["./index.js"],
	output: {
		filename: "main.js",
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
					name: "./[path][name].[ext]"          
				}
			}]
		},
		{
			test: /\.(ttf|eot|svg|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
			use: [{
				loader: "file-loader",
				options: {
					name: "./[path][name].[ext]"
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
		new HtmlWebpackPlugin({
			filename: "index.html",
			template: "./public/index.html"
		}),
		new webpack.DefinePlugin({
			"process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
		})
	]
};