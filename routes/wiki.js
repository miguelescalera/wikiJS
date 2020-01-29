const express = require('express');
const router = express.Router();
const {Page, User} = require("../models/index")


 
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
    const {title,content,email}=req.body
    User.findOne({where: {email}})
    .then((user)=>{
        if(user){
            Page.create({title,content,urltitle:generateurltitle(title),status:"active", authorId:user.id})
            .then((page)=>{
                console.log("se creo una pagina");
                res.json(page)    
            })
            .catch((err)=>{
                console.log(err)
            })
        }else{
            res.redirect('/user/signup')
        }
    })
    
    
})
router.get("/wiki/page/:name",(req , res)=>{
    const name = req.params.name
    Page.findOne({
        where:{
            urltitle:name,
        },
        include:[
        {model: User, as: 'author'}
        ]
    })
    .then((page)=>{
        if(page === null){
            res.status(404).redirect('/wiki');
        }else{
            res.render('wikipage', {page})
        }
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