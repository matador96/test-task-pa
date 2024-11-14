const HighSchools = require("../models/highschools");
const { generateDatabaseSetting } = require("../helpers/db");
const { ApplicationError } = require("./../classes/Errors");

module.exports.getWithParams = async (queryParams) => {
  const settings = {
    ...generateDatabaseSetting(queryParams, "highschool"),
    raw: false,
    nest: true,
  };

  const data = await HighSchools.findAndCountAll(settings);

  return { data: data.rows, count: data.count };
};

module.exports.deleteById = async (id) => {
  return await HighSchools.destroy({ where: { id } });
};
