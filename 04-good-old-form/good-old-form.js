const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const parser = bodyParser.urlencoded({ extended: false });
app.post('/form', parser, (req, res) => {
  res.send(req.body.str.split('').reverse().join(''));
});

app.listen(process.argv[2]);
