const mongoose = require('mongoose');

const orderschema = new mongoose.Schema({
    orderdetails : {
        type : Array,
    },
    paymentmethod : {
        type : String,
    },
    userId : {
        type : String,
    },
    useremail : {
        type : String,
    },
},
{timestamps : true}
)

//foodschema.index({foodname:'text'});

const Order = mongoose.model('order',orderschema)
module.exports = Order;