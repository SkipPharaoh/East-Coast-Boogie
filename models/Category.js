const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
        name: {
            type: String,
            // required: true
        },
        cuisine: {
            type: String,
        },
        location: {
            type: String
        },
        hours: {
            type: String
        },
        payForEntrance: {
            type: Boolean
        },
        category: {
            type: String,
            enum: ['landmarks','placesToEat','events'],
            // required: true
        },
})

const Category = mongoose.model('Category', categorySchema)

module.exports = Category