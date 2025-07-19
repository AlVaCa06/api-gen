const express = require('express');
const router = express.Router();
const { usuariosController } = require('../controllers');
 
router.post('/crearusuario', usuariosController.createUser);

module.exports = router;