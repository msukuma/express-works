const crypto = require('crypto');
const express = require('express');
const app = express();
const publicDir = process.argv[3];

app.put('/message/:hash', (req, res) => {
  res.send(crypto.createHash('sha1')
                  .update(new Date().toDateString() + req.params.hash)
                  .digest('hex'));
});

app.listen(process.argv[2]);
