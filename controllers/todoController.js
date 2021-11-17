let data = [{item:'get milk'},{item:"walk dog"},{item:"kick some coding ass"}]
let express = require('express')
let mongoose = require('mongoose')
let Todo = require('../models/todo')
// let bodyParser = require('body-parser')
// let urlencodedParser = bodyParser.urlencoded({extended:false})
// let jsonParser = bodyParser.json({type:"*/*"});

//mongodb connection string
const dbURI = 'mongodb+srv://adharsh:12345@cluster0.g4uq0.mongodb.net/node-tuts?retryWrites=true&w=majority';


module.exports = function(app){

    // app.use(bodyParser.json())
    mongoose.connect(dbURI,{useNewUrlParser : true,useUnifiedTopology : true})
    .then((result)=> {  console.log('connected to db');
                        app.listen(3000);
                        console.log('You are listening to port 3000');})
    .catch((e) => {console.log('Error:',e.message)});

    app.get('/todo',function(req,res){
        res.render('todo',{todos:data});
    })


    app.post('/todo',express.json({type:"*/*"}),function(req,res){
        // console.log('req.body\n',req.body)
        let todo = new Todo(req.body) 
        todo.save().then((result)=>{console.log('result:',result)})
        data.push(req.body)
        // console.log('items in list')
        // data.forEach((item) => {console.log(JSON.stringify(item))})
        res.json(data)
        // res.redirect('/todo');
    })


    app.delete('/todo/:item',function(req,res){
        // console.log(req.params.item)
        data = data.filter((todo)=> todo.item.replace(/ /g,'-') !== req.params.item)
        res.json(data)
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