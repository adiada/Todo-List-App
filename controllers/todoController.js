let data = [{item:'get milk'},{item:"walk dog"},{item:"kick some coding ass"}]
let express = require('express')
let mongoose = require('mongoose')
// let bodyParser = require('body-parser')
// let urlencodedParser = bodyParser.urlencoded({extended:false})
// let jsonParser = bodyParser.json({type:"*/*"});


module.exports = function(app){

    // app.use(bodyParser.json())

    app.get('/todo',function(req,res){
        res.render('todo',{todos:data});
    })


    app.post('/todo',express.json({type:"*/*"}),function(req,res){
        // console.log('req.body\n',req.body)
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