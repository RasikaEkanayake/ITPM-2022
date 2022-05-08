const express = require('express');
const Posts = require('../models/guide');

const router = express.Router();

//save posts

router.post('/gpost/save', (req, res) => {

    let newPost = new Posts(req.body);

    newPost.save((err) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        return res.status(200).json({
            success: "Posts saved succesfully"
        });
    });

});

//get posts

router.get('/gposts', (req, res) => {
    Posts.find().exec((err, posts) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        return res.status(200).json({
            success: true,
            existingPosts: posts
        });
    });
});


//get a specific post

router.get("/gpost/:id", (req, res) => {

    let postId = req.params.id;

    Posts.findById(postId, (err, post) => {
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
router.put('/gpost/update/:id', (req, res) => {
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

router.delete('/gpost/delete/:id', (req, res) => {
    Posts.findByIdAndRemove(req.params.id).exec((err, deletePost) => {
        if (err) return res.status(400).json({
            message: "Delete unsuccessfull", err
        });
        return res.json({
            message: "Delete successfull", deletePost
        });
    });
});


module.exports = router;
