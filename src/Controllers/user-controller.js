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


const signIn = async(req, res) => {
    try {
        const response = await userService.signIn(req.body.email, req.body.password)
        return res.status(200).json({
            data : response,
            message : "Successfully logged in",
            success : true,
            err : {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message : "Somethin went wrong !",
            success : false,
            data : {},
            err : error
        })
    }
}


const isAuthenticated = async(req, res) => {
    try {
        const token = req.headers['x-access-token'];
        const result = await userService.isAuthenticated(token);
        return res.status(200).json({
            success:true,
            err : {},
            message : "user is authenticated and toke is valid",
            data : result
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message : "Somethin went wrong !",
            success : false,
            data : {},
            err : error
        })
    }
} 


module.exports = {
    create,
    signIn, 
    isAuthenticated
}