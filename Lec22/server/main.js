const express = require("express")
const connectToMongoDB = require("./db/connectToDB")
const userRouter = require("./routes/users.route")
const postsRouter = require("./routes/posts.route")
const authRouter = require("./auth/auth.route")
const isAuth = require("./middleware/auth.middleware")
const app = express()
const PORT = 3030
const cors = require("cors")
app.use(cors())
app.use(express.json())
require("dotenv").config()
connectToMongoDB()


app.use("/users", userRouter)
app.use("/posts", isAuth, postsRouter)
app.use("/auth", authRouter)
app.use("/", (req,res) => {
    res.json({message: "/ request"})
})


app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`)
})