const { Router } = require("express")
const {
    findAllFlowers,
    createFlower,
    getById,
    deleteFlower,
    updateFlower
} = require("./flower.service")

const flowerRouter = Router()

flowerRouter.get("/", findAllFlowers)
flowerRouter.get("/:id", getById)
flowerRouter.post("/", createFlower)
flowerRouter.delete("/:id", deleteFlower)
flowerRouter.put("/:id", updateFlower)


module.exports = flowerRouter