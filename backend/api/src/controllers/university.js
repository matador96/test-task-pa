const { body, query, param } = require("express-validator");
const UniversityService = require("../services/university");

const Validations = require("../const/validatorSettings");

module.exports.getUniversitiesWithParams = async (req) => {
  const result = await UniversityService.getWithParams(req.query);

  return { data: result.data, count: result.count };
};

module.exports.getCorpuses = async (req) => {
  const result = await UniversityService.getCorpuses(req.query);

  return { data: result.data };
};

module.exports.deleteUniversityById = async (req) => {
  const { id } = req.params;
  const result = await UniversityService.deleteById(id); // избавиться от этого надо, теперь в req.user.profile все хранится

  return {};
};

module.exports.validate = (method) => {
  switch (method) {
    case "getUniversitiesWithParams": {
      return [...Validations.pagination, ...Validations.sorting];
    }

    case "deleteUniversityById": {
      return [param("id").isInt()];
    }

    default:
      break;
  }
};
