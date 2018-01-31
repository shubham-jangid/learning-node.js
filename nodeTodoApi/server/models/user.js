const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const bcrypt = require('bcryptjs');

var UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    unique: true,
    validate: {
      // or i can use validator:validator.isEmail
      validator: validator.isEmail,
      message: ' { value }  is not valid Email'
    }
  },
  password: {
    type: String,
    require: true,
    minlength: 6
  },
  tokens: [
    {
      access: {
        type: String,
        required: true
      },
      token: {
        type: String,
        required: true
      }
    }
  ]
});
UserSchema.methods.toJSON = function() {
  var user = this;
  var userObject = user.toObject();
  return _.pick(userObject, ['_id', 'email']);
};

UserSchema.methods.generateAuthToken = function() {
  user = this;
  access = 'auth';
  token = jwt
    .sign({ _id: user._id.toHexString(), access: access }, '123abc')
    .toString();
  user.tokens = user.tokens.concat([{ access, token }]);
  return user.save().then(() => {
    return token;
  });
};

UserSchema.statics.findByToken = function(token) {
  var User = this;
  var decoded;
  try {
    decoded = jwt.verify(token, '123abc');
  } catch (e) {
    return Promise.reject();
  }

  return User.findOne({
    _id: decoded._id,
    'tokens.token': token,
    'tokens.access': 'auth'
  });
};

// pre is run whenever we are about to save any thing

UserSchema.pre('save', function(next) {
  var user = this;
  if (user.isModified('password')) {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(user.password, salt, (err, hash) => {
        user.password = hash;
        next();
      });
    });
  } else next();
});

var User = mongoose.model('User', UserSchema);

module.exports = { User };

// git config --global user.email "you@example.com"
//   git config --global user.name "Your Name"
