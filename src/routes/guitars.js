'use strict'

const express = require('express');
const { GuitarsModel } = require('../models/guitars');

const router = express.Router();

router.post('guitars', async (req, res, send) => {
  console.log('req body', req.body);

  const newGuitar = await GuitarsModel.create(req.body);
  res.status(200).send(newGuitar);
});

module.exports = router;