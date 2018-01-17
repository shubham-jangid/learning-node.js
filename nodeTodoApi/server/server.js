//importing the library modules
var express = require('express');
var bodyParser = require('body-parser');

// importing the local modules
var { mongoose } = require('./db/mongoose');
var { Users } = require('./models/user');
var { Todo } = require('./models/Todo');

var app = express();
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  console.log(req.body);
});

app.listen(3000, () => {
  console.log('on port 3000');
});
