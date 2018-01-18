const expect = require('expect');
const supertest = require('supertest');

//local modules
var { Todo } = require('./../models/todo');
var { app } = require('./../server');

beforeEach(done => {
  Todo.remove({}).then(() => {
    done();
  });
});
describe('todos/post', () => {
  it('should add note to todo', done => {
    var text = 'text to todo';
    request(app)
      .post('/todos')
      .send((text = text))
      .expect(200)
      .expect(res => {
        expect(res.body.text).toBe(text);
      })
      .end((err, res) => {
        if (err) {
          return console.log(err);
        }

        Todo.find()
          .then(todos => {
            expect(todos.length).toBeA(1);
            expect(todos[0].text).toBeA(text);
            done();
          })
          .catch(err => done(err));
      });
  });
});
