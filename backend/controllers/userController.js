const User = require('../models/userModel');

const getUser = async (req, res) => {
  const users = await User.find();
  return res.status(200).json(users);
};

const createUser = async (req, res) => {
  const {name, email, skills} = req.body;

  if(!name || !email) {
    return res.status(400).json({message: 'Name and Email are required'});
  }
  const newUser = await User.create({name, email, skills});
  return res.status(201).json(newUser);
};

const updateUser = async (req, res) => {
  const {id} = req.params;
  const updatedUser = await User.findByIdAndUpdate(id, req.body, {new: true});
  res.status(200).json(updatedUser);
};

module.exports = {getUser, createUser, updateUser};