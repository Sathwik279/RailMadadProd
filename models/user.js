"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    static associate(models) {
      // define association here
      User.hasMany;
    }

    static async addUser(request, response) {
      try {
        const user = await User.create({
          firstName: request.body.firstName,
          lastName: request.body.lastName,
          email: request.body.email,
          password: request.body.password,
          role: request.body.role,
        });
        return user;
      } catch (error) {
        console.log(error);
        return error;
      }
    }

    static async remove(id) {
      return this.destroy({
        where: {
          id: id,
        },
      });
    }
  }
  User.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      role: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
