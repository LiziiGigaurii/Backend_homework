const {Router} = require("express")
const { isValidObjectId } = require("mongoose")
const userModel = require("../models/users.model")
const findAllUsers = require("../services/user.service")

const userRouter = Router()


userRouter.get("/", findAllUsers)

userRouter.get("/:id", async (req,res) => {
    const {id} = req.params
    if (!isValidObjectId(id)) {
        return res.status(400).json({message: "Invalid ID!"})
    }
    const findUserByID = await userModel.findById(id)
    res.json({message: "Found user by ID!", data:findUserByID})
})

userRouter.delete("/:id", async (req,res) => {
    const {id} = req.params
    if (!isValidObjectId(id)) {
        return res.status(400).json({message: "Invalid ID!"})
    }
    const deletedUser = await userModel.findByIdAndDelete(id)
    res.json({message: "User deleted successfully!", data:deletedUser})
})

userRouter.put("/:id", async (req,res) => {
    const {id} = req.params
    const {username, email, password} = req.body
    if (!isValidObjectId(id)) {
        return res.status(400).json({message: "Invalid ID!"})
    }
    const updateUser = await userModel.findByIdAndUpdate(id, {username, email, password}, {new:true})
    res.json({message: "User updated successfully!", data:updateUser})
})


module.exports = userRouter