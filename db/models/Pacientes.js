'use strict';

module.exports = (sequelize, DataTypes) => {
  const Paciente = sequelize.define('Paciente', {
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
    nombreCompleto: {
      type: DataTypes.STRING
    },
    fechaNacimiento: {
      type: DataTypes.DATEONLY
    },
    correo: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    telefono: {
      type: DataTypes.STRING
    },
    token: {
      type: DataTypes.STRING
    },
    estatus: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    user: {
      type: DataTypes.STRING,
      allowNull: false
    },
    pass: {
      type: DataTypes.STRING,
      allowNull: false
    },
    empresaId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Empresas',
        key: 'id'
      }
    }
  }, {
    tableName: 'Pacientes'
  });

  Paciente.associate = function(models) {
    Paciente.belongsTo(models.Empresa, {
      foreignKey: 'empresaId',
      as: 'empresa'
    });
  };

  return Paciente;
};
