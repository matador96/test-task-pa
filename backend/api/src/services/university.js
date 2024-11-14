const University = require("../models/university");
const { generateDatabaseSetting } = require("../helpers/db");
const { ApplicationError } = require("./../classes/Errors");
const Sequelize = require("sequelize");

module.exports.getWithParams = async (queryParams) => {
  const settings = {
    ...generateDatabaseSetting(queryParams, "university"),
    raw: false,
    nest: true,
  };

  const data = await University.findAndCountAll(settings);

  return { data: data.rows, count: data.count };
};

module.exports.getCorpuses = async (queryParams) => {
  const data = await University.findAll({
    attributes: [[Sequelize.fn("DISTINCT", Sequelize.col("building")), "building"]],
  });

  return { data: data };
};

module.exports.deleteById = async (id) => {
  return await University.destroy({ where: { id } });
};
