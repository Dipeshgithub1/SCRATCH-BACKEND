const express = require("express")


const app = express()
const PORT = 3000

const CookieParser = require("cookie-parser");
const path = require("path")
const db = require("./config/mongose-connection")
const OwnersRouter = require("./routes/OwnersRouter.js")
const UsersRouter = require("./routes/UsersRouter.js")
const ProductsRouter = require("./routes/ProductsRouter.js")

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(CookieParser())
app.use(express.static(path.join(__dirname,"public")));
app.set("view engine","ejs")

app.use("/owners",OwnersRouter)
app.use("/users",UsersRouter)
app.use("/products",ProductsRouter)


app.get("/",(req,res)=> {
    res.send("Hello world")
})

app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`)
})