const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    cardnumber: {
        type: String,
        required: true
    },
    month: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    cvv: {
        type: Number,
        required: true
    },
    nameoncard: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Cardpay', postSchema)