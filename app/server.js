const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('../webpack.config');
const api = require('./lib/api.js');

const server = express();
const port = 3000;

const compiler = webpack(config);
server.use(require('webpack-dev-middleware')(compiler, {noInfo: true, publicPath: config.output.publicPath}));
server.use(require('webpack-hot-middleware')(compiler));

/**
 * Static files
 */
server.use('/build', express.static('build'));

/**
  Root path
 **/
server.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../index.html'));
});

server.get('/foobar', function(req, res) {
  api.callApi().then(result => {
    res.send(result);
  });
});

server.listen(port, function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`Listening at http://localhost:${port}`);
});
