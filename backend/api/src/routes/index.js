const { errorResponse, successResponse } = require("../controllers/index");
const sequelize = require("../core/db");

async function tryCatchResponseWrapper(req, res, callback, withTransaction = false) {
  const transaction = withTransaction ? await sequelize.transaction() : null;
  try {
    const result = await callback(req, res, transaction);
    await transaction?.commit();
    successResponse(res, result);
  } catch (error) {
    await transaction?.rollback();
    errorResponse(res, error);
    console.error("An error occurred:", error);
  }
}

const allRoutes = [
  ...require("./users"),
  ...require("./schools"),
  ...require("./highschools"),
  ...require("./universities"),
];

module.exports = (app) => {
  allRoutes.map((e) =>
    app[e.type](
      e.url,
      ...e.middlewares,
      async (req, res) =>
        await tryCatchResponseWrapper(req, res, e.method, e.withTransaction),
    ),
  );
};
