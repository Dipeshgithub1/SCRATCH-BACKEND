
const mongoose = require('mongoose')


const ownerSchema = new mongoose.Schema({


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
    type: Number,
     required:true
},

dob: {
    type: Date,
     required:true
},

picture: {
    type: String,
     required:true,
     trim:true
},

products: {
    type: Array,
    default:[]
},

isadmin: {
    type: Boolean,
    default:false
},

    },

{
    timestamps:true,

})

module.exports = mongoose.model("Owner",ownerSchema)
