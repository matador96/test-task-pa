const UserController = require("../controllers/user");
const { authenticate } = require("../middleware/authenticate");
const { validationChecker } = require("../middleware/validationChecker");

module.exports = [
  {
    type: "post",
    url: "/api/v1/user/login",
    middlewares: [UserController.validate("login"), validationChecker],
    method: UserController.login,
  },
  {
    type: "get",
    url: "/api/v1/user/logout",
    middlewares: [],
    method: UserController.logout,
  },
  {
    type: "get",
    url: "/api/v1/user",
    middlewares: [authenticate],
    method: UserController.get,
  },
];
