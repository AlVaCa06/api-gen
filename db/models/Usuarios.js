'use strict';

module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    apellidoPaterno: {
      type: DataTypes.STRING,
      allowNull: false
    },
    apellidoMaterno: {
      type: DataTypes.STRING,
      allowNull: false
    },
    correo: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    token: {
      type: DataTypes.STRING
    },
    estatus: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    tipoUsuarioId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'TiposUsuarios',
        key: 'id'
      }
    },
    empresaId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Empresas',
        key: 'id'
      }
    }
  }, {
    tableName: 'Usuarios'
  });

  Usuario.associate = function(models) {
    Usuario.belongsTo(models.TipoUsuario, {
      foreignKey: 'tipoUsuarioId',
      as: 'tipoUsuario'
    });

    Usuario.belongsTo(models.Empresa, {
      foreignKey: 'empresaId',
      as: 'empresa'
    });
  };

  return Usuario;
};
