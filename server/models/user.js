const mongoose = require('mongoose');
let userSchema = new mongoose.Schema({
    name: {type : String, require :true},
    email: {type : String, require :true , unique : true},
    password: {type : String, require :true},
    avatar: {type : String, require :true},
    isAdmin: {type : Boolean, require :true},
    created: {type : Date, default : Date.now()}
});
let User = mongoose.model('user', userSchema)
module.exports = User;