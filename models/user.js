const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  userName:{
    type: String,
    unique: true,
  },
  email:{
    type:String,
    unique: true,
  },
});

const User = mongoose.model('user', userSchema,'users');

module.exports = {
  User
};
