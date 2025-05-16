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
  skills:[
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Skill'
    }
  ]
}, {
  timestamps: true,
});

module.exports = mongoose.model('User', userSchema);