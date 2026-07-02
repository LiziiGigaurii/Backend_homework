const {Router} = require("express")
const { pagination,getByIdOrder,createOrder,deleteOrder,updateOrder,Secret } = require("./service")
const { isAdmin, isAdminOrEditor } = require("../../middlewares/roleCheck.middleware")
const orderRouter = Router()

orderRouter.get("/", pagination)
orderRouter.get("/secret", Secret)
orderRouter.get("/:id", getByIdOrder)
orderRouter.put("/:id", isAdminOrEditor, updateOrder)
orderRouter.post("/", createOrder)
orderRouter.delete("/:id", isAdmin, deleteOrder)

module.exports = orderRouter