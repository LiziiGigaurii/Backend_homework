const { request } = require("express")

const orders = [
    {id:1, productName:"TV", quantity:3, totalPrice:300, status:"Shipped"},
    {id:2, productName:"Doll", quantity:10, totalPrice:250, status:"Shipped"},
    {id:3, productName:"Sushi", quantity:3, totalPrice:150, status:"In process"},
]

const pagination = (req, res) => {
    let { page = 1, take = 3 } = req.query
    take = take > 3 ? 3 : take
    const filtered = products.filter(el => el.price <= 200)
    res.json(filtered.slice((page - 1) * take, take * page))
}

const getByIdOrder = (req,res) => {
    const {id} = req.params
    const findOrder = orders.find(el => el.id === +id)
    if (!findOrder) {
        return res.status(404).json({message: "Not found", data:null})
    }
    res.json({message: "Order found successfully", data:findOrder})
}


const createOrder = (req, res) => {
    const {productName, quantity, totalPrice, status} = req.body
    if(!productName) {
        return res.status(400).json({message: "product name is required"})
    }
    if(quantity > 10 || totalPrice > 500) {
        return res.status(400).json({
            message:"Order can't be made: quantity's more then 10 and total price's more than 500"
            })
    }
    const lastID = orders[orders.length - 1]?.id || 0
    const newOrder = {
        id: lastID + 1,
        productName,
        quantity,
        totalPrice,
        status: "Ordered"
    }
    orders.push(newOrder)
    res.json({message: "order added successfully", data:orders})
}


const deleteOrder = (req, res) => {
    const {id} = req.params
    const index = orders.findIndex(el => el.id === +id)
    if (index === -1) {
        return res.json({message:"invalid id"})
    }
    const deletedOrder = orders.splice(index, 1)
    res.json({message: "product deleted successfully!", data:deletedOrder})
}


const updateOrder = (req,res) => {
    const {id} = req.params
    const {productName, quantity, totalPrice, status} = req.body
    const index = orders.findIndex(el => el.id === +id)
    if(index === -1){
        return res.json({message:"invalid id"})
    }
    if (req.role === "editor" && (productName || quantity || totalPrice)) {
        return res.status(400).json({ 
            message: "Editors can change only status" 
        })
    }
    orders[index] = {
        ...orders[index],
        productName: (req.role === "admin" && productName) ? productName : orders[index].productName,
        quantity: (req.role === "admin" && quantity) ? quantity : orders[index].quantity,
        totalPrice: (req.role === "admin" && totalPrice) ? totalPrice : orders[index].totalPrice,
        status: status || orders[index].status 
    }
    res.json({message: "Order updated successfully!", data:orders[index]})
}


const Secret = (req, res) => {
    const secretkey = req.headers.secretkey
    if (!secretkey || secretkey !== "lizi2007") {
        return res.status(400).json({message: "Unauthorized"})
    }
    res.json({message: "Welcome to the secret route!"})
}


module.exports = { pagination,getByIdOrder,createOrder,updateOrder,deleteOrder,Secret }