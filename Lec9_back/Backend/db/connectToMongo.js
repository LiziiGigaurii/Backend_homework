const { default: mongoose } = require("mongoose")

module.exports = async () => {
    await mongoose.connect("mongodb+srv://admin:admin@cluster0.wd1rgsf.mongodb.net/?appName=Cluster0")
    console.log("connected successfully")
}