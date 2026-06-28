#!/usr/bin/env node
import { toCapital, checkPalindrom, biggestWord } from "./utils/helper.js"

/*console.log(toCapital("Hello World"))
console.log(checkPalindrom("anna"))
console.log(checkPalindrom("Hello"))
console.log(biggestWord("I love Javascript")) */


// 4)შექმენი სერვერი სადაც გექნება როუტები,"/","/users","/posts".
// აუცილებელია გაუკეთო ორივეს pagination,id-ის მეშვეობით ძებნა და /users ასევე დაამატე name-ით ძებნა

import http from 'http'
import url from 'url'
import queryString from 'querystring'
const PORT = 6767

// satesto monacemebi:
const parseUserData = [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" },{ id: 3, name: "Charlie" }]
const parsePostsData = [{ id: 1, title: "Post 1" }, { id: 2, title: "Post 2" },{ id: 3, title: "Post 3" }]

const server = http.createServer(async (req, res) => {
    const parsedURL = url.parse(req.url)
    const query = queryString.parse(parsedURL.query)

    if (parsedURL.pathname === '/') {
        return res.end("Home page")

    } else if (parsedURL.pathname === '/users') {

        if (query.id) {
            const user = parseUserData.find(el => el.id === Number(query.id))
            if (!user) return res.end("user not found")
            return res.end(JSON.stringify(user))
        }
        if (query.name) {
            const user = parseUserData.find(el => el.name.toLowerCase() === query.name.toLowerCase())
            if (!user) return res.end("user not found")
            return res.end(JSON.stringify(user))    
        }
        
        return res.end(JSON.stringify(parseUserData))
    } 
    else if (parsedURL.pathname === "/posts") {
        let { page = 1, take = 30 } = query
        if (take > 30) take = 30
        const result = parsePostsData.slice((page - 1) * take, page * take)
        return res.end(JSON.stringify(result))
    }
})
server.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`)
})
