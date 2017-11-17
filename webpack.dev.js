const merge = require('webpack-merge');
const common = require('./webpack.common.js');
var webpack = require("webpack");

module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        proxy: {
            '/api': {
                target: 'http://localhost:80',
                secure: false
            }
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
});