'use strict';
module.exports = (sequelize, DataTypes) => {
  const Burgers = sequelize.define('Burgers', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        len:[1,120]
      }
    },
    devoured: {
      type:DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  });
  
  return Burgers;
};