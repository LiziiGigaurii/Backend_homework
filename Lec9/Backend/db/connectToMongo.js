const mongoose = require('mongoose')
const mongoURI = "mongodb+srv://admin:<admin>@cluster0.wd1rgsf.mongodb.net/?appName=Cluster0"

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI)
        console.log("Connected successfully")
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error.message)
        process.exit(1)
    }
}

module.exports = connectToMongo;