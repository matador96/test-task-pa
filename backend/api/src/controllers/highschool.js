const { body, query, param } = require("express-validator");
const HighSchoolService = require("../services/highschool");

const Validations = require("../const/validatorSettings");

module.exports.getHighSchoolsWithParams = async (req) => {
  const result = await HighSchoolService.getWithParams(req.query);

  return { data: result.data, count: result.count };
};

module.exports.deleteHighSchoolById = async (req) => {
  const { id } = req.params;
  const result = await HighSchoolService.deleteById(id); // избавиться от этого надо, теперь в req.user.profile все хранится

  return {};
};

module.exports.validate = (method) => {
  switch (method) {
    case "getHighSchoolsWithParams": {
      return [...Validations.pagination, ...Validations.sorting];
    }

    case "deleteHighSchoolById": {
      return [param("id").isInt()];
    }

    default:
      break;
  }
};
