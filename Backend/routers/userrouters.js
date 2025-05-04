const express = require('express');

const { registerUser, loginUser, requestOtp, verifyOtp } = require('../controllers/usercontrollers');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/requestOtp', requestOtp);
router.post('/verifyOtp', verifyOtp);

module.exports = router;