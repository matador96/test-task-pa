const { body, query, param } = require("express-validator");
const UserService = require("../services/users");
const User = require("../models/users");
const Encrypt = require("../core/encrypt");
const jwt = require("jsonwebtoken");
const jwtOptions = require("../core/auth/jwtConfig");
const Validations = require("../const/validatorSettings");
const { comparePassword, cryptPassword } = require("../core/encrypt");
const { ApplicationError } = require("./../classes/Errors");

module.exports.login = async (req) => {
  const { login, password } = req.body;

  if (!login && !password) {
    throw new ApplicationError("логин и пароль не задан", {
      path: "controller",
    });
  }

  const user = await UserService.getByLogin(login);

  if (!user) {
    throw new ApplicationError("Данные не верны", {
      path: "controller",
    });
  }

  const comparePass = await comparePassword(password, user.password);

  if (!comparePass) {
    throw new ApplicationError("Пароль неверный", {
      path: "controller",
    });
  }

  const payload = { id: user.id };

  const token = jwt.sign(payload, jwtOptions.secretOrKey);

  return {
    jwt: token,
    data: { ...user },
  };
};

module.exports.logout = async () => {
  return { message: "Успешный выход" };
};

module.exports.get = async (req) => {
  const currentSessionUserId = req?.user?.profile?.id;

  if (!currentSessionUserId) {
    throw new ApplicationError("Пользователя нет в сессии", {
      path: "controller",
    });
  }
  const userData = await UserService.getUserById(currentSessionUserId); // избавиться от этого надо, теперь в req.user.profile все хранится

  if (!userData) {
    throw new ApplicationError("Пользователь не активен", {
      path: "controller",
    });
  }

  const userInfo = userData;

  return {
    data: { ...userInfo },
  };
};

module.exports.validate = (method) => {
  switch (method) {
    case "login": {
      return [body("login").isString(), body("password").isString()];
    }

    default:
      break;
  }
};
