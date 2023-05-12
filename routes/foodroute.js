const express = require('express');
const router = express.Router();
const { addfoodvalidation , validationresult } = require('../middleware/validations')
const { addfood , readall , read , deletefood , update , filter , filterbytext} = require('../controllers/foodcontroller')

router.post('/add' , addfoodvalidation , validationresult  , addfood)
router.get('/readall' , readall)
router.get('/:foodId' , read)
router.delete('/delete/:foodId',deletefood);
router.patch('/update/:foodId',addfoodvalidation , validationresult , update);

router.get('/' , filter)
router.post('/filter' , filterbytext)

module.exports = router;