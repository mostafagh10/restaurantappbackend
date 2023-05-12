const express = require('express');
const router = express.Router();
const {create_payment_intent} = require('../controllers/paymentcontroller')

router.post('/payment-intent',create_payment_intent);

module.exports = router;

