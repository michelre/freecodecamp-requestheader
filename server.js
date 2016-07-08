'use strict';

const express = require('express');

const utils = require('./utils');

const app = express();

const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send({status: 'OK'});
});

app.get('/api/whoami', (req, res) => {
  console.log(req.headers, req.connection.remoteAddress)
  res.send({
    language: utils.parseLanguage(req.headers['accept-language']),
    ipaddress: req.connection.remoteAddress,
    software: utils.parseUserAgent(req.headers['user-agent']),
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
