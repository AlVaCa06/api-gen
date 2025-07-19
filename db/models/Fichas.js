'use strict';

module.exports = (sequelize, DataTypes) => {
  const Fichas = sequelize.define('Fichas', {
    examenId: DataTypes.INTEGER,
    empresaId: DataTypes.INTEGER,
    pacienteId: DataTypes.INTEGER,
    costo: DataTypes.DECIMAL(10, 2)
  }, {
    tableName: 'Fichas'
  });

  Fichas.associate = function(models) {
    Fichas.belongsTo(models.Examen, {
      foreignKey: 'examenId',
      as: 'examen'
    });

    Fichas.belongsTo(models.Empresa, {
      foreignKey: 'empresaId',
      as: 'empresa'
    });

    Fichas.belongsTo(models.Paciente, {
      foreignKey: 'pacienteId',
      as: 'paciente'
    });

    Fichas.hasMany(models.ResultadoExamen, {
      foreignKey: 'fichaId',
      as: 'resultados'
    });
  };

  return Fichas;
};
