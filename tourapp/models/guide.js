const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    nic: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    contactNumber: {
        type: String,
        required: true
    },
    imageURL: {
        type: String,
        required: true
    }



});

module.exports = mongoose.model('Posts', postSchema)