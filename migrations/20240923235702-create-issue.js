"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Issues", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
      },
      desc: {
        type: Sequelize.STRING,
      },
      category: {
        type: Sequelize.STRING,
      },
      department: {
        type: Sequelize.STRING,
      },
      urgency: {
        type: Sequelize.INTEGER,
      },
      completed: {
        type: Sequelize.INTEGER,
      },
      imageLinks: {
        type: Sequelize.ARRAY(Sequelize.STRING),
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Issues");
  },
};
