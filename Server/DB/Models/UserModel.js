const mongoose = require('mongoose');

const UserSchema=new mongoose.Schema({
  name:String,
  email:{type:String},
  password:String,

})

const User = mongoose.model('user', UserSchema);
module.exports = User;