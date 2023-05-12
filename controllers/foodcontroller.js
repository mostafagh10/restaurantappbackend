const foodmodel = require('../models/foodmodel')

exports.addfood = async (req,res) => {
    const { foodimage , foodname , description , price , category , quantity} = req.body;
    try {
        const food = await foodmodel.findOne({foodname : foodname});

        if(food){
            res.status(400).json({
                errorMessage : 'this receipe exists .. please enter another one !'
            })
        }
        else{
        const newfood = new foodmodel({
            foodname : foodname,
            foodimage : foodimage,
            description : description,
            price : price,
            category : category,
            quantity : quantity
        });
        await newfood.save();
        res.json({
            newfood,
            successMessage : 'the new receipe is added .'
        })
    }
    } catch (error) {
        console.log('error server ',error)
        res.status(500).json({
            errorMessage : 'server error'
        })
    }
}

exports.readall = async (req,res) => {
    try {
        const foods = await foodmodel.find({});
        res.json({
            foods : foods
        })
    } catch (error) {
        console.log('error server ',error)
        res.status(500).json({
            errorMessage : 'server error'
        })
    }
}

exports.read = async (req,res) => {
    try {
        const { foodId } = req.params;
        const food = await foodmodel.findById(foodId);
        res.json({
            food : food
        })
    } catch (error) {
        console.log('error server ',error)
        res.status(500).json({
            errorMessage : 'server error'
        })
    }
}

exports.deletefood = async (req,res) => {
    const { foodId } = req.params;
    try {
        const deletedfood = await foodmodel.findByIdAndDelete(foodId);
        res.status(200).json({
            successMessage : "the item " + deletedfood.foodname + " is removed ."
        })
    } catch (error) {
        console.log('error server ',error)
        res.status(500).json({
            errorMessage : 'server error'
        })
    }
}

exports.update = async (req,res) => {
    const {foodId} = req.params
    try{
        const updatedfood = await foodmodel.findByIdAndUpdate(foodId , req.body);
        console.log("req.body",req.body)
        res.status(200).json({
            successMessage : "the item " + updatedfood.foodname + " is updated ."
        })
    } catch (error) {
        console.log('error server ',error)
        res.status(500).json({
            errorMessage : 'server error'
        })
    }
}

exports.filter = async (req,res) => {
    try {
        const sortBy = req.query.sortBy;
        const limit = parseInt(req.query.limit);
        const foods = await foodmodel.find({}).sort({createdAt : sortBy}).limit(limit);
        res.json({
            foods : foods
        })
    } catch (error) {
        console.log('error server ',error)
        res.status(500).json({
            errorMessage : 'server filter error'
        })
    }
}

exports.filterbytext = async (req,res) => {
        const {type , query} = req.body;
        try{
            let foods;

            switch(type){
                case 'text':
                    foods = await foodmodel.find({$text : {$search:query}});
                    //foods = await foodmodel.find({foodname : query})
                    break;
                 case 'category':
                    foods = await foodmodel.find({category : query})
                    break;
            }

            if(!foods.length > 0){
                foods = await foodmodel.find({});
            }
        res.json({
            foods : foods
        })
    } catch (error) {
        console.log('get foods by filter text server ',error)
        res.status(500).json({
            errorMessage : 'server filter error'
        })
    }
    }
