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
}

const otpservice = new otpService();
module.exports = otpservice;