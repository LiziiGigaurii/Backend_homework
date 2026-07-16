require("dotenv").config()
const express = require("express")
const app = express()
const PORT = 3030
const connectToDB = require("./db/connectToMongoDB")
const userRouter = require("./routes/users.router")
const expensesRouter = require("./routes/expenses.router")
const isAuth = require("./middleware/isAuth.MiddleWare")
const authRouter = require("./auth/auth.router")

app.use(express.json())
connectToDB()


app.get("/", (req,res) => {
    console.log("/ request")
})


app.use("/users", userRouter)
app.use("/expenses", isAuth, expensesRouter)
app.use("/auth", authRouter)


app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`)
})