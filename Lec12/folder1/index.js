
    const fs = require("fs/promises")

    async function runCode() {
        await fs.writeFile("../message.txt", "gamarjoba")
        let text = await fs.readFile("../message.txt", "utf-8")
        let reversed = text.split("").reverse().join("")
        await fs.writeFile("../message.txt", reversed)
    }
    runCode()
        