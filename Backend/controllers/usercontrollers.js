
const userService = require('../service/userservice');
const otpService = require('../service/otpservice');
const { REASON } = require('../constants/reason');
const emailService = require('../service/emailservice');
const { errorMonitor } = require('nodemailer/lib/xoauth2');
const tokenService = require('../service/tokenservice');
exports.registerUser = async function (req, res) {
    try {
        const payload = req.body;
        const user = await userService.register(payload.email, payload.password);
        res.status(201).json({
            status: true,
            message: "User registered successfully"
        })
    }
    catch (error) {
        res.status(400).json({
            status: false,
            message: error.message
        })
    }
}

exports.loginUser = async function (req, res) {
    try {
        const payload = req.body;
        await userService.login(payload.email, payload.password);
        res.status(200).json({
            status: true,
            message: "User login successfully"
        })
    }
    catch (error) {
        res.status(400).json({
            status: false,
            message: error.message
        })
    }
}

exports.requestOtp = async function (req, res) {
    try {
        const payload = req.body;
        const status = await userService.isUserEmailExists(payload.email);
        if (!status) {
            throw new Error("User is not Found");
        }
        const { otp, _id } = await otpService.genOtp(payload.email, REASON.VERFIY);

        await emailService.sendOtp(payload.email, otp);

        res.status(200).json({
            status: true,
            message: "Otp sent to your email",
            data: {
                id: _id,
            }
        });
    }
    catch (error) {
        res.status(400).json({
            status: false,
            message: error.message,
        });
    }
}

exports.verifyOtp = async function (req, res) {
    try {
        const payload = req.body;
        await otpService.compare(payload.id, payload.otp);
        res.status(200).json({
            status: true,
            message: "OTP verified successfully"
        });
    }
    catch (error) {
        res.status(400).json({
            status: false,
            message: error.message
        })
    }
}

exports.requestRestPassword = async function (req, res) {
    try {
        const payload = req.body;
        const { status, data } = await userService.isUserEmailExists(payload.email);
        if (!status) {
            throw new Error("User is not Found");

        }
        const tokenPayload = {
            userId: data?._id,
            email: payload.email
        };
        const resetToken = await tokenService.genToken(tokenPayload);
        await emailService.sendPasswordResetToken(payload.email, resetToken);
        res.status(200).json({
            status: true,
            messgae: "request token sent to your email",
        })


    }
    catch (error) {
        res.status(400).json({
            status: false,
            message: error.message
        })
    }
}

exports.resetPassword = async function (req, res) {
    try {
        const payload = req.body;
        const { newPassword, token } = payload;
        const decoded = tokenService.verifyToken(token);
        if (!decoded.userId) {
            throw new Error("invalid token payload. _id not found in payload")
        }
        await userService.updatePassword(decoded.userId, newPassword);
        res.status(200).json({
            status: true,
            message: "Password updated successfully"
        });
    }
    catch (error) {
        res.status(400).json({
            status: false,
            message: error.message
        })
    }
}