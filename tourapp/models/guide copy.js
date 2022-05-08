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
    basic: {
        type: String,
        required: true
    },
    OT: {
        type: String,
        required: true
    },
    salary: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('SGuids', postSchema)