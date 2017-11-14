const webpack = require("webpack");
const path = require("path");

module.exports = {
    entry:{
        index:"./src/index.js"
    },
    output:{
        filename:"bundle.js",
        path:path.join(__dirname,"dist")
    }
};