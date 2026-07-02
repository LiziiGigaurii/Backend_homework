const express = require("express")
const PORT = 3030
const apiRouter = require("./api/api")
const app = express()
app.use(express.json())

app.use("/api", apiRouter)

app.listen(PORT, () => {
    console.log(`Service running on http://localhost:${PORT}`)
})