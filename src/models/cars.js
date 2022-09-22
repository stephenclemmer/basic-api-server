'use strict';

module.exports = (sequelizeDatabase, DataTypes) => {
  return sequelizeDatabase.define('car', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year: {
      type: DataTypes.INTEGER, 
      allowNull: true,
    },
    color: {
      type: DataTypes.ENUM,
      values: ['red', 'green', 'blue'],
      allowNull: true,
    },
  });
};