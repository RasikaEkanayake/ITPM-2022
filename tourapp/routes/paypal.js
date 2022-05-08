const express = require('express');
const Paypal = require('../models/paypalpayment');

const router = express.Router();

//save paypal
router.post('/paypal/save', (req, res) => {
    let newPaypal = new Paypal(req.body);

    newPaypal.save((err) => {
        if (err) {
            return res.status(400).json({
                alert: "Payment record unsuccessfull", err
            });
        }
        return res.status(200).json({
            success: "Payment saved Succesfully"
        });
    });

});



//update paypal
router.put('/paypal/update/:id', (req, res) => {
    Paypal.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body
        },
        (err, post) => {
            if (err) {
                return res.status(400).json({
                    error: err,
                    message: "Payment Update unsuccessfull", err
                });

            }
            return res.status(200).json({
                success: "Payment Update successfully"
            });
        }
    );
});

//get specific emails

router.get("/paypal/:id", (req, res) => {
    let postId = req.params.id;

    Paypal.findById(postId).exec((err, post) => {
        if (err) {
            return res.status(400).json({ success: false, err });
        }
        return res.status(200).json({ success: true, post })
    });
});

//get emails
router.get('/paypal', (req, res) => {
    Paypal.find().exec((err, paypal) => {
        if (err) {
            return res.status(400).json({
                error: err,
            });
        }
        return res.status(200).json({
            success: true,
            existingPaypal: paypal
        });
    });
});

//delete paypal

router.delete('/paypal/delete/:id', (req, res) => {
    Paypal.findByIdAndRemove(req.params.id).exec((err, deletePost) => {
        if (err) return res.status(400).json({
            message: "Payment Delete unsuccessfull", err
        });
        return res.json({
            message: "Payment Delete successfull", deletePost
        });
    });
});


module.exports = router;