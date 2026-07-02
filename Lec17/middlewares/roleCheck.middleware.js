
const isAdmin = (req, res, next) => {
    const admin = req.headers.admin
    if (!admin || admin !== "admin") {
        return res.status(400).json({message: "You don't have admin permissions"})
    }
    req.role = "admin"
    next()
}

const isAdminOrEditor = (req, res, next) => {
    const admin = req.headers.admin
    const editor = req.headers.iseditor
    if (admin === "admin") {
        req.role = "admin"
        return next()
    }
    if (editor === "editor") {
        req.role = "editor"
        return next()
    }
    return res.status(400).json({message: "You don't have permission to update"})
}

module.exports = { isAdmin, isAdminOrEditor }