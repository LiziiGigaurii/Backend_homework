const {Router} = require("express")
const userModel = require("../models/users.model")
const {isValidObjectId} = require("mongoose")

const userRouter = Router()


userRouter.get("/", async (req, res) => {
    const findAllUsers = await userModel.find().select("-password")
    res.json({message: "All users found successfully!", data:findAllUsers})
})


userRouter.get("/:id", async (req, res) => {
    const {id} = req.params

    if(!isValidObjectId(id)) {
        return res.status(400).json({message: "Invalid ID", data:null})
    }

    const findUserById = await userModel.findById(id).select("-password")

    if(!findUserById) {
        return res.json({message: "User not found!"})
    }

    res.json({message: "User found successfully by your ID!", data:findUserById})
})


userRouter.delete("/:id", async (req,res) => {
    const {id} = req.params

    if(!isValidObjectId(id)) {
        return res.status(400).json({message: "Invalid ID", data:null})
    }

    const deleteUser = await userModel.findByIdAndDelete(id)

    res.json({message: "User deleted successfully!", data:deleteUser})
})


userRouter.put("/:id", async (req,res) => {
    const {id} = req.params
    const {username, email, password} = req.body

    if(!isValidObjectId(id)) {
        return res.status(400).json({message: "Invalid ID", data:null})
    } 

    const updateUser = await userModel.findByIdAndUpdate(id, {username, email, password}, {new:true}).select("-password")

    res.json({message: "User updated successfully!", data:updateUser})
})


module.exports = userRouter