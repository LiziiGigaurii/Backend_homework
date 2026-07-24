const { default: mongoose } = require("mongoose");


async function connectToMongoDB() {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log({message: "Connected successfuly!"})
    } catch(error) {
        console.log(error, "Problem with database connection!")
    }
}


module.exports = connectToMongoDB