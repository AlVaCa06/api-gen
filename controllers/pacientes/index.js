const {Pacientes} = require('../../db/functions');
const createPaciente = require('./crearpaciente'); 


module.exports = {
    createPaciente: createPaciente(Pacientes)
};