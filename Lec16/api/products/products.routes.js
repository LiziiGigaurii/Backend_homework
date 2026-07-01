const {Router} = require("express")
const { pagination,getByIdProduct,createProduct,deleteProduct,updateProduct,Secret } = require("./products.service")
const { isAdmin, isAdminOrEditor } = require("../../middlewares/roleChek.middleware")
const productRouter = Router()


productRouter.get("/", pagination)
productRouter.get("/secret", Secret)
productRouter.get("/:id", getByIdProduct)
productRouter.put("/:id", isAdminOrEditor ,updateProduct)
productRouter.post("/", createProduct)
productRouter.delete("/:id", isAdmin ,deleteProduct)

module.exports = productRouter