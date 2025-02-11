// Purpose: User model schema for the user collection in the database.
var mongoose = require('mongoose');

var userschema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    }
});

module.exports = mongoose.model("user",userschema);