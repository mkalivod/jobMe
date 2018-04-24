
// *** Dependencies 
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const env = require('dotenv').config();
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const compression = require('compression');
const CronJob = require('cron').CronJob;
// ------------------------------------------------------
 const db

// Initialize Application
const app = express();

const compiler = webpack(webpackConfig);

app.use(compression());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(express.static(path.join(__dirname, '/public')));

app.use(webpackDevMiddleware(compiler, {
    hot: true,
    filename: 'bundle.js',
    publicPath: '/',
    stats: {
        colors: true,
    },
    historyApiFallback: true,
}));

const server = app.listen(process.env.PORT || 3000, () => {
    const host = server.address().address;
    const port = server.address().port;
    console.log('Example app listening at PORT: http://%s:%s', host, port);
});