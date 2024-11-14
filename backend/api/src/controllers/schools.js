const { body, query, param } = require("express-validator");
const SchoolService = require("../services/schools");

const Validations = require("../const/validatorSettings");

module.exports.getSchoolsWithParams = async (req) => {
  const result = await SchoolService.getWithParams(req.query);

  return { data: result.data, count: result.count };
};

module.exports.deleteSchoolById = async (req) => {
  const { id } = req.params;
  const result = await SchoolService.deleteById(id); // избавиться от этого надо, теперь в req.user.profile все хранится

  return {};
};

module.exports.validate = (method) => {
  switch (method) {
    case "getSchoolsWithParams": {
      return [...Validations.pagination, ...Validations.sorting];
    }

    case "deleteSchoolById": {
      return [param("id").isInt()];
    }

    default:
      break;
  }
};
