const express = require('express');
const router = express.Router();
const {getUser, createUser, updateUser} = require('../controllers/userController');

router.get('/users', getUser);
router.post('/createUser',createUser);
router.put('/users/:id', updateUser);

module.exports = router;