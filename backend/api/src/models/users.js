const sequelize = require("../core/db");
const { DataTypes } = require("sequelize");

const Users = sequelize.define(
  "users",
  {
    id: {
      field: "id",
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    login: {
      field: "login",
      type: DataTypes.STRING,
      unique: true,
    },
    password: {
      field: "password",
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = { Users };
