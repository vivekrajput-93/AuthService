const UserRepository = require("../Repository/user-repository");


class UserService {

    constructor() {
        this.userRepository =  new UserRepository()
    }

    async create(data) {
        try {
            const users = await this.userRepository.create(data);
            return users;
        } catch (error) {
            console.log("somethin went wrong in serivce layer")
            throw error
        }
    }


    async destroy(userId) {
        try {
            await this.userRepository.destroy({
                where : {
                    id:userId
                }
            })
        } catch (error) {
            console.log("somethin went wrong in service layer")
            throw error
        }
    }
}

module.exports = UserService;