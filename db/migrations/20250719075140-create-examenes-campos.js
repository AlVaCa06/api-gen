'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ExamenesCampos', {
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
        onDelete: 'CASCADE'
      },
      parametro: {
        type: Sequelize.STRING,
        allowNull: false
      },
      orden: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('ExamenesCampos');
  }
};

