'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.createTable('Estates', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ower_id: {
        type: Sequelize.INT
      },
      address_id: {
        type: Sequelize.INT
      },
      decription: {
        type: Sequelize.TEXT
      },
      score: {
        type: Sequelize.DECIMAL
      },
      price: {
        type: Sequelize.DECIMAL
      },
      available: {
        type: Sequelize.BOOLEAN
      },
      photos: {
        type: Sequelize.ARRAY
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function down(queryInterface, Sequelize) {
    return queryInterface.dropTable('Estates');
  }
};