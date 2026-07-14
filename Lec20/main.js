const express = require("express")
const app = express()
const PORT = 3030
const connectToMongo = require("./config/connectToMongo")
const flowerRouter = require("./api/flower.routes")
require("dotenv").config()
app.use(express.json())
connectToMongo()


app.use("/flowers", flowerRouter)


app.get("/", (req, res) => {
    res.json("Error fixed")
})


app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`)
})