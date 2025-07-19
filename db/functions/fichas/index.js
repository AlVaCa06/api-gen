const { Fichas } = require('../../models');
const crud = require('../CRUD');
const generic = crud(Fichas);

module.exports = {
  ...generic
};
