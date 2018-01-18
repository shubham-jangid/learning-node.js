const { ObjectID } = require('mongodb');

//importing from loacal modules
const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/user');

Todo.find()
  .then(docs => {
    console.log(docs);
  })
  .catch(err => {
    console.log(err);
  });
