const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.send('hello worls');
});

app.listen(3000);
