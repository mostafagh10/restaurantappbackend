const ordermodel = require('../models/ordermodel')

exports.addorder = async (req,res) => {
    const { orderdetails , paymentmethod , userId , useremail } = req.body;
    try {
        const neworder = new ordermodel({
            orderdetails : orderdetails,
            paymentmethod : paymentmethod,
            userId : userId,
            useremail : useremail
        });
        await neworder.save();
        res.status(200);
    } catch (error) {
        console.log('error server ',error)
        res.status(500).json({
            errorMessage : 'server error'
        })
    }
}

exports.readall = async (req,res) => {
    try {
        const orders = await ordermodel.find({});
        res.status(200).json({
            orders : orders
        })
    } catch (error) {
        console.log('error server ',error)
        res.status(500).json({
            errorMessage : 'server error'
        })
    }
}
