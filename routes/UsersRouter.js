const express = require('express')
const router = express.Router()
const userModel = require("../models/usermodel")
const bcrypt = require("bcrypt")


router.get("/",(req,res) => {
    res.send("hello this admin")
})

router.post("/register",(req,res) => {
    try {
    let {email,password,fullname} = req.body;

    bcrypt.genSalt(10,function(err,salt){
    bcrypt.hash(password,salt,async function(err, hash){
        if(err) return res.send(err.message);
        else{
            let user = await userModel.create({
                email,
                password:hash,
                fullname
            });
         let token =   jwt.sign({email,id:user._id},"heyhey")
         res.cookie("token",token);
         res.send("user created successfully")
        }
    })    
    })
       
    } catch (error) {
        res.send(error.message)    
    }
    
})

module.exports = router;
