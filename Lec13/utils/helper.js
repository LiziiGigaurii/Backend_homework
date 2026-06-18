const fs = require("fs/promises")

function sum(a,b){
    console.log(a+b)
}

function print(str){
    console.log(str)
}


function reverseSTR(str){
    return str.split("").reverse().join("")
}

function calcualteSum(numsArr){
    let sum = numsArr.reduce((tot,curr)=>tot + curr,0)
    console.log(sum)
}

function isEven(num){
    return num % 2 === 0
}

function isOdd(num){
    return num % 2 !== 0
}

async function write(filePath,data){
    await fs.writeFile(filePath,data)
}

async function read(filePath,parse){
    let readParse = await fs.readFile(filePath,"utf-8")
   return parse ? JSON.parse(readParse) : parse
}


module.exports = {sum,print,reverseSTR,calcualteSum,isEven,isOdd,write,read}