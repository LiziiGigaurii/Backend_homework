// შექმენი შენი სერვერი express-ის დახმარებით. ააწყე User-ის CRUD, რომელსაც ექნება:დამატება,წაშლა,აფდეითი,id-ის 
// მიხედვით ინფორმაციის წამოღება,ფეჯინეიშენი,სექრეთ როუტი, age და name იყოს აუცილებელი ფილდი, 
// ხოლო email და eyecolor ოფშენალი. ასევე არუნდა შეეძლოს 30 წელზე მეტის დარექვესთება და 10 წელზე ნაკლების.

const express = require("express")
const cors = require("cors")
const app = express()
const PORT = 6767

app.use(cors())
app.use(express.json())

const users = [
    {
        id: 1,
        name: "Lizi",
        age: 19,
        email: "lizi@gmail.com",
        eyeColor: "brown"
    },
    {
        id: 2,
        name: "Dora",
        age: 18,
        email: "dora@gmail.com",
        eyeColor: "green"
    }
]

app.get("/users", (req, res) => {
    let { page = 1, take = 3 } = req.query
    page = Number(page)
    take = Number(take)
    res.json(users.slice((page - 1) * take, page * take))
})


app.get("/users/:id", (req, res) => {
    const { id } = req.params
    const user = users.find(el => el.id === Number(id))

    if (!user) {
        return res.status(400).json({
            message: "User not found",
            data: null
        })
    }

    res.json({ message: "User found", data: user})
})


app.post("/users", (req, res) => {
    const { name, age, email, eyeColor } = req.body

    if (!name || age === undefined) {
        return res.status(400).json({ message: "Name and age are required."})
    }
    if (age < 10 || age > 30) {
        return res.status(400).json({message: "Age must be between 10 and 30."})
    }

    const lastID = users[users.length - 1]?.id || 0
    const newUser = {
        id: lastID + 1,
        name,
        age,
        email,
        eyeColor
    }
    users.push(newUser)
    res.json({message: "User added successfully",data: newUser})
})


app.delete("/users/:id", (req,res) => {
    const {id} = req.params
    const index = users.findIndex(el => el.id === Number(id))

    if (index === -1) {
        return res.status(400).json({message: "Id is invalid"})
    }

    const deletedUser = users.splice(index, 1)
    res.json({message: "deleted Successfully", data: deletedUser})
})


app.put("/users/:id", (req, res) => {
    const {id} = req.params
    const {age, name, email, eyeColor} = req.body
    const index = users.findIndex(el => el.id === Number(id))
    
    if (index === -1) {
        return res.status(400).json({message: "Id not valid"})
    }

    if (age && (age < 10 || age > 30)) { 
        return res.status(400).json({ message: "Age must be between 10 and 30." }) 
    }

    users[index] = {
        ...users[index],
        age:age || users[index].age,
        name:name || users[index].name,
        email:email || users[index].email,
        eyeColor:eyeColor || users[index].eyeColor
    }

    res.json({message: "updates successfully", data: users[index]})
})


app.get("/secret", (req, res) => {
    const secretKey = req.headers.secretkey

    if (!secretKey || secretKey !== "lizi2007") {
        return res.status(401).json({message: "Unauthorized"})
    }

    res.json({message: "Welcome to the secret route!"})
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})

