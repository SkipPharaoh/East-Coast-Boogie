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
    }
},{timestamps: true})


const Comment = mongoose.model('Comments', commentsSchema);

module.exports = Comment;