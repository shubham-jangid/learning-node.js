const MongoClient=require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => 
{
    if(err){
        return console.log("cannot connect to mongodb server");
    }
    console.log("connection made");

// db.collection('Todos').find({completed:true}).toArray().then((docs)=>{
//     console.log("todos");
//     // console.log(`todos  ${JSON.stringify(docs)`);
//     console.log(JSON.stringify(docs,undefined , 2));   
// },(err)=>{
//     console.log("error occured");
// }
// );
db.collection('Todos').find({text:"Something to do"}).count().then((count)=>{
    console.log(` Todos count ${count}`);
}, (err0)=>{
    console.log("error occured");
});

db.close();

});