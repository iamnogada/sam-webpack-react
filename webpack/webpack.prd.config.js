const webpack = require('webpack');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.config.js');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


let cleanOptions = {
    root:     path.resolve('.'),
    verbose:  true,
    dry:      false
  }

module.exports = merge(commonConfig, {
    mode: 'production',
    output: {
        filename: 'bundle.[hash].js',
        path: path.resolve('./public')
    },
    plugins: [
        new CleanWebpackPlugin([path.resolve('./public')],cleanOptions),
        // Extract imported CSS into own file
        // new ExtractTextPlugin('[name].bundle.[chunkhash].css'),
        // Minify JS
        new UglifyJsPlugin({
            sourceMap: false
        }),
        new CopyWebpackPlugin(
            [
            { from: './asset/css', to: './css/'},
            { from: './asset/img', to: './img/'}
            ],
            {copyUnmodified: false}
          )
    ],
});