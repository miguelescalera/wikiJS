const S = require('sequelize');
const db = require('./index');

class User extends S.Model{}

User.init({
    name: {type: S.STRING, allowNull: false},
    email: {type: S.email,  validate: {notNull: {msg: 'Please enter your mail'}}}
}, {db, modelName: 'user'});

module.exports = User;