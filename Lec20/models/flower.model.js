const mongoose = require("mongoose")

const flowerSchema = new mongoose.Schema({
    name:{
        type: String
    },

    color:{
        type: String
    },

    price:{
        type:Number
    },
})

module.exports = mongoose.model("flower", flowerSchema)