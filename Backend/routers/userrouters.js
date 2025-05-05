const express = require('express');


const { registerUser, loginUser, requestOtp, verifyOtp, requestRestPassword, resetPassword } = require('../controllers/usercontrollers');


const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/requestOtp', requestOtp);
router.post('/verifyOtp', verifyOtp);
router.post('/requestResetPassword', requestRestPassword);
router.post('/resetPassword', resetPassword);
module.exports = router;
