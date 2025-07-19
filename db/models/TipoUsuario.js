// models/TipoUsuario.js
'use strict';

module.exports = (sequelize, DataTypes) => {
  const TipoUsuario = sequelize.define('TipoUsuario', {
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'TiposUsuarios'
  });

  TipoUsuario.associate = function(models) {
    TipoUsuario.hasMany(models.Usuario, {
      foreignKey: 'tipoUsuarioId',
      as: 'usuarios'
    });
  };

  return TipoUsuario;
};
