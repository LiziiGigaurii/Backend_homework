const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
    username:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    expenses:{
        type:[mongoose.Schema.Types.ObjectId],ref:"expenses",default:[]
    }
})

module.exports = mongoose.model("user", userSchema)