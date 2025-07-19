const { ResultadosExamenes } = require('../../models');
const crud = require('../CRUD');
const generic = crud(ResultadosExamenes);

module.exports = {
  ...generic
};
