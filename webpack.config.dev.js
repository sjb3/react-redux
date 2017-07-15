'use strict';

const path = require('path');
// var webpack = require('webpack');

module.exports = {
    devtools: 'eval-source-map',
    entry: path.join(__dirname, '/client/index.js'),
    output: {
        path: '/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.join(__dirname, 'client'),
                loaders: ['babel']
            }
        ]
    },
    resolve: {
        extension: ['', 'js']
    }
}
