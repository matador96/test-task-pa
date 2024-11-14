const { Users } = require("../models/users");
const { generateDatabaseSetting } = require("../helpers/db");

const { ApplicationError } = require("./../classes/Errors");

module.exports.getUserById = async (id) => {
  const user = await Users.findByPk(id, {
    include: [],
    raw: true,
    nest: true,
    distinct: true,
  });

  if (!user)
    throw new ApplicationError("Данные не верны", {
      path: "controllers",
    });

  return user;
};

module.exports.getByLogin = async (login) => {
  const data = await Users.findOne({
    where: { login: login },
    raw: true,
    nest: true,
    distinct: true,
  });
  return data;
};
