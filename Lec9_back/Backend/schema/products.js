const { default: mongoose} = require("mongoose")
const productsSchema = new mongoose.Schema({
    name:String,
    price:Number,
    category:String,
    description:String
},
{
    timestamps:true
}
)

module.exports = mongoose.model("products",productsSchema)