const express = require('express');
const router = express.Router();

// Get all skills
router.get('/skills', (req, res) => {
  res.send('Get all skills');
});

// Get a single skill by ID
router.get('/skills/:id', (req, res) => {
  const skillId = req.params.id;
  res.send(`Get skill with ID: ${skillId}`);
});

/** 09-05-2025
 * Added POST endpoint  */ 

// Post (create) a new skill
router.post('/skills', (req, res) => {
  const newSkill = req.body;  // Assuming the skill details are sent in the body
  // Logic to add the skill to the database goes here
  res.status(201).json({message:`New skill added: ${newSkill}`});
});


module.exports = router;