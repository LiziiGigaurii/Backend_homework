const {Router} = require("express")
const userModel = require("../models/users.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const authRouter = Router()


authRouter.post("/sign-up", async (req,res) => {
    const {username, email, password} = req.body

    if (!username || !email || !password) {
        return res.json({message:"All the fields are required!"})
    }

    const existingUsername = await userModel.findOne({username:username})

    if (existingUsername) {
        return res.json({message: "Username already exists!"})
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    await userModel.create({username, email, password:hashedPassword})

    res.json({message: "User successfully registered!"})
})


authRouter.post("/sign-in", async (req,res) => {
    const {username, password} = req.body

    if (!username || !password) {
        return res.json({message: "Username and password are required!"})
    }

    const existingUsername = await userModel.findOne({username:username})

    if (!existingUsername) {
        return res.json({message: "User not found!"})
    }   

    const isEqualPassword = await bcrypt.compare(password, existingUsername.password)

    if (!isEqualPassword) {
        return res.json({message: "Incorrect password!"})
    }

    const payload = {
        userId : existingUsername._id
    }

    const token = jwt.sign(payload,process.env.JWT_SECRET, {expiresIn:"1h"})

    res.json({message: "Token", data:token})
})


module.exports = authRouter