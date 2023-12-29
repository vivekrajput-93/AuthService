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
}

module.exports = UserRepository