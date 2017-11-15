var webpack = require("webpack");
var path = require("path");

var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    devtool: "source-map",
    entry: {
        index: "./src/index.js"
    },
    output: {
        filename: "[name].bundle.js",
        path: path.join(__dirname, "dist"),
        chunkFilename: '[name].bundle.js'
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
            use: [
                'style-loader',
                'css-loader'
            ]
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
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ]
};