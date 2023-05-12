const x = require('express')
const app = x();
const cors = require('cors')
const morgan = require('morgan')
const connectdb = require('./database/connect_db')
const authroute = require('./routes/authroute')
const categoryroute = require('./routes/categoryroute')
const foodroute = require('./routes/foodroute')
const paymentroute = require('./routes/paymentroute')
const orderroute = require('./routes/orderroute')

app.use(cors());
app.use(morgan('dev'));
app.use(x.json()); /* it allows us to parse incoming requests in format of json  */ 

app.use('/api/auth',authroute);
app.use('/api/category',categoryroute);
app.use('/api/food',foodroute);
app.use('/api/payment',paymentroute);
app.use('/api/order',orderroute);

connectdb();


const port = process.env.PORT || 5000;

app.listen(port , () => {
    console.log(`the server working on port ${port} `)
})