const mongoose = require('mongoose');

const foodschema = new mongoose.Schema({
    foodimage : {
        type : String,
        required : true,
    },
    foodname : {
        type : String,
        required : true,
    },
    description : {
        type : String,
        required : true,
    },
    price : {
        type : Number,
        required : true,
    },
    category: {
        type : String,
        required : true,
    },
    quantity : {
        type : Number,
        required : true,
    }
},
{timestamps : true}
)

foodschema.index({foodname:'text'});

const Food = mongoose.model('food',foodschema)
module.exports = Food;