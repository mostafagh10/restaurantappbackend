const User = require('../models/usermodel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {jwtSecret , jwtExpire} = require('../config/keys')

exports.signupcontroller = async (req,res) => {
    const { username , email , password} = req.body;

    try {
        const user = await User.findOne({email : email});

        if(user){
            return res.status(400).json({
                errorMessage : 'email is exist , try another one'
            })
        }
        else{
            const newuser = new User();
            newuser.username = username;
            newuser.email = email;

            const salt = await bcrypt.genSalt(10);
            newuser.password = await bcrypt.hash(password,salt)
            await newuser.save();
            res.json({
                successMessage : 'registeration success ... please login'
            })
        }
    } catch (error) {
        console.log('signup controller error : ',error)
        res.status(500).json({
            errorMessage : 'server error'
        })
    }
}

exports.signincontroller = async (req,res) => {
    const { email , password} = req.body;

    try {
        const user = await User.findOne({email : email});

        if(!user){
            return res.status(400).json({
                errorMessage : 'email is not fount ...'
            })
        }
        else{
            const ismatch = await bcrypt.compare(password , user.password)
            if(!ismatch){
                return res.status(400).json({
                    errorMessage : 'password is incorrect'
                })
            }
            const payload = {
                user : {
                    _id : user._id
                },
            };
            jwt.sign(payload , jwtSecret , {expiresIn : jwtExpire} , (err,token) => {
                if(err){
                    console.log('jwt error = ',err)
                }
                const { _id , username , email , role } = user

                res.json({
                    token,
                    user : { _id , username , email , role }
                })
            })

        }
    } catch (error) {
        console.log('signup controller error : ',error)
        res.status(500).json({
            errorMessage : 'server error'
        })
    }
}