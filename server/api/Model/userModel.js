const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    name: String,
    surname: String,
    mail: String,
    password: String,
    imgUrl: String,
    followers: {
        type: Number,
        default: 0,
    },
    follows: {
        type: Number,
        default: 0,
    }
})

const UserModel = mongoose.model('User',userSchema);

module.exports = UserModel;