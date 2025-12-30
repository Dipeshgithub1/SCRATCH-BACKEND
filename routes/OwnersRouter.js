const express = require('express')
const router = express.Router()
const ownerModel = require("../models/ownermodel")
const bcrypt = require("bcrypt")

router.get("/",(req,res) => {
    res.send("Helloe world")
})
if(process.env.NODE_ENV === "development")
router.post("/create",async(req,res)=> {
   let owners =   await ownerModel.find();
   if(owners.length > 0){
     return res.status(503).send("You don't have permission to create a new owner")

   }
    let {fullname,email,password} = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password,salt);
    let createdOwner =  await ownerModel.create({
         fullname,
         email,
         password: hashPassword
      })

   res.status(201).send(createdOwner)

 })

module.exports = router;