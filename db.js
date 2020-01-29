const Sequelize = require('sequelize');

var sequelize = new Sequelize('postgres://postgres@localhost:5432/wiki', {
  logging: false,
  dialect: 'postgres'
});

module.exports = sequelize;