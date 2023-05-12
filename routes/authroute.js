const express = require('express');
const router = express.Router();
const { signupvalidation , siginvalidation , validationresult } = require('../middleware/validations')
const { signupcontroller , signincontroller } = require('../controllers/authcontroller')

router.post('/signup',signupvalidation , validationresult , signupcontroller)

router.post('/signin',siginvalidation , validationresult , signincontroller)

module.exports = router;