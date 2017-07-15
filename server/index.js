'use strict';

// import express from 'express';
const express = require('express');
const path = require('path');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('../webpack.config.dev');
const app = express();

app.use(webpackMiddleware(webpack(webpackConfig)));

app.get('/*', (req, res) => {
    // res.send('Will make MS!');
    res.sendFile(path.join(__dirname, './index.html'));

});

app.listen(3000, () => console.log('Server running @ <%)>>< 3000'));

