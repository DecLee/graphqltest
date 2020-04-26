const mongoose = require('mongoose');
const { Schema } = mongoose;

const careerSchema = new Schema ({
  careerName:{
    type: String,
    unique: true,
  },
  description:{
    type: String,
  },
  prerequisite:{
    type: String
  },

});

const Career = mongoose.model('career', careerSchema, 'careers');

module.exports = {
  Career
};
