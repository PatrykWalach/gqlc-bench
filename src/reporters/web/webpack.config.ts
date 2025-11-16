import { defineConfig } from "@rspack/cli"
import { rspack } from "@rspack/core"
import HtmlWebpackPlugin from "html-webpack-plugin"
import * as path from "path"
// // Assert that we export values that conform to Webpack's configuration.
// function assertValidConfiguration(config: webpack.Configuration) {}
// assertValidConfiguration(exports as typeof import('./webpack.config'));

// https://webpack.js.org/concepts/mode/
const mode = "production"

// https://webpack.js.org/configuration/entry-context/#context
const context = path.resolve(__dirname, "..", "..", "..")

// https://webpack.js.org/configuration/entry-context/#entry
const entry = "./src/reporters/web/entry"

// https://webpack.js.org/guides/development/#using-source-maps
const devtool = "inline-source-map"

// https://webpack.js.org/guides/development/#using-webpack-dev-server
const devServer = { static: "./dist" }

// // https://webpack.js.org/concepts/output/
// const output = {
//   path: path.resolve(__dirname, 'dist'),
//   filename: "[name].bundle.js"
// }

// https://webpack.js.org/configuration/resolve/
const resolve = {
	// https://webpack.js.org/configuration/resolve/#resolve-extensions
	extensions: [".ts", ".tsx", ".js"],
	fallback: {
		path: require.resolve("path-browserify"),
		process: require.resolve("process"),
	},
}

const plugins = [
	// https://github.com/jantimon/html-webpack-plugin#options
	new HtmlWebpackPlugin({ title: `GraphQL Client Benchmarks` }),
	new rspack.ProvidePlugin({ process: "process" }),
	// Ignore Node-side polyfills that we depend upon.
	new rspack.IgnorePlugin({
		resourceRegExp: /(^|\/)(fs|require-context)(\/|$)/,
	}),
	// relay-compiler and its transitive dependencies expect a Node environment,
	// but we are careful to avoid Node-dependent functionality.
	new rspack.IgnorePlugin({
		resourceRegExp: /(^|\/)(child_process|fs|fb-watchman)(\/|$)/,
	}),
	// Similarly, make sure that webpack doesn't suck in our other reporters.
	new rspack.IgnorePlugin({
		resourceRegExp: /src\/reporters\/(?!web)[^/]+(\/|$)/,
	}),
]

// https://webpack.js.org/configuration/externals/
const externals = {}

export default defineConfig({
	mode,
	context,
	entry,
	devtool,
	devServer,
	optimization: { runtimeChunk: "single" },
	resolve,
	module: {
		// https://webpack.js.org/configuration/module/#module-rules
		rules: [
			// https://github.com/TypeStrong/ts-loader#configuration
			{
				test: /\.ts$/,
				exclude: [/node_modules/],
				loader: "builtin:swc-loader",
				options: {
					isModule: "unknown",
					jsc: {
						parser: { syntax: "typescript" },
						transform: { react: { runtime: "automatic" } },
					},
				},
				type: "javascript/auto",
			},
			{
				test: /\.tsx$/,
				use: {
					loader: "builtin:swc-loader",
					options: {
						isModule: "unknown",
						jsc: {
							parser: { syntax: "typescript", tsx: true },
							transform: { react: { runtime: "automatic" } },
						},
					},
				},
				type: "javascript/auto",
			},
			// https://github.com/webpack-contrib/raw-loader#getting-started
			{ test: /\.gql$/, type: "asset/source" },
			// https://github.com/graphql/graphql-js/issues/1272
			{ test: /\.mjs$/, include: /node_modules/, type: "javascript/auto" },
		],
	},
	plugins,
	externals,
})
