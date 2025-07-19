const {Usuarios} = require('../../db/functions');
const createUser = require('./crearusuario'); 


module.exports = {
    createUser: createUser(Usuarios)
};