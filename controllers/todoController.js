let express = require('express')
let mongoose = require('mongoose')
let Todo = require('../models/todo')
let port = process.env.PORT || 3000

//mongodb connection string
// const dbURI = require('./dbURI');


module.exports = function(app){


    //connecting with the mongodb database
    mongoose.connect(process.env.DB_URI,{useNewUrlParser : true,useUnifiedTopology : true})
    .then((result)=> {  console.log('connected to db');
                        console.log('port:',process.env.PORT)
                        app.listen(process.env.PORT);
                        console.log(`You are listening to port ${port}`);
                        console.log(`You can access your website at http://localhost:${port}/todo`);})
    .catch((e) => {console.log('Error:',e.message)});

    //redirect for home
    app.get('/',(req,res)=>{
        res.redirect('/dev/todo');
    })

    //api end point
    app.get('/api/todolist',function(req,res){
        Todo.find().then((result) => {console.log(result);res.send(result)})
        .catch((e) => {console.log('Error : ',e.message)})
    })

    app.get('/todo',function(req,res){
        Todo.find().sort({createdAt:1}).then((result) => {
            res.render('todo',{todos:result});
        })
        .catch((e) => {console.log('Error',e.message)})
        
    })


    app.post('/dev/todo',express.json({type:"*/*"}),function(req,res){
        
        console.log('reached here')
        let todo = new Todo(req.body) 
        todo.save()
        .then((result)=>{console.log('result:',result);res.json(result)})
        .catch((e) => {console.log('Error : ',e.message)})
    })


    app.delete('/todo/:item',function(req,res){

        let itemToBeRemoved = req.params.item.replace(/-/g,' ')
        Todo.deleteOne({item:itemToBeRemoved})
        .then( (result) =>{console.log(result);res.json(result);})
        .catch((e)=>{console.log('Error : ',e.message)})
    })


    app.use(function(req,res,next){
        
        res.status(404);

        if(req.accepts('html')){
            res.render('404',{url:req.url});
            return;
        }

        if(req.accepts('json')){
            res.json({error : 'Not found'});
            return;
        }

        
        res.type('txt').send('Not found');

    })
};