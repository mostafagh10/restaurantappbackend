const express = require('express');
const router = express.Router();
const { addcategoryvalidation , validationresult } = require('../middleware/validations')
const { addcatrgory , getcategories } = require('../controllers/categorycontroller')

router.post('/add', addcategoryvalidation , validationresult , addcatrgory)
router.get('/readall' , getcategories)

module.exports = router;