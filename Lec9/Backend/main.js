const express = require("express")
const connecttoMongo = require("./db/connecttoMongo")
const products = require("./schema/products.js")
const { isValidObjectId } = require("mongoose")
const app = express()
const cors = require("cors")
connecttoMongo()
app.use(express.json())
app.use(cors())

app.get("/",async (req,res) =>{
    res.send("hello world")
})

app.get("/products",async (req,res) => {
    let findAllProducts = await products.find()
    res.json(findAllProducts)
})

app.get("/products/:id",async (req,res) => {
    let {id} = req.params
    console.log(id)
    if(!isValidObjectId(id)){
        return res.status(400).json({message:"invalid mongo id"})
    }
    let findById = await products.findById(id)
    res.json(findById)
})

app.post("/products",async (req,res) => {
    let {name,price,category,description} = req.body
    console.log(name)
    console.log(price)
    console.log(category)
    console.log(description)
    if(!name || !price || !category || !description){
        return res.status(400).json({message:"name,price,category adn desc is required field"})
    }
    let createProduct = await products.create({name,price,category,description})
    res.json(createProduct)
})

app.put("/products/:id",async (req,res) => {
    let {id} = req.params
    let {name,price,category,description} = req.body
    if(!isValidObjectId(id)){
        return res.status(400).json({message:"invalid mongo id"})
    }
    let update = await products.findByIdAndUpdate(id,{name,price,category,description},{new:true})
    res.json(update)
})

app.delete("/products/:id",async (req,res) => {
    let {id} = req.params
    if(!isValidObjectId(id)){
        return res.status(400).json({message:"invalid mongo id"})
    }
    let deleteProd = await products.findByIdAndDelete(id)
    res.json(deleteProd)
})

app.listen(3001,() => {
    console.log("server running on http://localhost:3001")
})