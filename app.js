let serverless = require('serverless-http');
let express = require('express');
let todoController = require('./controllers/todoController');

let app = express();

//setup template engine
app.set('view engine','ejs');

//static files 
app.use(express.static('./public'))
// app.use(function(req,res,next){
//     console.log(req.url)
//     next()
// });


//fire controllers
todoController(app);

//listen to port


module.exports.handler = serverless(app);