const HighSchoolsController = require("../controllers/highschool");
const { authenticate } = require("../middleware/authenticate");
const { validationChecker } = require("../middleware/validationChecker");

module.exports = [
  {
    type: "get",
    url: "/api/v1/highschools",
    middlewares: [
      authenticate,
      HighSchoolsController.validate("getHighSchoolsWithParams"),
      validationChecker,
    ],
    method: HighSchoolsController.getHighSchoolsWithParams,
  },
  {
    type: "delete",
    url: "/api/v1/highschool/:id",
    middlewares: [
      authenticate,
      HighSchoolsController.validate("deleteHighSchoolById"),
      validationChecker,
    ],
    method: HighSchoolsController.deleteHighSchoolById,
  },
];
