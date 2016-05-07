var webpack = require("webpack");
var path = require("path");
var autoprefixer = require("autoprefixer");

module.exports = {
    entry: "./index.js",
    output: {
        path: "dist/assets",
        filename: "bundle.min.js",
        publicPath: "/assets/",
        sourceMapFilename: 'bundle.min.map'
    },
    devtool: '#source-map',
    devServer: {
        inline: true,
        contentBase: './dist',
        port: 3333
    },
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
                test: /\.scss$/,
                loader: ['style', 'css?sourceMap', 'sass?sourceMap']
            },
            {
                test: /\.(png|jpg|jpeg|gif|woff|woff2|svg)$/,
                loader: 'url-loader?limit=8192'
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            warnings: false,
            mangle: false
        })
    ],
    sassLoader: {
        includePaths: [path.resolve(__dirname, './stylesheets')]
    },
    postcss: [autoprefixer({browsers: ['last 2 versions']})]
};