const MongoClient = require("mongodb").MongoClient;
MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if (err) {
    return console.log("
    cannot connect to mongodb server");
  }
  console.log("connection made");

  db
    .collection("Todos")
    .findOneAndUpdate(
      {
        text: "Something to do"
      },
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
