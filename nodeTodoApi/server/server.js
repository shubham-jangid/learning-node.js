//importing the library modules
var express = require('express');
var bodyParser = require('body-parser');
var { ObjectID } = require('mongodb');
var _ = require('lodash');

// importing the local modules
var { mongoose } = require('./db/mongoose');
var { User } = require('./models/user');
var { Todo } = require('./models/Todo');
var { authenticate } = require('./middleware/authenticate');

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
  Todo.find().then(
    todos => {
      res.send(todos);
      if (!todos) {
        return console.logs('cannot find docs');
      }
    },
    err => {
      res.send(err);
    }
  );
});

//--------- geting request on particular id ---------

app.get('/todos/:id', (req, res) => {
  var id = req.params.id;
  if (!ObjectID.isValid(id)) {
    console.log('Invalid ID');
    return res.status(404).send('invalid ID');
  }
  Todo.findById(id).then(todo => {
    if (!todo) {
      console.log('todo empty');
      return res.status(404).send('todo empty');
    }
    res.send(todo);
  });
});

//--------- todo delete ---------

app.delete('/todos/:id', (req, res) => {
  var id = req.params.id;
  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }
  Todo.findByIdAndRemove(id)
    .then(todo => {
      if (!todo) {
        return res.status(404).send('todo is emypty');
      }
      res.send(todo);
    })
    .catch(err => {
      res.status(404).send();
    });
});

//-------updating the todo---------

app.patch('/todos/:id', (req, res) => {
  var id = req.params.id;
  var body = _.pick(req.body, ['text', 'completed']);

  if (!ObjectID.isValid(id)) {
    console.log('Invalid ID');
    return res.status(404).send('invalid ID');
  }

  if (_.isBoolean(body.completed) && body.completed) {
    body.completedAt = new Date().getTime();
  } else {
    body.completed = false;
    body.completedAt = null;
  }

  Todo.findByIdAndUpdate(id, { $set: body }, { new: true })
    .then(todo => {
      if (!todo) {
        return res.status(404).send();
      }
      res.send({ todo });
    })
    .catch(err => {
      return res.status(404).send();
    });
});

//-------- post users/signup -----------

app.post('/users', (req, res) => {
  var body = _.pick(req.body, ['email', 'password']);
  var user = new User(body);
  user
    .save()
    .then(() => {
      //res.send(user);
      return user.generateAuthToken();
    })
    .then(() => {
      res.header('x-auth', token).send(user);
    })
    .catch(err => {
      return res.status(404).send(err);
    });
});

// private routes------

app.get('/users/me', authenticate, (req, res) => {
  res.send(req.user);
});

//-------listening to port--------

app.listen(3000, () => {
  console.log('on port 3000');
});

module.exports = { app };
module.exports = { app, Todo };
