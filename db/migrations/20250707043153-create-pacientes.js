'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Pacientes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nombre: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      apellidoPaterno: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      apellidoMaterno: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nombreCompleto: {
        type: Sequelize.STRING,
      },
      fechaNacimiento: {
        type: Sequelize.DATEONLY,
      },
      correo: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      telefono: {
        type: Sequelize.STRING,
      },
      token: {
        type: Sequelize.STRING,
      },
      estatus: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      user: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      pass: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Pacientes');
  },
};
