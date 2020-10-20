const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose')
const route = require('./routes/route');

const app = express();
const port = 3000;

app.use(bodyparser.json());


app.use('/api', route);

mongoose.connect('mongodb://localhost:27017/comments');

mongoose.connection.on('connected', ()=>{
    console.log('Connected to database');
})

mongoose.connection.on('error', (err)=>{
    console.log('Error in database connection: '+ err)
})

app.listen(port, ()=>{
    console.log('Server listening on Port '+ port);
})

