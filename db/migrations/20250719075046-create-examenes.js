'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Examenes', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
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
      nombreExamen: {
        type: Sequelize.STRING,
        allowNull: false
      },
      costoExamen: {
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
    await queryInterface.dropTable('Examenes');
  }
};
