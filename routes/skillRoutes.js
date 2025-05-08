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

module.exports = router;