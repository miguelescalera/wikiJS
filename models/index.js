const Page = require('./Page');
const User = require('./User');
Page.belongsTo(User, {as: 'author'});

module.exports = {Page,  User};