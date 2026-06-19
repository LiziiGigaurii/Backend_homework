const fs = require("fs/promises")


// 1) შექმენი utils/helper.js სადაც გექნება ფუქნციები read(უნდა პარსავდეს true-ს გადაწოდების შემდეგ) 
// და write(ანალოგიურად stringify-უნდა გაუკეთოს).
// შექმენი ამ ფუქნციებით 2 ფაილი და ჩაწერე შიგნით ნებისმიერი რამ. ასევე ჰელფერებში დაამატე ჯამის დათვლა 
// და სტრინგის შეტრიალების ფუქნცია.
async function read(path,parse) {
    let readParse = await fs.readFile(path,"utf-8")
    if (parse) {
        return JSON.parse(readParse)
    } else {
        return parse
}}

async function write(path,data) {
    await fs.writeFile(path,JSON.stringify(data))
}

function sum(a,b) {
    return a+b
}
function reverseStr(str) {
    let reversedsSTR = str.split('').reverse().join('')
    return reversedSTR
}


module.exports = {write, read, sum, reverseStr}
