
const mongoose = require('mongoose');
const otpSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        index: true
    },
    otp: {
        type: String,
        required: true
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    expiresIn: {
        type: Date,
        default: () => new Date(Date.now() + 1 * 60 * 1000)
    }
});

const otpModel = mongoose.model('otps', otpSchema);
module.exports = otpModel;