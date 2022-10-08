const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username : String,
    name: String,
    surname: String,
    mail: String,
    password: String,
    imageData: String,
    description: String
})

const UserModel = mongoose.model('User',userSchema);

module.exports = UserModel;