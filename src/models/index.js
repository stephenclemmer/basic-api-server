'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');

const carsSchema = require('./cars.js');
const guitarsSchema = require('./guitars.js');

const DATABASE_URL = process.env.NODE_ENV === 'test'
  ? 'sqlite:memory'
  : process.env.DATABASE_URL;
console.log(DATABASE_URL);

//   Uncomment for production; Comment out for Development
const sequelizeDatabase = new Sequelize(DATABASE_URL, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});




// Uncomment for development. Comment out for production
// const sequelizeDatabase = new Sequelize(DATABASE_URL, {});

const CarsModel = carsSchema(sequelizeDatabase, DataTypes);
const GuitarsModel = guitarsSchema(sequelizeDatabase, DataTypes);

module.exports = {sequelizeDatabase, CarsModel, GuitarsModel};
