const {Router} = require("express")
const productRouter = require("./products/products.routes")

const apiRouter = Router()

apiRouter.use("/products", productRouter)

module.exports = apiRouter