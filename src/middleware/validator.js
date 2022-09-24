'use strict';

const serverError = require('../error-handlers/500');

const validator = (req, res, next) => {
  let { name } = req.body;

  if (name) {
    next();
  } else {
    next(serverError());
  }
};

module.exports = validator;
