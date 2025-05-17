const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',  // Refers to the User model
    required: true,
  },
}, {timestamps : true});

module.exports = mongoose.model('Skill', skillSchema);