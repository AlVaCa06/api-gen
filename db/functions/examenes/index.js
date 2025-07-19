const { Examenes } = require('../../models');
const crud = require('../CRUD');
const generic = crud(Examenes);

module.exports = {
  ...generic
};
