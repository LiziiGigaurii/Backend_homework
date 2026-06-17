// 1)შექმენი 2 ფოლდერი 3 ფაილი, წაშალე მარტო ფოლდერები. შეამომწე lstat-ის მეშვეობით
const fs = require("fs/promises")

async function makeDF() {
    await fs.mkdir("firstDir", {recursive:true})
    await fs.mkdir("secondDir", {recursive:true})
    await fs.writeFile("first.txt", "pirveli")
    await fs.writeFile("second.txt", "meore")
    await fs.writeFile("third.txt", "mesame")
    let info = await fs.readdir(__dirname)
    for(let item of info) {
        let infostat = await fs.lstat(item)
        if(infostat.isDirectory()) {
            await fs.rmdir(item)
        }
    }
}
makeDF()



// 2)შექმენი  მთავარი ფოლდერი, ფოლდერში აიღე ერთი main.js ამ main.js ით შექმენი (mkdir) ფოლდერი და
//  ამ ფოლდერში ჩაწერე index.js შემდეგ ამ index.js-ით ჩაწერე მთავარფოლდერში message.txt, ამ message.txt-ში
//  რაც გექნება შეატრიალე ეგ სტრინგი და ისევ იგივეში ჩაწერე.
const fs = require("fs/promises")

async function main() {
    await fs.mkdir("folder1", {recursive:true})
    let codeInfo = `
    const fs = require("fs/promises")

    async function runCode() {
        await fs.writeFile("../message.txt", "gamarjoba")
        let text = await fs.readFile("../message.txt", "utf-8")
        let reversed = text.split("").reverse().join("")
        await fs.writeFile("../message.txt", reversed)
    }
    runCode()
        `
    await fs.writeFile("folder1/index.js", codeInfo)
}

main()



// 3) შექმენი ფოლდერი ამ ფოლდერში გქონდეს 6 ფაილი. 3 ფაილის გაფართოვება უნდა იყოს .txt.
//  3 ფაილის გაფართოვება უნდა იყოს .js. შენ უნდა იპოვო ,ისეთი ფაილები, რომლის გაფართოვებაცაა .txt 
// და ისინი ჩწერო საერთო all.txt-ში
const fs = require("fs/promises")

async function findFiles() {
    await fs.mkdir("mainFolder", {recursive:true})
    await fs.writeFile("mainFolder/first.txt", '')
    await fs.writeFile("mainFolder/second.txt", '')
    await fs.writeFile("mainFolder/third.txt", '')
    await fs.writeFile("mainFolder/first.js", '')
    await fs.writeFile("mainFolder/second.js", '')
    await fs.writeFile("mainFolder/third.js", '')
    let info = await fs.readdir("mainFolder", '')
    let files = []
    for (let file of info) {
        let infostat = await fs.lstat("mainFolder/" + file)
        if (file.endsWith(".txt")) {
            files.push(file)
        }
    }
    await fs.writeFile("mainFolder/all.txt", files.join("\n"))
}
findFiles()



// 4) დაწერე http სერვერი და გამოდგი 3 ენდფოინითი (/animals,/cars,/motorcycle)
const http = require("http")
let html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div style="background-color:blue;">
        <div style="background-color: red; display: flex; justify-content: center; align-items: center;">
            <h1>hello</h1>
        </div>
    </div>
</body>
</html>
`
let animals = [
    {
        title: "dzaghli",
        age: 3
    },
    {
        title: "kata",
        age: 2
    },
    {
        title: "lomi",
        age: 5
    }
]

let cars = [
    {
        title: "bmw",
        price: 15000
    },
    {
        title: "mercedes",
        price: 18000
    },
    {
        title: "audi",
        price: 12000
    }
]

let motorcycle = [
    {
        title: "yamaha",
        price: 5000
    },
    {
        title: "honda",
        price: 4500
    },
    {
        title: "kawasaki",
        price: 6000
    }
]

const server = http.createServer((req,res) => {
    if(req.url === "/") {
        res.writeHead(200,{"content-type":"text/html"})
        res.write(html)
        res.end()
    }
    if(req.url === "/animals") {
        res.writeHead(200,{"content-type":"application/json"})
        res.write(JSON.stringify(animals))
        res.end()
    }
    if(req.url === "/cars") {
        res.writeHead(200,{"content-type":"application/json"})
        res.write(JSON.stringify(cars))
        res.end()
    }
        if(req.url === "/motorcycle") {
        res.writeHead(200,{"content-type":"application/json"})
        res.write(JSON.stringify(motorcycle))
        res.end()
    }
})
server.listen(6767,() => {
    console.log("server running on http://localhost:6767")
})
//http://localhost:6767/animals,http://localhost:6767/cars, http://localhost:6767/motorcycle