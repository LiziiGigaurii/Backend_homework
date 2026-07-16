const { default: mongoose } = require("mongoose")

const expensesSchema = new mongoose.Schema({
    title:{
        type:String
    },
    amount:{
        type:Number
    },
    Category:{
        type:String
    },
    user:{
        type:mongoose.Types.ObjectId,ref:"user"
    }
})

module.exports = mongoose.model("expenses", expensesSchema)