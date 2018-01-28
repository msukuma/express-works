const { readFile } = require('fs');
const app = require('express')();

app.get('/books', (req, res) => {
  readFile(process.argv[3], { encoding: 'utf8' }, (err, data) => {
    if (err) return res.sendStatus(500);
    res.json(JSON.parse(data));
  });
});

app.listen(process.argv[2]);
