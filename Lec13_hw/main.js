#!/usr/bin/env node

const {read, write, sum, reverseStr} = require("./utils/helper.js")
const axios = require("axios")
const {Command} = require("commander")
const program = new Command()


async function fileMaker() {
    await write('first.txt', 'Hiii')
    await write('second.txt', 'Byee')
}
fileMaker()


// 2)წამოიღე ინფორმაცია ამ ორი api-დან
// let api = https://jsonplaceholder.typicode.com/users
// let api2 = https://jsonplaceholder.typicode.com/posts

//1)გამოიყენე axios და ერთდროულად გაუშვი 2 API. 
Promise.all([
    axios.get('https://jsonplaceholder.typicode.com/users'),
    axios.get('https://jsonplaceholder.typicode.com/posts')
]).then(res => console.log(res))

// 2)გაუშვი ორივე ერთად და რომელიც პირველი მოვა ის დააკონსოლე.
Promise.race([
    axios.get('https://jsonplaceholder.typicode.com/users'), 
    axios.get('https://jsonplaceholder.typicode.com/posts')
]).then(res => console.log(res))

// 3)გაუშვი ორივე ერთად და დააბრუნე ინფრომაცია რომელი დარესოლვდა დარეჯექთდა და ა.შ.
Promise.allSettled([
    axios.get('https://jsonplaceholder.typicode.com/users'), 
    axios.get('https://jsonplaceholder.typicode.com/posts')
]).then(res => console.log(res))



// 3)commander-ით შექმენი phone-cli, რომელსაც ექნება დამატება,წაშლა,id-ის მიხედვით კონკრეტული ობიექტის ამოღება, 
// და option-ის მიხედვით(--america)- ამ ოფშენს თუ გადავცემთ ნომერს წინ უნდა დაუამტოს 011
//  (ანუ phone-cli add giorgi 574221355 --america)- ასე თუ გადავცემთ უნდა დაამტოს 011574221355

program
    .command("create")
    .description("create new contact")
    .argument("name")
    .argument("phone")
    .option("--america")
    .action(async (name, phone, options) => {
        let readDAtaJson = await read("data.json", 'utf-8')
        let lastID = readDAtaJson[readDAtaJson.length - 1]?.id || 0
        
        let finalPhone = phone
        if (options.america) {
            finalPhone = `011${phone}`
        }
        let newObj = {
            id: lastID + 1,
            name,
            phone: finalPhone
        }
        readDAtaJson.push(newObj)
        await write("data.json", readDAtaJson)
    })

program
    .command("delete")
    .description("delete by id")
    .argument("id")
    .action(async (id) => {
        let readDAtaJson = await read("data.json", 'utf-8')
        readDAtaJson = readDAtaJson.filter(el => el.id !== +id)
        await write("data.json", readDAtaJson)
    })          

program
    .command("get")
    .description("get contact by id")
    .argument("id")
    .action(async (id) => {
        let readDAtaJson = await read("data.json", 'utf-8')
        let contact = readDAtaJson.find(el => el.id === +id)
        if(contact) {
            console.log(contact)
        } else {
            console.log("Contact not found")
        }
    })

program.parse()
