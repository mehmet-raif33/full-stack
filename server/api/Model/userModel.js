const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    name: String,
    surname: String,
    mail: String,
    password: String,
    imgUrl: String,
    followers: Number,
    follows: Number
})

const UserModel = mongoose.model('User',userSchema);

module.exports = UserModel;