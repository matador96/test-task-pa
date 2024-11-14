const Schools = require("../models/schools");
const { generateDatabaseSetting } = require("../helpers/db");
const { ApplicationError } = require("./../classes/Errors");

module.exports.getWithParams = async (queryParams) => {
  const settings = {
    ...generateDatabaseSetting(queryParams, "school"),
    raw: false,
    nest: true,
  };

  const data = await Schools.findAndCountAll(settings);

  return { data: data.rows, count: data.count };
};

module.exports.deleteById = async (id) => {
  return await Schools.destroy({ where: { id } });
};
