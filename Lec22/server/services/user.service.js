const usersModel = require("../models/users.model")

const findAllUsers = async (req, res) => {
    const findAll = await usersModel.find()
    res.json({message: "Users found successfully!", data: findAll})
}

module.exports = findAllUsers