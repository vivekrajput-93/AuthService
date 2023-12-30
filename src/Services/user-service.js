const UserRepository = require("../Repository/user-repository");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt")

const {JWT_KEY} = require("../config/ServerConfig")

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


    async signIn(email, plainPassword) {
        try {
            const user = await this.userRepository.getByEmail(email);
            const passwordMatch =  this.checkPassword(plainPassword, user.password);
            if(!passwordMatch) {
                console.log("password doesn't match")
                throw {error : "Incorrect Paasword"}
            }


            const newJwt = this.createToken({email : user.email, id:user.id});
            return newJwt;
        } catch (error) {
            console.log("somethin went wrong with service layer");
            throw error
        }
    }

    async isAuthenticated(token) {
        try {
            const  response = this.verfyToken(token);
            if(!response) {
                throw {error : "Invalid token"}
            }

            const user = this.userRepository.getUserById(response.id);
            if(!user) {
                throw {error : 'No user with the corresponding token exists'}
            }
            return user.id
        } catch (error) {
            console.log("somethin went wrong with service layer")
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

    createToken(user) {
        try {
            const result = jwt.sign(user, JWT_KEY, {expiresIn : '1d'});
            return result;
        } catch (error) {
            console.log("somethin went wrong in service layer")
            throw error
        }
    }


    verfyToken(token) {
        try {
            const response = jwt.verify(token, JWT_KEY);
            return response;
        } catch (error) {
            console.log("somwthin went wrong with service layer");
            throw error
        }
    }

    checkPassword(userInputPlainPassword, encryptedPassword) {
        try {
            const result = bcrypt.compareSync(userInputPlainPassword, encryptedPassword);
            return result;
        } catch (error) {
            console.log("somethin went wrong with service layer");
            throw error
        }
    }
}

module.exports = UserService;