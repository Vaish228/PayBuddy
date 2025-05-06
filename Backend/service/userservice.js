
const userModel = require('../models/usermodels');
const bcrypt = require('bcryptjs');
class userService {
    async register(email, password) {
        const salt = await bcrypt.genSalt(12);
        const hashedPassword = await bcrypt.hash(password, salt);
        const obj = {
            email,
            password: hashedPassword
        }
        await userModel.create(obj);
    }

    async isUserEmailExists(email) {
        const user = await userModel.findOne({ email });
        const result = {
            status: Boolean(user),
            data: user
        }
        return result;
    }

    async updateUser(obj) {
        const id = obj._id;
        const existingUser = await userModel.findById(id);
        if (!existingUser) {
            throw new Error("User not found");
        }
        existingUser.name = obj.name;
        existingUser.email = obj.email;
        existingUser.groups = obj.groups;
        existingUser.balance = obj.balance;
        await existingUser.save();
    }

    async getAllUsers(){
        const users = await userModel.find();
        return users;
    }

    async deleteById(id){
        return await userModel.deleteOne({_id: id});
    }
    async login(email, password) {
        const result = await this.isUserEmailExists(email);
        if (!result.status) {
            throw new Error("User email is not found");
        }
        const status = await bcrypt.compare(password, result.data.password);
        if (!status) {
            throw new Error("Password is incorrect, please try again");
        }
    }

    async updatePassword(id, password) {
        const user = await userModel.findById(id);
        if (!user) {
            throw new Error("User not found");
        }
        const salt = await bcrypt.genSalt(12);
        const hashedPassword = await bcrypt.hash(password, salt);
        user.password = hashedPassword;
        await user.save();

    }

}

const usersService = new userService();
module.exports = usersService;