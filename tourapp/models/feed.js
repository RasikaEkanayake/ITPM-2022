const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    feedback: {
        type: String,
        required: true
    },
    suggession: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Feedback', postSchema)