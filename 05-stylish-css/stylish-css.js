const { middleware } = require('stylus');
const express = require('express');
const app = express();
const publicDir = process.argv[3];

app.use('/', middleware(publicDir), express.static(publicDir));

app.listen(process.argv[2]);
