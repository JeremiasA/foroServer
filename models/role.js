'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
 
  class Role extends Model {}

  Role.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Role'
  });
  return Role;
};