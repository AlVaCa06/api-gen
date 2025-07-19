'use strict';

module.exports = (sequelize, DataTypes) => {
  const Empresa = sequelize.define('Empresas', {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    correo: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    cPass: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'Empresas'
  });

  return Empresa;
};
