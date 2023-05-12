const { check , validationResult } = require('express-validator')

exports.signupvalidation = [
    check('username').not().isEmpty().withMessage('username is reqired'),
    check('email').not().isEmpty().withMessage('email is required').isEmail().withMessage('invalid email'),
    check('password').not().isEmpty().withMessage('password is required').isLength({min : 6}).withMessage('the password must be at least 6 ligits')
]

exports.siginvalidation = [
    check('email').not().isEmpty().withMessage('email is required').isEmail().withMessage('invalid email'),
    check('password').not().isEmpty().withMessage('password is required').isLength({min : 6}).withMessage('the password must be at least 6 ligits')
]

exports.addcategoryvalidation = [
    check('categoryname').not().isEmpty().withMessage('category name is required')
]

exports.addfoodvalidation = [
    check('foodimage').not().isEmpty().withMessage('the image is required'),
    check('foodname').not().isEmpty().withMessage('name is required'),
    check('price').not().isEmpty().withMessage('price is required'),
    check('category').not().isEmpty().withMessage('category is required'),
    check('quantity').not().isEmpty().withMessage('quantity is required'),
    check('description').not().isEmpty().withMessage('description is required')  
]
exports.validationresult = (req,res,next) => {
    const result = validationResult(req);
    const haserror = !result.isEmpty();

    if(haserror){
        const firsterror = result.array()[0].msg;
        return res.status(400).json({
            errorMessage : firsterror,
        })
        //console.log('has error : ',haserror);
        //console.log('result : ',result)
    }
    next();
}