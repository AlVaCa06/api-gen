const { Empresas } = require('../../models');
const crud = require('../CRUD');
const generic = crud(Empresas);

module.exports = {
  ...generic
};
