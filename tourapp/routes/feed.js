const express = require('express');
const Feedback = require('../models/feed');

const router = express.Router();

//save feedback
router.post('/feed/save', (req, res) => {
    let newFeedback = new Feedback(req.body);

    newFeedback.save((err) => {
        if (err) {
            return res.status(400).json({
                alert: "feedback record unsuccessfull", err
            });
        }
        return res.status(200).json({
            success: "feedback saved Succesfully"
        });
    });

});


module.exports = router;