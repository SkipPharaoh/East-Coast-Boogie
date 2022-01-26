const mongoose = require('mongoose')
const commentsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        default: 'Anonymous'
    },
    comment: {
        type: String,
        required: true
    },
    beenHereBefore: {
        type: Boolean
    },
    city: {
        type: String,
        enum: ['Atlanta', 'Detroit', 'New York', 'Tampa'],
        // required: true
    }
},{timestamps: true})


const Comment = mongoose.model('Comments', commentsSchema);

module.exports = Comment;