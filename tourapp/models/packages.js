const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    packageName: {
        type: String,
        required: true
    },
    packageId: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true

    }
});

module.exports = mongoose.model('Packages', postSchema)