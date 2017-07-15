'use strict';

// import express from 'express';
const express = require('express');
const path = require('path');

const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('../webpack.config.dev');
const app = express();

const compiler = webpack(webpackConfig);

app.use(webpackMiddleware(compiler, {
    hot: true,
    public: webpackConfig.output.publicPath,
    noInfo: true
}));

app.use(webpackHotMiddleware(compiler));

app.get('/*', (req, res) => {
    // res.send('Will make MS!');
    res.sendFile(path.join(__dirname, './index.html'));

});

app.listen(3000, () => console.log('Server running @ <%)>>< 3000'));

