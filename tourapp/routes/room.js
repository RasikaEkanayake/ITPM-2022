const express = require('express');
const Rooms = require('../models/rooms');

const router = express.Router();

//get posts

router.get('/rooms', (req, res) => {
    Rooms.find().exec((err, rooms) => {
        if (err) {
            return res.status(400).json({
                error: err,
            });
        }
        return res.status(200).json({
            success: true,
            existingPosts: rooms
        });
    });
});

//update post

router.put('/post/update/:id', (req, res) => {
    Posts.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body
        },
        (err, post) => {
            if (err) {
                return res.status(400).json({
                    error: err,
                    message: "Update unsuccessfull", err
                });

            }
            return res.status(200).json({
                success: "Update successfully"
            });
        }
    );
});


//delete post

router.delete('/post/delete/:id', (req, res) => {
    Posts.findByIdAndRemove(req.params.id).exec((err, deletePost) => {
        if (err) return res.status(400).json({
            message: "Delete unsuccessfull", err
        });
        return res.json({
            message: "Delete successfull", deletePost
        });
    });
});

//get specific post

router.get("/post/:id", (req, res) => {
    let postId = req.params.id;

    Posts.findById(postId).exec((err, post) => {
        if (err) {
            return res.status(400).json({ success: false, err });
        }
        return res.status(200).json({ success: true, post })
    });
});



module.exports = router;