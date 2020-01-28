const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
    res.send('WIKI')
})

router.post('/', (req, res) =>{
    res.send('POST')
})

router.get('/add', (req, res) =>{
    res.render('addpage')
})

module.exports = router;