// const MongoClient = require("mongodb").MongoClient;

// // const {MongoClient}=require('mongodb');

// // var person={
// //   name:"shubham",
// //   age:20
// // }

// // var {age}=person;
// // console.log(age);

// MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
//   if (err) {
//     return console.log("Unable to connect to MongoDB server");
//   }
//   console.log("Connected to MongoDB server");

//   db.collection("Todos").insertOne(
//     {
//       text: "Something to do",
//       completed: true
//     },
//     (err, result) => {
//       if (err) {
//         return console.log("Unable to insert todo", err);
//       }

//       console.log(JSON.stringify(result.ops[0].text));
//     }
//   );

//   db.close();
// });

const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('cannot connect to mongodb server');
  }
  console.log('connected to mongodb server');

  // db.collection('Todos').insertOne(
  //   {
  //     text: 'something to do',
  //     completed: false
  //   },
  //   (err, result) => {
  //     if (err) {
  //       return console.log('cannot add data');
  //     }
  //     console.log(JSON.stringify(result.ops, undefined, 2));
  //   }
  // );

  db.collection('Users').insertOne(
    {
      name: 'shubham jangid',
      age: 20,
      address: ' new delhi india'
    },
    (err, result) => {
      if (err) {
        return console.log('cannot add data ');
      }
      console.log(JSON.stringify(result.ops, undefined, 2));
    }
  );

  db.close();
});
