const express = require('express');
const Packages = require('../models/packages');

const router = express.Router();

//get packages

router.get('/packages', (req, res) => {
    Packages.find().exec((err, packages) => {
        if (err) {
            return res.status(400).json({
                error: err,
            });
        }
        return res.status(200).json({
            success: true,
            existingPackages: packages
        });
    });
});


//get specific post

router.get("/packages/:id", (req, res) => {
    let postId = req.params.id;

    Packages.findById(postId).exec((err, post) => {
        if (err) {
            return res.status(400).json({ success: false, err });
        }
        return res.status(200).json({ success: true, post })
    });
});



module.exports = router;