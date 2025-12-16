const mongoose = require('mongoose')
const dbgr = require("debug") ("development:mongoose")


mongoose
.connect("mongodb://localhost:27017/SCRATCH")
.then(() => {
    dbgr("Connected to MongoDB");
  })
  .catch((err) => {
    dbgr("MongoDB connection error:", err);
  });

  module.exports = mongoose.connection;