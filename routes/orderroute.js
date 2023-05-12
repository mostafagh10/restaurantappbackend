const express = require('express')
const router = express.Router();
const ordercontroller = require('../controllers/ordercontroller')

router.get('/',ordercontroller.readall)
router.post('/',ordercontroller.addorder)

module.exports = router