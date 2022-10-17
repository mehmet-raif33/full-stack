const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentSchema = new Schema({
    commentTitle: String,
    commentAuthor: String,
    commentAuthorImage: String,
    like: String,
    unlike: String,
    commentsNumber: Number
})

const CommentModel = mongoose.model('User',commentSchema);

module.exports = CommentModel;