const { TipoUsuario } = require('../../models');
const crud = require('../CRUD');
const generic = crud(TipoUsuario);

module.exports = {
  ...generic
};
