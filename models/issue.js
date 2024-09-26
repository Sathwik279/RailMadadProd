"use strict";
const { Model, ARRAY } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Issue extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    static associate(models) {
      // define association here
      Issue.belongsTo(models.User, {
        foreignKey: "userId",
      });
    }
    static async addIssue(
      request,
      response,
      userId,
      uploadedFilePaths,
      category,
      department
    ) {
      try {
        const issue = await Issue.create({
          title: request.body.title,
          desc: request.body.desc,
          department: department,
          category: category,
          urgency: request.body.urgency,
          completed: 1,
          userId,
          imageLinks: uploadedFilePaths,
        });
        return issue;
      } catch (error) {
        console.log(error);
      }
    }
    static async setCompletionStatus(id) {
      const issue = await Issue.findByPk(id);
      issue.completed = 2;
      await issue.save();
      return issue;
    }
    static async remove(id) {
      return this.destroy({
        where: {
          id: id,
        },
      });
    }

    static async getIssues(id) {
      return this.findAll({
        where: {
          userId: id,
        },
      });
    }
    static async getIssues() {
      return this.findAll({});
    }
  }
  Issue.init(
    {
      title: DataTypes.STRING,
      desc: DataTypes.STRING,
      category: DataTypes.STRING,
      department: DataTypes.STRING,
      urgency: DataTypes.INTEGER,
      completed: DataTypes.INTEGER,
      imageLinks: ARRAY(DataTypes.STRING),
    },
    {
      sequelize,
      modelName: "Issue",
    }
  );
  return Issue;
};
