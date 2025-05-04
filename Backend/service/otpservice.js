const otpModel = require('../models/otpmodels');

class otpService {
    async genOtp(email, reason) {
        const otp = (Math.random() * 1000000).toString().slice(0, 4);
        const otpObj = await otpModel.create({
            email: email,
            otp: otp,
            reason: reason
        });
        return {
            otp: otp,
            id: otpObj._id
        };
    }
    async compare(id, otp) {
        const otpObj = await otpModel.findById(id);
        if (otpObj.isVerified) {
            throw new Error("OTP is already verified");
        }
        if (new Date() > otpObj.expiresIn) {
            throw new Error("OTP is expired, please request a new one");
        }
        if (otpObj.otp !== otp) {
            throw new Error("OTP is incorrect, please try again");
        }
        otpObj.isVerified = true;
        await otpObj.save();
    }
}

const otpservice = new otpService();
module.exports = otpservice;