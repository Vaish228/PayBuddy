const userService = require('../service/userservice');
const otpService = require('../service/otpservice');
const { REASON } = require('../constants/reason');
const emailService = require('../service/emailservice');
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
        const status = await userService.isUserEemailExists(payload.email);
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
