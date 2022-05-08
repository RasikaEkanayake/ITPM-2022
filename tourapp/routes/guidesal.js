const express = require('express');
const SGuids = require('../models/sguide');

const router = express.Router();

//save posts

router.post('/sguids/save', (req, res) => {

    let newSGuids = new SGuids(req.body);

    newSGuids.save((err) => {
        if (err) {
            return res.status(400).json({
                alert: "feedback record unsuccessfull", err
            });
        }
        return res.status(200).json({
            success: "Employee saved succesfully"
        });
    });
});

//get a specific post


router.get("/sguids/:id", (req, res) => {
    let postId = req.params.id;

    SGuids.findById(postId).exec((err, post) => {
        if (err) {
            return res.status(400).json({ success: false, err });
        }
        return res.status(200).json({ success: true, post })
    });
});

//update posts
router.put('/sguids/update/:id', (req, res) => {
    SGuids.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body
        },
        (err, post) => {
            if (err) {
                return res.status(400).json({ error: err });
            }
            return res.status(200).json({
                success: "Updated successfully"
            });
        }
    );
});

module.exports = router;
