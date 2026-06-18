#!/usr/bin/env node

const { sum, print, reverseSTR, calcualteSum, isEven, isOdd, write, read } = require("./utils/helper");
const {Command} = require("commander")
const program = new Command()

program
    .command("create")
    .description("create command")
    .argument("name")
    .argument("age")
    .action(async (name,age) =>{
        let readDAtaJson = await read("data.json",true)
            let lastID = readDAtaJson[readDAtaJson.length-1]?.id || 0
            let newObj = {
                id:lastID + 1,
                name,
                age
            }

            readDAtaJson.push(newObj)
            await write("data.json",JSON.stringify(readDAtaJson,null,2))
})
program
    .command("delete")
    .description("delete command")
    .argument("id")
    .action(async (id) => {
                let readDAtaJson = await read("data.json",true)
                readDAtaJson = readDAtaJson.filter(el => el.id !== +id)
                await write("data.json",JSON.stringify(readDAtaJson))
    })           
program
    .command("show")
    .description("this is show command")
    .action(async () => {
        let readDAtaJson = await read("data.json",true)
        console.log(readDAtaJson)
    })
program.parse()