const express = require("express");
const bodyParser = require("body-parser");
const compression = require("compression");
const routes = require("./src/routes");
const authentication = require("./src/core/auth/base");

const sequelize = require("./src/core/db");

require("dotenv").config();
const app = express();

app.use(bodyParser.json({ limit: "100mb" }));
app.use(bodyParser.urlencoded({ limit: "100mb", extended: true }));
app.use(compression());

authentication(app);
routes(app);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connected to database");
  })
  .catch(() => {
    console.log("Не удалось подключится к базе данных");
  });

app.listen(process.env.PORT, () =>
  console.log(`Listening on port ${process.env.PORT}`),
);

module.exports = app;
