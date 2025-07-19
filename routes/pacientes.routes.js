const express = require('express');
const router = express.Router();
const { pacientesController } = require('../controllers');
 
router.post('/crearpaciente', pacientesController.createPaciente);

module.exports = router;