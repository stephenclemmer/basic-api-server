'use strict';

const express = require('express');
const { CarsModel } = require('../models/cars');

const router = express.Router();



// Create
router.post('/cars', async (req, res, send) => {
  console.log('req body', req.body);

  const newCar = await CarsModel.create(req.body);
  res.status(200).send(newCar);
});

// Read
router.get('/cars', (req, res, next) => {
  console.log(res);
  // const results = {
  // }
  // res.status(200).send('Hello World');
});

// Read One
router.get('/cars/:id', (req, res, next) => {
  // res.status(200).send('Hello World');
});

// Update
router.put('/cars/:id')

// Destroy
router.delete('/cars/:id')

// Update


// Delete
// router.delete('/cars/:id', deleteCarInfo);

// async function deleteCarInfo(request, response, next) {
//   const id = request.params.id;
//   try {
//     await Location.findByIdAndDelete(id);
//     response.status(204).send('success!');
//   } catch (error) {
//     next(error);
//   }
// }

module.exports = router;