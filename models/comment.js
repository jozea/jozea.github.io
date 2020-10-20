const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    comment: {
        type: String,
        required: true
    }
})

const comments = module.exports = mongoose.model('comment', commentSchema)