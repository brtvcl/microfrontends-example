const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");

const mode = process.env.NODE_ENV || "development";
const prod = mode === "production";

module.exports = {
	entry: {
		bundle: ["./src/main.js"],
	},
	resolve: {
		alias: {
			svelte: path.resolve("node_modules", "svelte/src/runtime"),
		},
		extensions: [".mjs", ".js", ".svelte"],
		mainFields: ["svelte", "browser", "module", "main"],
	},
	output: {
		path: __dirname + "/dist",
		filename: "[name].js",
		chunkFilename: "[name].[id].js",
		publicPath: "http://localhost:8081/",
	},
	module: {
		rules: [
			{
				test: /\.svelte$/,
				use: {
					loader: "svelte-loader",
					options: {
						emitCss: true,
						hotReload: true,
					},
				},
			},
			{
				// required to prevent errors from Svelte on Webpack 5+, omit on Webpack 4
				test: /node_modules\/svelte\/.*\.mjs$/,
				resolve: {
					fullySpecified: false
				}
			},
			{
				test: /\.css$/,
				use: [
					/**
					 * MiniCssExtractPlugin doesn't support HMR.
					 * For developing, use 'style-loader' instead.
					 * */
					prod ? MiniCssExtractPlugin.loader : "style-loader",
					"css-loader",
				],
			},
		],
	},
	devServer: {
		port: 8081,
	},
	mode,
	plugins: [
		new ModuleFederationPlugin({
			name: "profile",
			filename: "remoteEntry.js",
			remotes: {},
			exposes: {
				"./Header": "./src/App.svelte",
			},
			shared: require("./package.json").dependencies,
		}),
		new MiniCssExtractPlugin({
			filename: "[name].css",
		}),
		new HtmlWebPackPlugin({
			template: "./src/index.html",
		}),
	],
	devtool: prod ? false : "source-map",
};