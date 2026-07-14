const mongoose = require("mongoose")

async function connectToMongo() {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Connected successfully!")
    } catch (error) {
        console.log(error, "Problem with database connection")
    }
}

module.exports = connectToMongo