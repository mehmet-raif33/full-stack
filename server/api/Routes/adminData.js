const express = require('express');
const adminRoute = express.Router();
const User = require('../Model/userModel')

adminRoute.post('/save',async (req,res)=>{
    const newModel = new User({
        name: req.body.name,
        surname: req.body.surname,
        mail: req.body.mail,
        password: req.body.password
    })
    
    await newModel.save().then(()=>{
        res.json({message:'İts works My Friend!!'});
        console.log('lsak')
    })
})

module.exports = adminRoute;