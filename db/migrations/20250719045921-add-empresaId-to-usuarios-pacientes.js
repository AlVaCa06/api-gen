'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Usuarios', 'empresaId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Empresas',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });

    await queryInterface.addColumn('Pacientes', 'empresaId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Empresas',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Usuarios', 'empresaId');
    await queryInterface.removeColumn('Pacientes', 'empresaId');
  }
};
