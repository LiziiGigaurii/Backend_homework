const {Router} = require("express")
const {model} = require("mongoose")
const userModel = require("../models/users.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")


const authRouter = Router()

authRouter.post("/sign-up", async (req,res) => {
    const {username, email, password} = req.body
    if (!username || !email || !password) {
        return res.status(400).json({message: "All fields are required!"})
    }
    const existingUser = await userModel.findOne({email:email})
    if (existingUser) {
        return res.status(400).json({message: "User already exists!"})
    }
    const hashedPass = await bcrypt.hash(password, 10)
    await userModel.create({username, email, password:hashedPass})
    res.json({message: "User created successfully!"})
})

authRouter.post("/sign-in", async (req, res) => {
    const {email, password} = req.body
    if (!email || !password) {
        return res.status(400).json({message: "Email and password are required!"})
    }
    const existingUser = await userModel.findOne({email:email})
    if (!existingUser) {
        return res.status(400).json({message: "User does not exist!"})
    }
    const isEqualPass = await bcrypt.compare(password, existingUser.password)
    if (!isEqualPass) {
        return res.status(401).json({message: "Invalid password!"})
    }
    const payload = {
        userid: existingUser._id
    }
    const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn:"1h"})
    res.json({message: "Token", data:token})
})


module.exports = authRouter