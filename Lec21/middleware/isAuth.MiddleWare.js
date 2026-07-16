const jwt = require("jsonwebtoken")

function getToken(headers) {
    if (!headers["authorization"]) return null
    const [type, token] = headers["authorization"].split(" ")
    return type === "Bearer" ? token : null
}

async function isAuth(req,res,next) {
    const token = getToken(req.headers)

    if (!token) {
        return res.json({message: "Permission denied"})
    }

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET)
        req.userId = payload.userId
        next()
    } catch (error) {
        return res.json({message: "Invalid token"})
    }
}


module.exports = isAuth