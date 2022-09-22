'use strict';

const express = require('express');
const { CarsModel } = require('../models/cars');

const router = express.Router();

router.post('/cars', async (req, res, send) => {
  console.log('req body', req.body);

  const newCar = await CarsModel.create(req.body);
  res.status(200).send(newCar);
});

module.exports = router;