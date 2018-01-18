//importing the library modules
var express = require('express');
var bodyParser = require('body-parser');

// importing the local modules
var { mongoose } = require('./db/mongoose');
var { Users } = require('./models/user');
var { Todo } = require('./models/Todo');

var app = express();
app.use(bodyParser.json());

// -----------post request ------------------

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });
  todo.save().then(
    docs => {
      res.send(docs);
    },
    err => {
      res.status(400).send(err);
    }
  );
});

// ------------ Get request -------------------

app.get('/todos', (req, res) => {
  Todo.findById({ _id: '5a5f91b144fcbbd41763a7dc' }).then(
    docs => {
      res.send(docs);
      if (!docs) {
        return console.logs('cannot find docs');
      }
    },
    err => {
      res.send(err);
    }
  );
});

app.listen(3000, () => {
  console.log('on port 3000');
});

module.exports = { app };
module.exports = { app, Todo };
