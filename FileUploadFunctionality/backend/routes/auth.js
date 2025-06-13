// backend/routes/auth.js
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const users = require('../users');

const router = express.Router();
const JWT_SECRET='mySecret';

// Register route (this helps user to get registered)
router.post('/register', async(req, res) => {
  const {username, password} = req.body;

  // Check if user already exists
  const existingUser = users.find(user => user.username === username);
  if(existingUser){
    return res.status(400).json({message: 'Username already exists'});
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Store user
  users.push({username, password: hashedPassword});
  res.status(201).json({message:'User registered successfully'})
});

// Login Route
router.post('/login', async (req, res) => {
  const {username, password} = req.body;

  // Find user
  const user = users.find(user => user.username === username);
  if(!user) {
    return res.status(400).json({message:'Invalid credentials'});
  }

  // Compare passwords
  const isMatch = await bcrypt.compare(password, user.password);
  if(!isMatch){
    return res.status(400).json({message: 'Invalid credentials'});
  }

  // Create JWT
  const token = jwt.sign({username: user.username}, JWT_SECRET, {expiresIn: '1h'});
  res.json({token});
});


module.exports = router;