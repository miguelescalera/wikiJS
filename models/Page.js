const S = require('sequelize');
const db = require('../db')

class Page extends S.Model{}

Page.init({
    title: {type: S.STRING, allowNull: false},
    urltitle: {type: S.STRING, allowNull: false},
    content: {type: S.STRING, allowNull: false},
    status: {type: S.STRING, allowNull: false},
    //route: {type: S.VIRTUAL, get(){return "/wiki/"+this.urltitle}},
}, {sequelize:db, modelName: 'page'});

module.exports = Page;