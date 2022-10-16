const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const authRoute = require('./api/Routes/authRoutes');

const url = "mongodb://localhost:27017/CRUD_API";

mongoose.connect(url, () => {
    console.log('MongoDb bağlantısı oluşturldu!!')
    app.listen(3001,()=>{
        console.log('Sunucu Ayakta. 3001 Portunda.')
    })
});

app.use(cors({
    origin:'http://localhost:3000',
    methods:['get','post']
}));

app.use(bodyParser.json({
    limit: '50mb'
}));

app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended:true,
    parameterLimit: 100000
}))

app.use('/user', authRoute)
