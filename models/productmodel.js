const mongoose = require("mongoose");


const productSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
      trim: true,
    },

    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 100,
    },

    price: {
      type: Array,
      default:[]
    },

    discount: {
      type: Array,
      default:[]
    },

    bgcolor: {
      type: String,
      default: "#ffffff",
    },

    panelcolor: {
      type: String,
      default: "#ffffff",
    },

    textcolor: {
      type: String,
      default: "#000000",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
