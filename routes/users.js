const express= require("express");
const router= express.Router();
const {User}=require("../models/index")

router.get("/user/signup",(req,res)=>{
    res.render("signup")
})

router.get("/user/signin",(req,res)=>{
    res.render("signin")
})
router.post("/user/signin",(req,res)=>{
    const {name,email}=req.body
    User.findOne({where:{email}})
    .then((user)=>{
        if(user){
            res.render("index", {user})
        }else{
            res.redirect("/user/signup")
        }
    })
})

router.post("/user/signup",(req,res)=>{
   const {name,email}= req.body
   User.findOne({where:{email}})
   .then((user)=>{
       if(user){
           res.redirect("/user/signup")
       }else{
           User.create({name,email})
           .then(()=>{
               console.log("usuario creado")
               res.redirect("/wiki")
           })
           .catch((err)=>{
               console.log(err)
           })
       }
   })
})

module.exports=router