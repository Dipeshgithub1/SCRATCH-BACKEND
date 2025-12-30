require("dotenv").config()

const express = require("express")


const app = express()
const PORT = 3000

const CookieParser = require("cookie-parser");
const path = require("path")
const db = require("./config/mongose-connection")
const session = require("express-session")
const flash = require("connect-flash")
const OwnersRouter = require("./routes/OwnersRouter.js")
const UsersRouter = require("./routes/UsersRouter.js")
const ProductsRouter = require("./routes/ProductsRouter.js")
const indexRouter = require("./routes/index.js")


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(CookieParser())
app.use(
    session({
        resave:false,
        saveUninitialized:false,
        secret:process.env.EXPRESS_SESSION_SECRET

    })
)
app.use(flash())
app.use(express.static(path.join(__dirname,"public")));


app.set("view engine","ejs")
app.set("views", path.join(__dirname, "view"))

app.use("/owners",OwnersRouter)

app.use("/products",ProductsRouter)
app.use("/api/users", UsersRouter);
app.use("/", indexRouter);



app.get("/health",(req,res)=> {
    res.send("Backend running health check up")
})

app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`)
})