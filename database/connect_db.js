const mongoose = require('mongoose')

const DB_URL = process.env.DB_URL || 'mongodb+srv://mostafaghazaly:tsaCFDK0LVvAPYdo@cluster0.lsbie.mongodb.net/restaurantapp?retryWrites=true&w=majority'

const connectDB = async () => {
    try {
        await mongoose.connect(DB_URL,{
            useNewUrlParser : true,
            useUnifiedTopology : true
        })
        console.log('connection to database worked success')
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB 