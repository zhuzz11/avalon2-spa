var webpack = require("webpack");
var path = require("path");

var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    devtool: "source-map",
    entry: {
        index: "./src/index.js",
        vendor: ['jquery', 'bootstrap', "avalon2"]
    },
    output: {
        filename: "[name].[hash].js",
        path: path.join(__dirname, "dist"),
        chunkFilename: 'route/[name].[hash:8].js'
    },
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: [{
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
        })
    ]
};