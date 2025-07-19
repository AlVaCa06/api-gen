'use strict';

module.exports = (sequelize, DataTypes) => {
  const ExamenesCampos = sequelize.define('ExamenesCampos', {
    examenId: DataTypes.INTEGER,
    parametro: DataTypes.STRING,
    orden: DataTypes.INTEGER
  }, {
    tableName: 'ExamenesCampos'
  });

  ExamenesCampos.associate = function(models) {
    ExamenesCampos.belongsTo(models.Examen, {
      foreignKey: 'examenId',
      as: 'examen'
    });

    ExamenesCampos.hasMany(models.ResultadoExamen, {
      foreignKey: 'examenCampoId',
      as: 'resultados'
    });
  };

  return ExamenesCampos;
};
