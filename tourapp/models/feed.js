const mongoose = require('mongoose');

const feedSchema = new mongoose.Schema({
    feedback: {
        type: String,
        required: true
    },
    suggession: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('feed', feed)