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
            test: /\.jpg$/,
            use: ["file-loader"]
        }, {
            test: /\.png$/,
            use: ["url-loader?mimetype=image/png"]
        }]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ]
};