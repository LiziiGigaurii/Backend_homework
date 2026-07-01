const products = [
    { id: 1, name: "Butter", category: "Food", price: 7, isExpired: "Not expired" },
    { id: 2, name: "Milk", category: "Food", price: 5, isExpired: "Not expired" },
    { id: 3, name: "Snickers", category: "Snack", price: 3, isExpired: "Not expired" },
    { id: 4, name: "M&M's", category: "Snack", price: 2, isExpired: "Not expired" },
    { id: 5, name: "Chicken", category: "Meat", price: 10, isExpired: "Expired" },
    { id: 6, name: "iPhone", category: "Tech", price: 1200, isExpired: "Not expired" }
]

const pagination = (req, res) => {
    let { page = 1, take = 3 } = req.query
    take = take > 3 ? 3 : take
    const filtered = products.filter(el => el.price <= 200)
    res.json(filtered.slice((page - 1) * take, take * page))
}


const getByIdProduct = (req,res) => {
    const {id} = req.params
    const findProduct = products.find(el => el.id === Number(id))
    if (!findProduct) {
        return res.status(400).json({message: "Product doesn't exist"})
    }
    if (findProduct.price > 200) {
        return res.status(400).json({message: "Product is over 200$!"})
    }
    res.json({message: "Product found successfully!", data:findProduct})
}


const createProduct = (req,res) => {
    const {name, category, price, isExpired} = req.body
    if (!name || !category || !price || !isExpired) {
        return res.status(400).json({message: "You need name, category, price and isExpired to create a product!"})
    }
    if (price > 200) {
        return res.status(400).json({message: "Product is over 200$!"})
    }
    const lastID = products[products.length - 1]?.id || 0
    const newProduct = {
        id: lastID + 1,
        name,
        category,
        price,
        isExpired
    }

    products.push(newProduct)
    res.json({message: "Product added successfully!", data:products})
}


const deleteProduct = (req,res) => {
    const {id} = req.params
    const index = products.findIndex(el => el.id === Number(id))
    if (index === -1) {
        return res.json({message:"invalid id"})
    }
    const deletedProduct = products.splice(index, 1)
    res.json({message: "Product deleted successfully!", data:deletedProduct})
}


const Secret = (req, res) => {
    const secretkey = req.headers.secretkey
    if (!secretkey || secretkey !== "lizi2007") {
        return res.status(400).json({message: "Unauthorized"})
    }
    res.json({message: "Welcome to the secret route!"})
}


function updateProduct(req,res) {
    const {id} = req.params
    const {name, category, price, isExpired} = req.body
    const index = products.findIndex(el => el.id === Number(id))
    if(index === -1){
        return res.json({message:"invalid id"})
    }
    if (price > 200) {
        return res.status(400).json({message: "Product is over 200$!"})
    }
    products[index] = {
        ...products[index],
        name:name || products[index].name,
        category:category || products[index].category,
        price:price || products[index].price,
        isExpired:isExpired || products[index].isExpired
    }
    res.json({message: "Product updated successfully!", data:products[index]})
}

module.exports = { pagination,getByIdProduct,createProduct,deleteProduct,updateProduct,Secret }

