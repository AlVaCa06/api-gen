'use strict';

module.exports = (sequelize, DataTypes) => {
  const ResultadosExamenes = sequelize.define('ResultadosExamenes', {
    empresaId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    fichaId: DataTypes.INTEGER,
    pacienteId: DataTypes.INTEGER,
    examenCampoId: DataTypes.INTEGER,
    resultado: DataTypes.STRING,
    observaciones: DataTypes.TEXT,
    capturadoPor: DataTypes.STRING
  }, {
    tableName: 'ResultadosExamenes'
  });

  ResultadosExamenes.associate = function(models) {
    ResultadosExamenes.belongsTo(models.Empresa, {
      foreignKey: 'empresaId',
      as: 'empresa'
    });

    ResultadosExamenes.belongsTo(models.Usuario, {
      foreignKey: 'userId',
      as: 'usuario'
    });

    ResultadosExamenes.belongsTo(models.Ficha, {
      foreignKey: 'fichaId',
      as: 'ficha'
    });

    ResultadosExamenes.belongsTo(models.Paciente, {
      foreignKey: 'pacienteId',
      as: 'paciente'
    });

    ResultadosExamenes.belongsTo(models.ExamenCampo, {
      foreignKey: 'examenCampoId',
      as: 'campo'
    });
  };

  return ResultadosExamenes;
};
