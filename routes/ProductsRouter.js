const express = require('express')
const router = express.Router()

router.get("/Products",(req,res) => {
  res.send("Hlloe product")
})

module.exports = router;