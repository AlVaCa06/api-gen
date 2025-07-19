const { ExamenesCampos } = require('../../models');
const crud = require('../CRUD');
const generic = crud(ExamenesCampos);

module.exports = {
  ...generic
};
