const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//import routes
const postRoutes = require('./routes/posts');

//use middleware
app.use(bodyParser.json());
app.use(cors());

//route middleware
app.use(postRoutes);

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