const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const nodemon = require("nodemon");
const app = express();
const path = require("path");
require("dotenv").config();
const fileupload = require("express-fileupload");

const PORT = process.env.PORT 

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL ;

mongoose.connect(URL, {
     useCreateIndex: true,
     useNewUrlParser: true,
     useUnifiedTopology: true,
     useFindAndModify: false
});
// Middleware
// Middleware
app.use(express.json());
app.use(fileupload());
app.use(cors());
const PackageManagement = require("./routes/package_management");


const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDb connection success!");
})
// Use routes

app.use("/api/packages", PackageManagement);

app.use('/static', express.static(path.join(__dirname, 'public')))
app.listen(PORT, () =>{
    console.log(`Server is up and running in port no : `+PORT);


})
