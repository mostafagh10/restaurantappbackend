const {STRIPE_SECRET_KEY}  = require('../config/dev')
const stripe = require('stripe')(STRIPE_SECRET_KEY);

exports.create_payment_intent = async(req,res) => {
    const {total} = req.body;
    console.log("total = ",total)
// copied from stripe paymentintent api from google
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'usd',
      });
      // end the copied code
      console.log("payment = ",paymentIntent.client_secret);
      res.status(200).json({
          clientsecret : paymentIntent.client_secret
      })
}