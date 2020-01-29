const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
    res.render("index")
})

router.post('/wiki/add', (req, res) =>{
    const {title,urltitle,content}=req.body
    console.log(title,urltitle,content)
    console.log(req.body)
    res.send('POST')
})

router.get('/add', (req, res) =>{
    res.render('addpage')
})

module.exports = router;