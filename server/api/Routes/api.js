const express = require('express');
const apiRoute = express.Router();

apiRoute.post('/login',async (req,res)=>{
    let data = req.body.name
    res.json({message:data});
})

apiRoute.get('/login',async (req,res)=>{
    let data = req.body
    res.json(data.mail);
})

module.exports = apiRoute;