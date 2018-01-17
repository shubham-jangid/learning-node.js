const supertest = require('supertest');
var app = require('./server').app; // or var app=require('./server.js).app

it('should prindt hello world', done => {
  request(app)
    .get('/')
    .expect('hello world');
  end(done);
});
