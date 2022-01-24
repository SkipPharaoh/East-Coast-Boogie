const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    placesToEat: {
        name: {
            type: String,
            required: true
        },
        cuisine: {
            type: String,
            required: true
        },
        location: {
            type: String
        }
    },
    landmarks: {
        name: {
            type: String,
            required: true
        },
        location: {
            type: String,
            required: true
        },
        hours: {
            type: String
        }
    },
    events: {
        name: {
            type: String,
            required: true 
        },
        location: {
            type: String,
            required: true
        },
        hours: {
            type: String,
            required: true
        },
        payForEntrance: {
            type: Boolean
        }
    }
})

const Category = mongoose.model('Category', categorySchema)

module.exports = Category