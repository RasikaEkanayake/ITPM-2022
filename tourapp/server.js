const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//import routes
const postRoutes = require('./routes/posts');
const feedRoutes = require('./routes/feed');
const paypalRoutes = require('./routes/paypal');
const cardpayRoutes = require('./routes/cardpay');
const packagesRoutes = require('./routes/packages');
const guideRoutes = require('./routes/guides');

//use middleware
app.use(bodyParser.json());
app.use(cors());

//route middleware
app.use(postRoutes);
app.use(feedRoutes);
app.use(paypalRoutes);
app.use(cardpayRoutes);
app.use(packagesRoutes);
app.use(guideRoutes);

const PORT = 8000;
const DB_URL = 'mongodb+srv://rasika:Rasika123@cluster0.ws2c8.mongodb.net/tourDB?retryWrites=true&w=majority'

mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

    .then(() => {
        console.log('DB conncted');
    })
    .catch((err) => console.log('DB connection error', err))

app.listen(PORT, () => {
    console.log(`App is running in ${PORT}`);
});