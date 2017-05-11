var webpack = require("webpack");
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: "build/client/assets",
        filename: "bundle.min.js",
        publicPath: "/assets",
        sourceMapFilename: 'bundle.min.map'
    },
    devtool: '#source-map',
    devServer: {
        inline: true,
        contentBase: './build/client',
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
                test: /\.json$/,
                exclude: /(node_modules)/,
                loader: 'json-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader!autoprefixer-loader'
            },
            {
                test: /\.scss/,
                loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'
            },
            {
                test: /\.(png|jpg|jpeg|gif|woff|woff2|svg)$/,
                loader: 'url-loader?limit=8192'
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            warnings: process.env.NODE_ENV !== 'production',
            mangle: process.env.NODE_ENV === 'production'
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.optimize\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: { discardComments: {removeAll: true } },
            canPrint: true
        })
    ]
};
