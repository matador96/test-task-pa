const sequelize = require("../core/db");
const { DataTypes } = require("sequelize");

const HighSchools = sequelize.define(
  "high_schools",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    specialty: {
      type: DataTypes.STRING,
    },
    region: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  },
);

module.exports = HighSchools;
