const UserService = require('../Services/user-service')

const userService = new UserService();

const create = async(req, res) => {
    try {
        const users = await userService.create({
            email : req.body.email,
            password : req.body.password
        })
        return res.status(201).json({
            data : users,
            success:true,
            message : "Successfully created a user",
            err : {},
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: "Somethin went wrong !",
            success:false,
            data : {},
            err : error
        })
    }
}

module.exports = {
    create
}