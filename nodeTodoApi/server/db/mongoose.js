const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {
  mongoose // or module.exports={mongoose}  because in es6 when properstis has same name as then we can define them like this
};
