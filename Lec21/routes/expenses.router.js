const {Router} = require("express")
const expensesModel = require("../models/expenses.model")

const expensesRouter = Router()


expensesRouter.get("/", async (req,res) => {
    const findAllExpenses = await expensesModel.find()
    res.json({message: "Found all expenses!", data:findAllExpenses})
})


module.exports = expensesRouter