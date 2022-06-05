const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51L7H3nSFR0hvKURXaCyQgpxSA40FaH6TPYmignNnbrgceB6ZfILKUaPCRWfFRh1B1AjzVugXX9yHY62ehG1YjrGR00bWSE1zeX');

//API
const app = express();
//- App Config
app.use(cors({ origin: true }));
app.use(express.json());
//- API routes
app.get('/', (req, res) => res.status(200).send('hello world'))

app.post('/payments/create', async (req, res) => {
    const total = req.query.total;
    console.log('payment request received >>>', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "usd",
    });

    // OK - Created
    res.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});
//- Listen command
exports.api = functions.https.onRequest(app)

//example endpoint
//http://localhost:5001/clone-4efc2/us-central1/api