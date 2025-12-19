const mongoose = require("mongoose")


const userSchema = new mongoose.Schema(
    {
    fullname: {
        type: String,
        required:true,
        trim:true,
        minLength:3,
        maxLength:20
    },
email: {
    type: String,
    required:true,
    unique:true,
    lowercase:true,
    trim:true


},
password: {
 type: String,
  required:true,
  trim:true

},

contact: {
    type: Number
},

dob: {
    type: Date
},

picture: {
    type: String,
     trim:true
},

cart: {
    type: Array,
     default:[]
},
isadmin: {
    type: Boolean,
    default:false
},
orders: {
 type: Array,
  default:[]
},
    },

{
    timestamps:true,
})

module.exports = mongoose.model("User", userSchema);