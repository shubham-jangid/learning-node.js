const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    min: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

// var newTodo = new Todo({
//   text: 'cook dinner'
// });

var newTodo = new Todo({
  text: 'eat dinner',
  completed: true,
  completedAt: 20.25
});

newTodo.save().then(
  docs => {
    console.log(`saved data is : ${docs}`);
  },
  err => {
    console.log('cannot add data to server');
  }
);
