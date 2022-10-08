const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const UserRoute = require('./api/Routes/userDefaultRoute')

const url = "mongodb://localhost:27017/CRUD_API";

mongoose.connect(url, () => {
    console.log('MongoDb bağlantısı oluşturldu!!')
    app.listen(3001,()=>{
        console.log('Sunucu Ayakta. 3001 Portunda.')
    })
});

app.use('/',UserRoute);

app.use(cors({
    origin:'http://localhost:3000',
    methods:['get','post']
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))
