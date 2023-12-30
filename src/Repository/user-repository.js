const {User } = require("../models/index");

class UserRepository {

    async create(data) {
        try {
            const users = await User.create(data);
            return users;
        } catch (error) {
            console.log("Something went wrong with repo layer");
            throw {error}

        }
    }


    async destroy(userId) {
        try {
            await User.destroy({
                where : {
                    id : userId
                }
            })
            return true
        } catch (error) {
            console.log("something went wrong at repo layer")
            throw {error}
        }
    }


    async getUserById(userId) {
        try {
            const user = await User.findByPk(userId, {
                attributes : ["email", "id"]
            })
            return user
        } catch (error) {
            console.log("something went wrong with repo layer")
            throw error
        }
    }


    async getByEmail(userEmail) {
        try {
            const user = await User.findOne({where : {
                email : userEmail
            }})
            return user
        } catch (error) {
            console.log("somethin went wrong with service layer");
            throw error
        }
    }
}

module.exports = UserRepository