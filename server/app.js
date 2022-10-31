const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const authRoute = require('./api/Routes/authRoutes');
const dotenv = require('dotenv');
const jwt_verify = require('./api/Middlewares/jwt');
const jwt_post_verify = require('./api/Middlewares/postJWT');
const PostRoute = require('./api/Routes/postRoutes');
const userModal = require("./api/Model/userModel");

dotenv.config();
const url = process.env.MONGO_DB_ATLAS;

// CORS SETTİNGS
app.use(cors({
    origin:'http://localhost:3000',
    methods:['get','post']
}));

// DATABASE CONNECTIONS
console.log(url)


// SERVER CONNECTIONS
app.listen(3001,async()=>{
    console.log('Sunucu Ayakta. 3001 Portunda.')
    await mongoose.connect(url, async () => {
    console.log('MongoDb Connection Sağlandı!!')
    await userModal.findById('635fc17afb452dd8116b4010').then((human) => {
        if(human) {
            console.log(human)
        }else {
            console.log('sasds')
        }
    })
});
})

app.use(bodyParser.json({
    limit: '50mb'
}));

app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended:true,
    parameterLimit: 100000
}))

app.use('/user', jwt_verify , authRoute)
app.use('/access-data', jwt_post_verify , PostRoute)
