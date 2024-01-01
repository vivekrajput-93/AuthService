const validateAuth = (req, res, next) => {
    if(!req.body.email || !req.body.password) {
        return res.status(400).json({
            success : false,
            data : {},
            message : "Somethin went wrong !",
            err : "Email or password missing in the  request"
        })
    }
    next()
}


const validateIsAdminRequest = (req, res, next) => {
    if(!req.body.id) {
        return res.status(400).json({
            success:false,
            data : {},
            message : "Somethin went wrong !",
            err : "userId is not provided"
        })
    }
    next()
}

module.exports = {
    validateAuth,
    validateIsAdminRequest
}