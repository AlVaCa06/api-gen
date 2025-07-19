'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Usuarios', {
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
        type: Sequelize.STRING
      },
      correo: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      token: {
        type: Sequelize.STRING,
      },
      estatus: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      tipoUsuarioId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'TiposUsuarios',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
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
    await queryInterface.dropTable('Usuarios');
  },
};
