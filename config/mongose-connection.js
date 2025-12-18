const mongoose = require('mongoose')
const dbgr = require("debug")("development:mongoose")
const config = require('config')


mongoose
  .connect(`${config.get("MONGODB_URL")}/SCRATCH`)
.then(() => {
    dbgr("Connected to MongoDB");
  })
  .catch((err) => {
    dbgr("MongoDB connection error:", err);
  });

  module.exports = mongoose.connection;