const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  //MongoClient.connect("mongodb://lacalhost:20147/TodoApp", (err, db) => {
  if (err) {
    return console.log('connectionc cannot be made with mongodb');
  }
  console.log('connnected to mongodb server');

  db
    .collection('Todos')
    .findOneAndUpdate(
      { _id: new ObjectID('5a575feb2bcb2938dc095acf') },
      {
        $set: {
          completed: false
        }
      },
      {
        returnOriginal: false
      }
    )
    .then(result => {
      console.log(result);
    });

  db.close();
});
