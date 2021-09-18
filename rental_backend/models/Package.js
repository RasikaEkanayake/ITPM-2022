const mongoose = require("mongoose");

const PackageSchema = new mongoose.Schema({
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
    },
    imageURL: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("Packages", PackageSchema);