const express = require('express');

const { registerUser, loginUser, requestOtp } = require('../controllers/usercontrollers');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/requestOtp',requestOtp);

module.exports = router;