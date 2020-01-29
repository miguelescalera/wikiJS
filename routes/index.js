const express = require('express');
const router = express.Router();
const wikiR = require('./wiki');
//const userR = require('./user');

router.use('/wiki', wikiR )

module.exports = router;