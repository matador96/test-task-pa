const sequelize = require("../core/db");
const { DataTypes } = require("sequelize");

const University = sequelize.define(
  "universities",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    foundation_year: {
      type: DataTypes.INTEGER, // :D
    },
    building: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  },
);

module.exports = University;
