// const MongoClient = require("mongodb").MongoClient;
// MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
//   if (err) {
//     return console.log("cannot connect to mongodb server");
//   }
//   console.log("connection made");

//   // db.collection('Todos').find({completed:true}).toArray().then((docs)=>{
//   //     console.log("todos");
//   //     // console.log(`todos  ${JSON.stringify(docs)`);
//   //     console.log(JSON.stringify(docs,undefined , 2));
//   // },(err)=>{
//   //     console.log("error occured");
//   // }
//   // );
//   db
//     .collection("Todos")
//     .find({ text: "Something to do" })
//     .toArray()
//     .then(
//       docs => {
//         console.log(` Todos count ${JSON.stringify(docs, undefined, 2)}`);
//       },
//       err0 => {
//         console.log("error occured");
//       }
//     );

//   db.close();
// });

const { MongoClient } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('cannot connect to mongodb server');
  }
  console.log('connected to server');

  db
    .collection('Todos')
    .find()
    .toArray()
    .then(
      docs => {
        console.log(`data is ${JSON.stringify(docs, undefined, 2)}`);
      },
      err => {
        console.log('cannot find the data');
      }
    );
  db.close();
});
