const express = require('express');
const router = express.Router();
const {Page} = require("../models/index")


 
router.get('/wiki', (req, res) =>{ 
    Page.findAll({})
    .then((pages)=>{
        res.render("index",{pages})
    })
})

router.get('/wiki/add', (req, res) =>{
    res.render('addpage')
})

router.post('/wiki/add', (req, res) =>{
    const {title,content}=req.body
    Page.create({title,content,urltitle:generateurltitle(title),status:"active"})
    .then((page)=>{
        console.log("se creo una pagina");
        res.json(page)    
    })
    .catch((err)=>{
        console.log(err)
    })
    
})
router.get("/wiki/page/:name",(req , res)=>{
    const name = req.params.name
    Page.findAll({
        where:{
            urltitle:name,
        }
    })
    .then((page)=>{
        res.json(page)
    })
})





function generateurltitle(title){
    if(title){
     return title.replace(/ /g,"_")
     }else{
        return Math.random().toString(36).substring(2,7)
     }
}

module.exports = router;