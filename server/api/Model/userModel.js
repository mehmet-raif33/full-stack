const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    name: String,
    surname: String,
    mail: {
        type: String,
        required: true,
        unique: true
    },
    password: String,
    imgUrl: String,
    followers: Number,
    follows: Number
})

const UserModel = mongoose.model('User',userSchema);

module.exports = UserModel;