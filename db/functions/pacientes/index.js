const { Pacientes } = require('../../models');
const crud = require('../CRUD');
const generic = crud(Pacientes);

module.exports = {
  ...generic
};
