const { isValidObjectId } = require("mongoose")
const flowerModel = require("../models/flower.model")


const findAllFlowers = async (req, res) => {
    const findAllFlowers = await flowerModel.find()
    res.json({message: "All flowers found!", data:findAllFlowers})
}


const createFlower = async (req, res) => {
    const {name, color, price} = req.body
    if (!name || !color || price === undefined) {
        return res.json({message: "All fields are required"})
    }
    if (typeof price !== 'number' || price <= 0) {
        return res.json({message: "Price must be a positive number"})
    }
    const createFlower = await flowerModel.create({name,color,price})
    res.json({message: "Flower added successfully!", data:createFlower})
}


const getById = async (req, res) => {
    const {id} = req.params
    if (!isValidObjectId(id)) {
        return res.json({message: "Invalid Id", data:null})
    }
    const findFlowerById = await flowerModel.findById(id)
    if (!findFlowerById) {
        return res.json({message: "Flower not found"})
    }
    res.json({message: "Found your flower by ID!", data:findFlowerById})
}


const deleteFlower = async (req, res) => {
    const {id} = req.params
    if (!isValidObjectId(id)) {
        return res.json({message: "Invalid Id", data:null})
    }
    const deletedFlower = await flowerModel.findByIdAndDelete(id)
    if (!deletedFlower) {
        return res.json({message: "Flower not found, nothing to delete"})
    }
    res.json({message: "Flower deleted successfully!", data:deletedFlower})
}


const updateFlower = async (req, res) => {
    const {name, color, price} = req.body
    const {id} = req.params
    if (!isValidObjectId(id)) {
        return res.json({message: "Invalid Id", data:null})
    }
    if (price !== undefined && (typeof price !== 'number' || price <= 0)) {
        return res.json({message: "Price must be a positive number"})
    }
    const findFlowerAndUpdate = await flowerModel.findByIdAndUpdate(id, {name,color,price}, {new:true})
    if (!findFlowerAndUpdate) {
        return res.json({message: "Flower not found, update failed"})
    }
    res.json({message: "Flower updated successfully!", data:findFlowerAndUpdate})
}


module.exports = {
    findAllFlowers,
    createFlower,
    getById,
    deleteFlower,
    updateFlower
}