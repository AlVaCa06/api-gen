'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Fichas', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      examenId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Examenes',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      empresaId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Empresas',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      pacienteId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Pacientes',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      costo: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
      },
      createdAt: { 
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
      updatedAt: { 
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Fichas');
  }
};
