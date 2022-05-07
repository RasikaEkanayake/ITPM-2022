const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    suggestion: {
        type: String,
        required: true
    },
    feedback: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('Suggestion', postSchema)