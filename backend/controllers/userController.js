const User = require('../models/userModel');

const getUser = async (req, res) => {
  try{
    const users = await User.find();
    res.status(200).json(users);
  } catch (error){
    res.status(500).json({message: error.message});
  }
};

const createUser = async (req, res) => {
  const {name, email, skills} = req.body;

  if(!name || !email) {
    return res.status(400).json({message: 'Name and Email are required'});
  }

  try {
    const newUser = await User.create({name, email, skills});
    return res.status(201).json(newUser);
  } catch (error){
    res.status(500).json({message: error.message});
  }
};

const updateUser = async (req, res) => {
  const {id} = req.params;
  
  try {
    const updatedUser = await User.findByIdAndUpdate(id, req.body, {new: true});
    if(!updatedUser) {
      return res.status(404).json({message: 'User not found'});
    }
    return res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};

module.exports = {getUser, createUser, updateUser};