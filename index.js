'use strict';

require('dotenv').config();

const { sequelizeDatabase } = require('./src/models');
const { start } = require('./src/server.js');
// const { CarsModel } = require('./src/models/guitars');
// const { GuitarsModel } = require('./src/models/guitars');

sequelizeDatabase.sync()
  .then(() => {
    console.log('Successful Connection!');
    start();
  })
  .catch(err => console.error(err));
