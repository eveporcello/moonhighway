var webpack = require("webpack");
var fs = require("fs");

var nodeModules = {};
fs.readdirSync('node_modules')
    .filter(function (x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function (mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });

module.exports = {
    entry: "./src/server/index.js",
    target: "node",
    output: {
        path: "build/server",
        filename: "index.js"
    },
    externals: nodeModules,
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: ['babel'],
                query: {
                    presets: ['es2015', 'stage-0', 'react']
                }
            },
            {
                test: /\.json$/,
                exclude: /(node_modules)/,
                loader: 'json-loader'
            },
            {
                test: /\.scss$/,
                loader: 'ignore-loader'
            },
            {
                test: /\.graphql?$/,
                loader: 'raw-loader'
            }
        ]
    }
};
