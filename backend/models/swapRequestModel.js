const mongoose = require('mongoose');

const swapRequestSchema = new mongoose.Schema({
  sender:{
    type: mongoose.Schema.Types.ObjectId,
    ref:'User',
    required: true,
  },
  receiver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }, 
  skillOffered:{
    type: mongoose.Schema.Types.ObjectId,
    ref:'Skill',
    required: true
  },
  skillRequested: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Skill',
    required: true
  },
  status:{
    type: String,
    enum: ['pending', 'accepted', 'rejected'],
    default: 'pending'
  }
},{timestamps: true});

module.exports = mongoose.model('SwapRequest', swapRequestSchema);