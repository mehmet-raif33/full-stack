const express = require('express');
const UserRoute = express.Router();
const { saveNewPerson } = require('../Controller/UserController')

UserRoute.post('/save-new-person', saveNewPerson);

UserRoute.get('/save-new-person', (req, res) => {
    res.json({message: 'okey ,broo!!'})
});

module.exports = UserRoute;