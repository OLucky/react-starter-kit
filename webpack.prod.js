const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
	mode: "production",
	output: {
		path: path.resolve(__dirname, "dist"),
		publicPath: ""
	},
	plugins: [
		new CleanWebpackPlugin(["dist"]),
		new CopyWebpackPlugin([{from: path.join(__dirname, "src/static"), to: path.join(__dirname, "dist")}]),
		new BundleAnalyzerPlugin({analyzerMode: process.env.ANALYZE_BUNDLE ? "server" : "disabled"})
	]
};