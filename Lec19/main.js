require('dotenv').config()
const express = require("express")
const connectToDB = require("./config/connectToMongo")
const productModel = require("./models/product.model")
const { isValidObjectId } = require("mongoose")
const app = express()
const PORT = 3030

app.use(express.json())
connectToDB()


app.get("/products", async (req, res) => {
    let { page = 1, limit = 5 } = req.query
    page = Number(page)
    limit = Number(limit)
    const allProducts = await productModel.find()
    res.json(allProducts.slice((page - 1) * limit, page * limit))
})


app.get("/products", async (req, res) => {
    const findInfo = await productModel.find()
    res.json({message: "Products found successfully!", data:findInfo})
})


app.post("/products", async (req, res) => {
    const {name,price,category,description} = req.body
    if (!name || !price || !category) {
        return res.json({message: "name, price and category are required!"})
    }
    if (price < 2 || price > 4000) {
        return res.json({message: "minPrice is 2 and maxPrice 4000"})
    }
    const createProduct = await productModel.create({name,price,category,description})
    res.json({message:"Product created successfully!", data:createProduct})
})


app.get("/products/:id", async (req, res) => {
    const {id} = req.params
    if(!isValidObjectId(id)) {
        return res.json({message: "Invalid id!"})
    }
    const findById = await productModel.findById(id)
    res.json({message: "Product found successfully!", data:findById})
})


app.delete("/products/:id", async (req, res) => {
    const {id} = req.params
    if(!isValidObjectId(id)) {
        return res.json({message: "Invalid id!"})
    }
    const deletedProduct = await productModel.findByIdAndDelete(id)
    res.json({message:"Deleted successfully!", data:deletedProduct})
})


app.put("/products/:id", async (req, res) => {
    const {id} = req.params
    const {name,price,category,description} = req.body
    if(!isValidObjectId(id)) {
        return res.json({message: "Invalid id!"})
    }
    if (!name || !price || !category || !description) {
        return res.json({message: "name, price, category or description are required!"})
    }
    if (price < 2 || price > 4000) {
        return res.json({message: "minPrice is 2 and maxPrice 4000"})
    }
    const updatedProduct = await productModel.findByIdAndUpdate(id, {name,price,category,description}, {new:true})
    res.json({message: "Product updated successfully!", data:updatedProduct})
})


app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`)
})