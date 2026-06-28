#!/usr/bin/env node

// 5) შექმენი products-cli,რომელსაც ექნება დამატება,წაკითხვა,id-ის მიხედვით წაკითხვა, წაშლა და
//  აფდეითი.fields(name,description,date,category) + მე თუ გავატან option ის მიხედვით --isexpire.
//  უნდა შეამოწმოს თარიღი და დაამატოს ვადა აქვს გასული თუ არა

import { program } from 'commander'
import fs from 'fs/promises'

program
    .command("create")
    .description("create a product")
    .argument("<name>")
    .argument("<description>")
    .argument("<date>")
    .argument("<category>")
    .action(async (name,description,date,category) => {
        const readProductsJson = await fs.readFile("products.json", 'utf-8')
        const parsedProductsJson = JSON.parse(readProductsJson)

        let lastID = parsedProductsJson[parsedProductsJson.length - 1]?.id || 0

        let newProduct = {id: lastID + 1, name, description, date, category}

        parsedProductsJson.push(newProduct)
        await fs.writeFile("products.json", JSON.stringify(parsedProductsJson, null, 2))
        console.log("Product added successfully")
    })


program
.command("show")
.description("Show all products or by ID")
.option('--id <num>')
.action(async (option) => {
    const readProductsJson = await fs.readFile("products.json", 'utf-8')
    const parsedProductsJson = JSON.parse(readProductsJson)
    const id = option.id

    if (id) {
        let product = parsedProductsJson.find(el => el.id === Number(id))
        console.log(product || "product not found")
    } else {
        console.log(parsedProductsJson)
    }
})



program
.command("update")
.description("update your products")
.argument("id")
.option("--name <name>")
.option("--desc <description>")
.option("--date <date>")
.option("--category <category>")
.option("--isexpire")
.action(async (id, option) => {
    const readProductsJson = await fs.readFile("products.json", 'utf-8')
    const parsedProductsJson = JSON.parse(readProductsJson)
    const productIndex = parsedProductsJson.findIndex(el => el.id === Number(id))
    const oldProduct = parsedProductsJson[productIndex]
    const expired = option.isexpire
    let updatedProduct = {
        id: oldProduct.id,
        name: option.name || oldProduct.name,
        description: option.description || oldProduct.description,
        date: option.date || oldProduct.date,
        category: option.category || oldProduct.category,
    }

    if (expired) {
        const now = new Date()
        const productDate = new Date(updatedProduct.date)
        if (productDate < now) {
            updatedProduct.expired = "expired"
        } else {
            updatedProduct.expired = "not expired"
  }
    }

    parsedProductsJson[productIndex] = updatedProduct
    await fs.writeFile("products.json", JSON.stringify(parsedProductsJson, null, 2))
    console.log("update successfully completed")
})




program.parse()