const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
    postDescription: String,
    like: Number,
    unlike: Number,
    CommentNumber: Number,
    images: [String]
})

const PostModel = mongoose.model('Post',postSchema);

module.exports = PostModel;