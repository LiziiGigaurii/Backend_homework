const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    posts: {
        type:[mongoose.Schema.Types.ObjectId],
        ref: "posts",
        default: []
    }
})

module.exports = mongoose.model("user", userSchema)