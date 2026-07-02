const {Router} = require("express")
const orderRouter = require("./orders/routes")

const apiRouter = Router()

apiRouter.use("/orders", orderRouter)

module.exports = apiRouter