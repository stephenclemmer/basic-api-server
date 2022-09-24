'use strict';

// const serverError = require('../error-handlers/500');

const validator = (req, res, next) => {
  let { name } = req.body;

  if (name) {
    next();
  } else {
    next(new Error('Not a properly constructed object. Missing name.'));
  }
};

module.exports = validator;
