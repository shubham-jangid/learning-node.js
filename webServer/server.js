const express= require('express');
const hbs=require('hbs');

var app=express();

app.set('views engine','hbs');

app.get('/',(req,res)=>{
    res.render('home.hbs',{
        currentYear:new Date().getFullYear()
    });
});

app.get('/about',(req,res)=>{
   res.render('about.hbs',{
       currentYear:new Date().getFullYear()
   });

});


app.get('/help',(req,res)=>{
    console.log("this is dfgkdgmgkg page");
});

app.listen(3000);