const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = merge(common, {
    plugins: [
        new CleanWebpackPlugin(['dist'])
        //new UglifyJSPlugin()
    ]
});