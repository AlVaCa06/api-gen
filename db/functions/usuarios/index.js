const { Usuarios } = require('../../models');
const crud = require('../CRUD');
const generic = crud(Usuarios);

module.exports = {
  ...generic
};
