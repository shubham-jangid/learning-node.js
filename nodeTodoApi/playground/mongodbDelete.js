const MongoClient=require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log("cannot connect to mongodb server");
    }
    console.log("connected to mongodb server");

    // deleteMany
    // db.collection('Todos').deleteMany({text:"Something to do"}).then((result)=>{
    //     console.log(result);
    // });

    // deleteOne
    // db.collection('Todos').deleteOne({text:"Something to do"}).then((result)=>{
    //     console.log(result);
    // });

    //findOneAndDelete
    db.collection('Todos').findOneAndDelete({text:"Something to do"}).then((result)=>{
        console.log(result);
    });



    db.close();
});