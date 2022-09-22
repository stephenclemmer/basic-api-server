'use strict';

const express = require('express');
const carsRouter = require('./routes/cars');
const guitarsRouter = require('./routes/guitars');
const PORT = process.env.PORT || 3002;

const app = express();
app.use(express.json());
app.use(carsRouter);
app.use(guitarsRouter);

function start (){
  app.listen(PORT, () => console.log(`listening on port ${PORT}`));
}

module.export = { app, start };