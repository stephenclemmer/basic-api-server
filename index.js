'use strict';

require ('dotenv').config();

const { sequelizeDatabase, CarModel } = require('./src/models/cars');
const { sequelizeDatabase, GuitarsModel } = require('./src/models/guitars');
const { start } = require('./src/server.js');

sequelizeDatabase.sync()
.then(() => {
  console.log('Successful Connection!');
})
.catch(err => console.error(err));

start();