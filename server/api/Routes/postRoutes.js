const express = require('express');
const PostRoute = express.Router();
const allAuthMethods = require('../Controller/postController')

PostRoute.get('/',allAuthMethods.getPost)

module.exports = PostRoute;