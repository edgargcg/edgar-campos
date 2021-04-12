const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

module.exports = (env, args) => {
	return {
		mode: args.mode,
		entry: "./src/index.tsx",
		output: {
			path: path.resolve(__dirname, "dist"),
			filename: "build.js",
		},
		devServer: {
			historyApiFallback: true,
		},
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					exclude: /node_modules/,
					use: {
						loader: "babel-loader",
					},
				},
				{
					test: /\.(ts|tsx)$/,
					exclude: /node_modules/,
					use: {
						loader: "ts-loader",
					},
				},
				{
					test: /\.html$/,
					use: [
						{
							loader: "html-loader",
						},
					],
				},
				{
					test: /\.(sa|sc|c)ss$/,
					use: ["style-loader", "css-loader", "sass-loader"],
				},
				{
					test: /\.(png|jpg|gif|svg|woff|woff2|gif|ttf)(\?[a-z0-9=.]+)?$/,
					use: [
						{
							loader: "url-loader",
							options: {
								limit: 1,
							},
						},
					],
				},
			],
		},
		resolve: {
			modules: ["src", "node_modules"],
			extensions: [".js", ".jsx", ".ts", ".tsx"],
			alias: {
				react: path.resolve(resolveApp("."), "./node_modules/react"),
				"react-dom": path.resolve(resolveApp("."), "./node_modules/react-dom"),
				components: path.resolve(resolveApp("src"), "components"),
				assets: path.resolve(resolveApp("src"), "assets"),
			},
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: "./public/index.html",
				filename: "./index.html",
			}),
		],
	};
};
