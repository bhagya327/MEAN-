//importing modules
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

const route = require('./routes/route');

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/practise');

// on connection
mongoose.connection.on('connected',()=>{
    console.log('connected to database mongodb @ 27017');
} );

mongoose.connection.on('error',(err)=>{

   if(err){
       console.log('error occured'+err);
   }

} );

//port no
const port = 8000;

// adding middle ware
app.use(cors());
app.use(bodyparser.json());
//routes
app.use('/api', route);

//testing server
app.get ('/', (req, res) => {
    res.send('hi bagiii');
});

app.listen(port,()=>{
    console.log('server started at port:'+ port);
});