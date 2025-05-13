const User = require('../models/userModel');

// Get all Users
const getUsers = async (req, res) => {
  const users = await User.find();
  return res.status(200).json(users);
};

// Create a User
const createUser = async (req, res) => {
  const {name, email, skills} = req.body;

  if(!name || !email) {
    return res.status(400).json({message: 'Name and Email are required'});
  }

  const newUser = await User.create({name, email, skills});
  return res.status(201).json(newUser);
};

// Update a User
const updateUser = async (req, res) => {
  const {id} = req.params;
  const updateUser = await User.findByIdAndUpdate(id, req.body, {new: true});
  return res.status(200).json(updateUser);
};

module.exports = {getUsers, createUser, updateUser};