const isAdmin = (req, res, next) => {
    const admin = req.headers.admin
    if (!admin || admin !== "admin") {
        return res.status(400).json({message: "You don't have admin permissions"})
    }
    next()
}

const isAdminOrEditor = (req, res, next) => {
    const admin = req.headers.admin
    const editor = req.headers.iseditor
    if (admin === "admin" || editor === "editor") {
        return next()
    }
    return res.status(400).json({message: "You don't have permission to update"})
}

module.exports = { isAdmin, isAdminOrEditor }