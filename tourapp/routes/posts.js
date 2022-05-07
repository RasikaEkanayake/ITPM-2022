const express = require('express');
const Posts = require('../models/posts');

const router = express.Router();

//save posts
router.post('/post/save', (req, res) => {
    let newPost = new Posts(req.body);

    newPost.save((err) => {
        if (err) {
            return res.status(400).json({
                alert: "Added unsuccessfull", err
            });
        }
        return res.status(200).json({
            success: "Post saved Succesfully"
        });
    });

});

//get posts

router.get('/posts', (req, res) => {
    Posts.find().exec((err, posts) => {
        if (err) {
            return res.status(400).json({
                error: err,
            });
        }
        return res.status(200).json({
            success: true,
            existingPosts: posts
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