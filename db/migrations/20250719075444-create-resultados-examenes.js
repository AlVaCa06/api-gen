'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ResultadosExamenes', {
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
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Usuarios',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      fichaId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Fichas',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
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
      examenCampoId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'ExamenesCampos',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      resultado: {
        type: Sequelize.STRING
      },
      observaciones: {
        type: Sequelize.TEXT
      },
      capturadoPor: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('ResultadosExamenes');
  }
};
