const express = require('express');
const Cardpay = require('../models/cardpay');

const router = express.Router();

//save feedback
router.post('/cardpay/save', (req, res) => {
    let newCardpay = new Cardpay(req.body);

    newCardpay.save((err) => {
        if (err) {
            return res.status(400).json({
                alert: "Cardpay record unsuccessfull", err
            });
        }
        return res.status(200).json({
            success: "Cardpay saved Succesfully"
        });
    });
});


//update cardpay
router.put('/cardpay/update/:id', (req, res) => {
    Cardpay.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body
        },
        (err, post) => {
            if (err) {
                return res.status(400).json({
                    error: err,
                    message: "Cardpay Update unsuccessfull", err
                });

            }
            return res.status(200).json({
                success: "Cardpay Update successfully"
            });
        }
    );
});

//get specific cardpay

router.get("/cardpay/:id", (req, res) => {
    let postId = req.params.id;

    Cardpay.findById(postId).exec((err, post) => {
        if (err) {
            return res.status(400).json({ success: false, err });
        }
        return res.status(200).json({ success: true, post })
    });
});

//get cardpay
router.get('/cardpay', (req, res) => {
    Cardpay.find().exec((err, cardpay) => {
        if (err) {
            return res.status(400).json({
                error: err,
            });
        }
        return res.status(200).json({
            success: true,
            existingCardpay: cardpay
        });
    });
});


module.exports = router;