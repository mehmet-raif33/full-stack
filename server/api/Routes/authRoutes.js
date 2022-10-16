const express = require('express');
const authRoute = express.Router();
const allAuthMethods = require('../Controller/authController')

authRoute.post('/signInSignUp', allAuthMethods.signInSignUp);

module.exports = authRoute;