var webpack = require("webpack");
var path = require("path");

var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require("copy-webpack-plugin");
var es3ifyPlugin = require('es3ify-webpack-plugin');

module.exports = {
	entry: {
		index: ["./src/index.js"],
		vendor: ["es6-promise", "babel-polyfill"]
	},
	externals: {
		jquery: 'jQuery',
		avalon2: "avalon"
	},
	output: {
		filename: "[name].[hash].js",
		path: path.join(__dirname, "dist"),
		chunkFilename: 'route/[name].[hash:8].js'
	},
	module: {
		rules: [{
			test: /.js$/,
			//打包除这个文件之外的文件
			//exclude: path.resolve(__dirname, "./node_modules"),
			//打包包括的文件
			//include: path.resolve(__dirname, "./src"),
			use: [{
				loader: 'babel-loader',
				query: {
					presets: ["env", "es2015-loose"], //按照最新的ES6语法规则去转换
					plugins: [
						"transform-es3-property-literals",
						"transform-es3-member-expression-literals",
					]
				}
			}]
		}, {
			test: /\.html$/,
			use: {
				loader: 'html-loader',
				options: {
					attrs: ['img:src']
				}
			}
		}, {
			test: /\.(css|pcss)$/,
			use: ExtractTextPlugin.extract({
				fallback: "style-loader",
				use: "css-loader"
			})
		}, {
			test: /\.(png|svg|jpe?g|gif)$/,
			use: [{
				loader: 'url-loader',
				options: {
					limit: 4096,
					name: '/asset/images/[name].[hash:8].[ext]'
				}
			}]
		}, {
			test: /\.(woff|woff2|eot|ttf|otf)$/,
			use: {
				loader: 'file-loader',
				options: {
					name: '/assetfonts/[name].[hash:8].[ext]'
				}
			}
		}]

	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery",
			avalon: "avalon2"
		}),
		new ExtractTextPlugin('css/main-[hash:6].css'),

		new HtmlWebpackPlugin({
			template: "./src/index.html"
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: "vendor",
			// filename: "vendor.js"
			// (Give the chunk a different name)

			minChunks: Infinity,
			// (with more entries, this ensures that no other module
			//  goes into the vendor chunk)
		}),
		new es3ifyPlugin(),
		new CopyWebpackPlugin([
			//复制依赖js
			{
				from: 'src/lib',
				to: "lib/js"
			}, {
				from: 'node_modules/es5-shim/es5-shim.min.js',
				to: "lib/js"
			}, {
				from: 'node_modules/es5-shim/es5-sham.min.js',
				to: "lib/js"
			}, {
				from: 'node_modules/jquery/dist/jquery.min.js',
				to: "lib/js"
			}, {
				from: 'node_modules/avalon2/dist/avalon.js',
				to: "lib/js"
			}, {
				from: 'node_modules/bootstrap/dist/js/bootstrap.min.js',
				to: "lib/js"
			}, {
				from: 'node_modules/bootstrap/dist/css/bootstrap.min.css',
				to: "lib/css"
			}
		])
	]
};