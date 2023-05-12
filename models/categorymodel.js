const mongoose = require('mongoose');

const categoryschema = new mongoose.Schema({
    categoryname : {
        type : String,
        required : true,
    },
},
{timestamps : true}
)

const Category = mongoose.model('category',categoryschema)
module.exports = Category;