const { default: mongoose } = require("mongoose");

const productSchema = mongoose.Schema({
    name: {
        type: String
    },
    price: {
        type: Number
    },
    category: {
        type: String
    },
    description: {
        type: String
    }
})

module.exports = mongoose.model("product", productSchema)