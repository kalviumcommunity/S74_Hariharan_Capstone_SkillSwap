const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    requried: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  skills: {
    type: [String],
    default: [],
  },
}, {
  timestamps: true,
});
module.exports = mongoose.model('User', userSchema);