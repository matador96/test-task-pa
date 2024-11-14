const SchoolsController = require("../controllers/schools");
const { authenticate } = require("../middleware/authenticate");
const { validationChecker } = require("../middleware/validationChecker");

module.exports = [
  {
    type: "get",
    url: "/api/v1/schools",
    middlewares: [
      authenticate,
      SchoolsController.validate("getSchoolsWithParams"),
      validationChecker,
    ],
    method: SchoolsController.getSchoolsWithParams,
  },
  {
    type: "delete",
    url: "/api/v1/school/:id",
    middlewares: [
      authenticate,
      SchoolsController.validate("deleteSchoolById"),
      validationChecker,
    ],
    method: SchoolsController.deleteSchoolById,
  },
];
