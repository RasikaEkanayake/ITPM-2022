const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
    category: {
        type: String,
        required: true,
        min: 3,
        max: 255,
    }
});

module.exports = mongoose.model("Categories", CategorySchema);