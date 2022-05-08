const express = require('express');
const Guids = require('../models/guide');

const router = express.Router();

//save posts

router.post('/guids/save', (req, res) => {

    let newGuids = new Guids(req.body);

    newGuids.save((err) => {
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

//get posts

router.get('/guids', (req, res) => {
    Guids.find().exec((err, guids) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        return res.status(200).json({
            success: true,
            existingGuids: guids
        });
    });
});


//get a specific post

router.get("/guids/:id", (req, res) => {

    let postId = req.params.id;

    Guids.findById(postId, (err, post) => {
        if (err) {
            return res.status(400).json({ success: false, err });
        }

        return res.status(200).json({
            success: true,
            post
        });
    });


});




//update posts
router.put('/guids/update/:id', (req, res) => {
    Posts.findByIdAndUpdate(
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

// delete post

router.delete('/guids/delete/:id', (req, res) => {
    Guids.findByIdAndRemove(req.params.id).exec((err, deletePost) => {
        if (err) return res.status(400).json({
            message: "Delete unsuccessfull", err
        });
        return res.json({
            message: "Delete successfull", deletePost
        });
    });
});


module.exports = router;
