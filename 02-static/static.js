const express = require('express');
const app = express();

app.get('/', express.static(process.argv[3]));

app.listen(process.argv[2]);
