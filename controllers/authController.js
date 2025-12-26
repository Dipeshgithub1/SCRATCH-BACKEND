const bcrypt = require("bcrypt")
const {generateToken} = require("../utis/generatetoken");
const usermodel = require("../models/usermodel");


const registerUser = async (req,res) => {
    try {

        const {email,password,fullname} = req.body;

        //validation 
        if(!email || !password || !fullname){
            return res.status(400).json({message:"All fields are required"})
        }
       //check existing user
       const existingUser = await usermodel.findOne({email})
       if(existingUser){
        return res.status(409).json({message:"User already exists"})
       }

       //Hash password
       const salt = await bcrypt.genSalt(10);
       const hashPassword = await bcrypt.hash(password,salt);

       //create User 
       const user = await usermodel.create({
        email,
        password:hashPassword,
        fullname,
       })

       //generate token 
       let token = generateToken(user)

       // Set cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    return res.status(201).json({
      message: "User registered successfully",
      userId: user._id,
    });

        
    } catch (error) {
        return res.status(500).json({ message: error.message });
        
    }
}
  module.exports = {
    registerUser
  }






