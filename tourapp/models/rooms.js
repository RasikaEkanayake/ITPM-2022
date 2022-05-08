const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    packageName: {
        type: String,
        required: true,
        min: 3,
        max: 255,
    },
    packageId: {
        type: String,
        required: true,
        min: 3,
        max: 255,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    discount: {
        type: Number,
        required: true,
        min: 0,
        max: 100,
    },
    description: {
        type: String,
        required: true,
        min: 6,
    }
});

module.exports = mongoose.model('Packages', postSchema)