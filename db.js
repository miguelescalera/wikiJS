const Sequelize = require('sequelize');

var sequelize = new Sequelize('postgres://postgres@localhost:5432/wiki', {
  logging: true,
  dialect: 'postgres'
});

module.exports = sequelize;