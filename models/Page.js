const S = require('sequelize');
const db = require('../db')

class Page extends S.Model{}

Page.init({
    title: {type: S.STRING},
    urltitle: {type: S.STRING},
    content: {type: S.STRING},
    status: {type: S.STRING},
    //route: {type: S.VIRTUAL, get(){return "/wiki/"+this.urltitle}},
}, {sequelize:db, modelName: 'page'});





module.exports = Page;