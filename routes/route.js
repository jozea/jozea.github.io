const express = require('express');
const router = express.Router();

const Comment = require('../models/comment');

router.get('/comments', (req, res, next)=>{
    Comment.find((err, comments)=>{
        res.json(comments);
    })
});

router.post('/comment', (req, res, next)=>{
    let newComment = new Comment({
        comment: req.body.comment,
    });
    newComment.save((err, comment)=>{
        if(err){
            res.json({msg: 'Failed to add comment'});
        }else{
            res.json({msg: 'Comment added successfully'});
        }
    });
});

router.delete('/comment/:id', (req, res, next)=>{
    Comment.remove({_id: req.params.id}, (err, result)=>{
        if(err){
            res.json(err)
        }else{
            res.json(result)
        }
    })
});

module.exports = router;