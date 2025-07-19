'use strict';

module.exports = (sequelize, DataTypes) => {
  const Examenes = sequelize.define('Examenes', {
    empresaId: DataTypes.INTEGER,
    nombreExamen: DataTypes.STRING,
    costoExamen: DataTypes.DECIMAL(10, 2)
  }, {
    tableName: 'Examenes'
  });

  Examenes.associate = function(models) {
    Examenes.belongsTo(models.Empresa, {
      foreignKey: 'empresaId',
      as: 'empresa'
    });

    Examenes.hasMany(models.ExamenCampo, {
      foreignKey: 'examenId',
      as: 'campos'
    });

    Examenes.hasMany(models.Ficha, {
      foreignKey: 'examenId',
      as: 'fichas'
    });
  };

  return Examenes;
};
