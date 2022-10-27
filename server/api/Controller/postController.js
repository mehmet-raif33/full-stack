const PostModel = require("../Model/postModel");

const getPost = (req, res) => {
    res.json({
        message: 'Its workss!!'
    })
}

const allAuthMethods = {
    getPost
};

module.exports = allAuthMethods;
