const express = require('express');
const router = express.Router();
const { logInController } = require('../controllers');
 
router.post('/login', logInController.logIn);

module.exports = router;