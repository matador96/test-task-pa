const UniversitiesController = require("../controllers/university");
const { authenticate } = require("../middleware/authenticate");
const { validationChecker } = require("../middleware/validationChecker");

module.exports = [
  {
    type: "get",
    url: "/api/v1/universities",
    middlewares: [
      authenticate,
      UniversitiesController.validate("getUniversitiesWithParams"),
      validationChecker,
    ],
    method: UniversitiesController.getUniversitiesWithParams,
  },
  {
    type: "get",
    url: "/api/v1/corpuses",
    middlewares: [authenticate],
    method: UniversitiesController.getCorpuses,
  },
  {
    type: "delete",
    url: "/api/v1/university/:id",
    middlewares: [
      authenticate,
      UniversitiesController.validate("deleteUniversityById"),
      validationChecker,
    ],
    method: UniversitiesController.deleteUniversityById,
  },
];
