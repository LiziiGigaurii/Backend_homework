// 1)წაიკითხე ყველა რიცხვი ფაილიდან, გამოთვალე მათი ჯამი და ჩაწერე სხვა ფაილში
const fs = require("fs/promises")

async function main(){
    await fs.writeFile("first.txt", "1 2 3 4 5 6")
    let firstText = await fs.readFile("first.txt","utf-8")
    console.log(firstText)
    let countNums = firstText.split(' ').reduce((total, curr) => total + Number(curr) ,0)
    await fs.writeFile("second.txt", String(countNums))
    let secondText = await fs.readFile("second.txt", "utf-8")
    console.log(secondText)
}
main()



// 2)ერთი ფაილიდან წაიკითხე ტექსტი, გადაატრიალე (reverse) და ჩაწერე სხვა ფაილში
const fs = require("fs/promises")

async function main() {
    await fs.writeFile("first.txt", "Helloo")
    let firstText = await fs.readFile("first.txt", "utf-8")
    let reversedString = firstText.split("").reverse().join("")
    await fs.writeFile("second.txt", reversedString)
    let secondText = await fs.readFile("second.txt", "utf-8")
    console.log(secondText)
}
main()



// 3)შექმენი მომხმარებლების მასივი შემდეგი თვისებებით: name, age, email — შემდეგ ეს მონაცემები ჩაწერე data.json ფაილში
const fs = require("fs/promises")

let user = [
    {
        name: "lizi",
        age: "19",
        email: "blabla@gmail.com"
    }
]

async function writeJson() {
    await fs.writeFile("data.json", JSON.stringify(user))
    let read = await fs.readFile("data.json","utf-8")
    let strToParse = JSON.parse(read)
    console.log(strToParse)
}
writeJson()



// 4)წაიკითხე მონაცემები ორ სხვადასხვა ფაილიდან და ჩაწერე ერთ ფაილში
const fs = require("fs/promises")

async function main(){
    let firstText = await fs.readFile("first.txt","utf-8")
    let secondText = await fs.readFile("second.txt","utf-8")
    let combinedText = firstText.concat(" ", secondText)
    await fs.writeFile("third.txt", combinedText)
    let thirdText = await fs.readFile("third.txt","utf-8")
}
main()



// 5)ჩაწერე ფაილში ტექსტი, შემდეგ წაიკითხე ეს მონაცემები და დათვალე რამდენი სიტყვაა
const fs = require("fs/promises")

async function main() {
    let sentence = "daitvale yvela sityva"
    await fs.writeFile("first.txt", sentence)
    let firstText = await fs.readFile("first.txt","utf-8")
    let countWords = firstText.split(" ").length
    console.log(countWords)
}
main()


 
// 6)წაიკითხე მომხმარებლების JSON მონაცემები, გაფილტრე ისინი (ის ვინც 18 წელზე უფროსია) და თავიდან ჩაწერე
const fs = require("fs/promises")

let users = [
    {
        name: "lizi",
        age: "19",
        email: "blabla@gmail.com"
    },
     {
        name: "dora",
        age: "12",
        email: "blabla1@gmail.com"
    },
     {
        name: "elene",
        age: "25",
        email: "blabla2@gmail.com"
    }
]

async function writeJson() {
    await fs.writeFile("data.json", JSON.stringify(users))
    let read = await fs.readFile("data.json","utf-8")
    let strToParse = JSON.parse(read)
    let filteredParse = strToParse.filter((user) => user.age > 18)
    await fs.writeFile("data.json", JSON.stringify(filteredParse))
    console.log(filteredParse)
}
writeJson()



// 7)შექმენი სტუდენტების მასივი (name, score, passed), ჩაწერე students.json-ში.
// შემდეგ წაიკითხე და გაფილტრე ისინი, ვისი score 50-ზე მეტია, და ჩაწერე ახალ "passed.json" - ში
const fs = require("fs/promises")

let students = [
    {name: "lizi", score: "85", passed: "Yes"},
    {name: "dora", score: "45", passed: "No"},
    {name: "elene", score: "94", passed: "Yes"}
]

async function writeJson() {
    await fs.writeFile("students.json", JSON.stringify(students))
    let readStudents = await fs.readFile("students.json","utf-8")
    let strToParse = JSON.parse(readStudents)
    let passedStudents = strToParse.filter(student => student.score > 50)
    await fs.writeFile("passed.json",JSON.stringify(passedStudents))
}
writeJson()



// 8)წაიკითხე "users.json", და ყველას, ვისაც არ აქვს "@" ელფოსტაში, წაშალე
[
  { "name": "Gio", "email": "gio@gmail.com" },
  { "name": "Nika", "email": "nikaexample.com" },
  { "name": "Mariam", "email": "mariam@reeducate.ge" },
  { "name": "Lasha", "email": "lashareeducate.ge" },
  { "name": "Ana", "email": "ana@mail.com" }
]
const fs = require("fs/promises")

async function writeJson() {
    let readUsers = await fs.readFile("users.json", "utf-8")
    let strToParse = JSON.parse(readUsers)
    let filterMail = strToParse.filter(user => user.email.includes("@"))
    await fs.writeFile("users.json", JSON.stringify(filterMail))
}
writeJson()