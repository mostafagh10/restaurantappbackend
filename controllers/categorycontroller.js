const Category = require('../models/categorymodel')

exports.addcatrgory = async (req,res) => {
    const { categoryname } = req.body;

    try {
        const category = await Category.findOne({categoryname : categoryname});

        if(category){
            return res.status(400).json({
                errorMessage : 'this category exists .. please enter another one !'
            })
        }
        else{
            const newcategory = new Category();
            newcategory.categoryname = categoryname;
            await newcategory.save();
            res.json({
                successMessage : `the category ${categoryname} added`
            })
        }
    } catch (error) {
        console.log('addcategory controller error : ',error)
        res.status(500).json({
            errorMessage : 'server error'
        })
    }
}

exports.getcategories = async (req,res) => {

    try {
        const categories = await Category.find({});
            res.json({
                categories : categories
            })
    } catch (error) {
        console.log('getcategories controller error : ',error)
        res.status(500).json({
            errorMessage : 'server error'
        })
    }
}

